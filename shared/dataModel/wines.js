import wineData from '../testJson/staticJson.json';

// fetch call to wine data
/*
const wineDataCall = fetch("full url to endpoint")
    .then((response) => {
        return response.json();
    })
*/

// set local storage
/*
const setLocalStorage = () => {
    // data.wines is from the fetch result
    setLocalStorage("wines", data.wines);
}
*/

// export a function that grabs local storage
/* 
const getLocalStorage = () => {
    getLocalStorage("wines");
}
*/

// eventually export both wine data & local storage as variables
// export { wineDataCall, setLocalStorage, getLocalStorage };
export default wineData;