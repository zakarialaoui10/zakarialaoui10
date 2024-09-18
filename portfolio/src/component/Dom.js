export default function Dom(){
    if(typeof document !== undefined){
        let ele=document.createElement("div")
        ele.innerText = "DOM"
        return ele
    }
}

