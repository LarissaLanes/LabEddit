import Lottie from "react-lottie";
import { defaultOptions, defaultOptions2, defaultOptions3, defaultOptions4 } from "../animation/DefaultOptions";
import { Image, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Div10, Div11, Div12 } from "../../pages/LoginPage/Styled-login";

const ArtPage = () => {
    return(
        <div>
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
        </div>
    )
}
export default ArtPage;