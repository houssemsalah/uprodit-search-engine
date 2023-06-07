import React, { useEffect, useState } from 'react';
import {getProfilePicture} from '../../services/api'
import DefaultPicture from '../../assets/user.svg'
const ProfilePicture = ({ imageId }) => {
    
  const [picture, setPicture] = useState();

    useEffect(() => {

        const getPicture = async () => {
          try {
            const pic = await getProfilePicture(imageId);
            setPicture(pic)
           console.log("get pic")
          } catch (error) {
            console.error('Error fetching picture results:', error);
          
          }
        }; 
            getPicture();
        },[imageId]);
  return (
    <div  style={{display:'flex',justifyContent:'center'}}>
        {
       
            <img src={picture||DefaultPicture} alt="" style={{ width: '350px', height: '300px', objectFit: 'cover',borderRadius:"5px" }} />
      
            
      }
    </div>
  );
};

export default ProfilePicture;
