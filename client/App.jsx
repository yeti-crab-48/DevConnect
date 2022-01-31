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


/**
 * User Story: When I load Home, I want to see the posts in my feed
 * 
 * Create dummy json file with Posts data 
 * Add mapDispatchToProps to the Home component with the GET_POST action creator 
 * On Home component mount, call GET_POST action creator 
 * Define the action type in postReducer -> get request to json file, update state  
 * Define our GET_POST action creator in actions.js  
 * Add mapState to Props to the Home component 
 * Render mapStateToProps to Home page -> render the posts 
 * 
 * 
 * 
 */