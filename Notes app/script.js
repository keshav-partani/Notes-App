function textbgchange(id) {
    document.getElementById(id).style.backgroundColor = "rgb(130, 180, 204)";
};
    
function textbgnormal(id) {
    document.getElementById(id).style.backgroundColor = "rgb(140, 188, 204)";
};

function clickedOnNotes(title) {
    let title_desc = localStorage.getItem(title);
    sessionStorage.setItem(title, title_desc);
    location.replace("./write.html")
};



function add_notes() {
    location.replace("./write.html")
};


function my_Notes(){
    let res = document.getElementById("notes-text-box");
    if((localStorage.length-3)*80<560){
        res.style.backgroundColor = "lightblue"
        res.style.height = "100%"
        res.style.borderRadius = "20px"
    }
    else{
        let res = document.getElementById("my-notes-text");
        res.style.backgroundColor = "lightblue"
        res.style.height = "100%"
        res.style.borderRadius = "20px"
    }
    let a = localStorage
    let count = 0, id_no=0;
    let data = "";
    let all_fav = localStorage.getItem("favo_star")

    for (let key in a) {
        if(count==localStorage.length){
            break;
        }
        let desc = localStorage.getItem(key);
        
        let first="", second="";
        if(desc!= null && desc.split(" ")[0]!= undefined){
            first = desc.split(" ")[0];
        }
        
        if(desc!= null && desc.split(" ")[1]!=undefined){
            second = desc.split(" ")[1];
        }

        // console.log(key + "    " + desc + "        " + key.length)
        
        if(key.length==0){
            localStorage.removeItem(key);
        }
        
        if(key!="darkyState" && key!="darkyMode" && key!="darkySupported" && key.length!= 0 && desc!=null && key!="favo_star"){
            if(!all_fav.includes(key)){
                data += `<div class="inside-text" id="inside-text${id_no}" style="display: inline-block; border-radius:20px; margin-top: 10px; height: 70px; width: 90%; background-color: rgb(140, 188, 204); text-align: left;"; onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)">
                <h3 style="margin-left:30px; margin-top: 5px; margin-bottom: 0px; font-family: 'Roboto Condensed', sans-serif;;" id="${key}" onclick="clickedOnNotes(id)"> ${key}</h3>
                <p id="${key}" style="margin-left: 30px;" onclick="clickedOnNotes(id)">${"Description:  " + first + " " + second + "....."}</p>
                </div>`
            }
            else{
                data +=` <div class="inside-text" id="inside-text${id_no}" style="display: inline-block; border-radius:20px; margin-top: 10px; height: 70px; width: 90%; background-color: rgb(140, 188, 204); text-align: left;"; onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)" onclick="on_notes_clicked_of_fav_icon(${key})">

                <div style="margin-left:30px; margin-top: 5px; margin-bottom: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: x-large; display: inline-block;" id="${key}" onclick="clickedOnNotes(id)"> ${key}</div>

                <div style="display: inline; float:right; position: relative; top: 15px; right: 20px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                
              </div>

              <p id="${key}" style="margin-left: 30px;" onclick="clickedOnNotes(id)">${"Description:  " + first + " " + second + "....."}</p>
              </div>`
            }
                id_no++;
        }
        count++;
    }
    
    let internal_data = document.getElementById("my-notes-text");
    if(internal_data!= null){
        internal_data.innerHTML = data;
    }
}

my_Notes();


