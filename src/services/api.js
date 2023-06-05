//const fetch = require('node-fetch');
const generateSignature = require('./generateSignature');

const BASE_URL = 'https://api.uprodit.com';
const APP_ID = 'challenge_uprodit';
const ENVIRONMENT = 'production';
const USE_CASE = 'perso';

export const searchAll = async (terms) => {
    console.log('terms = ',terms)
    if(terms==null){
        terms=''
      }
  try {
    const signature = generateSignature(APP_ID, ENVIRONMENT, `${BASE_URL}/v1/search/all?startIndex=0&maxResults=50&usecase=${USE_CASE}&terms=${terms}`);
  const response = await fetch(`${BASE_URL}/v1/search/all?startIndex=0&maxResults=50&usecase=${USE_CASE}&terms=${terms}`, {
      headers: {
        Authorization: signature
      }
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};


export const getProfilePicture = async (id) => {
    try {
      const signature = generateSignature(APP_ID, ENVIRONMENT, `${BASE_URL}/v2/profile/picture/f/${id}`);
      const response = await fetch(`${BASE_URL}/v2/profile/picture/f/${id}`, {
        headers: {
          Authorization: signature
        }
      });
      const data = await response.json(); // Read response as text
    //  console.log('getProfilePicture = ', data.b64Content);
      if(data.b64Content==null){
        return null
      }
      return `data:image/png;base64,${data.b64Content}`; // Return Base64 data
    } catch (error) {
      console.error('Error fetching profile picture:', error);
      return '';
    }
  };



