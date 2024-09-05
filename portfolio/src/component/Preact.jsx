import ZikoUI from "ziko-wrapper/preact";
import {text} from "ziko"
export default function Preact({content = "Hello "}){
    return (
        <ZikoUI ui={text(content)}/>
    )
}