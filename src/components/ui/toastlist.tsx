import Toast from "./toast";

interface ToastListProps {
    data: ToastObj[];
    removeToast: (id: number) => void;
};

export interface ToastObj {
    id: number;
    message: string;
    type: string;
}

function ToastList({data, removeToast}: ToastListProps) {
    return (
        data.length > 0 && (
        <div className="fixed z-50 p-4 max-w-md max-h-screen overflow-hidden bottom-0 right-0">
            {data.map((toast: ToastObj) => (
                <Toast  
                 message={toast.message}
                 type={toast.type}
                 onClose={() => removeToast(toast.id)}
                 key={toast.id}
                />
            ))}
        </div>
        )
    );
}

export default ToastList;