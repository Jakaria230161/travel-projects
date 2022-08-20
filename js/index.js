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


let value = "Bus";

for (let i = 0; i <servicesArray.length; i++) {
    const element =servicesArray[i];
    if (value === element.vehicle) {
        console.log(element);
    }
    
}