import { MultiSelect, Select } from '@mantine/core';
import { ISelect } from '../../../../typings';
import { Control, useController } from 'react-hook-form';
import { FormValues } from '../../InputDialog';
import LibIcon from '../../../../components/LibIcon';

interface Props {
  row: ISelect;
  index: number;
  control: Control<FormValues>;
}

const SelectField: React.FC<Props> = (props) => {
  const controller = useController({
    name: `test.${props.index}.value`,
    control: props.control,
    rules: { required: props.row.required },
  });

  return (
    <>
      {props.row.type === 'select' ? (
        <Select
          data={props.row.options}
          value={controller.field.value}
          name={controller.field.name}
          ref={controller.field.ref}
          onBlur={controller.field.onBlur}
          onChange={controller.field.onChange}
          disabled={props.row.disabled}
          label={props.row.label}
          description={props.row.description}
          withAsterisk={props.row.required}
          clearable={props.row.clearable}
          searchable={props.row.searchable}
          icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
          styles={{
            input: {
              backgroundColor: 'rgba(11, 19, 37, 0.8)',
              color: 'white',
              borderColor: '#74b3ba',
              transition: 'border-color 0.2s ease-in-out',
              '&:focus': {
                borderColor: '#9BEFF8',
                boxShadow: '0 0 5px #9BEFF8',
              },
              '&:hover': {
                bborderColor: '#9BEFF8',
              },
            },
            dropdown: { backgroundColor: 'rgba(30, 19, 37, 0.8)' },
            item: {
              color: 'white',
              border: '1px solid #74b3ba',
              borderRadius: '2px',
              padding: '7px',
              margin: '2px',
              transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
              backgroundColor: 'rgba(11, 19, 37, 0.8)',
              '&:hover': {
                backgroundColor: '#74b3ba',
                borderColor: '#9BEFF8',
              },
            },
            label: { color: 'white' },
            description: { color: 'white' },
          }}
        />
      ) : (
        <>
          {props.row.type === 'multi-select' && (
            <MultiSelect
              data={props.row.options}
              value={controller.field.value}
              name={controller.field.name}
              ref={controller.field.ref}
              onBlur={controller.field.onBlur}
              onChange={controller.field.onChange}
              disabled={props.row.disabled}
              label={props.row.label}
              description={props.row.description}
              withAsterisk={props.row.required}
              clearable={props.row.clearable}
              searchable={props.row.searchable}
              maxSelectedValues={props.row.maxSelectedValues}
              icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
              styles={{
                input: {
                  backgroundColor: 'rgba(11, 19, 37, 0.8)',
                  color: 'white',
                  borderColor: '#74b3ba',
                  transition: 'border-color 0.2s ease-in-out',
                  '&:focus': {
                    borderColor: '#9BEFF8',
                    boxShadow: '0 0 5px #9BEFF8',
                  },
                  '&:hover': {
                    bborderColor: '#9BEFF8',
                  },
                },
                dropdown: { backgroundColor: 'rgba(30, 19, 37, 0.8)' },
                item: {
                  color: 'white',
                  border: '1px solid #74b3ba',
                  borderRadius: '2px',
                  padding: '7px',
                  margin: '2px',
                  transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
                  backgroundColor: 'rgba(11, 19, 37, 0.8)',
                  '&:hover': {
                    backgroundColor: '#74b3ba',
                    borderColor: '#9BEFF8',
                  },
                },
                label: { color: 'white' },
                description: { color: 'white' },
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default SelectField;
