/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
var vardi = ["SAULE", "PĒRKONS", "DAUGAVA"];
function randomVards() {
    let i = 1;
    return vardi[i];
}
function sajauc(vards) {
    let randomPairs = [];
    for (let i = 0; i < vards.length; i++) {
        let nr = Math.floor(Math.random() * 100);
        randomPairs[i] = {"index": i, "random": nr};
    }
    randomPairs.sort(function (a, b) {
        return a.random - b.random
    });
    let sajaukts = "";
    for (let i = 0; i < vards.length; i++) {
        sajaukts += vards.charAt(randomPairs[i]["index"]);
    }
    return sajaukts;
}
        // no https://www.w3schools.com/howto/howto_js_countdown.asp 
            var countDownDate, spele;
            function sakt() {
                countDownDate = new Date().getTime();
                spele = setInterval(skaita, 1000);
            }
        // Update the count down every 1 second
            function skaita() {
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (distance > 1) {
                    clearInterval(spele);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }

console.log(sajauc(randomVards()));
console.log(sajauc(randomVards()));
