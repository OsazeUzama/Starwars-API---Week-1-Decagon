const showAll = document.querySelectorAll(".show");

fetch("https://swapi.dev/api/people")
.then(function(response) {
    return response.json(); 
})
.then (function(data) {
    let resultVariable = data.results;
    

    function showData(event) {
        let dataID = event.target.id;
        let parentDiv = event.target.parentElement;

    const nameClass = parentDiv.querySelector('.name'); 
    const genderClass = parentDiv.querySelector('.gender'); 
    const heightClass = parentDiv.querySelector('.height');

if (nameClass.innerHTML === "") {
    // Close previously opened divs
    document.querySelectorAll('.character').forEach((div) => {
        const name = div.querySelector('.name');
        const gender = div.querySelector('.gender');
        const height = div.querySelector('.height');
        name.innerHTML = "";
        gender.innerHTML = "";
        height.innerHTML = "";
    });

    // Open the current div
    nameClass.innerHTML = `Name: ${resultVariable[dataID].name}`;
    genderClass.innerHTML = `Gender: ${resultVariable[dataID].gender}`;
    heightClass.innerHTML = `Height: ${resultVariable[dataID].height}`;
} else {
    // Close the current div
    nameClass.innerHTML = "";
    genderClass.innerHTML = "";
    heightClass.innerHTML = "";
}
   }

    for (i = 0; i < showAll.length; i++) {
        showAll[i].addEventListener("click", showData);
    }

})