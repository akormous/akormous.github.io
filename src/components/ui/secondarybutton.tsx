import { ButtonProps } from "./primarybutton";

const SecondaryButton = (props: ButtonProps) => {
    return (
        <button className='text-white border-slate-600 border-2 rounded-full px-8 py-4 hover:bg-slate-600' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default SecondaryButton;