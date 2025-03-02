document.addEventListener('DOMContentLoaded', () =>{
    document.body.style.display = "block" ;
let img = document.getElementById("profile");
let name = document.getElementById("user");
let text = document.getElementById("text");
let up = document.getElementById("img");
let username = document.getElementById("username");
let p = document.getElementById("p");
let del = document.getElementById("del");
let d = document.getElementById("d");
if (localStorage.img) {
    img.src = localStorage.img ;
}
if (localStorage.username) {
    name.textContent = localStorage.username ;
    username.value = localStorage.username ;
}
if (localStorage.text) {
    text.textContent = localStorage.text ;
    p.value = localStorage.text ;
}
up.onchange = function () {
    let file = new FileReader();
    file.readAsDataURL(up.files[0]);
    file.onload = () => {
        img.src = file.result ;
        localStorage.img = file.result ;
    }
}
username.onkeyup = () =>{
    name.textContent = username.value ;
    localStorage.username = username.value ;
}
p.onkeyup =() => {
    text.textContent = p.value ;
    localStorage.text = p.value ;
}
del.onclick =() => {
    localStorage.img = "user.png";
    localStorage.username = "user_name";
    localStorage.text = "" ;
    location.reload();
}
d.onclick  = function () {
    let cmnt = document.getElementById("cmnt") ;
    html2canvas(cmnt).then(function (canvas) {
        let link = document.createElement('a'); 
        link.download = `${name.textContent}`; 
        link.href = canvas.toDataURL('image/png'); 
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 
        
    })
}
})

