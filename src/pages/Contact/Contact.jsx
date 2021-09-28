import React from 'react';
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/index'
function ContactPage () {
    return (
        <div className="container">
            <Navbar />
        <div className="content">
        <br />
        <Contact />
        <br />
        <br />
        </div>
        <Footer />        
        </div>
    )
}

export default ContactPage;