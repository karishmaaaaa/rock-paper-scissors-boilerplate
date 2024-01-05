var first_score=document.getElementById("result1")
var second_score=document.getElementById("result2")
var player_hand=document.getElementById("PlayerHand")
var computer_hand=document.getElementById("compHand")
var temp=document.getElementById("temp")
var result = document.getElementById("result")
var buttons=document.getElementById("button")
var player_index=0
var randIndex=0
var teamPlayer=0
var teamComputer=0
hands=["./assets/rock-hand.png","./assets/paper-hand.png","./assets/scissors-hand.png"]

function rand(){

    randIndex=Math.floor(Math.random()*3)
    console.log(randIndex)
    return randIndex
}

function adder(index){
    player_index=index
    player_hand.removeAttribute("src")
    player_hand.setAttribute("src",`${hands[index]}`)
    computer_hand.removeAttribute("src")
    computer_hand.setAttribute("src",`${hands[rand()]}`)
    checker()
    ender()
    

}
function checker(){
    let tick
    tick=player_index-randIndex
    if (tick==1){
        teamPlayer+=1
    }else if(tick==-1){
        teamComputer+=1
    }else if(tick==-2){
        teamPlayer+=1
    }else if(tick==2){
        teamComputer+=1
    }
    console.log(tick)
    result1.textContent=teamPlayer
    result2.textContent=teamComputer

    
}
function ender(){
    if (teamComputer==5 || teamPlayer==5){
        temp.style.visibility="visible"
        buttons.style.visibility="hidden"
        if(teamComputer>teamPlayer){
            result.textContent="computer Wins"
        }else{
            result.textContent="Players Wins"
        }
    }
    
    
}