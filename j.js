function calculateLove(){

    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if(name1 === "" || name2 === ""){
        alert("Please enter both names!");
        return;
    }

    let lovePercent = Math.floor(Math.random() * 101);

    document.getElementById("result").innerHTML =
        name1 + " ❤️ " + name2 + " = " + lovePercent + "% Love";
}