'use client';
import { useState } from "react";
import { H2 } from "./typography/heading";
import PrimaryButton from "./ui/primarybutton";
import ToastList, { ToastObj } from "./ui/toastlist";
import Image from "next/image";
import { object, string } from "zod";
import { infer as Infer } from "zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputTextField from "./form/FormInputTextField";
import FormInputTextArea from "./form/FormInputTextArea";
import { useTranslations } from "next-intl";

const ContactFormSchema = object({
    name: string().min(1, "Name is required"),
    email: string().min(1, "Email is required").email("Invalid Email"),
    message: string().min(1, "Message is required")
})

type ContactFormInput = Infer<typeof ContactFormSchema>;

export default function Contact() {
    const t = useTranslations('Contact')
    const c = useTranslations('common')
    const [toasts, setToasts] = useState<ToastObj[]>([]);
    const [autoCloseDuration, setAutoCloseDuration] = useState(5);
    const [loading, setLoading] = useState(false);

    const methods = useForm<ContactFormInput>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const { register, formState: { errors }, reset, getValues, handleSubmit } = methods;

    const onSubmitHandler: SubmitHandler<ContactFormInput> = (values) => {
        setLoading(true);
        fetch(process.env.NEXT_PUBLIC_BE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then((response) => response.json())
        .then((data) => {
            if(data.statusCode == 200) {
                showToast(data.body.message, "success");
                reset();
            }
            else {
                showToast(data.body.error, "failure");
            }
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            showToast("Some error occurred! Please contact via email at iamakshatchauhan@gmail.com","failure");
        });
    }

   

    const removeToast = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const removeAllToasts = () => {
        setToasts([]);
    };

    const showToast = (message: string, type: string) => {
        const toast: ToastObj = {
            id: Date.now(),
            message,
            type
        }

        setToasts((prevToasts) => [...prevToasts, toast]);

        setTimeout(() => {
            removeToast(toast.id);
        }, autoCloseDuration*1000)
    };

    console.log(errors);

    return (
        <>
        <ToastList 
             data={toasts}
             removeToast={removeToast}
            />
        <div id="contact" className="flex flex-col mb-36 justify-center items-center">
            <H2>{t('titletext')}</H2>
            

        <div className="py-12 px-6 max-w-2xl w-full">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <FormInputTextField
                     name="name"
                     label={c('name')}
                     placeholder="Jeff"
                    />
                    <FormInputTextField
                     name="email"
                     label={c('email')}
                     placeholder="jeff@company.com"
                    />
                    <FormInputTextArea
                     name="message"
                     label={c('message')}
                     placeholder="my name jeff"
                     rows={5}
                    />
                    <div className="flex justify-center">
                        <PrimaryButton type="submit" onClick={handleSubmit} disabled={loading}>{c('submit')}<Image src="/rings.svg" width={20} height={20} alt="loading" hidden={!loading} /></PrimaryButton>
                    </div>
                </form>
            </FormProvider>
        </div>
        </div>
        </>
    )
}