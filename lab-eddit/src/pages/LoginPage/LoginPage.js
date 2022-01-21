import { DivLogin, Image, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Div10, Div11, Div12, DivHandleInput} from "./Styled-login";
import LoginForm from "./LoginForm";
import Lottie from "react-lottie";
import AnimationOne from "../../components/animation/Animation.json"
import Animation2 from "../../components/animation/Animation2.json"
import Animation3 from "../../components/animation/Animation3.json"
import Animation4 from "../../components/animation/Animation4.json"
import { useState } from "react";
import SignUpForm from "../SignUp/SigUpForm";
import { Button } from "@material-ui/core";

const LoginPage = () => {
    const [inicialState, setInicialState] = useState(true)

    const handleClickFalse = () => {
        setInicialState(false);
      };

    const handleClickTrue = () => {
        setInicialState(true);
      };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: Animation2,
        rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: Animation3,
        rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: Animation4,
        rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
        }
    };
    return(
        <DivLogin>
            <Image>
                <Div1>
                <Lottie
                  options={defaultOptions2}
                  height={200}
                  width={200}
              />
                </Div1>
                <Div2></Div2>
                <Div3>
                <Lottie
                  options={defaultOptions4}
                  height={200}
                  width={200}
              />
                </Div3>
                <Div4></Div4>
                <Div5></Div5>
                <Div6></Div6>
                <Div7></Div7>
                <Div8>
                <Lottie
                  options={defaultOptions}
                  height={200}
                  width={200}
              />
                </Div8>
                <Div9></Div9>
                <Div10>
                    <h3>LabEddit</h3>
                </Div10>
                <Div11></Div11>
                <Div12>
                <Lottie
                options={defaultOptions3}
                height={200}
                width={200}
                />
              </Div12>
            </Image>
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
                {inicialState ? ( <LoginForm/>) : (<SignUpForm/>)} 
            </div>
            </DivHandleInput>
    </DivLogin>
    )
}
export default LoginPage;