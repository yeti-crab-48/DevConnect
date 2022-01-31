import React from 'react'
import { 
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import PostForm from './containers/PostForm';
import { connect } from 'react-redux';
import * as action from './actions/actions';

const mapStateToProps = (state) => ({
  isAuthenticated: state.posts.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  auth: (bool) => dispatch(action.setAuthAction(bool))
})


const App = (props) => {
  /*----- authentication check ------*/
  fetch('/api/user/auth')
    .then(res => res.json())
    .then(persist => {
      console.log(persist);
      if(persist.success){
         props.auth((persist.success));
        navigate('/')
        window.open('/');
        // window.location.href = '/';
      } else {
        props.auth(false)
      }
      if(persist.error) {
        console.log('render err', persist.error);
      }
    }).catch(err => console.log(err))
  /*-----------------------------------*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Login/>}></Route>
        <Route path='/form' element={<PostForm/>}></Route>
        {/*404 page: <Route path='*' ></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

// export default App; 
export default connect(mapStateToProps, mapDispatchToProps)(App);
