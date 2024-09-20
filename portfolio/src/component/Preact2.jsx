import Wrapper from "./Wrapper";
import Text from "./Text";
import {text,Collapsible} from "ziko"

const FAQ=()=>{
    return Collapsible(
        text("hhh"),
        text("kdkdk")
    )
}

export default function UI(){
    return(
        <Wrapper>
            <Text />
            <Text />
            <FAQ />
        </Wrapper>
    )
}