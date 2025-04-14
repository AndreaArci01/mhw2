const input = document.querySelector("#Search input");
const searchContainer = document.querySelector("#Search");
function handleFocus() {
    searchContainer.classList.add("SearchFocus");
}
function handleBlur() {
    searchContainer.classList.remove("SearchFocus");
}
input.addEventListener("focus", handleFocus);
input.addEventListener("blur", handleBlur);



const buttonShowLessSongs = document.querySelector(".Less");
const buttonShowMoreSongs = document.querySelector(".Other");
const showMoreSong = document.querySelector(".Songs2");

function showLess(){
    showMoreSong.classList.add("hidden");
    buttonShowLessSongs.classList.add("hidden");
    buttonShowMoreSongs.classList.remove("hidden");
}

function showMore(){
    showMoreSong.classList.remove("hidden");
    buttonShowMoreSongs.classList.add("hidden");
    buttonShowLessSongs.classList.remove("hidden");
    buttonShowLessSongs.addEventListener("click", showLess);
}

buttonShowMoreSongs.addEventListener("click", showMore);