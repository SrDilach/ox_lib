import { Box, Slider, Text } from '@mantine/core';
import { ISlider } from '../../../../typings/dialog';
import { Control, useController } from 'react-hook-form';
import { FormValues } from '../../InputDialog';

interface Props {
  row: ISlider;
  index: number;
  control: Control<FormValues>;
}

const SliderField: React.FC<Props> = (props) => {
  const controller = useController({
    name: `test.${props.index}.value`,
    control: props.control,
    defaultValue: props.row.default || props.row.min || 0,
  });

  return (
    <Box>
      <Text sx={{ fontSize: 14, fontWeight: 500 }}>{props.row.label}</Text>
      <Slider
        mb={10}
        value={controller.field.value}
        name={controller.field.name}
        ref={controller.field.ref}
        onBlur={controller.field.onBlur}
        onChange={controller.field.onChange}
        defaultValue={props.row.default || props.row.min || 0}
        min={props.row.min}
        max={props.row.max}
        step={props.row.step}
        disabled={props.row.disabled}
        color="#74b3ba"
        styles={{
          track: { backgroundColor: '#4A90E2' },
          bar: { backgroundColor: '#74b3ba' },
          thumb: {
            borderColor: '#74b3ba',
            backgroundColor: 'rgba(11, 19, 37, 0.8)',
            width: 16,
            height: 16
          },
          mark: {
            backgroundColor: '#74b3ba',
            width: 8,
            height: 8,
            borderRadius: '50%'
          },
          markLabel: { color: '#ffffff', fontSize: 12 },
        }}
        marks={[
          { value: props.row.min || 0, label: props.row.min || 0 },
          { value: props.row.max || 100, label: props.row.max || 100 },
        ]}
      />
    </Box>
  );
};

export default SliderField;
