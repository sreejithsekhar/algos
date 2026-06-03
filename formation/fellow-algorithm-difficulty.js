/*
Algorithm Difficulty Assignment

Formation is trying to assign a group of Fellows algorithms of varying difficulty levels. The 
algorithm difficulty should feel fair to all Fellows based on each Fellow's algorithmic skill level.

We are given an array of integers representing the skill level of each Fellow. We must return 
an array of integers representing the algorithm difficulty for each Fellow, following these rules:

- Every Fellow must be assigned at least difficulty 1.
- If a Fellow has higher skill than an adjacent Fellow, they must receive a higher difficulty than that neighbor.
- If a Fellow has the same skill as an adjacent Fellow, they must receive the same difficulty.
- The assignment should use the minimum possible difficulties that satisfy all constraints.

Return the array of difficulties representing the minimum difficulty we can give each Fellow.
 
EXAMPLE(S)

fellows = [10, 20, 60, 70, 50, 10, 20]
assignAlgorithms(fellows) -> [1,2,3,4,2,1,2]
 
FUNCTION SIGNATURE

function assignAlgorithms (fellows)

EXPLORE

- Looking for the MINIMUM difficulties that satify the requirements
- No difficulty cap however we should come up with a strategy that keep difficult levels "reasonable"

BRAINSTORMING

- We can start everyone off with a algo of difficulty 1

[10, |20, 60, 70, | 50, 10, 20]
  1  3   5.   6

for (index in array)
  for (index in array)

for (index in array)
for (index in array)
10 20 40 70 50 40
1  2   3  4  1  1


[10, 20, 60, 70, 50, 10, 20]
  1. 2.  3.   4. 2.   1.  2


10, 20, 60, 70, 50, 10, 20]
  1. 2.  3.   4. 1.   1.  2


    <-
  10 20 20
  1  1.  2

PLAN

// intialize an array with the length of the input array and fill with 1 ([1] * len(fellows))
// for (index = 1 up to end of array)
//  - If a Fellow has higher skill than an adjacent Fellow, they must receive a higher difficulty than that neighbor.
    - If a Fellow has the same skill as an adjacent Fellow, they must receive the same difficulty.
//       if fellows[i] > fellows[i - 1] and (current value is smaller than or equal to value to the right):
            result[i] = result[i - 1] + 1
        elif fellows[i] == fellows[i - 1] and (current value is smaller than value to the right):
            result[i] = result[i - 1]


    # Left to right
    for i in range(1, n):
        if fellows[i] > fellows[i - 1]:
            result[i] = result[i - 1] + 1
        elif fellows[i] == fellows[i - 1]:
            result[i] = result[i - 1]

    # Right to left
    for i in range(n - 2, -1, -1):
        if fellows[i] > fellows[i + 1] and result[i] <= result[i + 1]:
            result[i] = result[i + 1] + 1
        elif fellows[i] == fellows[i + 1] and result[i] < result[i + 1]:
            result[i] = result[i + 1]
*/