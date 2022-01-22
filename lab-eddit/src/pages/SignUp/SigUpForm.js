import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router";
import { signUp } from "../../components/Requests";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useContext} from "react";
import { CircularProgress } from "@mui/material";
import { Text } from "../LoginPage/Styled-login";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useUnprotectedPage } from "../../hooks/useProtectedPage";

const SignUpForm = () => {
  useUnprotectedPage()
  const history = useHistory()
  const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
  const { showPassWord, setPassWord, loading, setLoading } = useContext(GlobalStateContext);

  const submitForm = (e) => {
    e.preventDefault();
    signUp(form, clear, history, setLoading)
  }
  const handleClickShowPassword = () => {
    setPassWord(!showPassWord);
  };
  return (
    <div>
      <Text>Crie uma nova conta</Text>
      <form onSubmit={submitForm}>
        <TextField
          required
          name='username'
          value={form.username}
          onChange={onChange}
          placeholder="Nome de usuário"
          variant={'outlined'}
          type='text'
          label={'Nome'}
          fullWidth
          margin={'normal'}
        />
        <TextField
          fullWidth
          required
          name='email'
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          variant={'outlined'}
          type='email'
          label={'Email'}
          margin={'normal'}
        />
        <TextField
          required
          name='password'
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          variant={'outlined'}
          type={!showPassWord ? "password" : "text"}
          label={'Senha'}
          fullWidth
          margin={'normal'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleClickShowPassword}
                >
                  {showPassWord ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          type="submit"
          variant={'contained'}
          aria-label='add'
          fullWidth
          size='medium'
          color='secondary'
        >{loading ? <CircularProgress size={24} /> : <>cadastrar-se </>} </Button>
      </form>
    </div>
  )
}
export default SignUpForm;