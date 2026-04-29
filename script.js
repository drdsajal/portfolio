const text = "SQL | Python | Wireshark | Data Analysis | Digital Transformation";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();
