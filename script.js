document.getElementById("AboutAkan").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate inputs
    if (!year || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate Akan name based on year and gender
    const birthYear = parseInt(year);
    const dayOfWeek = new Date(birthYear, 0, 1).getDay(); // Simplified logic for demonstration
    const akanNames = {
        male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
        female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    };

    // Generate Akan name (simplified logic - replace with actual name generation)
    let akanName;
    if (gender === "male") {
        akanName = akanNames.male[dayOfWeek];
    } else {
        akanName = akanNames.female[dayOfWeek];
    }

    // Display result
    document.getElementById("displayName").textContent = akanName;

    resultBox = document.getElementById("result");
    resultBox.classList.remove("hidden");
    document.getElementById("displayName").textContent = akanName;
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("clearBtn").addEventListener("click", function() {
    // Clear form inputs
    document.getElementById("year").value = "";
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => radio.checked = false);

    // Hide result
    document.getElementById("result").classList.add("hidden");
});



