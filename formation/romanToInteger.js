// You are an early explorer in the Roman Empire and you have uncovered a lost scroll written in familiar characters. The characters appear to be Roman numerals. You are tasked with decphiering these Roman numerals to an integer that the explorer party is able to understand.
// Write a function that takes a string as input and returns the integer value of the Roman numeral.
// The roman numerals are thought to be represented by the following characters:
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Rules:
// Roman numerals seem to be written largest to smallest from left to right with some exceptions. 
// 4 seems to be written as IV, not as IIII. Because the one is before the five we subtract it making four. 
// The same principle seems to be applied to the number 9, which is written as IX. 
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Example(s)
// Input: s = "MMXXIV"
// Output: 2024
// M = 1000
// M = 1000
// X = 10
// X = 10
// IV = 4
// 1000 + 1000 + 10 + 10 + 4 = 2024 

function romanToInt(s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let integer = 0;
    for (let i =0; i < s.length; i++) {
        const c = s[i];
        const nc = i + 1 < s.length ? s[i + 1] : null;

        if (
            (c === 'I' && (nc === 'V' || nc === 'X')) ||
            (c === 'X' && (nc === 'L' || nc === 'C')) ||
            (c === 'C' && (nc === 'D' || nc === 'M'))
        ) {
            integer += (romanMap.get(nc) - romanMap.get(c));
            i++;
        } else {
            integer += romanMap.get(c);
        }
    }

    return integer;
}

console.log(romanToInt("III") === 3);
console.log(romanToInt("LVIII") === 58);
console.log(romanToInt("MCMXCIV") === 1994);
console.log(romanToInt("X") === 10);
console.log(romanToInt("XX") === 20);
console.log(romanToInt("XXX") === 30);
console.log(romanToInt("L") === 50);
console.log(romanToInt("IV") === 4);  // I before V (5)
console.log(romanToInt("IX") === 9);  // I before X (10)
console.log(romanToInt("XL") === 40); // X before L (50)
console.log(romanToInt("XC") === 90); // X before C (100)
console.log(romanToInt("CD") === 400); // C before D (500)
console.log(romanToInt("CM") === 900); // C before M (1000)
