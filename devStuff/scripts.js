let count = 0;

document.getElementById("increment").addEventListener("click", function() {
    count++;
    document.getElementById("countDisplay").innerText = count;
});


