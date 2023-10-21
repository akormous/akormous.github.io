export interface ButtonProps {
    primary?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

const PrimaryButton = (props: ButtonProps) => {

    return (
        <button className='text-white bg-indigo-700 border-slate-600 border-2 rounded-full px-8 py-4 hover:bg-indigo-800' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default PrimaryButton;