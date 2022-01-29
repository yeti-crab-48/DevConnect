import React, { useEffect, useState } from "react";


const mapStateToProps = (state) =>({
//Provide pertenant state here
});

const mapDispatchToProps = (dispatch) =>({
//provide dispatch here
getPost: (postID) => {dispatch(actions.getPostActionCreator(postID))},
addPost: (postID) => {dispatch(actions.addPostActionCreator(postID))},
});

const Home = () => {

  return (
    <div>
      Hello this is home 
    </div>
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);