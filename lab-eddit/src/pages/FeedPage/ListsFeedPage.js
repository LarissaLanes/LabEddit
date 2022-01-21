import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useRequestData from '../../hooks/useRequestData';
import { url_base } from '../../constants/urls/URL';
import { goToCommit } from '../../rotes/Coordinator';
import { useHistory, useParams } from 'react-router';
// import Loading from "../../components/loading"
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import axios from 'axios';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// import { useEffect } from 'react';
import {DivListPost} from "./Styled-Feed"


const RecipeReviewCard = () =>  {
  const getPosts = useRequestData([], `${url_base}/posts`)
  const history = useHistory()


  const createPostVote = (posts) => {
    const body = {
        direction: 1,
    };
    axios.post(`${url_base}/posts/${posts.id}/votes`, body, 
    {
      headers:{
        Authorization: localStorage.getItem('token')
      },
    })
      .then((res) => {
        console.log(res.data)
        alert(`Você votou +1 no post de ${posts.username}`)
      })
      .catch((err) => {
        console.log(err.data)
      })
  }

  const changePostVote = (posts) => {
    const body = {
      direction: -1,
    }
    axios.put(`${url_base}/posts/${posts.id}/votes`, body,{
      headers:{
        Authorization: localStorage.getItem('token')
      },
    })
    .then((res) => {
      alert(`Você votou -1 no post de ${posts.username}`)
      console.log(res.data)
      

    })
    .catch((err) => {
      console.log(err.data)

    })
  }

  const deletePostVote = (posts) => {
    axios.delete(`${url_base}/posts/${posts.id}/votes`, {
      headers:{
        Authorization: localStorage.getItem('token')
      },
    })
    .then((res) => {
      alert(`Você tirou o seu voto do post de ${posts.username}`)
      console.log(res.data)
      
    })
    .catch((err) => {
    console.log(err.data)
    
    })
  }

  var corlorRandom = () => {
    return "#" + Math.floor(Math.random() * 16777215 ).toString(16);
  };

  const onClickCard = (id) => {
    goToCommit(history, id);
  };

  const getPostPeoples = getPosts.map((posts) => {
    const userFirstLetter = () => {
      const firstLetter = posts.username && posts.username.substr(0, 1);
      return posts.username && firstLetter.toUpperCase();
    };
      return(
        <DivListPost>
          <Card key={posts.id } sx={{ maxWidth: 900 }} >
            <CardHeader
             avatar={
               <Avatar sx={{ bgcolor: corlorRandom() }} aria-label="recipe">{userFirstLetter()}</Avatar>
             }
             title={posts.username}
             subheader={posts.createdAt}
               />
               <Typography margin={'20px'} variant="body2" color="text.secondary">
                   <h3>{posts.title}</h3>
                    {posts.body}
                 </Typography>
                 <CardActions >
                 <IconButton aria-label="add to favorites" margin-left={'10px'} onClick={() => changePostVote(posts)} >
               <ArrowDownwardOutlinedIcon color='error' />
              </IconButton>
              {posts.voteSum}
                 <IconButton aria-label="share" onClick={() => createPostVote(posts)}>
                   <ArrowUpwardOutlinedIcon color='secondary' />
                  </IconButton>
                
                  <IconButton aria-label="commits" onClick={() => onClickCard(posts.id)}>
                   <QuestionAnswerOutlinedIcon color='secondary'/> 
                   {posts.commentCount === '1' ? (<>{posts.commentCount}</>) : ('0')}
                  </IconButton>
                  
                 </CardActions>
          </Card>
          </DivListPost>
      )
  })
 
  return (
    <div>
       {getPostPeoples} 
    </div>
 
   )
}

export default RecipeReviewCard;


