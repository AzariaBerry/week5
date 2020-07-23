//changes list color in html
document.getElementById("Earth").style.color = "Green";

document.getElementById("Space").style.color = "purple";

document.getElementById("Time").style.color = "cyan";

//changes class name

document.getElementById("Space").className = "classSpace"

//change text value


document.querySelector('li:nth-child(3)').style.color = 'pink';

document.getElementById("button").addEventListener("click", myButton)

function myButton() {
    document.getElementById("present").style.display = 'none';
}