import fifth1 from "../assets/fifth1.svg";
import fifth2 from "../assets/fifth2.svg";
import fifth3 from "../assets/fifth3.svg";
import fifth4 from "../assets/fifth4.svg";
import fifth5 from "../assets/fifth5.svg";
import fifth7 from "../assets/fifth7.svg";
import fifth8 from "../assets/fifth8.svg";
import fifth9 from "../assets/fifth9.svg";
import fifth10 from "../assets/fifth10.svg";

let x=0;
const arr1 =[
    {
        image:fifth1,
        heading:"Top Brass Tactical",
        iconversion:"+85%",
        irevenue:"+58%",
        iaov:"+6%"
    },
    {
        image:fifth2,
        heading:"Sights & Scopes",
        iconversion:"+30%",
        irevenue:"+28%",
        iaov:"+20%"
    },
    {
        image:fifth5,
        heading:"Kick-eez",
        iconversion:"+69%",
        irevenue:"+52%",
        iaov:"+6%"
    },
    {
        image:fifth4,
        heading:"Black Rhino Concealment",
        iconversion:"+79%",
        irevenue:"+22%",
        iaov:"+20%"
    },
    {
        image:fifth3,
        heading:"2nd Amendment Armory",
        iconversion:"+143%",
        irevenue:"+103%",
        iaov:"+453%"
    }
]

export default function display(index){
    x=index;
    document.getElementById("fifthsection-bottom-left-photo").src = arr1[index].image;
    document.getElementById("fifthsection-bottom-right-topheading").innerText = arr1[index].heading;
    document.getElementById("fifthsection-bottom-right-content-number1").innerText = arr1[index].iconversion;
    document.getElementById("fifthsection-bottom-right-content-number2").innerText = arr1[index].irevenue;
    document.getElementById("fifthsection-bottom-right-content-number3").innerText = arr1[index].iaov;
}

export function right(){
    x++;
    if(x >= arr1.length){
        x = 0;
    }
    display(x);
}


export function left(){
    x--;
    if(x < 0){
        x = arr1.length - 1;
    }
    display(x);
}

