import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate()
        //this.state   //this.setState
  const [isLogin, toggleLogin] = useState(true)
  
  const handleRegister = (e) => {
    e.preventDefault();

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    console.log('loginInfo', JSON.stringify(loginInfo));

    fetch(`/api/user/${isLogin ? 'login' : 'signup'}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })
      .then(res => res.json())
      .then(verified => verified.success ? navigate('/') : null);
  }

  
  if(isLogin) {
    return (
    <StyleBody>
      <StyledForm onSubmit={handleRegister}>
        <input type="text" name="username" required/>
        <input type="password" name="password" id="" required/>
        <StyleButton type="submit" >Login</StyleButton>
        <StyleButton onClick={() => toggleLogin(false)}>Go to Sign Up</StyleButton>
      </StyledForm>
    </StyleBody>
    )
} else {
  return (
    <StyleBody>
      <StyledForm onSubmit={handleRegister}>
          <input type="text" name="username" required/>
          <input type="password" name="password" id="" required/>
          <StyleButton type="submit">Sign Up</StyleButton>
          <StyleButton onClick={() => toggleLogin(true)}>Go to Log in</StyleButton>
        </StyledForm>
    </StyleBody>
    )
  }
};

const StyleBody = styled.body`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;

const StyleButton = styled.button`

`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
margin-top:100px;
width: 25%;
border: 1px solid black;
border-radius: 5px;
backgorund-color: grey;
`

export default Login;
