import React, { useEffect, useState } from "react";
import TextInput from "../../components/text-input";
import Button from "../../components/Button";

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    function handleLogin() {
        alert(`Email: ${email}, Password:${password}`)
    }

    useEffect(() => {
        console.log("useEffect triggered")

        // Regex for email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if (emailRegex.test(email)) {
            console.log("valid email")
        }
        else {
            console.log("invalid email")
        }

        // Regex for password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (passwordRegex.test(password)){
            console.log("valid password")
        }
        else{
            console.log("invalid")
        }

            if (password.length < 8) {
                console.log("password should be atleast 8 characters")
            }
            else {
                console.log("password is valid")
            }
    }, [email, password])

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh", backgroundColor: "#eee" }}>
                <div className="bg-white p-3 w-25 rounded-3 text-center">
                    <p className="fs-4 fw-semibold">Login</p>
                    <TextInput type={"email"} placeholder={"Enter email"} onChange={(e) => setEmail(e.target.value)} />

                    <TextInput type={"password"} placeholder={"Enter password"} onChange={(e) => setpassword(e.target.value)} />
                    <Button label={"Login"} onClick={handleLogin} />
                    <p style={{ fontSize: 'small' }}>Don't have account? <span className="text-primary">Create account</span></p>
                </div>
            </div>
        </React.Fragment>
    )
}