let place1 = document.querySelector("#place1");
let place2 = document.querySelector("#place2");
let place3 = document.querySelector("#place3");
let place4 = document.querySelector("#place4");
let map1 = document.querySelector("#map1")
let map2 = document.querySelector("#map2")
let map3 = document.querySelector("#map3")
let map4 = document.querySelector("#map4")
let some_place = document.querySelector(".some_place")
place1.addEventListener("click", function () {
    // some_place.appendChild(map)
    // document.appendChild(some_place)
    if (map1.style.display == "none") {
        document.querySelector("#map1").style.display = "block";

    }
    else {
        document.querySelector("#map1").style.display = "none";

    }

});
place2.addEventListener("click", function () {
    // some_place.appendChild(map)
    // document.appendChild(some_place)
    if (map2.style.display == "none") {
        document.querySelector("#map2").style.display = "block";

    }
    else {
        document.querySelector("#map2").style.display = "none";

    }

});
place3.addEventListener("click", function () {
    // some_place.appendChild(map)
    // document.appendChild(some_place)
    if (map3.style.display == "none") {
        document.querySelector("#map3").style.display = "block";

    }
    else {
        document.querySelector("#map3").style.display = "none";

    }

});

place4.addEventListener("click", function () {
    // some_place.appendChild(map)
    // document.appendChild(some_place)
    if (map4.style.display == "none") {
        document.querySelector("#map4").style.display = "block";

    }
    else {
        document.querySelector("#map4").style.display = "none";

    }

});