import {useState} from 'react'
import './style.css'

function Form({todo,settodo}) {

    const [list, setlist] = useState({list:""})

    const onChangeInput = (e)=>{
        setlist({...list,[e.target.name]: e.target.value})
    }

    const onSubmit = (e)=>{
    
        e.preventDefault();

        if(list.list === ''){
            return false
        }

        settodo([...todo,list]);

        setlist({list:''})
    }

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={onSubmit} className='form' >
                    <input placeholder='To Do' autoComplete='off' name='list' className='input' value={list.list} onChange={onChangeInput} />
                    <button className='btn'>Add!</button>   
                </form>
            </div>
        </div>
    )
}

export default Form