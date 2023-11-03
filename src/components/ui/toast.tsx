import { CloseIcon, FailureIcon, SuccessIcon, WarningIcon } from "./icons";

export interface ToastProps {
    message: string;
    type: string;
    onClose: () => void;
}

function Toast({message, type, onClose} : ToastProps) {
    const iconMap = {
        success: <SuccessIcon />,
        failure: <FailureIcon />,
        warning: <WarningIcon />
    };

    const toastIcon = iconMap[type as keyof typeof iconMap] || null;

    return (
        <div className="bg-slate-700 text-white w-auto flex flex-wrap justify-between my-1 p-2 rounded-lg opacity-90 hover:opacity-100" role="alert">
            <div className="flex items-center h-auto w-9/12">
                <div className="pl-4 pr-2">{toastIcon}</div>
                <p className="break-normal">{message}</p>
            </div>
            <div className="flex pr-2 items-center cursor-pointer" onClick={onClose}>
                <CloseIcon />
            </div>
        </div>
    );
}

export default Toast;