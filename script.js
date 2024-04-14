// Initialize arrays for available services and requested services
let availableServices = JSON.parse(localStorage.getItem('availableServices')) || [];
let requestedServices = JSON.parse(localStorage.getItem('requestedServices')) || [];

// Function to add a new service to available services
function addService(service) {
    availableServices.push(service);
    // Update local storage
    localStorage.setItem('availableServices', JSON.stringify(availableServices));
}

// Function to add a new request to requested services
function addRequest(request) {
    requestedServices.push(request);
    // Update local storage
    localStorage.setItem('requestedServices', JSON.stringify(requestedServices));
}

// Function to get available services
function getAvailableServices() {
    return availableServices;
}

// Function to get requested services
function getRequestedServices() {
    return requestedServices;
}
