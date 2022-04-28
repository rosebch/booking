import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed,faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

import './header.scss';

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, 
                [name] : operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <div className="header">
            <div className={type === 'list' ? "header__container list-mode" : "header__container"}>
                <div className="header__list">
                    <div className="header__list-item active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !== 'list' &&
                <>
                    <h1 className="header__title">A lifetime of discount? It's Genius</h1>
                    <p className="header__desc">
                        Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking account
                    </p>
                    <button className="header__btn">Sign in / Register</button>

                    <div className="header__search">
                    <div className="header__search-item">
                        <FontAwesomeIcon icon={faBed} className='header__icon'/>
                        <input type="text" placeholder='Where are you going?' className="header__search-input" />
                    </div>
                    <div className="header__search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className='header__icon'/>
                        <span onClick={() => setOpenDate(!openDate)} className='header__search-text'>{`${format(date[0].startDate, "dd/MM/yyyy")}
                         to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate &&
                            <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />
                        }
                    </div>
                    <div className="header__search-item">
                        <FontAwesomeIcon icon={faPerson} className='header__icon'/>
                        <span onClick={() => setOpenOptions(!openOptions)} className='header__search-text'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openOptions &&
                            <div className="options">
                            <div className="options__item">
                                <span className="options__text">Adult</span>
                                <div className="options__counter">
                                    <button disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')} className="options__counter-btn">-</button>
                                    <span className="options__counter-number">{options.adult}</span>
                                    <button onClick={() => handleOption('adult', 'i')}  className="options__counter-btn">+</button>
                                </div>
                            </div>
                            <div className="options__item">
                                <span className="options__text">Children</span>
                                <div className="options__counter">
                                    <button disabled={options.children <= 0} onClick={() => handleOption('children', 'd')} className="options__counter-btn">-</button>
                                    <span className="options__counter-number">{options.children}</span>
                                    <button onClick={() => handleOption('children', 'i')} className="options__counter-btn">+</button>
                                </div>
                            </div>
                            <div className="options__item">
                                <span className="options__text">Room</span>
                                <div className="options__counter">
                                    <button disabled={options.room <= 1}  onClick={() => handleOption('room', 'd')} className="options__counter-btn">-</button>
                                    <span className="options__counter-number">{options.room}</span>
                                    <button onClick={() => handleOption('room', 'i')} className="options__counter-btn">+</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="header__search-item">
                        <button className="header__btn">Search</button>
                    </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default Header