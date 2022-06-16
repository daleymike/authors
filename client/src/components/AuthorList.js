import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const AuthorList = (props) => {
  const { allAuthors, setAllAuthors } = props;
  let navigate = useNavigate();

  const addNew = (e) => {
    e.preventDefault();
    navigate("/new");
  };

  const removeFromDom = (authorId) => {
    setAllAuthors(allAuthors.filter((author) => author._id != authorId));
  };

  const destroyAuthor = (authorId) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorId)
      .then((res) => {
        removeFromDom(authorId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAllAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Favorite Authors</h1>
      <button className="button3" onClick={addNew}>
        Create New Author
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allAuthors
            .sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            })
            .map((author, index) => {
              return (
                <tr key={index}>
                  <td>{author.name}</td>
                  <td>
                    <Link to={`/authors/edit/${author._id}`}>
                      <button className="button" style={{ margin: 3 }}>
                        Edit
                      </button>
                    </Link>
                    <button
                      className="button2"
                      style={{ margin: 3 }}
                      onClick={(e) => {
                        destroyAuthor(author._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
