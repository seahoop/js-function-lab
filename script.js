function isAdult(x) {
    if (x >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(`Exercise 2 Result`, isAdult(21));
