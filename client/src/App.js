import AuthorForm from './components/AuthorForm';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorUpdate from './components/AuthorUpdate';

function App() {
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
    .then((res)=> {
        setAllAuthors(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>} path="/" />
          <Route element={<AuthorForm allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>} path="/new"/>
          <Route element={<AuthorUpdate/>} path="authors/edit/:_id" />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
