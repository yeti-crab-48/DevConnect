import React from 'react'
import { 
  BrowserRouter, 
  Link, 
  Routes, 
  Route
} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import PostForm from './containers/PostForm';



const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Login/>}></Route>
        <Route path='/form' element={<PostForm/>}></Route>
      </Routes>
      {/* <h1 style={{color: 'blue', textAlign: 'center'}}>Let's Go Team Yeti Crab!!</h1>
      <img style={{display:'block', margin: '0 auto'}} src='https://orig00.deviantart.net/9676/f/2009/247/6/1/yeti_crab_by_chaoskomori.jpg'/> */}
    </BrowserRouter>
  )
}

export default App; 

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