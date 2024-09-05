import ZikoUI from "ziko-wrapper/preact";
import {text,Collapsible} from "ziko"
export default function Preact({qst = "What is ",rep = "... is"}){
    let ui = Collapsible(
        text(qst),
        text(rep),
        "+",
        "-"
    )
    return (
        <ZikoUI ui={ui}/>
    )
}