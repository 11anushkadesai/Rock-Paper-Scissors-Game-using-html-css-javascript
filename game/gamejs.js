let userscore=0 ;
let comscore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const gencomchoice=()=>
{
    const options=["rock","paper","scissors"];
    const compchoice=Math.floor(Math.random()*3);
    return options[compchoice];
}


const userscorepara=document.querySelector("#user-score")
const comscorepara=document.querySelector("#com-score")
const showwinner =(userwin) =>
{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;

        console.log("You won !");
        msg.innerText="You Won !";
    }
    else{
        comscore++;
        comscorepara.innerText=comscore;
        console.log("You lose !");
        msg.innerText="You lose !";
    }
}
const playgame=(cid)=>
{
    console.log("users choice ",cid);
    const comid=gencomchoice();
    console.log("computer choice ",comid); 
    
    if(cid==comid)
{
    msg.innerText="Game was draw"
}
else{
    let userwin = true ;
        if(cid ==="rock")
        {
            userwin= comid==='paper' ? false :true;
        }
        else if(cid==="paper")
        {
            userwin= comid==='scissors' ? false :true;
        }
        else{
            userwin= comid==='rock' ? false :true;
        }
        showwinner(userwin);
}
}
choices.forEach((choice)=>
{
   choice.addEventListener("click",()=>
   {
       const cid=choice.getAttribute("id");
       playgame(cid);
    }); 
    
});


