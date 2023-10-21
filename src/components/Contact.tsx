import { H2 } from "./typography/heading";
import PrimaryButton from "./ui/primarybutton";
import TextArea from "./ui/textarea";
import TextField from "./ui/textfield";

export function Contact() {
    return (
        <>
        <div className="flex flex-col mb-36 justify-center items-center">
            <H2>get in touch</H2>
        <div className="py-12 px-6 max-w-2xl w-full">
        <form className="flex flex-col items-center">
            <TextField type="text" id="name" label="Name" />
            <TextField type="text" id="email" label="Email" />
            <TextArea rows={4} id="message" label="Message" />
            <PrimaryButton>Submit</PrimaryButton>
        </form>
        </div>
        </div>
        </>
    )
}