import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router";
import { login } from "../../components/Requests";
import { useUnprotectedPage } from "../../hooks/useProtectedPage";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useContext} from "react";
import { CircularProgress } from "@mui/material";
import { Text } from "./Styled-login";
import GlobalStateContext from "../../global/GlobalStateContext";

const LoginForm = () => {
  useUnprotectedPage()
  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: '', password: '' })
  const { loading, setLoading, showPassWord, setPassWord } = useContext(GlobalStateContext)

  const submitForm = (e) => {
    e.preventDefault();
    login(form, clear, history, setLoading);
  }

  const handleClickShowPassword = () => {
    setPassWord(!showPassWord);
  };
  return (
    <div>
      <Text>Bem vindo de volta</Text>
      <form onSubmit={submitForm}>
        <TextField
          required
          name='email'
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          variant={'outlined'}
          type='email'
          label={'Email'}
          margin={'normal'}
          fullWidth
        />
        <TextField
          fullWidth
          required
          name='password'
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          variant={'outlined'}
          type={!showPassWord ? "password" : "text"}
          label={'Senha'}
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
        >{loading ? <CircularProgress size={24} /> : <>Entrar</>} </Button>
      </form>
    </div>

  )

}

export default LoginForm;