import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AuthorForm = (props) => {
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState([]);
  const { allAuthors, setAllAuthors } = props;
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/authors", {
        name: author,
      })
      .then((res) => {
        console.log(res.data);
        setAllAuthors([...allAuthors, res.data]);
        setAuthor("");
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errorResponse)) {
          errArr.push(errorResponse[key].message);
        }
        setErrors(errArr);
      });
  };

  return (
    <div>
      <h1>Create New Author</h1>
      <div className="updateDiv" style={{ marginTop: 50 }}>
        <form onSubmit={onSubmitHandler}>
          <label style={{ fontWeight: "bolder", fontSize: "x-large" }}>
            Name
          </label>
          <br />
          {errors.map((err, index) => (
            <p style={{ color: "red" }} key={index}>
              {err}
            </p>
          ))}
          <br />
          <input
            className="button1"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <br />
          <input style={{ margin: 3 }} className="button3" type="submit" />
          <button
            style={{ margin: 3 }}
            className="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthorForm;
