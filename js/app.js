// get phone data
document.getElementById('search-button').addEventListener('click', () => {
    const inputField = document.getElementById('search-field');
    const getInputText = inputField.value;

    // clear input field
    inputField.value = '';

    // fetch data
    fetch('https://openapi.programming-hero.com/api/phones?search=$%7BsearchText%7D')
        .then(res => res.json())
        .then(data => displayData(data))

})

// display show data
const displayData = phones => {
    console.log(phones)
}