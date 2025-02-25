let hide=document.getElementById("icon")
let password=document.getElementById("password")



hide.onclick=function (){
    if(password.type==="password")
    {
        password.type="text";
        hide.src="show.png"
    }else{
        password.type="password";
        hide.src="hide.png";
    }
}