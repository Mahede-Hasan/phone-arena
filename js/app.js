// get phone data
document.getElementById('search-button').addEventListener('click', () => {
    const inputField = document.getElementById('search-field');
    const getInputText = inputField.value;

    // clear input field
    inputField.value = '';

    // fetch data
    const url = `https://openapi.programming-hero.com/api/phones?search=${getInputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))

})

// display show data
const displayData = phones => {
    // console.log(phones)
    const phonesDiv = document.getElementById('phones');
    phonesDiv.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.</p>
                    <button class="details-button" onclick="phoneDetail('${phone.slug}')">Details</button>
                </div>
            </div>
        `
        phonesDiv.appendChild(div)
    })
}

// get details phone
const phoneDetail = getDetails => {
    const url = `https://openapi.programming-hero.com/api/phone/${getDetails}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}

// display details

const displayDetails = details => {
    console.log(details)
    const detailDiv = document.getElementById('phone-detail');
    detailDiv.innerHTML = `
            <div class="details-div">
                <img src="${details.image}" alt="">
                
            </div>
            <div class="details-div details-text">
            <h2><span>Name</span>: ${details.name}</h2>
            <h3><span>Brand</span>: ${details.brand}</h3>
                <h4><span>Release Date</span>: ${details.releaseDate}</h4>
                <p><span>Chip Set</span>: ${details.mainFeatures.chipSet}</p>
                <p><span>Display</span>: ${details.mainFeatures.displaySize}</p>
                <p><span>Memory</span>: ${details.mainFeatures.memory}</p>
                <p><span>Sensor</span>: ${details.mainFeatures.sensors[0]}, ${details.mainFeatures.sensors[1]}, ${details.mainFeatures.sensors[2]}, ${details.mainFeatures.sensors[3]}, ${details.mainFeatures.sensors[4]}, ${details.mainFeatures.sensors[5]},</p>
                <p><span>Bluetooth</span>: ${details?.others?.Bluetooth}</p>
                <p><span>GPS</span>: ${details?.others?.GPS}</p>
                <p><span>NFC</span>: ${details?.others?.NFC}</p>
                <p><span>Radio</span>: ${details?.others?.Radio}</p>
                <p><span>USB</span>: ${details?.others?.USB}</p>
                <p><span>Wlan</span>: ${details?.others?.WLAN}</p>
                
            </div>
    `


}