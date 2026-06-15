// For num = 1, the output should be
// solution(num) = "One";
// For num = 123, the output should be
// solution(num) = "One Hundred Twenty Three";
// For num = 12345, the output should be
// solution(num) = "Twelve Thousand Three Hundred Forty Five";
// For num = 1234567, the output should be
// solution(num) = "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven".
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] integer num

// Guaranteed constraints:
// 0 ≤ num ≤ 231 - 1.

// [output] string

/*

explore:
    assume correct validity
    should be non negative number
    no special cases
    no large number validity
    will go till million

brainstorm:
    use a map
        for 0 to 19
        20, 30 upto 100
        1000, 1000,000
        
    for numbers upto 20 directly fetch from map
    above 20 
        need to split and bassed on the base will pick from map
     Time: O(d) // go through each digit in the number
     Space: O(1) // digit map
     
     untik 9999
        split and module and retrieve from map
    10,000 and till 999,999
        
     
plan:
    create number map
    create a base 10 map
    {
        3: 'thousand'
        2: 'hundred
        1: 'ten'
    }
    if (n <= 20) {
        take from map
    } else  if (base <= 99) {
                    ns = n.split('') -> 9, 9
                    string.append(numberMap.get(ns[0]* 10) + ' ' + numberMap.get(ns[1]))
            }
     else if (n <= 9,999) {
        numsArray = []
        ns = n.split('') -> 9, 9, 9, 9
        iterate over splits
            base = ns.length - index - 1
            string.append(numbaerMpa[ns[index]] + ' ' +  baseMap[base])
    }
    
    return string
    
    12345 -> 1, 2, 3, 4, 5 -> 10,000 2000 300 40 5
    twelve thousand three hundred forty five
     12      1000     3     100    40    5


*/
function solution(num) {
    const numberMap = new Map([
        [0, 'Zero'],
        [1, 'One'],
        [2, 'Two'],
        [3, 'Three'],
        [4, 'Four'],
        [5, 'Five'],
        [6, 'Six'],
        [7, 'Seven'],
        [8, 'Eight'],
        [9, 'Nine'],
        [10, 'Ten'],
        [11, 'Eleven'],
        [12, 'Twelve'],
        [13, 'Thirteen'],
        [14, 'Fourteen'],
        [15, 'Fifteen'],
        [16, 'Sixteen'],
        [17, 'Seventeen'],
        [18, 'Eighteen'],
        [19, 'Ninteen'],
        [20, 'Twenty'],
        [30, 'Thirty'],
        [40, 'Forty'],
        [50, 'Fifty'],
        [60, 'Sixty'],
        [70, 'Seventy'],
        [80, 'Eighty'],
        [90, 'Ninty'],
        [100, 'Hundred'],
        [1000, 'Thousand'],
        [1000000, 'Million']
    ]);
    
    const for100 = (n) => {
        if (n <= 20 || (n % 10 === 0 && n <= 100)) {
            return numberMap.get(n);
        } else if (n <= 99) {
            let ns = ('' + n).split('');
            return (numberMap.get(Number(ns[0]) * 10) + ' ' + numberMap.get(Number(ns[1])))
        }
    }

    const for9999 = (n) => {
        let ns = ('' + n).split('');
        const lastTwo = n % 100;
        let numberChar = lastTwo ? for100(lastTwo) : '';
        if (ns.length === 4) {
            numberChar = numberMap.get(Number(ns[0])) + ' Thousand ' + numberMap.get(Number(ns[1])) + ' Hundred ' + numberChar;
        } else {
            numberChar = numberMap.get(Number(ns[0])) + ' Hundred ' + numberChar;
        }
        return numberChar;
    }

    const for999999 = (n) => {
        const lastThree = n % 1000;
        const firstThree = Math.floor(n / 1000);
        let numberChar = lastThree ? for9999(lastThree) : '';
        numberChar = for9999(firstThree) + ' Thousand ' + numberChar;
        return numberChar;
    }

    if (num <= 100) {
        return for100(num);
    } else if (num <= 9999) {
        return for9999(num);
    } else if (num <= 999999) {
       return for999999(num);
    }
}

console.log('3', solution(3))
console.log('11', solution(11))

console.log('70', solution(70))
console.log('100', solution(100))
console.log('77', solution(77))

console.log('150', solution(150))
console.log('1500', solution(1500))
console.log('99999', solution(9999))

console.log('999_999', solution(999999))

