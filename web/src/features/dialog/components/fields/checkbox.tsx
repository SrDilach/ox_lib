import { Checkbox } from '@mantine/core';
import { ICheckbox } from '../../../../typings/dialog';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  row: ICheckbox;
  index: number;
  register: UseFormRegisterReturn;
}

const CheckboxField: React.FC<Props> = (props) => {
  return (
    <Checkbox
      {...props.register}
      sx={{ display: 'flex' }}
      required={props.row.required}
      label={props.row.label}
      defaultChecked={props.row.checked}
      disabled={props.row.disabled}
      styles={{
        input: {
          backgroundColor: 'rgba(11, 19, 37, 0.8)',
          borderColor: '#74b3ba',
          '&:checked': {
            backgroundColor: '#9BEFF8',
            borderColor: '#9BEFF8',
          },
          '&:hover': {
            borderColor: '#9BEFF8',
          },
        },
        label: {
          color: 'white',
        },
        description: {
          color: 'white',
        },
      }}
    />
  );
};

export default CheckboxField;
