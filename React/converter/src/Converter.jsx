import React from "react";

function Converter({ usd, setUsd, setNpr, conversionRate }) {
    const handlechange = (e) =>{
        const value = e.target.value;
        setUsd(value);
        if (value === "") {
            setNpr(0);
        } else {
            setNpr(value * conversionRate);
        }
    }

return(
    <div>
        <h1>Currency Converter</h1>
        <input
            type="text" 
            placeholder="Enter amount in USD" 
            value={usd}
            onChange={handlechange} />
    </div>
)
}
export default Converter;