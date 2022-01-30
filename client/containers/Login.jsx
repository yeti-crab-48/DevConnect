import React, {useState} from 'react';


const Login = () => {
        //this.state   //this.setState
  const [isLogin, toggleLogin] = useState(true)
  
  const handleRegister = (e) => {
    e.preventDefault();

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    fetch(`/api/user/${isLogin ? 'login' : 'signup'}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    });
\\
  }

  
  if(isLogin) {
    return (
    <form onSubmit={handleRegister}>
      <input type="text" name="username" required/>
      <input type="password" name="password" id="" required/>
      <button type="submit" >Login</button>
      <button onClick={() => toggleLogin(false)}>Go to Sign Up</button>
    </form>
    )
} else {
    return (
      <form onSubmit={handleRegister}>
        <input type="text" name="username" required/>
        <input type="password" name="password" id="" required/>
        <button type="submit">Sign Up</button>
        <button onClick={() => toggleLogin(true)}>Go to Log in</button>
      </form>
    )
  }
};

// const StyledForm = styled.div`
//   background0==

// `;




export default Login;
