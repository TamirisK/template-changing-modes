let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "./styles/light-ver.css"){
        theme.href = "./styles/dark-ver.css"
    }

    else {
        theme.href = "./styles/light-ver.css"
    }
}