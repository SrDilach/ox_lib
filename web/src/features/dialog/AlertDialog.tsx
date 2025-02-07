import { Button, createStyles, Group, Modal, Stack, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import { useLocales } from '../../providers/LocaleProvider';
import remarkGfm from 'remark-gfm';
import type { AlertProps } from '../../typings';
import MarkdownComponents from '../../config/MarkdownComponents';

const useStyles = createStyles((theme) => ({
  contentStack: {
    color: 'white',
  },
  modal: {
    backgroundColor: 'rgba(11, 19, 37, 0.8) '
  },
  cancelButton: {
    backgroundColor: '#B71C1C', // Color del botón de cancelación
    color: theme.white,
    '&:hover': {
      backgroundColor: '#C62828',
    },
  },
  confirmButton: {
    backgroundColor: '#00897B', // Color del botón de confirmación
    color: theme.white,
    '&:hover': {
      backgroundColor: '#00A896',
    },
  },
}));


const AlertDialog: React.FC = () => {
  const { locale } = useLocales();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [dialogData, setDialogData] = useState<AlertProps>({
    header: '',
    content: '',
  });

  const closeAlert = (button: string) => {
    setOpened(false);
    fetchNui('closeAlert', button);
  };

  useNuiEvent('sendAlert', (data: AlertProps) => {
    setDialogData(data);
    setOpened(true);
  });

  useNuiEvent('closeAlertDialog', () => {
    setOpened(false);
  });

  return (
    <>
      <Modal
        opened={opened}
        centered={dialogData.centered}
        size={dialogData.size || 'md'}
        overflow={dialogData.overflow ? 'inside' : 'outside'}
        closeOnClickOutside={false}
        onClose={() => {
          setOpened(false);
          closeAlert('cancel');
        }}
        withCloseButton={false}
        overlayOpacity={0.5}
        exitTransitionDuration={150}
        transition="fade"
        title={<ReactMarkdown components={MarkdownComponents}>{dialogData.header}</ReactMarkdown>}
        classNames={{ modal: classes.modal }}
      >
        <Stack className={classes.contentStack}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              ...MarkdownComponents,
              img: ({ ...props }) => <img style={{ maxWidth: '100%', maxHeight: '100%' }} {...props} />,
            }}
          >
            {dialogData.content}
          </ReactMarkdown>
          <Group position="right" spacing={10}>
            {dialogData.cancel && (
              <Button
                uppercase
                variant="default"
                onClick={() => closeAlert('cancel')}
                styles={{
                  root: {
                    backgroundColor: theme.colors.red[6], // Color del botón de confirmación
                    color: theme.white,
                    '&:hover': {
                      backgroundColor: theme.colors.red[5],
                    },
                  },
                }
                }
                mr={3}>
                {dialogData.labels?.cancel || locale.ui.cancel}
              </Button>
            )}
            <Button
              uppercase
              variant={dialogData.cancel ? 'light' : 'default'}
              color={dialogData.cancel ? theme.primaryColor : undefined}
              onClick={() => closeAlert('confirm')}
              styles={{
                root: {
                  backgroundColor: theme.colors.green[6], // Color del botón de confirmación
                  color: theme.white,
                  '&:hover': {
                    backgroundColor: theme.colors.green[5],
                  },
                },
              }
              }
            >
              {dialogData.labels?.confirm || locale.ui.confirm}
            </Button>
          </Group>
        </Stack>
      </Modal >
    </>
  );
};

export default AlertDialog;
