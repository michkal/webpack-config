import React from "react"
import {
    NavLink
} from 'react-router-dom';

import './index.scss'
const activeLinkStyle = {

};

export const Footer = ({}) => {
    return (
        <div className='footer-grid-container'>
            <div className='footer-grid-row footer-row1'>
                <div className='footer-grid-col-1'>

                </div>
                <div className='footer-grid-col-2'>
                    <NavLink activeStyle={activeLinkStyle} to='/about'>
                        O nas
                    </NavLink>
                </div>
                <div className='footer-grid-col-3'>
                    <NavLink activeStyle={activeLinkStyle} to='/services'>
                        Usługi
                    </NavLink>
                </div>
                <div className='footer-grid-col-4'>
                    <NavLink activeStyle={activeLinkStyle} to='/cars'>
                        Samochody
                    </NavLink>
                </div>
                <div className='footer-grid-col-5'>
                    <NavLink activeStyle={activeLinkStyle} to='/contact'>
                        Kontakt
                    </NavLink>
                </div>
                <div className='footer-grid-col-6'>

                </div>
            </div>
            <div className='footer-grid-row footer-row2'>
                <div className='footer-grid-col-1'>

                </div>
                <div className='footer-grid-col-2'>
                   <button className='sendBtn'>Wyślij zapytanie</button>
                </div>
                <div className='footer-grid-col-3'>

                </div>
            </div>
            <div className='footer-grid-row footer-row3'>
                <div className='footer-grid-col-1'>

                </div>
                <div className='footer-grid-col-2'>
                    Copyright © mmcmotors.pl. All rights reserved.
                </div>
                <div className='footer-grid-col-3'>

                </div>
            </div>
        </div>
    )
};