export function Navbar() {
    return (
        
            <div className="bg-transparent h-auto grid grid-cols-3 p-6 items-center text-white">
                <div className="flex justify-start">
                    <a className="mx-9 font-bold">Projects</a>
                    <a className="mx-9 font-bold">Experience</a>
                    <a className="mx-9 font-bold">Contact</a>
                </div>
                <div className="flex justify-center">
                <h1 className="text-3xl lg:text-5xl text-white font-semibold">AC</h1>
                </div>
                <div className="flex justify-end">
                    <a className="mx-9 font-bold">About</a>
                    <a className="mx-9 font-bold">Github</a>
                    <a className="mx-9 font-bold">Hire</a>
                </div>
            </div>
    );
}