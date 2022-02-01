// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const missionAbort = document.getElementById("missionAbort");
    const button = document.getElementById("landing");
    const takeOff = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const image = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    let height = 0;


    const weGo = document.querySelector('#takeoff');
    weGo.addEventListener('click', event => {
        const letsGo = confirm("Confirm that the shuttle is ready for takeoff.")
        console.log(letsGo);
        if (letsGo) {
            status.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById('spaceShuttleHeight').innerHTML = 10000;
            height = 10000; 
        }
    });

    const landButton = document.querySelector('#landing');
    landButton.addEventListener('click', event => {
        const cancelFlight = confirm("The shuttle is landing. Landing gear engaged.");
        if (cancelFlight) {
            status.innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
            height = 0; 
        }
    });

    const abortMission = document.querySelector('#missionAbort');
    abortMission.addEventListener('click', event => {
        const comingHome = confirm("Confirm that you want to abort the mission.")
        console.log(comingHome);
        if (comingHome) {
            status.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
            height = 0; 
        }
    });

    const goingUp = document.querySelector('#up');
    goingUp.addEventListener('click', event => {
        let rocketUp = 10;
        image.style.position = "relative";
        image.style.transform = "translateY(" + rocketUp + "px)";
        height += 10000; 
        document.getElementById('spaceShuttleHeight').innerHTML = height;
        event.preventDefault();
    
    });

    const goingDown = document.querySelector('#down');
    goingDown.addEventListener('click', event => {
        let rocketDown = -10;
        image.style.position = "relative";
        image.style.transform = "translateY(" + rocketDown + "px)";
        height -= 10000; 
        document.getElementById('spaceShuttleHeight').innerHTML = height;
        event.preventDefault();

    });
}




window.addEventListener("load", init);

