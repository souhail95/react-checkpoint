import React from 'react';
import Form1 from './me.jpg';
import {Card,CardImg} from 'react-bootstrap';


const ProfilePhoto = () => {
     return(
     <div>
      <Card >
        <CardImg src={Form1}  alt="its me" style={{width:"300px",height:"260px",borderRadius:"50%"}} />
      </Card>
     </div>
     )
}
export default ProfilePhoto;