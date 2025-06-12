let homeCount = document.getElementById("home-counter")
let guestCount = document.getElementById("guest-counter")

function addPoints(team, points) {
    if (team === "home") {
        homeCount.textContent = Number(homeCount.textContent) + points;
    } else if (team === "guest") {
        guestCount.textContent = Number(guestCount.textContent) + points;
    }
}
