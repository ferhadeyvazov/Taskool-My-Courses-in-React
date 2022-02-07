import { FaRegCalendarAlt, FaRegClock, FaPlus } from "react-icons/fa";
import axios from 'axios'
import { useState, useEffect } from 'react'






function Kurslarim() {

    const [toggle, setToggle] = useState([])

    useEffect(() => {
        axios.get("http://3.68.156.86:8000/api/v1/core/all-courses/")
            .then(res => {
                setToggle(res.data)
            })

    }, [])
    return (
        <div className='box4'>
            <div className='box2'>
                <h2>Kurslarım</h2>
                <button><FaPlus />Create new course</button>
            </div>
<div className='box3'>
            {toggle.map((blog) => (
                <div key={blog.id}>
                    
                    <div>
                        <div className='card-photo'>
                            <img src={blog.image} alt="Course" />
                        </div>
                        <div>
                            <h3>{blog.title}</h3>
                        </div>

                        <div className='xett'></div>

                        <div>
                            <div><FaRegCalendarAlt /></div>
                            <div>
                                <p>7 yanvar, 2021</p>
                                <p>Son müraciət tarixi {blog.course_deadline}</p>
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

            ))}


</div>

        </div>
    )
}

export default Kurslarim

