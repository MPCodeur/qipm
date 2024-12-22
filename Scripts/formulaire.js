var checkErrorForm = false;

function sendMail(){
    var checkbox = document.getElementById("checkCondition");
    var parametres = {
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        projet: document.getElementById("projet").value,
    };
    if (document.getElementById("email").value == "" || document.getElementById("projet").value == "" || checkbox.checked == false) {
        alert("Les champs \"email\", et \"message\" doivent être remplis avec les conditions acceptées");
        checkErrorForm = true;
        return;
    } else {
        checkErrorForm = false;
    }

    const serviceID = "service_htz5pqt";
    const templateID = "template_97f9nxf";
    
    emailjs.send(serviceID, templateID, parametres).then(
        res =>{
            document.getElementById("prenom").value = "";
            document.getElementById("nom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("projet").value = "";

            console.log(res);
        }
    )
    .catch((err) => console.log(err));
}
window.addEventListener("DOMContentLoaded", function() {
    var button = this.document.getElementById("bouttonSend")
    var status = this.document.getElementById("status");
    var delay = 3400;
    
    button.addEventListener("click", function() {
        console.log(checkErrorForm);
        if (checkErrorForm === false){
            status.classList.add("sucess");
            console.log("Youpi");
            status.innerHTML = "Merci !";
            setTimeout(function() {
                window.location.reload();
            }, delay);
        }
    })
});