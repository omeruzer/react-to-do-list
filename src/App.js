import React, { Component } from 'react'
import './App.css'
import {useState,useEffect} from 'react';
import Form from './components/Form/index'
import List from './components/List/index'


function App() {

  const [todo, settodo] = useState([])

  useEffect(() => {
    console.log(todo);
  },[todo])

  return (
    <div className='App'>
      <h1 className='title'>To Do List</h1>
      <List todo={todo}/>
      <Form todo={todo} settodo={settodo} />
    </div>
  );
}

export default App;
