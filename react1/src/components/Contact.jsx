import React from "react";

export const Contact = ({email, phone, show}) => {
    const [displeys, setDispleys] = React.useState(show);
    const toggleDispley = () => {
        setDispleys(!displeys);
    }
    return (
        <>
            <button onClick={toggleDispley}>Información de contacto</button>
            {displeys &&(
                <div>
                    <h3>Contacto</h3>
                    <p>Email: {email}</p>
                    <p>Telefono: {phone}</p>
                </div>
            )}
        </>
    )

}