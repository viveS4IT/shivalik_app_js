import axios from 'axios';

let apiUrl = process.env.REACT_APP_API_URL;
if (process.env.REACT_APP_NODE_ENV === 'development') {
  apiUrl = process.env.REACT_APP_LOCAL_API_URL;
}


export const getProperties = async () => {
  try {
    const response = await axios.get(`${apiUrl}get_properties`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};

export const getPropertyBySlug = async (slug) => {
  try {
    console.log("slug_api", slug);
    const response = await axios.get(`${apiUrl}get_property_by_slug/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching property by slug:', error);
    return [];
  }
};

export default axios;
