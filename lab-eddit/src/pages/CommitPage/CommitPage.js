import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, InputComments,Posts, PostsLists } from "./CommitPage-styled";
import { goToFeed } from "../../rotes/Coordinator";
import { useHistory, useParams } from "react-router";
import useRequestData from "../../hooks/useRequestData"
import { url_base } from "../../constants/urls/URL";
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createCommit } from "../../components/Requests";
import axios from 'axios';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";

const CommitPage = () => {
    useProtectedPage()

    const history = useHistory()
    const params = useParams()
    const commits = useRequestData([], `${url_base}/posts/${params.id}/comments`)
    const [form, onChange, clear] = useForm({body: ''})
    console.log(commits)
    
    var corlorRandom = () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    const onSubmitFormComments = (e) => {
      e.preventDefault()
      createCommit(form, params, clear)
    }

  const createPostVote = (commits) => {
    const body = {
        direction: 1,
    };
    axios.post(`${url_base}/comments/${commits.id}/votes`, body, 
    {
      headers:{
        Authorization: localStorage.getItem('token')
      },
    })
      .then((res) => {
        console.log(res.data)
        alert(`Você votou +1 no cometário de ${commits.username}`)
      })
      .catch((err) => {
        console.log(err.data)

      })
  }
  
  const changePostVote = (commits) => {
    const body = {
      direction: -1,
    }
    axios.put(`${url_base}/comments/${commits.id}/votes`, body,{
      headers:{
        Authorization: localStorage.getItem('token')
      },
    })
    .then((res) => {
      alert(`Você votou -1 no cometário de ${commits.username}`)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.data)

    })
  }

  const deletePostVote = (commits) => {
    const body = {
      direction: 0,
    }
    axios.delete(`${url_base}/comments/${commits.id}/votes`, body, {
      headers:{
        Authorization: localStorage.getItem('token')
      },
    })
    .then((res) => {
      alert(`Você tirou o seu voto do cometário de ${commits.username}`)
      console.log(res.data)
    })
    .catch((err) => {
    console.log(err.data)
    })
  }
    const getPostComments = commits && commits.map((commits) => {
        const userFirstLetter = () => {
            const firstLetter = commits.username && commits.username.substr(0, 1);
            return commits.username && firstLetter.toUpperCase();
          };
        return(
          <PostsLists>
          <Card key={commits.id } sx={{ maxWidth: 900 }}>
              <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: corlorRandom() }} aria-label="recipe">{userFirstLetter()}</Avatar>
              }
              title={commits.username}
              subheader={commits.createdAt}
              /> 
              <Typography margin={'20px'} variant="body2" color="text.secondary">
              <h3>{commits.body}</h3>
              </Typography>
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" margin-left={'10px'} onClick={() => changePostVote(commits) } >
               <ArrowDownwardOutlinedIcon color='error' />
              </IconButton>
              {commits.voteSum}
                 <IconButton aria-label="share" onClick={() => createPostVote(commits)}>
                   <ArrowUpwardOutlinedIcon color='primary' />
                  </IconButton>
              </CardActions>
          </Card>
          </PostsLists>
        )
    })
    return(
        <DivFeed>
        <Posts>
            <div>
            <IconButton aria-label="share"  onClick={() => goToFeed(history)}>
                   <ArrowBackOutlinedIcon color='primary' />
                  </IconButton>
            </div>
            <InputComments>
            <h3>comentários </h3> 
                <form onSubmit={onSubmitFormComments}>
                <TextField
                placeholder={'Faça um comentario'}
                variant={'outlined'}
                type='text'
                name='body'
                value={form.body}
                onChange={onChange}
                fullWidth
                />
            < Button
                  type="submit"
                variant={'contained'}
                aria-label='add'
                fullWidth
                size='medium'
                color="secondary"
                >Comentar</Button>
                </form>
            </InputComments>
            <div>
             {getPostComments}
            </div>
        </Posts>
</DivFeed>
    )
}

export default CommitPage;