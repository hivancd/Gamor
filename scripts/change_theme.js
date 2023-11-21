document.getElementById("mode").addEventListener("click", () => changeMode());

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
    if (mode == "light") {
        r.style.setProperty("--general_background_color", 'rgb(240,242,244)');
        r.style.setProperty("--text_color", 'rgb(33,39,46)');
        r.style.setProperty("--panel_background_color", 'rgb(232,234,236)');
        r.style.setProperty("--onhover_color", 'rgb(196,156,255)');
        r.style.setProperty("--special_color_1", "rgb(234,114,44)");
        r.style.setProperty("--another_background_color", "rgb(255, 255, 255)");
        r.style.setProperty("--center_color", "rgb(125,52,238)");
        r.style.setProperty("--add_button_bgcolor", "rgb(248, 251, 252)");
        r.style.setProperty("--background_image", "url(../images/fornite2-removebg-preview.png)");
        change_mode_button.value = "dark";
        change_mode_button.innerHTML = "Change to " + change_mode_button.value + " Mode";
    }
    if (mode == "dark") {
        r.style.setProperty("--general_background_color", 'rgb(25,32,39)');
        r.style.setProperty("--text_color", 'rgb(254,254,255)');
        r.style.setProperty("--panel_background_color", 'rgb(32,38,46)');
        r.style.setProperty("--onhover_color", 'rgb(254,137,68)');
        r.style.setProperty("--special_color_1", "rgb(125,52,237)");
        r.style.setProperty("--another_background_color", "rgb(33, 39, 47)");
        r.style.setProperty("--center_color", "rgb(254,137,68)");
        r.style.setProperty("--background_image", "url(../images/fortnite3-removebg-preview.png)");
        r.style.setProperty("--add_button_bgcolor", "rgb(69, 73, 81)");
        change_mode_button.value = "light";
        change_mode_button.innerHTML = "Change to " + change_mode_button.value + " Mode";
    }
}