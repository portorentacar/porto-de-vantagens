import React from 'react'
import Contact from '../../components/Contact/Contact'
import Enterprise from '../../components/Enterprise/Enterprise'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Regulation from '../../components/Regulation/Regulation'
import Navbar from '../../components/Navbar/index'

function Home(props) {
    return (
            <>
            <Navbar/>
            <Header />
            <Regulation />
            <Enterprise />
            <Contact />
            <Footer />
            </>
    )
}

export default Home;