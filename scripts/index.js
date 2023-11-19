

let display_streamer_count=1;

const add_buttons = document.getElementsByClassName("add_button");



function displayStreamer(element) {
    // console.log("display_streamer");
    const id = "displayed_streamer" + display_streamer_count;
    let streamer = document.getElementById(id);
    setBackgroundToDiv(streamer,element.value);

    // LLevando la div donde colocar la img
    display_streamer_count++;
    if(display_streamer_count>3){
        display_streamer_count=1;
    }
}
function setBackgroundToDiv(div,index){
    div.style.visibility = "visible";
    div.style.backgroundImage = "url("+imgs[index]+")";
    div.style.backgroundSize = "cover";   
}

for (let i = 0; i < add_buttons.length; i++) {
    add_buttons[i].addEventListener("click", ()=>displayStreamer(add_buttons[i]));
}

