let heading = document.querySelector("#main_title");
let titleForm = document.querySelector("#title_input");
let submitBtn = document.querySelector("#submit_button");


titleForm.onkeyup = function(){
    heading.innerHTML = titleForm.value;
}

let randTest = document.querySelector(".adlib").querySelector("input").value;
let adlibValues = [];

submitBtn.onclick = function(e){
    e.preventDefault();
    let formValues = document.querySelectorAll(".adlib");
    for(const form of formValues){
        if(form.querySelector("input").value == ""){
            alert("Fill out all forms!")
            adlibValues = [];
            break;
        }
        else{
            adlibValues.push(form.querySelector("input").value);
            console.log("added");
            
        }
    }

    console.log(adlibValues.length);
    if (adlibValues.length == 4){
        formContainer = document.querySelector(".form_container");
        formContainer.style.display = "none";
        let result = "Last night I ate a " + adlibValues[1] + ", and today I just had to " + adlibValues[2] + ". What a " + adlibValues[3] + " day!";
        document.querySelector("#story_result").innerHTML = result;
    }
}