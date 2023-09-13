document.addEventListener("DOMContentLoaded", function () {
    const leaveFromDropdown = document.getElementById("leaveFrom");
    const toDropdown = document.getElementById("to");

    const destinations = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Miami",
        "San Francisco",
        "Las Vegas",
        "Seattle",
        "Boston",
        "Denver",
        "Houston",
    ];

    function populateDropdown(dropdown, options) {
        options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.text = option;
            dropdown.appendChild(optionElement);
        });
    }

    populateDropdown(leaveFromDropdown, destinations);
    populateDropdown(toDropdown, destinations);

    leaveFromDropdown.addEventListener("change", function () {
        const selectedLeaveFrom = leaveFromDropdown.value;
        const optionsTo = toDropdown.querySelectorAll("option");
        
        optionsTo.forEach((option) => {
            option.disabled = false;
        });

        optionsTo.forEach((option) => {
            if (option.value === selectedLeaveFrom) {
                option.disabled = true;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const loadingOverlay = document.getElementById("loadingOverlay");
    const cardsContainer1 = document.getElementById("cardsContainer1");
    const cardsContainer2 = document.getElementById("cardsContainer2");
    loadingOverlay.style.display = "none";

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function shuffleCards() {
        const cards1 = Array.from(cardsContainer1.querySelectorAll(".card"));
        const cards2 = Array.from(cardsContainer2.querySelectorAll(".card"));
        shuffleArray(cards1);
        shuffleArray(cards2);
        cards1.forEach((card1) => {
            cardsContainer1.appendChild(card1);
        });
        cards2.forEach((card2) => {
            cardsContainer2.appendChild(card2);
        });
    }

    function simulateLoading() {
        loadingOverlay.style.display = "flex";
        setTimeout(function () {
            loadingOverlay.style.display = "none";
        }, 3000);
    }

    searchButton.addEventListener("click", function () {
        simulateLoading();
        shuffleCards();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const copyrightText = document.getElementById("easterEgg");
    const explosionImage = document.getElementById("explosion");

    function triggerExplosion() {
        explosionImage.style.transform = "translate(-50%, -50%) scale(1)";
        setTimeout(function () {
            explosionImage.style.transform = "translate(-50%, -50%) scale(0)";
        }, 500);
    }

    copyrightText.addEventListener("dblclick", function () {
        triggerExplosion();
    });
});


