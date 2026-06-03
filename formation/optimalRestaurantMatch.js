/*

Ned and Mary want to choose a restaurant to bring their kids to for the evening, and they both have a list of their favorite places, represented by strings and sorted by preference.
The place they each prefer the most is at the beginning of the list, and their least preferred at the end.

You need to help them find the optimal match to dine at based on their combined preferences score. They will often have to compromise, so their ideal option is a place they both have on their list, and it has the highest combined preference score.

To calculate the highest combined preference score, get the restaurant with the minimum index sum when adding the indices of the restaurant on both of their lists together. If multiple restaurants have the same highest score, output all of them.
 
EXAMPLE(S)
Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".


Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: They both have "Shogun" on their preferred list and it has the highest preference score with an index sum of 1 (0+1). They both listed "KFC" but it has a lower preference score because the index sum is 3 (0+3). Likewise, "Burger King" has a preference score of 4 (2+2).

Input:
nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]
Output: ["Guppy House", "In-n-Out"]
Explanation: They both have "Guppy House" and "In-n-Out" on their preferred list and both restaurants have the same highest total preference score with an index sum of 1 (0+1 and 1+0). They both listed "Dairy Queen" but the preference score is 4 (2+2).
 
FUNCTION SIGNATURE
function findCompatibleRestaurantsBetween(ned, mary) {
def findCompatibleRestaurantsBetween(ned: list[str], mary: list[str]) -> list[str]:


A B C D / E F G A => A
A B C / B A C => A B
A B C / D E F => 0
 / A B C => 0
A B C D E F G / G => G
A B C / C B A => A B C
A B C Z X D / D F G A -> A
A B C D / D C A F -> A

BRAINSTORMING:

n = number of items in ned's
m = number of itesm in mary's list
x = max of n & m

- T(n * m) S(1) D(1,2) brute force solution
- T(n + m) S(x) D(1,2) Create a map { name -> { isInBoth:bool, totalScore:int } }.  Iterate over each list, one at a time.  In the first pass, just add keys with an { false, index } as the value.  IN the second pass, we set isInBoth, if the restaurant exists in the second list, and we add the second score to the totalScore.  Walk through the map, looking for the lowest score, and return the restaurant(s) with that score.
- T(n + m) S(x) D(1) Walk through one of the kids' arrays, creating a map { name -> score }.  Then walk through the other kid's list, and ignore anything that isn't in the map.  If it is in the map, compute the combined score.  If this is lower than our best score so far, remember this as our candidate restaurant.  If this is the same as our best score, just add this restaurant to the list.


PLANNING:

- T(n + m) S(x) D(1) Walk through one of the kids' arrays, creating a map { name -> score }.  Then walk through the other kid's list, and ignore anything that isn't in the map.  If it is in the map, compute the combined score.  If this is lower than our best score so far, remember this as our candidate restaurant.  If this is the same as our best score, just add this restaurant to the list.


Shopping List:

  - algo to convert one kid's list into our {name -> score} map.
    - for each restaurant, add the { name -> index } into the map
  - a loop over the second kid's list
    - a check whether the restaurant is in the map
    - a check if the combined score is the same best score so far
      - code to add the current name to the list
    - a check to see if the combined score is better than the best score so far
      - replace the list with just this one restaurant
      - update the best score
  - variables for best score so far, and a list of all the restaurants with that score
*/

function findCompatibleRestaurantsBetween(list1, list2) {
  let scoreMap = {};
  let bestScore = Number.MAX_SAFE_INTEGER; 
  let results = [];

  let shortList = list1;
  let longList = list2;
  if (shortList.length > longList.length) {
    [longList, shortList] = [shortList, longList];
  }

  for (let score = 0; score < shortList.length; score++) { 
    const currRestaurant = shortList[score];
    scoreMap[currRestaurant] = score;
  }
  console.log(scoreMap);
  for (let idx = 0; idx < longList.length; idx++) { 
    const currRestaurant = longList[idx];
    
    if (scoreMap[currRestaurant]) { 
      const currCombinedScore = idx + scoreMap[currRestaurant];
      if (bestScore > currCombinedScore) { 
        result = [currRestaurant];
      } else if (bestScore === currCombinedScore) {
        result.push(currRestaurant);
      }
    }
  }

  return results;
}

nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

console.log(findCompatibleRestaurantsBetween(nedsChoices, marysChoices));