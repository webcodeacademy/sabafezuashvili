function seePassword() {

    let pass = document.getElementById("password").type;
    document.getElementById("password").type = "text";


let tvali = document.getElementById("divpass").innerHTML;


if(tvali == '<i class="fa-solid fa-eye-slash" aria-hidden="true"></i>'){
    document.getElementById("password").type;
    document.getElementById("divpass").innerHTML = '<i class="fa-solid fa-eye"></i>'

}
else{
   
    document.getElementById("password").type = "password";
    
    
    document.getElementById("divpass").innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
}

    
}

document.getElementById("divpass").addEventListener("click", seePassword)
