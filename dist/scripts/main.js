window.onload = () => {
    let shut_down = document.getElementById("shut-down");

    shut_down.onclick = () => {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#FFFFFF';
        document.body.style.fontSize = '10rem';
        document.body.innerHTML = "OH NO...";
    }
}
