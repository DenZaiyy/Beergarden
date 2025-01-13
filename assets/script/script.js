var coordinate = [47.727157, 7.293804];
var map = L.map("map").setView(coordinate, 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var myIcon = L.icon({
    iconUrl: "assets/img/h1-pin.png",
    iconSize: [35, 50],
});

var marker = L.marker(coordinate, { icon: myIcon }).addTo(map);

function navbarMobileView() {
    var links = document.getElementById("nav_mobile_links");

    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
}
