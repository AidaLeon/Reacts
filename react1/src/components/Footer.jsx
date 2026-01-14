import React from "react";

export const Footer = () => {
    const anio = new Date().getFullYear();
    return (
        <>
            <p>&copy {anio} Aida León Vila</p>
        </>
    )
}