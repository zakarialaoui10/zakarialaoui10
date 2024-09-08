import { useZiko } from "ziko-wrapper/astro";
import { text } from "ziko"
export default function UI({text1= "Hello from zikojs" , text2= "Hello from zikojs"}){
    useZiko(
        text(text1),
        text(text2)
    )
}