//edit function called
function edit(){
    let a = localStorage
    let count = 0, id_no=0;
    let data = "";
    let all_fav = localStorage.getItem("favo_star")
    for (let key in a) {
        if(count==localStorage.length){
            break;
        }
        let desc = localStorage.getItem(key);
    
        let first="", second="";
        if(desc!= null && desc.split(" ")[0]!= undefined){
            first = desc.split(" ")[0];
        }
    
        if(desc!= null && desc.split(" ")[1]!=undefined){
            second = desc.split(" ")[1];
        }
    
        // console.log(key + "    " + desc + "        " + key.length)
    
        if(key.length==0){
            localStorage.removeItem(key);
        }
    
        if(key!="darkyState" && key!="darkyMode" && key!="darkySupported" && key.length!= 0 && desc!=null && key!="favo_star"){
            if(!all_fav.includes(key)){
                data += `<div class="inside-text" id="inside-text${id_no}"
                style="display: inline-block; border-radius: 20px; margin-top: 10px; height: 70px; width: 90%;
                background-color: rgb(140, 188, 204); text-align: left;"
                onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)"
                onclick="edits_on_notes_clicked_of_fav_icon(${key})">
                
                <input type="checkbox" onclick="cbox_clicked(id)" id="checkbox-round${key}" class="checkbox-round">
                
                <label
                style="margin-top: 5px;
                margin-bottom: 0px;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: x-large;"
                id="${key}"
                onclick="checkbox_clicked(id)">${key}
                </label>
                
                <p id="${key}" style="margin-left: 40px" onclick="checkbox_clicked(id)">
                ${ "Description: " + first + " " + second + "....." }
                </p>
                </div>`
            }

        else{
            data += ` <div class="inside-text" id="inside-text${id_no}"
            style="display: inline-block; border-radius: 20px; margin-top: 10px; height: 70px; width: 90%;
            background-color: rgb(140, 188, 204); text-align: left;"
            onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)" onclick="edits_on_notes_clicked_of_fav_icon(${key})">
        
                <input type="checkbox" onclick="cbox_clicked(id)" id="checkbox-round${key}" class="checkbox-round">
            
                <label
                    style="margin-top: 5px;
                    margin-bottom: 0px;
                    font-family: 'Roboto Condensed', sans-serif;
                    font-size: x-large;"
                    id="${key}"
                    onclick="checkbox_clicked(id)">${key}
                </label>

                <div style="display: inline; float:right; position: relative; top: 15px; right: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>

                <p id="${key}" style="margin-left: 40px" onclick="checkbox_clicked(id)">
                    ${ "Description: " + first + " " + second + "....." }
                </p>

            </div>`
        }
            id_no++;
        }
        count++;
    }

    data += `<button class="edits_buttons" style="margin-top:15px" onclick="cancel_clicked()">Cancel</button>
    <button class="edits_buttons" onclick="add_to_favorites_clicked()">Add to favorites</button>
    <button class="edits_buttons" onclick="remove_favorites_clicked()">Remove favorites</button>
    <button class="edits_buttons" onclick="delete_clicked()">Delete</button>` 

    let internal_data = document.getElementById("my-notes-text");
    if(internal_data!= null){
        internal_data.innerHTML = data;
    }
}

//on click edit
let edit_pressed = false;
function edit_Clicked(){
    if(edit_pressed==false){
        edit();
        edit_pressed = true;
    }else{
        my_Notes();
        edit_pressed = false;
    }
}

//checkbox item array which are going to delete
const need_to_delete = [];

//ckeckbox clicked
const checkbox_clicked=(id)=>{
    let cb = document.getElementById("checkbox-round" + id)
    if(cb.checked == true){
        need_to_delete.splice(need_to_delete.indexOf(`${id}`),1);
        cb.style.backgroundColor = "white"
        cb.checked = false;
    }
    else{
        let len = need_to_delete.length;
        need_to_delete[len] = `${id}`
        cb.style.backgroundColor = "black"
        cb.checked = true;
    }
}

const cbox_clicked=(id)=>{
    let len = id.length;
    id = id.substring(14,len);
    let cb = document.getElementById("checkbox-round" + id)
    let bgcolor = cb.style.backgroundColor;
    if(bgcolor =='black'){
        need_to_delete.splice(need_to_delete.indexOf(id),1);
        cb.style.backgroundColor = "white"
    }
    else{
        let len = need_to_delete.length;
        need_to_delete[len] = id
        cb.style.backgroundColor = "black"
    }
}

//on click cancle
function cancel_clicked(){
    my_Notes();
}

