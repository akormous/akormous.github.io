import { H1 } from "./typography/heading";

export function Contact() {
    return (
        <>
        <div className="flex flex-col items-center">
        <H1 content="Contact" />
        <div className="my-10 w-2/5">
        <form>
            
                <div className="my-4">
                    <label htmlFor="name" className="text-white text-sm">Name</label>
                    <input type="text" id="name" className="text-white text-sm block w-full p-2.5 rounded-md bg-slate-800 border border-slate-400" placeholder="Mike" />
                </div>
                <div className="my-4">
                    <label htmlFor="email" className="text-white text-sm">Email</label>
                    <input type="text" id="email" className="text-white text-sm block w-full p-2.5 rounded-md bg-slate-800 border border-slate-400" placeholder="mike@company.com" />
                </div>
                <div className="my-4">
                    <label htmlFor="message" className="text-white text-sm">Message</label>
                    <textarea id="message" rows={4} className="text-white text-sm block w-full p-2.5 rounded-md bg-slate-800 border border-slate-400" placeholder="Hey there!" />
                </div>
            
        </form>
        </div>
        </div>
        </>
    )
}