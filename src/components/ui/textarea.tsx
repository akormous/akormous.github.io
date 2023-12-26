import { RefCallBack } from "react-hook-form";

export interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    label: string;
    rows: number;
    error?: boolean;
    helpertext?: string;
    placeholder?: string;
    innerRef?: RefCallBack;
}

const TextArea = ({ label, rows, error, helpertext, placeholder, innerRef, ...rest }: TextAreaProps) => {
    return (
        <div className="mb-4 w-full min-w-[200px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <textarea
            {...rest}
            rows={rows}
            ref={innerRef}
            className="h-full w-full bg-transparent rounded-lg p-2.5 text-sm font-normal text-white transition-all outline outline-0 border border-slate-500 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder={placeholder}
            />
            <p className={`text-red-600 text-xs hidden:${error}`}>{helpertext}</p>                
        </div>
    );
}

export default TextArea;