// =========================
// SCROLL FUNCTIONS
// =========================

function scrollToFinder() {

    const finder = document.getElementById("finder");

    if (finder) {
        finder.scrollIntoView({
            behavior: "smooth"
        });
    }

}

function showFeatures() {

    const features = document.getElementById("features");

    if (features) {
        features.scrollIntoView({
            behavior: "smooth"
        });
    }

}

// =========================
// CONTACT
// =========================

function showMessage() {

    alert(
        "MetaBite AI uses AI + GPS technology to recommend the best restaurants in Mozambique."
    );

}

// =========================
// GPS LOCATION
// =========================

let userLatitude = null;
let userLongitude = null;

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        (position) => {

            userLatitude = position.coords.latitude;
            userLongitude = position.coords.longitude;

            console.log("Latitude:", userLatitude);
            console.log("Longitude:", userLongitude);

        },

        () => {

            console.log("Location access denied.");

        }

    );

} else {

    console.log("Geolocation is not supported.");

}

// =========================
// FAVORITES
// =========================

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

function saveRestaurant(name) {

    if (!favorites.includes(name)) {

        favorites.push(name);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert(name + " added to favorites ⭐");

    } else {

        alert(name + " is already saved ⭐");

    }

}

// =========================
// RESTAURANT DATABASE
// =========================

const restaurants = [

    // =========================
    // BURGERS
    // =========================

    {
        name: "Mundo's",
        type: "burger",
        dessert: true,
        budget: 700,
        distance: 3,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081&auto=format&fit=crop",
        description: "Popular burgers and grilled meals.",
        hours: "10:00 AM - 10:00 PM",
        price: "400 - 800 MZN",
        location: "Maputo",
        rating: 4.7,
        menu: "https://www.google.com/search?q=Mundos+Maputo+menu",
        maps: "https://www.google.com/maps/search/Mundos+Maputo"
    },

    {
        name: "Jimmy's Bar & Grill",
        type: "burger",
        dessert: false,
        budget: 900,
        distance: 5,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop",
        description: "Grilled burgers, steaks and cocktails.",
        hours: "10:00 AM - 01:00 AM",
        price: "500 - 1200 MZN",
        location: "Maputo",
        rating: 4.4,
        menu: "https://www.google.com/search?q=Jimmys+Bar+and+Grill+Maputo",
        maps: "https://www.google.com/maps/search/Jimmys+Bar+and+Grill+Maputo"
    },

    {
        name: "Jimmys Killer Grills",
        type: "burger",
        dessert: false,
        budget: 850,
        distance: 5,
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=2070&auto=format&fit=crop",
        description: "African grilled food and burgers.",
        hours: "10:00 AM - 11:00 PM",
        price: "400 - 1000 MZN",
        location: "Maputo",
        rating: 4.2,
        menu: "https://www.google.com/search?q=Jimmys+Killer+Grills+Maputo",
        maps: "https://www.google.com/maps/search/Jimmys+Killer+Grills+Maputo"
    },

    {
        name: "Steers Baia Mall",
        type: "burger",
        dessert: true,
        budget: 600,
        distance: 6,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
        description: "Fast food burgers and fries.",
        hours: "09:00 AM - 09:00 PM",
        price: "250 - 700 MZN",
        location: "Baia Mall, Maputo",
        rating: 4.2,
        menu: "https://www.google.com/search?q=Steers+Baia+Mall+Maputo",
        maps: "https://www.google.com/maps/search/Steers+Baia+Mall+Maputo"
    },

    // =========================
    // PIZZA
    // =========================

    {
        name: "Pizza Hut Mozambique",
        type: "pizza",
        dessert: true,
        budget: 1000,
        distance: 5,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
        description: "Classic pizzas and desserts.",
        hours: "10:00 AM - 11:00 PM",
        price: "500 - 1200 MZN",
        location: "Maputo",
        rating: 4.5,
        menu: "https://www.google.com/search?q=Pizza+Hut+Mozambique+menu",
        maps: "https://www.google.com/maps/search/Pizza+Hut+Mozambique"
    },

    // =========================
    // CHICKEN
    // =========================

    {
        name: "KFC Mozambique",
        type: "chicken",
        dessert: true,
        budget: 500,
        distance: 2,
        image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=2070&auto=format&fit=crop",
        description: "Fried chicken combos and fries.",
        hours: "8:00 AM - 10:00 PM",
        price: "250 - 700 MZN",
        location: "Maputo",
        rating: 4.4,
        menu: "https://www.google.com/search?q=KFC+Mozambique+menu",
        maps: "https://www.google.com/maps/search/KFC+Mozambique"
    },

    // =========================
    // DESSERTS
    // =========================

    {
        name: "Creamy Desserts",
        type: "dessert",
        dessert: true,
        budget: 450,
        distance: 4,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        description: "Ice cream, cakes, waffles and milkshakes.",
        hours: "9:00 AM - 11:00 PM",
        price: "200 - 500 MZN",
        location: "Maputo",
        rating: 4.8,
        menu: "https://www.google.com/search?q=Dessert+restaurants+Maputo",
        maps: "https://www.google.com/maps/search/Dessert+restaurants+Maputo"
    },

    // =========================
    // SEAFOOD
    // =========================

    {
        name: "Costa do Sol",
        type: "seafood",
        dessert: true,
        budget: 1500,
        distance: 10,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        description: "Luxury seafood restaurant with ocean views.",
        hours: "9:00 AM - 11:00 PM",
        price: "900 - 1800 MZN",
        location: "Maputo",
        rating: 4.9,
        menu: "https://www.google.com/search?q=Costa+do+Sol+Maputo+menu",
        maps: "https://www.google.com/maps/search/Costa+do+Sol+Maputo"
    },

    // =========================
    // HEALTHY
    // =========================

    {
        name: "Healthy Bowl",
        type: "healthy",
        dessert: false,
        budget: 600,
        distance: 3,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554",
        description: "Healthy meals, salads and smoothies.",
        hours: "8:00 AM - 9:00 PM",
        price: "350 - 700 MZN",
        location: "Maputo",
        rating: 4.6,
        menu: "https://www.google.com/search?q=Healthy+food+Maputo",
        maps: "https://www.google.com/maps/search/Healthy+food+Maputo"
    },

    // =========================
    // TRADITIONAL
    // =========================

    {
        name: "Txhapo Txhapo",
        type: "traditional",
        dessert: false,
        budget: 700,
        distance: 6,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
        description: "Traditional Mozambican dishes.",
        hours: "9:00 AM - 9:00 PM",
        price: "300 - 800 MZN",
        location: "Maputo",
        rating: 4.7,
        menu: "https://www.google.com/search?q=Traditional+food+Maputo",
        maps: "https://www.google.com/maps/search/Traditional+food+Maputo"
    },

    // =========================
    // KOREAN
    // =========================

    {
        name: "Seoul Kitchen",
        type: "korean",
        dessert: true,
        budget: 1200,
        distance: 6,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
        description: "Korean BBQ and ramen.",
        hours: "11:00 AM - 10:00 PM",
        price: "700 - 1400 MZN",
        location: "Maputo",
        rating: 4.8,
        menu: "https://www.google.com/search?q=Korean+restaurant+Maputo",
        maps: "https://www.google.com/maps/search/Korean+restaurant+Maputo"
    },

    {
        name: "Kimchi House Maputo",
        type: "korean",
        dessert: true,
        budget: 1100,
        distance: 5,
        image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1974&auto=format&fit=crop",
        description: "Authentic Korean spicy food.",
        hours: "10:00 AM - 10:00 PM",
        price: "600 - 1300 MZN",
        location: "Maputo",
        rating: 4.6,
        menu: "https://www.google.com/search?q=Kimchi+House+Maputo",
        maps: "https://www.google.com/maps/search/Kimchi+House+Maputo"
    }

];