//on click delete
function delete_clicked(){
    for (let i of need_to_delete) {
        localStorage.removeItem(i);

    }
    let all_fav = localStorage.getItem("favo_star");
    for (let i of need_to_delete) {
        if(all_fav.includes(i+" @5ndl ")){
            let j = i + " @5ndl "
            all_fav = all_fav.replace(j, "")
        }
    }
    localStorage.setItem("favo_star", all_fav);
    my_Notes();
}


//searching of notes
function search_notes(event){
    event.preventDefault();
    let input = document.getElementById("searching_notes").value;
    input = input.toLowerCase();

    let total=0;
    for(let key in localStorage){
        if(key.toLowerCase().includes(input)){
            total++;
        }
    }
    
    let res = document.getElementById("notes-text-box");
    if(total*80<560){
        res.style.backgroundColor = "lightblue"
        res.style.height = "100%"
        res.style.borderRadius = "20px"
    }
    if(input!=""){
        let a = localStorage
        let count = 0, id_no=0;
        let data = "";
        let all_fav = localStorage.getItem("favo_star")
        for (let key in a) {
            if(count==localStorage.length){
                break;
            }
            let desc = localStorage.getItem(key);
            
            let first="", second="";
            if(desc!= null && desc.split(" ")[0]!= undefined){
                first = desc.split(" ")[0];
            }
            
            if(desc!= null && desc.split(" ")[1]!=undefined){
                second = desc.split(" ")[1];
            }

            // console.log(key + "    " + desc + "        " + key.length)
            
            if(key.length==0){
                localStorage.removeItem(key);
            }
            
            if(key!="darkyState" && key!="darkyMode" && key!="darkySupported" && key.length!= 0 && desc!=null && key!="favo_star" && key.toLowerCase().includes(input)){
                if(!all_fav.includes(key)){
                    data += `<div class="inside-text" id="inside-text${id_no}" style="display: inline-block; border-radius:20px; margin-top: 10px; height: 70px; width: 90%; background-color: rgb(140, 188, 204); text-align: left;"; onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)">
                    <h3 style="margin-left:30px; margin-top: 5px; margin-bottom: 0px; font-family: 'Roboto Condensed', sans-serif;;" id="${key}" onclick="clickedOnNotes(id)"> ${key}</h3>
                    <p id="${key}" style="margin-left: 30px;" onclick="clickedOnNotes(id)">${"Description:  " + first + " " + second + "....."}</p>
                    </div>`
                }
                else{
                    data +=` <div class="inside-text" id="inside-text${id_no}" style="display: inline-block; border-radius:20px; margin-top: 10px; height: 70px; width: 90%; background-color: rgb(140, 188, 204); text-align: left;"; onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)" onclick="on_notes_clicked_of_fav_icon(${key})">
    
                    <div style="margin-left:30px; margin-top: 5px; margin-bottom: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: x-large; display: inline-block;" id="${key}" onclick="clickedOnNotes(id)"> ${key}</div>
    
                    <div style="display: inline; float:right; position: relative; top: 15px; right: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    
                  </div>
    
                  <p id="${key}" style="margin-left: 30px;" onclick="clickedOnNotes(id)">${"Description:  " + first + " " + second + "....."}</p>
                  </div>`
                }
                    id_no++;
            }
            count++;
        }
    
        let internal_data = document.getElementById("my-notes-text");
        if(internal_data!= null){
            internal_data.innerHTML = data;
        }
    }else{
        my_Notes();
    }  
}

