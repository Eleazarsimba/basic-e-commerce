import React from 'react'
import Events from '../Dashboard/body/Events'
import Mainmenu from '../Dashboard/body/Mainmenu'
import Newitems from '../Dashboard/body/Newitems'
import Topoffers from '../Dashboard/body/Topoffers'
import Footer from '../Dashboard/Footer/Footer'
import Mainheader from '../Dashboard/header/Mainheader'
import Titlebar from '../Dashboard/header/Titlebar'

const Webhome = () => {
    return (
        <div>
            <Mainheader />
            <Titlebar />
            <Mainmenu />
            <Events />
            <Topoffers />
            <Newitems />
            <Footer />
        </div>
    )
}

export default Webhome
