import React from "react";


interface SayHelloProps {
    name: string;
}

const SayHello: React.FC<SayHelloProps> = ({ name= "User" }) => {
    const dateNow: number = new Date().getHours();

    const getGreeting = (): string => {
        if (dateNow < 12) {
            return "Good morning";
        } else if (dateNow < 18) {
            return "Good afternoon";
        } else {
            return "Good evening";
        }
    };

    return <h1>{getGreeting()}, {name}!</h1>;
}

export default SayHello;
