import axios from 'axios';

// // 1.
// const baseURL = 'https://rickandmortyapi.com/api/';

// export const characterFetch = () => {
//     return axios.get(`${baseURL}character`)
// }


// 2.
const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
});

export const usersFetch = (numberPage = 1, userName = '', userGender = '', species = '') => {
    return instance.get(`character/?page=${numberPage}&name=${userName}&gender=${userGender}&species=${species}`)
}

export const userFetch = (id) => {
    return instance.get(`character/${id}`)
}

// export const characterFetch = (page, species, status, gender) => {
//   return instance.get(`character?page=${page}&species=${species}&status=${status}&gender=${gender}`)
// }

// export const episodeFetch = (page, name, episode) => {
//   return instance.get(`episode?page=${page}&name=${name}&episode=${episode}`)
// }

// export const locationFetch = (page, name, type, dimension) => {
//   return instance.get(`location?page=${page}&name=${name}&type=${type}&dimension=${dimension}`)
// }