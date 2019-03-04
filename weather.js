const API_KEY = "fbd234b4b8ae80c48dfa0de89e8e3749";
const  COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
        // latitude: latitude,
        // longitude: longitude
    };
    saveCoords(coordObj);
}

function handleGeoError(){
    console.log("CAN'T LOAD")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        // getWeather
    }
}


function init(){
    loadCoords();
}

init();