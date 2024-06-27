function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /,|\n/; // Default delimiters (comma or newline)
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        let delimiterStr = numbers.substring(2, delimiterEndIndex);
        delimiterStr = delimiterStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters in delimiter
        delimiter = new RegExp(delimiterStr);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
