document.getElementById("button").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    let url = "https://localhost:8080/";

    // Construct the query string
    const queryString = new URLSearchParams({
        name: name,
        year: year
    }).toString();

    // Update the h3 element with the new URL
    document.getElementById("url").innerText = url + "?" + queryString;
});