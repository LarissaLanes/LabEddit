import { createTheme } from "@material-ui/core/styles"
import {ColorOne, ColorTwo, TextColor, NeutralColor} from "../colors/Colors"

const Theme = createTheme ({
    palette: {
        primary: {
            main:ColorOne,
            text:TextColor,
        },
        secondary:{
            main:ColorTwo,
            text:TextColor,        
        },
        text:{
            primary:NeutralColor,
        }
    },

})

export default Theme;