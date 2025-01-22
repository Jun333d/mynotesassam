function toggleDropdown(id) {
    const dropdown = document.getElementById(id);

    // Check if the dropdown is already open
    if (dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px") {
        dropdown.style.maxHeight = "0px"; // Close the dropdown
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Open the dropdown
    }
}