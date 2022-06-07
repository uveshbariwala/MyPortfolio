let theme = localStorage.getItem('theme')
if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme').href = "default.css"
    }
    if (mode == 'blue') {
        document.getElementById('theme').href = "blue.css"
    }
    if (mode == 'green') {
        document.getElementById('theme').href = 'green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}
// console.log("Theses should be printed")

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }