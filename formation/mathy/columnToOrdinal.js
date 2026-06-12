// """
// In most spreadsheets, the rows are named with numbers(starting at 1), and the columns are given names that are strings of capital letters.The first column is 'A', the second is 'B' up to the 26th which is 'Z'.At that point, they progress to 'AA' for 27, then 'AB' for 28, etc.

// As part of our new product, we need functions to convert between these column header strings and their ordinal values, and vice versa!

// Start out with the column - header - to - ordinal direction.If you get that working, do the inverse!

// The challenges arise from our labeling system not having a character that represents zero.This problem will make you thankful that ancient Babylonian, Chinese, and other civilizations came up with the idea of zero.

//   EXAMPLE(S)
// columnToOrdinal("A") => 1
// columnToOrdinal("J") => 10
// columnToOrdinal("Z") => 26
// columnToOrdinal('AA') => 27
// columnToOrdinal('AB') => 28
//                 'ZZB'
//                 6*26^2 + 26*26^1 + 2*26^0
//                 18,254

//                 18,254 % 26 = 2 -> B
//                 18,254 // 26 = 702
//                 702 % 26 = 0 -> Z
//                 702 // 26 = 27
//                 27 % 26 = 1

//                 1000
//                 10 x 10 x 10 + 0
//                 1*10^3 + 2*10^2 + 3*10 + 4*1

//                 1234 -> ABCD
//                 1*26^3 + 2*26^2 + 3*26 + 4*1 = 19,010
//                 A

// ordinalToColumn(1) => "A"
// ordinalToColumn(26) => "Z"
// ordinalToColumn(27) => "AA" ====> 26 + 1
// ordinalToColumn(52) => "AZ" ====> 26 + 26
// ordinalToColumn(53) => "BA" ====> 26 * multiplier + remainder for the last letter
// ordinalToColumn(19,010//1) % 26 = 4 -> D
//                 19,010 // 26 = 731 % 26 = 3 -> C
//                 731 // 26 = 28 % 26 = 2 -> B
//                 28 // 26 = 1 % 26 = 1 -> A

// FUNCTION SIGNATURE
// function columnToOrdinal(headerStr)
// function ordinalToColumn(ord)

// # B A
// # 26 x 2 + 1

// explore:
// A to Z then AA to AZ to BA to ZZ then AAA to ZZZ to ....*

// """

// """
// columnToOrdinal('AB') => 28
//                 'ZZB'
//                 26*26^2 + 26*26^1 + 2*26^0
//                 18,254
// """

function columnToOrdinal(headerStr) {
    let value = 0;
    for (let i = 0; i < headerStr.length; i++) {
        value = value * 26;
        value += headerStr[i].charCodeAt() - 'A'.charCodeAt() + 1;
    }
    return value;
}

function ordinalToColumn(ord) {
    const reversed = [];
    while (ord > 0) {
        ord--;
        reversed.push(String.fromCharCode('A'.charCodeAt() + (ord % 26)));
        ord = Math.floor(ord / 26);
    }

    return reversed.reverse().join('');
}