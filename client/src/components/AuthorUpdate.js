import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const AuthorUpdate = (props) => {
  const { _id } = useParams();
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + _id)
      .then((res) => {
        setAuthor(res.data.name);
        console.log(author);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAuthor = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/authors/" + _id, {
        name: author,
      })
      .then((res) => {
        console.log(res);
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
      <h1>Update Author</h1>
      <div className="updateDiv">
        <form onSubmit={updateAuthor}>
          <label style={{ fontWeight: "bold" }}>Name</label> <br />
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
            className="button"
            style={{ margin: 3 }}
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthorUpdate;
