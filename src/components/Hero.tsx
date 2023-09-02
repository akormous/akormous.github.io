export function Hero() {
    return (
    <>
    <video 
        className="absolute -z-20 brightness-75 left-2/4 top-2/4 h-full w-full object-cover -translate-y-2/4 -translate-x-2/4"
        autoPlay loop muted playsInline
    >
        <source src="/hero4.mp4" type="video/mp4" />
    </video>
    <div className="absolute container flex flex-col items-center justify-center top-0 h-full w-full -z-10 px-6">
      <h1 className="text-white xs:text-2xl sm:text-4xl md:text-6xl lg:text-9xl font-semibold">Hi, I&apos;m Akshat.</h1>
      <p className="text-white md:text-sm lg:text-lg">Full-stack engineer crafting ideas into reality, bridging tech and business for startups and enterprises.</p>
    </div>
    
    
       
    </>
    );
}