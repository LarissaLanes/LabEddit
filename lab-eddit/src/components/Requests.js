import axios from "axios";
import {url_base} from "../constants/urls/URL";
import { goToFeed } from "../rotes/Coordinator";
import swal from "sweetalert"

   export const login = (body, clear, history, setLoading) => {
     setLoading(true)
      axios.post(`${url_base}/users/login`, body)
      .then((res) => {  
        localStorage.setItem("token", res.data.token)
        clear()
        setLoading(false)
        goToFeed(history)
        swal({
          title: "Bem vindo!",
          text: "Você está logado!",
          icon: "success",
        });
      })
      .catch((err) => {
        setLoading(false)
        swal({
          title: "Houve um erro!",
          text: 'tente novamente',
          icon: "error",
        });
      })
    }

    export const signUp = (body, clear, history, setLoading) => {
      setLoading(true)
      axios.post(`${url_base}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setLoading(false)
        swal({
          title: "Cadastro realizado com sucesso",
          text: "Aproveite!",
          icon: "success",
        });
        goToFeed(history)
      })
      .catch((err) => {
        setLoading(false)
        swal({
          title: "Houve um erro!",
          text: 'tente novamente',
          icon: "error",
        });
      })
    }

    export const createPost = (body, clear) => {
      axios.post(`${url_base}/posts`, body, {
          headers: {
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
        alert("Post Criado com sucesso")
        clear()
        
      })
      .catch((err) => {
       
      })
    }

    export const createCommit = (body, params, clear) => {
      axios.post(`${url_base}/posts/${params.id}/comments`, body,{
          headers:{
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
          alert(res.data)
          clear()
      }).catch((err) => {
     
      })
  }

  