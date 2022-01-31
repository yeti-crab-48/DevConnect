import React from 'react';
import { popUp } from '../../server/controllers/listingsController';

const PostPopup = ({ postId }) => {
  
  // declare state element to hold the object returned from useEffect GET request 
  // const [popupBody, setPopupBody] = useState({
  //   contactInfo: '', 
  //   title: '', 
  //   description: '', 
  //   skills: ''
  // });
  
  // api endpoint is /api/listings:id
  // useEffect(() => {
    
  //   fetch(`/api/listings:${postId}`, {
  //     method: 'GET',
  //     header: {'Content-Type': 'application/json'}
  //   })
  //     .then((data) => data.json())
  //     .then((popup) => {
  //       const newState = {}
  //       newState.contactInfo = popup.contactInfo;
  //       newState.title = popup.title;
  //       newState.description = popup.description;
  //       newState.skills = popup.skills;

  //       setPopupBody(newState);

  //     })
  // }, [])


  return (
    <div>
      <div>Contact Info</div>
      <div>{popupBody.contactInfo}</div>
      <div>Title</div>
      <div>{popupBody.title}</div>
      <div>Description</div>
      <div>{popupBody.description}</div>
      <div>Skils</div>
      <div>{popupBody.skills}</div>
    </div>
  );

};

export default PostPopup;
