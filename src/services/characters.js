import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';
async function getAllCharacters(page = 1) {
    try {
        const response =await axios.get(`${baseUrl}/character/?page=${page}`);
        const data = await response.data;
        return data;
        
    } catch (error) {
        console.log('error:', error);
    } 
}
async function getCharacterBySpecie(specie){
    try {
        const response =await axios.get(`${baseUrl}/character/?species=${specie}`);
        const data = await response.data;
        return data;
        
    } catch (error) {
        console.log('error:', error);
    }
}
export{
    getAllCharacters,
    getCharacterBySpecie
}