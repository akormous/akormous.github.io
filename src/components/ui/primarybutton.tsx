export interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: any;
    type?: "reset" | "button" | "submit" | undefined;
}

const PrimaryButton = (props: ButtonProps) => {
    return (
        <button type={props.type} disabled={props.disabled} className='text-white flex items-center w-fit bg-indigo-700 rounded-full px-6 py-4 hover:bg-indigo-800 disabled:bg-slate-700' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default PrimaryButton;