"use client";
import { useState } from "react";
import { H2 } from "./typography/heading";
import PrimaryButton from "./ui/primarybutton";
import TextArea from "./ui/textarea";
import TextField from "./ui/textfield";

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log("submit called");
        fetch("https://u6dq6m4b7cqjxbugm2eqws2lkm0eukgt.lambda-url.ap-south-1.on.aws/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        }).then((response) => response.json())
        .then((data) => console.log(data));
    }

    return (
        <>
        <div className="flex flex-col mb-36 justify-center items-center">
            <H2>get in touch</H2>
        <div className="py-12 px-6 max-w-2xl w-full">
        
            <TextField type="text" id="name" label="Name" onChange={(val) => setName(val)} />
            <TextField type="text" id="email" label="Email" onChange={(val) => setEmail(val)} />
            <TextArea rows={4} id="message" label="Message" onChange={(val) => setMessage(val)} />
            <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
        
        </div>
        </div>
        </>
    )
}