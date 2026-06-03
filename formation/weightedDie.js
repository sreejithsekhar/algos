// In a game we are building, we need to choose some actions at random, but the probability of each action is not always the same. 
// In order to implement this, we are building a WeightedDie class. 
// Let's say we want to simulate a 6 sided die but we want the first and second faces to be twice as likely as the others to occur. 
// We simulate this by creating a new instance of the object with the following input array:
// [2, 2, 1, 1, 1, 1]
// Each entry in the array represents one face of the die. The value at each position indicates the weight of that face relative to the others. 
// A face with weight 2 is twice as likely to be occur as a face with weight 1.
// The roll() function simulates a roll and returns the index of a face. Given these weights, we should see a zero 25% of the time, a one 25% of the time, and the other faces 12.5% of the time.
// Example(s)
// For a WeightedDie initialized with:
// [1, 1], roll() will return 0 and 1 each 50% of the time.
// [2, 3], roll() will return 0 40% of the time and a 1 60% of the time.
// [1, 1, 2], roll() will return 0 25% of the time, a 1 25% of the time, and a 2 50% of the time.
// [1, 1, 1, 1, 1, 1], roll() will return each of 0 through 5 approximately 16.66% of the time.

/*

Explore:
there will be atleast two sides
there is no zero probability

brain storm:
    is this a math problem?
    there could be a math formula to calculate distrubuted probablities
    and there could be a random function to generate based on this distrubution

    another approach:
        js supports unifrom distribution so we need to convert that to this

        [2, 3, 5] -> becomes a range, through uniform distribution we need math.random(2 + 3 + 5)
        and if the number falls between a range show that face.

        in this example:
            face1 (0) -> 1, 2
            face2 (1) -> 3, 4, 5
            face3 (2) -> 6, 7, 8, 9, 10

        [2, 3, 5] -> prefix sum -> [2, 5, 10]
        binary search for finding the face

plan:
    iterate the array
        calculate prefix sum O(n)

    const rand = math.rand(prefixSum[n-1])

    
    // binary search
    // example [2, 3, 5, 1, 4]
    pre [2, 5, 10, 11, 15]
         0  1   2   3   4

    l = 0
    r = 4
    while (l < r) {
    m = Math.ceil(r - l / 2)
     case 7:
    if (m > case) {
        r = m
    } else if (m < case ) // case 12 {
        l = m + 1 
    } else if (m === case) return m
    }

    return r;

*/


class WeightedDie {
    constructor(weights) { 
        this.prefix = [weights[0]];
        for (let i = 1; i < weights.length; i++) {
            this.prefix.push(weights[i] + this.prefix[i-1])
        }
        this.max = this.prefix[this.prefix.length - 1];
    }
    roll() { 
        const rand =  Math.floor(Math.random() * (this.max - 1 + 1)) + 1;

        let l = 0;
        let r = this.prefix.length - 1;

        let count = 0;

        while (l < r) {
            let m = Math.floor(l + (r - l) / 2);

            if (count++ === 20) {
                return -1;
            }

            if (this.prefix[m] === rand) {
                return m;
            }

            if (this.prefix[m] > rand) {
                r = m;
            } else if (this.prefix[m] < rand) {
                l = m + 1;
            }
        }

        return r;
    }
}

const W = new WeightedDie([2, 3, 5, 1, 4])


for (let i = 0; i<= 15; i++) {
    console.log('roll', W.roll());
}