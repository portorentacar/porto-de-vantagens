import React from 'react';
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer';
import Nav2 from '../../components/Nav/Navbar'
function ContactPage() {
    return (
        <div className="container">
            <Nav2 />
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