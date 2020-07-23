import React from "react"
import {
    NavLink
} from 'react-router-dom';

import './index.scss'

const activeLinkStyle = {

};
export const Header = ({}) => {
    return (
        <div className='header-grid-container'>
            <div className='header-grid-row header-row1'>
                <div className='header-grid-col-1'>
                </div>
                <div className='header-grid-col-2'>
                    <NavLink activeStyle={activeLinkStyle} to='/'>
                        <img src='logo.png'></img>
                    </NavLink>
                </div>
                <div className='header-grid-col-3'>
                    <NavLink activeStyle={activeLinkStyle} to='/about'>
                        O nas
                    </NavLink>
                </div>
                <div className='header-grid-col-4'>
                    <NavLink activeStyle={activeLinkStyle} to='/services'>
                        Usługi
                    </NavLink>
                </div>
                <div className='header-grid-col-5'>
                    <NavLink activeStyle={activeLinkStyle} to='/cars'>
                        Samochody
                    </NavLink>
                </div>
                <div className='header-grid-col-6'>
                    <NavLink activeStyle={activeLinkStyle} to='/contact'>
                        Kontakt
                    </NavLink>
                </div>
                <div className='header-grid-col-7'>
                    Zapytanie
                </div>
                <div className='header-grid-col-8'>

                </div>
            </div>
        </div>
    )
};