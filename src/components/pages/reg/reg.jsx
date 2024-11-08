import React, { useState } from "react";
import TextInput from "../../text-input";
import Button from "../../Button";

export default function RegistrationPage() {
    const [Username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    function handleRegister() {
        alert(`Username:${Username},Email:${email},Password:${password}`)
    }
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh", backgroundColor: "#eee" }}>
                <div className="bg-white p-3 w-25 rounded-3 text-center">
                    <p className="fs-4 fw-semibold">Registration</p>

                    <TextInput type={"text"} placeholder={"Enter username"} onChange={(e)=>setUsername(e.target.value)} />
                    <TextInput type={"email"} placeholder={"Enter email"}onChange={(e) => setEmail(e.target.value)} />
                    <TextInput type={"password"} placeholder={"Enter password"} onChange={(e)=>setpassword(e.target.value)} />
                    <Button label={"Register"} onClick={handleRegister} />


                </div></div>

        </React.Fragment>
    )
}