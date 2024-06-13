function seePassword() {

    let pass = document.getElementById("mainpass").type;
    document.getElementById("mainpass").type = "text";


let tvali = document.getElementById("psss").innerHTML;


if(tvali == '<i class="fa-solid fa-eye-slash" aria-hidden="true"></i>'){
    document.getElementById("mainpass").type;
    document.getElementById("psss").innerHTML = '<i class="fa-solid fa-eye"></i>'

}
else{
   
    document.getElementById("mainpass").type = "password";
    
    
    document.getElementById("psss").innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
}

    
}

document.getElementById("psss").addEventListener("click", seePassword)