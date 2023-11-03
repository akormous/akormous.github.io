const styles = "w-5 h-5 lg:w-6 lg:h-6"

export function SuccessIcon() {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24"
style={{fill: "#40C057"}} >
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z"></path>
</svg>
    );
}

export function FailureIcon() {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
</svg>
    );
}

export function CloseIcon() {
    return (
        <svg className={styles + " fill-white"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
</svg>
    );
}

export function WarningIcon() {
    return (
        <svg className={styles + " fill-yellow-400"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 13.85307 19.369262 15.55056 18.318359 16.904297 L 7.0957031 5.6816406 C 8.4494397 4.6307377 10.14693 4 12 4 z M 5.6816406 7.0957031 L 16.904297 18.318359 C 15.55056 19.369262 13.85307 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 10.14693 4.6307377 8.4494397 5.6816406 7.0957031 z"></path>
</svg>
    );
}