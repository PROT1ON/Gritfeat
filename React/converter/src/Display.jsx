import React from "react";

function Display({ USD, NPR }) {
    return (
        <>
        <p>
            {USD || 0} USD = {NPR.toLocaleString()} NPR
        </p>
        <h2>Result:RS {NPR.toLocaleString()} </h2>
        </>
    );
}
export default Display;