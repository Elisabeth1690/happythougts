const flowers = [
    "picture/ChatGPT_bell.png",
    "picture/ChatGPT_flower.png",
    "picture/ChatGPT_tulip.png",
    "picture/ChatGPT_rose.png",
];


console.log("flowers:", flowers);

const quotes = [
     "Positivitet er en kraftig magnet",
    "Gi slipp på det som ikke gir deg glede",
    "Ta vare på de som tar vare på deg", 
    "Små steg fører til store forandringer",
    "Du er mer enn du tror",
    "Lys finner alltid veien", 
    "Takk for at du er du",
    "Du er smart",
    "Du er god",
    "Du er råkul",
    "Et sted skinner solen like mye som smilet ditt",
    "Det er innsiden som teller",
    
];

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function grow() {
    const seed = document.getElementById("seed");
    const flower = document.getElementById("flower");
    const flowerImg = document.getElementById("flowerImg");
    const quote = document.getElementById("quote");

    seed.style.display = "none";
    flower.style.display = "block";

    flowerImg.src = randomItem(flowers);
    quote.textContent = randomItem(quotes);

    setTimeout(() => {
        flowerImg.classList.add("visible");
        quote.classList.add("show");
    }, 50);

    setTimeout(reset, 6000);
}

function reset() {
    const seed = document.getElementById("seed");
    const flower = document.getElementById("flower");
    const flowerImg = document.getElementById("flowerImg");
    const quote = document.getElementById("quote");

    flowerImg.classList.remove("visible");
    quote.classList.remove("show");

    setTimeout(() => {
        flower.style.display = "none";
        seed.style.display = "block";
    }, 1500);
}
