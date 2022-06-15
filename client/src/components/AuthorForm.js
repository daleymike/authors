import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AuthorForm = (props) => {
  const [author, setAuthor] = useState("");
  const {allAuthors, setAllAuthors} = props;
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
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
          <label>Name</label> <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        
        <input type="submit" />
      </form>
    </div>
  );
}

export default AuthorForm;
