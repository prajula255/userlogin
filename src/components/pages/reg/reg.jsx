import React from "react";
import TextInput from "../../text-input";
import Button from "../../Button";

export default function RegistrationPage() {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh", backgroundColor: "#eee" }}>
                <form className="bg-white p-3 w-25 rounded-3 text-center">
                    <p className="fs-4 fw-semibold">Registration</p>

                    <TextInput type={"text"} placeholder={"Enter username"} />
                    <TextInput type={"email"} placeholder={"Enter email"} />
                    <TextInput type={"password"} placeholder={"Enter password"} />
                    <Button label={"Register"} />


                </form></div>

        </React.Fragment>
    )
}