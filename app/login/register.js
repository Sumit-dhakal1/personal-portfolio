"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function reg() {
    const [fullName, setFullName] =useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return(
        <div>
            wellcome register page 

            <form onSubmit={handleRegister}>

                <div>
                    <h2>name</h2>
                </div>


            </form>
        </div>
    )
}