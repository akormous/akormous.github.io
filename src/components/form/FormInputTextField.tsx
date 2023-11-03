import { Controller, useFormContext } from "react-hook-form"
import TextField, { TextFieldsProps } from "../ui/textfield";

type IFormInputTextFieldProps = {
    name: string;
} & TextFieldsProps;

const FormInputTextField = ( {name, ...otherProps} : IFormInputTextFieldProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller 
         name={name}
         control={control}
         defaultValue=""
         render={({
            field: { value, onChange, ref },
            fieldState: { error },
         }) => (
            <TextField 
             {...otherProps}
             innerRef={ref}
             value={value}
             onChange={onChange}
             error={Boolean(error)}
             helpertext={errors[name]?.message?.toString()}
            />
         )}
        />
    );
}

export default FormInputTextField;