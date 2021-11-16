import React from 'react'
import Contact from '../../components/Contact/Contact'
import Enterprise from '../../components/Enterprise/Enterprise'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Regulation from '../../components/Regulation/Regulation'
import Nav2 from '../../components/Nav/Navbar'

function Home(props) {
    return (
        <>
            <Nav2 />
            <Header />
            <Regulation />
            <Enterprise />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;