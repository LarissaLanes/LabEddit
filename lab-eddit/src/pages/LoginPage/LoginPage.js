import { DivLogin, DivHandleInput } from "./Styled-login";
import LoginForm from "./LoginForm";
import Lottie from "react-lottie";
import { useState } from "react";
import SignUpForm from "../SignUp/SigUpForm";
import { Button } from "@material-ui/core";
import { defaultOptions } from "../../components/animation/DefaultOptions";
import ArtPage from "../../components/artsPage/ArtPage";

const LoginPage = () => {
    const [inicialState, setInicialState] = useState(true)

    const handleClickFalse = () => {
        setInicialState(false);
    };

    const handleClickTrue = () => {
        setInicialState(true);
    };

    return (
        <DivLogin>
            <ArtPage />
            <DivHandleInput>
                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
                <div>
                    <Button
                        onClick={handleClickTrue}
                        variant={'text'}
                        size='medium'
                        color='text'
                    >
                        Login
                    </Button>
                    <Button
                        onClick={handleClickFalse}
                        variant={'text'}
                        size='medium'
                        color='text'
                    >
                        Cadastre-se
                    </Button>
                </div>
                <div>
                    {inicialState ? (<LoginForm />) : (<SignUpForm />)}
                </div>
            </DivHandleInput>
        </DivLogin>
    )
}
export default LoginPage;