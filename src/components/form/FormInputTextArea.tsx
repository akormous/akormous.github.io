import { Controller, useFormContext } from "react-hook-form"
import TextArea, { TextAreaProps } from "../ui/textarea";

type IFormInputTextAreaProps = {
    name: string;
} & TextAreaProps;

const FormInputTextArea = ( {name, ...otherProps} : IFormInputTextAreaProps) => {
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
            <TextArea 
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

export default FormInputTextArea;