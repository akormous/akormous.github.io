import { H1, H2, H3 } from "./typography/heading";
import PrimaryButton from "./ui/primarybutton";

export function Hero() {
    return (
        <div className="relative h-[100vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <H2>building software<br/> the clean way</H2>
            <a href="mailto:iamakshatchauhan@gmail.com"><PrimaryButton>Available for work</PrimaryButton></a>
            </div>
        </div>
    );
}