function search_clicked(event){
    event.preventDefault();
    let input = document.getElementById("searching_notes").value;
    input = input.toLowerCase();

    let total=0;
    for(let key in localStorage){
        if(key.toLowerCase().includes(input)){
            total++;
        }
    }
    
    let res = document.getElementById("notes-text-box");
    if(total*80<560){
        res.style.backgroundColor = "lightblue"
        res.style.height = "100%"
        res.style.borderRadius = "20px"
    }
    if(input!=""){
        let a = localStorage
        let count = 0, id_no=0;
        let data = "";
        let all_fav = localStorage.getItem("favo_star")
        for (let key in a) {
            if(count==localStorage.length){
                break;
            }
            let desc = localStorage.getItem(key);
            
            let first="", second="";
            if(desc!= null && desc.split(" ")[0]!= undefined){
                first = desc.split(" ")[0];
            }
            
            if(desc!= null && desc.split(" ")[1]!=undefined){
                second = desc.split(" ")[1];
            }

            // console.log(key + "    " + desc + "        " + key.length)
            
            if(key.length==0){
                localStorage.removeItem(key);
            }
            
            if(key!="darkyState" && key!="darkyMode" && key!="darkySupported" && key.length!= 0 && desc!=null && key!="favo_star" && key.toLowerCase()==input){
                if(!all_fav.includes(key)){
                    data += `<div class="inside-text" id="inside-text${id_no}" style="display: inline-block; border-radius:20px; margin-top: 10px; height: 70px; width: 90%; background-color: rgb(140, 188, 204); text-align: left;"; onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)">
                    <h3 style="margin-left:30px; margin-top: 5px; margin-bottom: 0px; font-family: 'Roboto Condensed', sans-serif;;" id="${key}" onclick="clickedOnNotes(id)"> ${key}</h3>
                    <p id="${key}" style="margin-left: 30px;" onclick="clickedOnNotes(id)">${"Description:  " + first + " " + second + "....."}</p>
                    </div>`
                }
                else{
                    data +=` <div class="inside-text" id="inside-text${id_no}" style="display: inline-block; border-radius:20px; margin-top: 10px; height: 70px; width: 90%; background-color: rgb(140, 188, 204); text-align: left;"; onmouseover="textbgchange(id)" onmouseout="textbgnormal(id)" onclick="on_notes_clicked_of_fav_icon(${key})">
    
                    <div style="margin-left:30px; margin-top: 5px; margin-bottom: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: x-large; display: inline-block;" id="${key}" onclick="clickedOnNotes(id)"> ${key}</div>
    
                    <div style="display: inline; float:right; position: relative; top: 15px; right: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    
                  </div>
    
                  <p id="${key}" style="margin-left: 30px;" onclick="clickedOnNotes(id)">${"Description:  " + first + " " + second + "....."}</p>
                  </div>`
                }
                    id_no++;
            }
            count++;
        }
    
        let internal_data = document.getElementById("my-notes-text");
        if(internal_data!= null){
            internal_data.innerHTML = data;
        }
    }else{
        my_Notes();
    }  
}

//responsive notes_text
function responsive_notes(){
    let res = document.getElementById("notes-text-box");
    if((localStorage.length-3)*80<560){
        res.style.backgroundColor = "lightblue"
        res.style.height = "100%"
        res.style.borderRadius = "20px"
    }
    else{
        let res = document.getElementById("my-notes-text");
        res.style.backgroundColor = "lightblue"
        res.style.height = "100%"
        res.style.borderRadius = "20px"
    }
}
responsive_notes();

//adding favorites
function add_to_favorites_clicked(){
    let all_fav_new = ""
    let all_fav_old = localStorage.getItem("favo_star");
    for (let i of need_to_delete) {
        if(!all_fav_old.includes(i+" @5ndl ")){
            all_fav_new = all_fav_new + i + " @5ndl "
        }
    }
    localStorage.setItem("favo_star", all_fav_old + all_fav_new);      
    my_Notes();
}

//removeing favorites 
function remove_favorites_clicked(){
    let all_fav = localStorage.getItem("favo_star");
    for (let i of need_to_delete) {
        if(all_fav.includes(i+" @5ndl ")){
            let j = i + " @5ndl "
            all_fav = all_fav.replace(j, "")
        }
    }
    localStorage.setItem("favo_star", all_fav);
    my_Notes();
}

function on_notes_clicked_of_fav_icon(id){
    id = Array.from(id);
    clickedOnNotes(id[0].id);
}
function edits_on_notes_clicked_of_fav_icon(id){
    id = Array.from(id);
    checkbox_clicked(id[0].id);
}