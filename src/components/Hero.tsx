export function Hero() {
    return (
    <>
    <div className="h-screen absolute top-0 left-0 overflow-hidden -z-10 brightness-75">
    <video 
     autoPlay loop muted playsInline
    >
        <source src="/hero4.mp4" type="video/mp4" />
    </video>
    
    </div>
    </>
    );
}