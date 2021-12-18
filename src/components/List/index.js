import React from 'react'
import './style.css'

function List({todo}) {
    return (
        <div>
            <div className='list-container'>
                <ul className='list-box'>
                    {
                        todo.map((item,i)=>(
                            <li className='list-item' key={i}>{item.list}</li>
                        ))
                    }
                </ul>            
            </div>
        </div>
    )
}

export default List
