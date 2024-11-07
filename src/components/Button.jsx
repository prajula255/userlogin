export default function Button({label,onClick}) {
    return (
        <>
            <button className="btn btn-primary w-100 mb-4" onClick={onClick}>{label}</button>

        </>

    )

}
