// // String Concepts and Operations in JavaScript

// // 1. Creating Strings
// let str1 = "Hello, World!";
// let str2 = 'JavaScript is fun!';
// let str3 = `Template literals allow ${str2}`;

// // 2. String Length
// console.log(str1.length); // 13

// // 3. Accessing Characters
// console.log(str1[0]); // 'H'
// console.log(str1.charAt(1)); // 'e'

// // 4. String Concatenation
// let str4 = str1 + " " + str2;
// let str5 = `${str1} ${str2}`;
// console.log(str4);
// console.log(str5);

// // 5. Changing Case
// console.log(str1.toUpperCase()); // 'HELLO, WORLD!'
// console.log(str2.toLowerCase()); // 'javascript is fun!'

// // 6. Searching in Strings
// console.log(str1.indexOf("World")); // 7
// console.log(str1.includes("Hello")); // true
// console.log(str1.startsWith("Hello")); // true
// console.log(str1.endsWith("!")); // true

// // 7. Extracting Substrings
// console.log(str1.slice(7, 12)); // 'World'
// console.log(str1.substring(7, 12)); // 'World'
// console.log(str1.substr(7, 5)); // 'World' (deprecated)

// // 8. Replacing Content
// let str6 = str1.replace("World", "JavaScript");
// console.log(str6); // 'Hello, JavaScript!'

// // 9. Splitting and Joining
// let words = str2.split(" ");
// console.log(words); // ['JavaScript', 'is', 'fun!']
// console.log(words.join("-")); // 'JavaScript-is-fun!'

// // 10. Trimming Whitespace
// let str7 = "   padded string   ";
// console.log(str7.trim()); // 'padded string'

// // 11. Repeat
// console.log("ha".repeat(3)); // 'hahaha'

// // 12. Escape Characters
// let str8 = "He said, \"JavaScript is awesome!\"";
// console.log(str8);

// // 13. Comparing Strings
// console.log("apple" < "banana"); // true

// // 14. String to Array and Back
// let chars = Array.from(str1);
// console.log(chars);
// console.log(chars.join(""));

// // 15. Template Literals (Multiline)
// let multiLine = `This is
// a multiline
// string.`;
// console.log(multiLine);


let name="Kunal";

console.log(name.length);
console.log(name.toUpperCase()); // 'K'
console.log(name.toLowerCase());
console.log(name.charAt(4));
console.log(name.indexOf("a")); // 2
console.log(name.includes("o")); // true
console.log(name.startsWith("K")); // true
console.log(name.endsWith("l")); // true
console.log(name.slice(1, 4)); // 'una'
console.log(name.substring(1, 4)); // 'una'         
console.log(name.replace("Kunal", "Kunal Singh")); // 'Kunal Singh'
console.log(name.split("")); // ['K', 'u', 'n', 'a', 'l']
console.log(name.trim()); // 'Kunal'
console.log(name.repeat(2)); // 'KunalKunal'
console.log("Hello, " + name + "!"); // 'Hello, Kunal!'

console.log(`Hello, ${name}!`); // 'Hello, Kunal!'
console.log(name.charCodeAt(0)); // 75 (ASCII value of 'K')
console.log(name.codePointAt(0)); // 75 (Unicode code point of 'K')
console.log(name.localeCompare("Kunal Singh")); // -1 (indicating 'Kunal' comes before 'Kunal Singh')
console.log(name.match(/a/)); // ['a'] (matches the first occurrence of 'a')
console.log(name.search("n")); // 2 (index of first occurrence of 'n')      
console.log(name.split("a")); // ['Kun', 'l'] (splits the string at 'a')
console.log(name.toString()); // 'Kunal' (converts to string)       
console.log(name.valueOf()); // 'Kunal' (returns the primitive value of the string)
console.log(name.padStart(10, " ")); // '     Kunal' (pads the start with spaces)
console.log(name.padEnd(10, "!")); // 'Kunal!!!!!' (pads the end with exclamation marks)
console.log(name.normalize()); // 'Kunal' (normalizes the string, useful for Unicode characters)
console.log(name.includes("K", 1)); // false (searches for 'K' starting from index 1)
console.log(name.startsWith("K", 1)); // false (checks if 'Kunal