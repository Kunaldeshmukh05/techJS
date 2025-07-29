let count = 0;

document.getElementById("but1").addEventListener("click", function() {
    count++;
    document.getElementById("display").innerText = count;
});


const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'"
];

let jokeIndex = 0;

document.getElementById("joke").addEventListener("click", function() {
    document.getElementById("jokedisplay").innerText = jokes[jokeIndex];
    jokeIndex = (jokeIndex + 1) % jokes.length;
});
