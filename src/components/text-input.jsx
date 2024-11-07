import React from "react"
export default function TextInput(props) {
    const { type, placeholder, onChange }=props
    return (
        <input type={type} className="form-control mb-3" placeholder={placeholder} onChange={onChange} />

    )
}