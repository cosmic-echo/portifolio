var x = 0;

function botao() {
    if (x == 0) {
        document.querySelector("#developer_name").style.backgroundColor = "purple";
        x = 1;
    } else {
        document.querySelector("#developer_name").style.backgroundColor = "transparent";
        x = 0;
    }
}