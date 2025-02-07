import { createStyles, PasswordInput, TextInput } from '@mantine/core';
import React from 'react';
import { IInput } from '../../../../typings/dialog';
import { UseFormRegisterReturn } from 'react-hook-form';
import LibIcon from '../../../../components/LibIcon';

interface Props {
  register: UseFormRegisterReturn;
  row: IInput;
  index: number;
}

const useStyles = createStyles((theme) => ({
  eyeIcon: {
    color: '#9BEFF8',
  },
}));

const InputField: React.FC<Props> = (props) => {
  const { classes } = useStyles();

  return (
    <>
      {!props.row.password ? (
        <TextInput
          {...props.register}
          defaultValue={props.row.default}
          label={props.row.label}
          description={props.row.description}
          icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
          placeholder={props.row.placeholder}
          minLength={props.row.min}
          maxLength={props.row.max}
          disabled={props.row.disabled}
          withAsterisk={props.row.required}
          styles={{
            input: {
              backgroundColor: 'rgba(11, 19, 37, 0.8)',
              color: 'white',
              borderColor: '#74b3ba',
              '&:focus': {
                borderColor: '#9BEFF8',
                boxShadow: '0 0 5px #9BEFF8',
              },
              '&:hover': {
                borderColor: '#9BEFF8',
              },
            },
            label: { color: 'white' },
            description: { color: 'white' },
          }}
        />
      ) : (
        <PasswordInput
          {...props.register}
          defaultValue={props.row.default}
          label={props.row.label}
          description={props.row.description}
          icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
          placeholder={props.row.placeholder}
          minLength={props.row.min}
          maxLength={props.row.max}
          disabled={props.row.disabled}
          withAsterisk={props.row.required}
          visibilityToggleIcon={({ reveal, size }) => (
            <LibIcon
              icon={reveal ? 'eye-slash' : 'eye'}
              fontSize={size}
              cursor="pointer"
              className={classes.eyeIcon}
              fixedWidth
            />
          )}
          styles={{
            input: {
              backgroundColor: 'rgba(11, 19, 37, 0.8)',
              color: 'white',
              borderColor: '#74b3ba',
              '&:focus': {
                borderColor: '#9BEFF8',
                boxShadow: '0 0 5px #9BEFF8',
              },
              '&:hover': {
                borderColor: '#9BEFF8',
              },
            },
            label: { color: 'white' },
            description: { color: 'white' },
            visibilityToggle: {
              color: '#9BEFF8',
            },
            icon: {
              color: '#9BEFF8',
            },
          }}
        />
      )}
    </>
  );
};

export default InputField;
