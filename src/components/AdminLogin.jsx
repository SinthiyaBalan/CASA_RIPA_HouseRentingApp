import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AdminLogin({ loginData,user,setUser }) {

  const navigate = useNavigate();

  console.log(loginData.users);
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    const person = loginData.users.find((i) => i.email === email);

    if (person) {
      console.log("person found");
      if (person.pass == password) {
        setUser(person);
        navigate("/AdminHome");
      } else {
        console.log("password incorrect");
      }
    } else {
      console.log("person not found");
    }
  };
  return (
    <>
    <h2 className="text-center font-bold text-3xl">Admin Login</h2>
    <div className='admin-login container md:flex lg:flex lg:flex-wrap lg:gap-4 justify-center lg:mt-14 mb-36'>
        
        <form  onSubmit={submitHandler}>
         
            <input className="input input-bordered w-full max-w-xs border-2 border-info md:mx-16 m-4" type="email" name="email" id="email" placeholder='email'/> <br />
            <input className="input input-bordered w-full max-w-xs border-2 border-info md:mx-16" type="password" name="password" id="password" placeholder='password'/><br /><br />
            <button className="btn btn-primary mx-24 md:btn- btn-sm w-28 mx-44" type="submit" >Login</button>
           
    </form>
    </div>
    </>
  );
}

export default AdminLogin;