// =========================
// GENERATE RESTAURANTS
// =========================

function generateRestaurant() {

    const foodType = document.getElementById("foodType").value;
    const budget = parseInt(document.getElementById("budget").value);
    const distance = parseInt(document.getElementById("distance").value);
    const dessert = document.getElementById("dessert").value;
    const mood = document.getElementById("mood").value;

    const resultsContainer =
        document.getElementById("resultsContainer");

    resultsContainer.innerHTML = "";

    const filteredRestaurants = restaurants.filter(r => {

        const typeMatch =
            foodType === "all" || r.type === foodType;

        const budgetMatch = r.budget <= budget;

        const distanceMatch =
            r.distance <= distance;

        const dessertMatch =
            dessert === "No" ? true : r.dessert;

        return (
            typeMatch &&
            budgetMatch &&
            distanceMatch &&
            dessertMatch
        );

    });

    if (filteredRestaurants.length === 0) {

        resultsContainer.innerHTML = `
        <div class="restaurant-card">
            <div class="restaurant-content">
                <h3>No Restaurants Found</h3>
                <p>Try increasing your budget or distance.</p>
            </div>
        </div>
        `;

        return;

    }

    filteredRestaurants.forEach(r => {

        resultsContainer.innerHTML += `
        <div class="restaurant-card">

            <img src="${r.image}" alt="${r.name}">

            <div class="restaurant-content">

                <h3>${r.name}</h3>

                <p>${r.description}</p>

                <p>📍 ${r.location}</p>

                <p>📏 ${r.distance} km</p>

                <p>⏰ ${r.hours}</p>

                <p>⭐ ${r.rating}</p>

                <p class="price">${r.price}</p>

                <div class="restaurant-buttons">

                    <button onclick="openMenu('${r.menu}')">
                        View Menu
                    </button>

                    <button onclick="openMaps('${r.maps}')">
                        Open GPS Route
                    </button>

                    <button onclick="saveRestaurant('${r.name}')">
                        Save Favorite
                    </button>

                </div>

            </div>

        </div>
        `;

    });

    const resultsSection =
        document.querySelector(".results-section");

    if (resultsSection) {

        resultsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}

// =========================
// OPEN LINKS
// =========================

function openMenu(url) {

    window.open(url, "_blank");

}

function openMaps(url) {

    window.open(url, "_blank");

}

// =========================
// POPULAR RESTAURANT OPTIONS
// =========================

let currentPopularMaps = "";

function openPopularOptions(name, mapsUrl) {

    document.getElementById("popularModalTitle").textContent = name;
    currentPopularMaps = mapsUrl;
    document.getElementById("popularModal").classList.add("show");

}

function closePopularModal() {

    document.getElementById("popularModal").classList.remove("show");

}

function openPopularLocation() {

    if (currentPopularMaps) {
        window.open(currentPopularMaps, "_blank");
    }

    closePopularModal();

}

// =========================
// MOBILE TOP TOGGLE
// =========================

function toggleTopSection() {

    const topSection =
        document.querySelector(".top-section");

    if (topSection) {
        topSection.classList.toggle("hide-top");
    }

}

// =========================
// AUTO LOAD
// =========================

window.onload = function () {

    generateRestaurant();

};