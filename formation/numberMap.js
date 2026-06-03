For num = 1, the output should be
solution(num) = "One";
For num = 123, the output should be
solution(num) = "One Hundred Twenty Three";
For num = 12345, the output should be
solution(num) = "Twelve Thousand Three Hundred Forty Five";
For num = 1234567, the output should be
solution(num) = "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven".
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer num

Guaranteed constraints:
0 ≤ num ≤ 231 - 1.

[output] string

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
    console.log(12345 % 10)
    console.log(12345 % 100)
    console.log(12345 % 1000)
    console.log(12345 % 10000)
    console.log(12345 % 100000)
    
    const numberMap = new Map([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'ninteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninty'],
        [100, 'hundred'],
        [1000, 'thousand'],
        [1000000, 'million']
    ]);
    
    const baseMap = new Map([
        [3, 'thousand'],
        [2, 'hundred']
    ])
    
    console.log(numberMap.get(80))
    

    if (num <= 20) {
        return numberMap.get(num);
    } else if (num <= 99) {
        ns = ('' + num).split('');
        console.log(ns)
        return (numberMap.get(Number(ns[0]) * 10) + ' ' + numberMap.get(Number(ns[1])))
    } else if (n <= 9,999) {
        
    }
}
