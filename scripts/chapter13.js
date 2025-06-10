document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        // Prevent form submission
        event.preventDefault();

        // Collect form fields
        const inGame = document.getElementById("in-game");
        const discord = document.getElementById("discord");
        const email = document.getElementById("email");
        const description = document.getElementById("questions");
        const mapOptions = document.getElementsByName("map");

        let valid = true;
        let errorMessages = [];

        // In-game name validation
        if (inGame.value.trim() === "") {
            valid = false;
            errorMessages.push("In-game name is required.");
        }

        // Discord validation
        if (discord.value.trim() === "") {
            valid = false;
            errorMessages.push("Discord name and tag are required.");
        }

        // Email validation (optional field but must be valid if filled)
        if (email.value.trim() !== "" && !/\S+@\S+\.\S+/.test(email.value)) {
            valid = false;
            errorMessages.push("Please enter a valid email address.");
        }

        // Map selection validation
        const mapSelected = Array.from(mapOptions).some(option => option.checked);
        if (!mapSelected) {
            valid = false;
            errorMessages.push("Please select a map.");
        }

        // Description validation (optional but can have min length)
        if (description.value.trim().length < 10) {
            valid = false;
            errorMessages.push("Please provide more details in the lineup description (minimum 10 characters).");
        }

        // Show errors or submit
        if (!valid) {
            alert("Please fix the following errors:\n\n" + errorMessages.join("\n"));
        } else {
            // If all validations pass
            alert("Form submitted successfully!");
            form.submit(); // Proceed with form submission
        }
    });
});