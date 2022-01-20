import React from 'react'
import Photo from '../İmages/Sekil.png'
import {FaRegCalendarAlt, FaRegClock, FaPlus } from "react-icons/fa";

function kurslarim() {
    return (
        <div className='box4'>
        <div className='box2'>
                <h2>Kurslarım</h2>
<button><FaPlus/>Create new course</button>
            </div>
            <div className='box3'>
                <div>
                    <div className='card-photo'>
                        <img src={Photo} alt="Course" />
                    </div>
                    <div>
                        <h3>User Experience Research and Design Specialization</h3>
                    </div>

                    <div className='xett'></div>

                    <div>
                        <div><FaRegCalendarAlt /></div>
                        <div>
                        <p>7 yanvar, 2021</p>
                        <p>Son müraciət tarixi 5 yanvar</p>
                        </div>
                    </div>
                    <div>
                        <div><FaRegClock /></div>
                        <div>
                        <p>48 saat</p>
                        <p>Həftədə 6 saat olmaqla</p>
                        </div>
                    </div> 
                </div>
    
                <div>
                    <div className='card-photo'>
                        <img src={Photo} alt="Course" />
                    </div>
                    <div>
                        <h3>User Experience Research and Design Specialization</h3>
                    </div>

                    <div className='xett'></div>

                    <div>
                        <div><FaRegCalendarAlt /></div>
                        <div>
                            <p>7 yanvar, 2021</p>
                            <p>Son müraciət tarixi 5 yanvar</p>
                        </div>
                    </div>
                    <div>
                        <div><FaRegClock /></div>
                        <div>
                            <p>48 saat</p>
                            <p>Həftədə 6 saat olmaqla</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='card-photo'>
                        <img src={Photo} alt="Course" />
                    </div>
                    <div>
                        <h3>User Experience Research and Design Specialization</h3>
                    </div>

                    <div className='xett'></div>

                    <div>
                        <div><FaRegCalendarAlt /></div>
                        <div>
                            <p>7 yanvar, 2021</p>
                            <p>Son müraciət tarixi 5 yanvar</p>
                        </div>
                    </div>
                    <div>
                        <div><FaRegClock /></div>
                        <div>
                            <p>48 saat</p>
                            <p>Həftədə 6 saat olmaqla</p>
                        </div>
                    </div>
                </div>

            </div>

        

        </div>
    )
}

export default kurslarim
