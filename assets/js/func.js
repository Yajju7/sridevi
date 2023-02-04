
function openModal(id) {
    var modal = document.getElementById(id);
    modal.classList.add("show");
    modal.style.display = "block";
    };

function closeModal(id) {
    var modal = document.getElementById(id);
    modal.classList.remove("show");
    modal.style.display = "none";
    };
    
function send_data(){
    var form_data = document.getElementsByClassName("form-data"); //retrieve filled form data
    var i;
    var data = [];
    for(i=0; i<form_data.length; i++){
        data.push(form_data[i].value);
    }
    google.script.run.saveData(data); // send to google app script
    document.getElementById("form").style.display = "none"; // make form invisible
    document.getElementById("completion-msg").style.display = "block"; // Optional if you want to give a completion feedback!
    }
