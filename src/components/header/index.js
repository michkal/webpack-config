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

            </div>
            <div className='header-grid-row header-row2'>
                <div className='header-grid-col-1'>

                </div>

                <div className='header-grid-col-2'>
                    <NavLink activeStyle={activeLinkStyle} to='/'>
                        <img src='logo.png'></img>
                    </NavLink>
                </div>
                <div className='header-grid-col-3'>
                    <div className="page">
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__group"><NavLink activeStyle={activeLinkStyle} to='/about' className="menu__link">Kim jesteśmy</NavLink>
                                </li>
                                <li className="menu__group"><NavLink activeStyle={activeLinkStyle} to="/services" className="menu__link">Nasze usługi</NavLink>
                                </li>
                                <li className="menu__group"><NavLink activeStyle={activeLinkStyle} to="/cars" className="menu__link">Kup samochód</NavLink>
                                </li>
                                <li className="menu__group"><NavLink activeStyle={activeLinkStyle} to="/contact" className="menu__link">Nasz zespół</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='header-grid-col-4'>
                    Wyślij zapytanie
                </div>
                <div className='header-grid-col-5'>

                </div>
            </div>
        </div>
    )
};