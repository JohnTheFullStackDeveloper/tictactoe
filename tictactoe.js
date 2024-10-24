let phn;
console.log(phn)
let a=[0,(document.getElementById(1).innerHTML),
    (document.getElementById(2).innerHTML),
    (document.getElementById(3).innerHTML),
    (document.getElementById(4).innerHTML),
    (document.getElementById(5).innerHTML),
    (document.getElementById(6).innerHTML),
    (document.getElementById(7).innerHTML),
    (document.getElementById(8).innerHTML),
    (document.getElementById(9).innerHTML)]

function colorchange(g1,g2,g3){
    document.getElementById(g1).style.color="blue";
    document.getElementById(g2).style.color="blue";
    document.getElementById(g3).style.color="blue";
}


//let a1=window.alert(document.getElementById(1).innerHTML)


function checkx(){
    
    if(x[1]==1&&x[2]==1&&x[3]==1)
        {
            document.getElementById("winx").innerHTML="x win"
            colorchange(1,2,3)
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[4]==1&&x[5]==1&&x[6]==1)
        {
            colorchange(4,5,6)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[7]==1&&x[8]==1&&x[9]==1)
        {
            colorchange(7,8,9)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[1]==1&&x[5]==1&&x[9]==1)
        {
            colorchange(1,5,9)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[3]==1&&x[5]==1&&x[7]==1)
        {
            colorchange(3,5,7)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[1]==1&&x[4]==1&&x[7]==1)
        {
            colorchange(1,4,7)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[2]==1&&x[5]==1&&x[8]==1)
        {
            colorchange(2,5,8)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(x[3]==1&&x[6]==1&&x[9]==1)
        {
            colorchange(3,6,9)
            document.getElementById("winx").innerHTML="x win"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
        if(x[0]!=1&&a[1]=="x or o"&&a[2]=="x or o"&&a[3]=="x or o"&&a[4]=="x or o"&&a[5]=="x or o"&&a[6]=="x or o"&&a[7]=="x or o"&&a[8]=="x or o"&&a[9]=="x or o"){
            document.getElementById("draw").innerHTML="draw";
        }
}
function checky(){
    if(o[1]==1&&o[2]==1&&o[3]==1)
        {
            colorchange(1,2,3)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[4]==1&&o[5]==1&&o[6]==1)
        {
            colorchange(4,5,6)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[7]==1&&o[8]==1&&o[9]==1)
        {
            colorchange(7,8,9)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[1]==1&&o[5]==1&&o[9]==1)
        {
            colorchange(1,5,9)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[3]==1&&o[5]==1&&o[7]==1)
        {
            colorchange(3,5,7)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[1]==1&&o[4]==1&&o[7]==1)
        {
            colorchange(1,4,7)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[2]==1&&o[5]==1&&o[8]==1)
        {
            colorchange(2,5,8)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
    else if(o[3]==1&&o[6]==1&&o[9]==1)
        {
            colorchange(3,6,9)
            document.getElementById("winx").innerHTML="o win"
            document.getElementById("winx").style.color="red"
            x = [1,1,1,1,1,1,1,1,1,1,1];
            o = [1,1,1,1,1,1,1,1,1,1,1];
        }
}
let c="x";
let x = [0,0,0,0,0,0,0,0,0,0];
let o = [0,0,0,0,0,0,0,0,0,0];

function fg(j){
    a[j]="x or o"
    if(c=="x" && x[j]==0 && o[j]==0){
   document.getElementById(j).innerHTML="x";
   document.getElementById(j).style.color="green";
   
   x[j]=1;
   
   c="o";
   checkx();
    }
   else if(x[j]==0 && o[j]==0){
    document.getElementById(j).innerHTML="O";
    document.getElementById(j).style.color="red"
    
    o[j]=1;
    c="x";
    checky();
   }
   if(c=="x")
    {
        document.getElementById("maintictac").style.backgroundColor="green";
    }
else{
    document.getElementById("maintictac").style.backgroundColor="red";
}
}
function rese(){
    document.getElementById("draw").innerHTML=""
    x = [0,0,0,0,0,0,0,0,0,0];
    o = [0,0,0,0,0,0,0,0,0,0];
    for(let k=1;k<=9;k++){
        document.getElementById(k).innerHTML="";
    }
    c="x";
    for(s=1;s<=9;s++)
        {
            a[s]=""
        }
    document.getElementById("winx").innerHTML=""
    if(c=="x")
        {
            document.getElementById("maintictac").style.backgroundColor="green";
        }
    else{
        document.getElementById("maintictac").style.backgroundColor="red";
    }
}
