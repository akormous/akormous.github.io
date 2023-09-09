export function Hero() {
    return (
    <>
    <video 
        className="absolute -z-20 brightness-50 left-2/4 top-2/4 h-full w-full object-cover -translate-y-2/4 -translate-x-2/4"
        autoPlay loop muted playsInline
    >
        <source src="/hero5.mp4" type="video/mp4" />
    </video>
    <div className="absolute h-screen w-full flex flex-col top-0 items-center justify-center -z-10 px-6">
      <h1 className="text-white text-5xl md:text-7xl lg:text-9xl my-4">Hi, I&apos;m Akshat</h1>
      <p className="text-white text-center text-md lg:text-lg">Full-stack engineer crafting ideas into reality, bridging tech and business for startups and enterprises.</p>
    </div>
    
    
       
    </>
    );
}