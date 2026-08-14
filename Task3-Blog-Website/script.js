document.querySelectorAll(".article a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Thanks for reading this article!");
    });
});
