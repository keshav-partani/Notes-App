if(sessionStorage.length>1){
    let count=0;
    for (let key in sessionStorage) {
        if(count==2){
            break;
        }
        if (key!="IsThisFirstTime_Log_From_LiveServer"){
            document.getElementById("heading-input").value = key
            document.getElementById("text-input").value = sessionStorage.getItem(key);
            sessionStorage.removeItem(key);
        }
        count++;
    }
}

function clickBack() {
    location.replace("./index.html")
};

window.onload = function() {
    var date = new Date();
  
    document.getElementById("date").innerHTML = date.toDateString();
}


let old_title = document.getElementById("heading-input").value;
function saveNotes(){
    console.log("this is inside the saveNotes function")
    if(old_title == undefined){
        let title = document.getElementById("heading-input").value;
        let description = document.getElementById("text-input").value;
        localStorage.setItem(title, description);
        location.replace("./index.html")
    }
    else{
        localStorage.removeItem(old_title);
        let title = document.getElementById("heading-input").value;
        let description = document.getElementById("text-input").value;
        localStorage.setItem(title, description);
        location.replace("./index.html")
    }
}
