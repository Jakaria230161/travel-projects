// vehicles section with Object start from here 
// create an object
let carObject = {
    vehicle: "Car",
    imageUrl:
        "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm9yZ2hpbml8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 3,
    capacity: 4,
    description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

let bikeObject = {
    vehicle: "Bike",
    imageUrl:
        "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3IlMjBiaWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 4,
    capacity: 2,
    description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

let busObject = {
    vehicle: "Bus",
    imageUrl:
        "https://images.unsplash.com/photo-1617943607013-5aec162c4608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 2,
    capacity: 30,
    description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

const servicesArray = [carObject, busObject, bikeObject];


document.getElementById("search-btn").addEventListener("click", function () {
    const value = document.getElementById("search-value").value;

    for (let i = 0; i <servicesArray.length; i++) {
    const element =servicesArray[i];
        if (value.toLowerCase() === element.vehicle.toLowerCase()) {
            document.getElementById("main-section").innerHTML= '';
        displayServices(element);
        return;
    }
    
}
})




/*
1,access the main section by using id
2,create a div element by createElement
3,create innerHTML of the above div dynamically with service
4,after that appendChild to the main section
*/

function displayServices(service) {
    const stringified = JSON.stringify(service);
    const mainSection = document.getElementById("main-section");
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- card segment here  -->
            <div class="card mt-3 mx-auto" style="max-width: auto;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Transport Mode : ${service.vehicle}</h5>
                            <p class="card-text">${service.description}</p>
                            <p class="card-text"><small class="text-muted">Fare per kilo cost : ${service.farePerKilo}</small></p>
                            <p class="card-text"><small class="text-muted">capacity of vehicles : ${service.capacity}</small></p>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick ='handleBooking(${stringified});' data-bs-target="#exampleModal">
                                See More...
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
    
    mainSection.appendChild(div);
    // console.log(service);
}

// displayServices(carObject);
// displayServices(busObject);
// displayServices(bikeObject);

function displayAllArticles(arr) {
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        displayServices(element);
    }
}

displayAllArticles(servicesArray);


// handle booking or buy
/*
1, write the function name handleBooking
2,it will be have an object as parameter
*/

function handleBooking(object) {
    const stringified = JSON.stringify(object);
    const modalContent = document.getElementById("modal-content");

    let vehicle = "Bike"
    let id = vehicle + "-fare-input"

    modalContent.innerHTML = `
    <div class="card mx-auto" style="width: auto;">
    <img src=${object.imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Vehicles Mode : ${object.vehicle}</h5>
    <p class="card-text">${object.description}</p>
    <p class="card-text">${object.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo cost : ${object.farePerKilo}</small></p>
    <p class="card-text"><small class="text-muted">capacity of vehicles : ${object.capacity}</small></p>

    <p>Fare : <small class="text-muted" id="fare"> </small></p>
    <p>Tax : <small class="text-muted" id="tax"> </small></p>
    <p>Total-Cost : <small class="text-muted" id="total-cost"> </small></p>
        <div class="d-flex flex-column" role="search">
            <input class="form-control m-2" type="number" id="distance-input" placeholder="How many kilometers will you go ?" aria-label="Search">
            <input class="form-control m-2" type="number" id="quantity-input" placeholder="How many vehicles do you need ?" aria-label="Search">
            <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringified});'>Submit</button>
        </div>
    </div>
</div>
    `
}

function calculateCost(object) {
    const quantity = document.getElementById("quantity-input").value;
    const distance = document.getElementById("distance-input").value;
    console.log(quantity, distance);
    const fareVehicle = document.getElementById("fare");
    fareVehicle.innerHTML = quantity * distance * object.farePerKilo;
    console.log(fareVehicle);
}