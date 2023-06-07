import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {

    const handleSubmit = () => {
        alert("submitted");
      };
  return (
    <>
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <form style={{ width: "275px" }} onSubmit={handleSubmit}>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
          Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <Link to={'/login'}>  
        <button type="submit" class="btn btn-primary">
          signup
        </button>
        </Link>
       
      </form> 
</div>
</>
  )
}

export default Signup