document.getElementById("mode").addEventListener("click",()=>changeMode());

const streamer_imgs = document.getElementsByClassName("streamer_img");
let imgs = [];
for (let i = 0; i < streamer_imgs.length; i++) {
    imgs.push(streamer_imgs[i].src);
}

function changeMode() {
    const change_mode_button = document.getElementById("mode");
    let mode = change_mode_button.value;
    const r = document.querySelector(":root");
    const rs = getComputedStyle(r);
    if(mode=="light"){
        r.style.setProperty("--general_background_color",'white');
        r.style.setProperty("--text_color",'#000000');
        r.style.setProperty("--panel_background_color",'azure');
        r.style.setProperty("--onhover_color",'blueviolet');
        r.style.setProperty("--special_color_1","chocolate");
        r.style.setProperty("--another_background_color","rgb(216, 226, 226)");
        r.style.setProperty("--background_image","url(../images/iron_harvest_isegrim-removebg.png)");
        change_mode_button.value = "dark";
        change_mode_button.innerHTML = "Change to " + change_mode_button.value +" Mode";
    }
    if(mode=="dark"){
        r.style.setProperty("--general_background_color",'#000000');
        r.style.setProperty("--text_color",'azure');
        r.style.setProperty("--panel_background_color",'rgb(19,18,28)');
        r.style.setProperty("--onhover_color",'#fe8944');
        r.style.setProperty("--special_color_1","blueviolet");
        r.style.setProperty("--another_background_color","rgb(33, 39, 47)");
        r.style.setProperty("--background_image","url(../images/iron_harvest_straznik-removebg.png)");
        change_mode_button.value = "light";
        change_mode_button.innerHTML = "Change to " + change_mode_button.value +" Mode";
    }
}