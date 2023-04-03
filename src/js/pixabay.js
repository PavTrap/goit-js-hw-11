import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";

export class searchQuery {
   
   static page = 1;
   static image_type = "photo";
   static key = '34955706-ef799ceae77e48745377abfe9';
   static query = '';
   static orientation ='horizontal';
   static safesearch = 'true';
   static per_page = 40;
   static maxPage = 13;

   static async searchPictures(query = '') {
    if(query.trim()) searchQuery.query = query;

    
   const config = {
        params: {
            key: searchQuery.key,
            q: searchQuery.query,
            image_type: searchQuery.image_type,
            orientation: searchQuery.orientation,
            safesearch: searchQuery.safesearch,
            per_page: searchQuery.per_page,
            page: searchQuery.page,
            maxPage: searchQuery.maxPage,
        }
       }

       const response = await axios.get(`${BASE_URL}`, config);
       return response.data;
   }

};
