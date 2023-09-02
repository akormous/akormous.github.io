export function Navbar() {
    return (
        
            <div className="bg-transparent min-h-fit flex my-2 text-white">
                <div className="flex items-center flex-grow">
                    <a className="mx-9 font-bold">Projects</a>
                    <a className="mx-9 font-bold">Experience</a>
                    <a className="mx-9 font-bold">Contact</a>
                </div>
                <h1 className="text-md lg:text-5xl text-white font-semibold">AC</h1>
                <div className="flex items-center justify-end flex-grow text-white">
                <a className="mx-9 font-bold">About</a>
                    <a className="mx-9 font-bold">Github</a>
                    <a className="mx-9 font-bold">Hire</a>
                </div>
            </div>
    );
}