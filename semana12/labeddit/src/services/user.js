import axios from 'axios';
import { BASE_URL } from '../constants/apiConstants';
import { goToFeedPage } from '../routes/coordinator';

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    }).catch(error => {
        console.log(error.message)
        alert("Nome de usuário ou senha incorretos")
    })
}

export const registration = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    }).catch(error => {
        console.log(error.message)
    })
}

export const createPost = (body, history) => {
    const token = localStorage.getItem("token");
    axios
      .post(`${BaseUrl}/posts`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        goToFeedPage(history);
      })
      .catch((erro) => {
        console.log(erro.mensage);
      });
  };