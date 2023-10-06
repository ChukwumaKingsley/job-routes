
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function About() {

    const [user, setUser] = useState('mario')

    if (!user) {
        return <Navigate to="/" replace={true}/>
    }

    return (
        <div className='about'>
            <h2>About Us</h2>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}

export default About