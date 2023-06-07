import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProfilePicture from './../ProfilePicture/ProfilePicture';


const SearchResult = ({ data }) => {
  
  return (
    <Card sx={{ maxWidth: 300,maxHeight:490 , position: 'relative' }}>
      <ProfilePicture imageId={data.image_id} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', textAlign: 'center' }}>{data.denomination}</span>
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span
              style={{
                backgroundColor: 'orange',
                color: 'white',
                marginRight:'-20px',
                padding: '4px 10px',
                borderRadius: '4px',
                
              }}
            >
              &#9733; {data.stars_count}
            </span>
          </div>
          <span style={{ fontWeight: 'bold' }}>Specialized in:</span> <br />
          {data.specialities.map((result) => (
            <span>{result} / </span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchResult;
