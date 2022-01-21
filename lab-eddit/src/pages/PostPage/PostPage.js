import { Button, TextField } from "@mui/material";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm"
import {createPost} from "../../components/Requests"

const PostPage = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({title: '', body: ''})
    
    const  onSubmitFormPost = (e) => {
        e.preventDefault()
        createPost(form, clear)
    }
    return(
        <div>
            <form onSubmit={onSubmitFormPost}>
        <TextField 
        name='title'
        value={form.title}
        onChange={onChange}
        placeholder="De um titulo para a sua postagem"
        variant={'outlined'}
        border={'none'}
        type='text'
        fullWidth
       />
        <TextField
        name='body'
        value={form.body}
        onChange={onChange}
        placeholder="O que está acontecendo?"
        variant={'outlined'}
        type='text'
        fullWidth/>
           <div>
        <Button
        type="submit"
        variant={'contained'}
        aria-label='add'
        fullWidth
        size='medium'
        color="secondary"
        >Postar </Button>
        </div>
        </form>
    </div>
    )
}
export default PostPage;