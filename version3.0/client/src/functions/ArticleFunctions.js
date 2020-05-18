import axios from 'axios';

export const getArticle = article => {
    return axios.get('/getArticles')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}