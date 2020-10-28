import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log("Mounted");
        const mouseMove = (e) => {
            console.log("Mouse move");
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log("des-Mounted");
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <h3>Message</h3>
        </>
    )
}
