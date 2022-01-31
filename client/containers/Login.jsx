import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

// State management 
const mapStateToProps = (state) => ({
  verified: state.posts.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: (bool) => dispatch(action.setAuthAction(bool))
})
// 


// Login Component
const Login = (props) => {
  const navigate = useNavigate()
  const [isLogin, toggleLogin] = useState(true)
  
  const handleRegister = (e) => {
    e.preventDefault(); //prevents the page from reloading

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
      .then(verified => {
        console.log(verified);
        if(verified.success === true) {
          props.authenticate(true);
          navigate('/');
        }
      });
  }

  if(isLogin) {
    return (
    <StyleBody>
      <Image src='https://ctl.s6img.com/society6/img/wtsueCje5P7V1PfmBkZAvRbncac/w_700/prints/~artwork/s6-0034/a/16184776_15232469/~~/yeti-crab-prints.jpg?wait=0&attempt=0'/>
      <StyledForm onSubmit={handleRegister}>
          <StyleH3> Login Page </StyleH3>
        <StyledDiv>
          <StyledLabel>Username:</StyledLabel>
          <input type="text" name="username" required placeholder='username'/>
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>Password:</StyledLabel>
          <input type="password" name="password" id="" required placeholder='password'/>
        </StyledDiv>
        <StyleMainButton type="submit" >Login</StyleMainButton>
        <StyledP>Not a member?
        <StyleButton onClick={() => toggleLogin(false)}>Sign Up</StyleButton>
        </StyledP>
      </StyledForm>
    </StyleBody>
    )
} else {
  return (
    <StyleBody>
      <StyledForm onSubmit={handleRegister}>
        <StyleH3> Sign Up Page </StyleH3>
        <StyledDiv>
        <StyledLabel>Username:</StyledLabel>
          <StyledInput type="text" name="username" required placeholder='username'/>
          </StyledDiv>
          <StyledDiv>
          <StyledLabel>Password:</StyledLabel>
          <StyledInput type="password" name="password" id="" required placeholder='password'/>
          </StyledDiv>
          <StyleMainButton type="submit">Sign Up</StyleMainButton>
          <StyledP>Already a member?     
        <StyleButton onClick={() => toggleLogin(true)}>Login</StyleButton>
        </StyledP>
      </StyledForm>
      <Image src='https://ctl.s6img.com/society6/img/wtsueCje5P7V1PfmBkZAvRbncac/w_700/prints/~artwork/s6-0034/a/16184776_15232469/~~/yeti-crab-prints.jpg?wait=0&attempt=0'/>
    </StyleBody>
    )
  }
};


// Styled components
const Image = styled.img`
  width: 500px;
`;


const StyleBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 88%;
  background-color: rgba(5, 65, 255, 0.52);
`;

const StyleMainButton = styled.button`
  margin:10px;
  width: 20%;
  align-self: center;
  padding: 5px 10px;
  background-color:rgba(43, 97, 234, 0.8);
  border: 1px solid rgba(24, 63, 161, 0.92);
  color: white;
  border-radius: 5px;
  &:hover{
    background-color:rgba(71, 243, 144, 0.78);
    border: 1px solid rgba(71, 243, 144, 0.47);
    color: black;
    cursor: pointer;
  };
`
const StyleButton = styled.button`
  margin: 10px;
  align-self: flex-start;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(0, 59, 209, 0.8);
  border: 1px solid rgba(24, 63, 161, 0.92);
  color: white;
  &:hover{
    background-color:rgba(71, 234, 243, 0.79);
    border: 1px solid rgba(71, 213, 243, 0.79);
    color: black;
    cursor: pointer;
  };
`

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin:100px 100px 0;
  width: 25%;
  border: 1px solid rgba(24, 63, 161, 0.3);
  border-radius: 5px;
  padding: 15px;
  background-color: rgba(71, 120, 243, 0.75);
`;

const StyledLabel = styled.label`
  padding:5px 10px ;
  font-family: sans-serif;
`;

const StyledDiv = styled.div`
  margin: 10px 0px;
`;

const StyledP = styled.p`
  align-self: flex-end;
`;

const StyledInput = styled.input`
  border-radius: 5px ;
  border: 0.5px solid grey;
`;
const StyleH3 = styled.h3`
  font-family: sans-serif;
  font-size: 20px;
`;

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);

