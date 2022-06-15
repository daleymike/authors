import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const AuthorList = (props) => {
    const {allAuthors, setAllAuthors} = props;
    let navigate = useNavigate();

    const addNew = (e) => {
        e.preventDefault();
        navigate("/new");
    }


return (
    <div>
        <h1>Favorite Authors</h1>
        <button onClick={addNew}>Create New Author</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {allAuthors.map((author, index) => {
            return <tr key={index}>
                <td>{author.name}</td>
                <td><button>Edit</button><button>Delete</button></td>
                </tr>
        })}
            </tbody>
        </table>

      
    </div>
)
}

export default AuthorList;

