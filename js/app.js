// vehicles section with Object start from here 
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



function displayServices(service) {

    const mainSection = document.getElementById("main-section");
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- card segment here  -->
            <div class="card mt-3 mx-auto" style="max-width: 800px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Transport Mood : ${service.vehicle}</h5>
                            <p class="card-text">${service.description}</p>
                            <p class="card-text"><small class="text-muted">Fare per kilo cost : ${service.farePerKilo}</small></p>
                            <p class="card-text"><small class="text-muted">capacity of vehicles : ${service.capacity}</small></p>
                        </div>
                    </div>
                </div>
            </div>`
    
    mainSection.appendChild(div);
    console.log(service);
}

displayServices(carObject);
displayServices(busObject);
displayServices(bikeObject);