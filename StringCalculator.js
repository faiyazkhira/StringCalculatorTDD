function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /,|\n/; // Default delimiters (comma or newline)
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        let delimiterStr = numbers.substring(2, delimiterEndIndex);

        //Handling multiple delimiters
        if (delimiterStr.startsWith("[")) {
            delimiterStr = delimiterStr.substring(1, delimiterStr.length - 1);
            delimiterStr = delimiterStr.split("][").map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
        } else {
            delimiterStr = delimiterStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters in delimiter
        }

        delimiter = new RegExp(delimiterStr);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

module.exports = add;
