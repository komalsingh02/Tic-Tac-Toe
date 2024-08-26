let boxes= document.querySelectorAll(".box");
let msgcontainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new-btn");
let resetBtn=document.querySelector("#reset");

let turn0=true;
let count=0;
const winnigPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const new_game=()=>{
    console.log("new game is called");
    turn0=true;
    enable_button();
    msgcontainer.classList.add("hide");
    count = 0;
}


const enable_button=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";

    }

}


const disable_button=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}



const showWinner=(winner)=>
    {
        msg.innerText=`Winner of the game is ${winner}`;
        msgcontainer.classList.remove("hide");
        disable_button();
    }

 const tie=()=>
{
            msg.innerText=`There is a tie`;
            msgcontainer.classList.remove("hide");
            disable_button();
}

boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turn0)
        {
            val.innerText="O";
            val.style.color="green";
            turn0=false;
        }
        else{
            val.innerText="X";
            val.style.color="darkred"
            turn0=true;
        }
        val.disabled=true;
        count++;
        winner();
    })
})

const winner=()=>{
    for( let pattern of winnigPattern)
    {
        // console.log(pattern);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pattern0=boxes[pattern[0]].innerText;
        let pattern1=boxes[pattern[1]].innerText;
        let pattern2=boxes[pattern[2]].innerText
        if(pattern0!="" && pattern1!="" && pattern2!="" )
        {
            if(pattern0===pattern1 && pattern1 ===pattern2)
            {
                console.log("winner",pattern0);
                showWinner(pattern0);
            }
            
        }
        if(count===9)
            { console.log("this is tie"); 
                tie();


            }
    }
}

newgame.addEventListener("click",new_game);

resetBtn.addEventListener("click",new_game);








