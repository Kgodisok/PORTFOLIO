
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedinIn } from "react-icons/fa";
import localData from "../data/data.json";
import { useEffect, useState } from "react";

const iconStyles ={
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    color: 'grey',
    backgroundColor: 'black',
    fontSize: '25px',
    padding: '20px 0'
}

const Contactdetails = () =>{
    const [contactData, setData] = useState(localData || null);
    
        useEffect(() => {
            fetch("../data/data.json")
            .then((res) => {
                if (!res.ok) {
                throw new Error("Failed to fetch JSON");
                }
                return res.json();
            })
            .then((json) => setData(json))
            .catch((err) => {
                // keep the localData fallback in state and log the error for debugging
                console.error("Could not fetch /information/data.json, using local data:", err);
            });
        }, []);
        if (!contactData) return <p>Loading...</p>;
    console.log('Contactdetails render');
    // Use bundled localData so component renders without runtime fetc
    return (
        <div style={iconStyles}>
            <FaWhatsapp />
            <a href={`https://wa.me/${contactData.cellPhoneNumber[0]}`} target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
            <br />
            <FaEnvelope />
            <a href={`mailto:${contactData.emailAddress}`}>Email Me</a>
            <br />
            <FaPhone />
            <a href={`tel:${contactData.cellPhoneNumber[0]}`}>
            Call Me</a>
            <br />
            <a href={contactData.linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            LinkedIn
            </a>
        </div>
    );
};

export default Contactdetails;