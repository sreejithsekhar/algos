'''/*
Design a structure to efficiently manage a data set in order of access. The most recently accessed data is always at the end. The data least recently accessed is at the beginning.

This data structure should be implemented as a class. The constructor takes the data in the form of an array and initializes the instance.

This class must also support a fetch method that takes an ordinal (one based index) and returns the data at that position, but it also moves it to the end, due to it being accessed. For example, if the data is initially [5, 7, 3], and we access the 1st value, 5 is returned and afterward the data will be [7, 3, 5]. If then we access the 3rd value, the 5 is again returned but the order is unchanged since the 5 was already at the end.
 
EXAMPLE(S)
const q = new MRQueue([5, 7, 3]);
console.log(q.fetch(1)); // returns 5 now it's [7, 3, 5]
console.log(q.fetch(1)); // returns 7
console.log(q.fetch(3)); // returns 7

Clarifications:
ordinal = starts at 1
fetch just reorders the elements. size stays the same
can the queue be empty? return None
out of bounds? return None
values can be duplicates

7,3,4,5 -> ordinal = 3 -> 7,3,5,4

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
|         |           |              |

N=20

4 (N/5) groups
5 (N/4) elements per group


[1,2,3,4,5]
[6,7,8,9,10]
[11,12,13,14,15]
[16,17,18,19,20]

fetch(12)

[1,2,3,4,5]
[6,7,8,9,10]
[11,13,14,15]
[16,17,18,19,20,12]

fetch(12)

[1,2,3,4,5] 5 elements up until now
[6,7,8,9,10] 10 elements up until now
[11,13,14,15] 14
[16,17,18,19,20,12,13]

"indexing" -> O(number of groups)
.remove, push to end -> O(group size)


FUNCTION SIGNATURE
class MRQueue {
  constructor(data)
  fetch(ordinal)
}

class MRQueue:
  __init__(self, data):
  fetch(ordinal):


*/

'''
import math
from collections import defaultdict
class MRQueue:
  def __init__(self, data):
    num_lists = math.floor(len(data) ** (1/2))
    self.num_len = math.ceil(len(data) ** (1/2))

    self.groups = defaultdict(list)

    group_idx = 0
    inner_idx = 0

    for val in data:
      self.groups[group_idx].append(val)
      inner_idx += 1
      if inner_idx >= self.num_len:
        inner_idx = 0
        group_idx += 1

  def fetch(self, ordinal):
    #get position with groups
    total_index = 0
    item_idx = []
    for group_idx, group in self.groups.items():
      if total_index + len(group) > ordinal-1:
         item_idx = [group_idx, ordinal-total_index-1]
         break
      total_index += len(group)

    last_item = list(self.groups.keys())[-1]

    #add item to end
    self.groups[last_item].append(self.groups[item_idx[0]][item_idx[1]])
    #remove item
    fetched = self.groups[item_idx[0]].pop(item_idx[1])
    #prune if group len is 0
    if len(self.groups[item_idx[0]]) == 0:
      del self.groups[item_idx[0]]
    #split if too long
    if len(self.groups[last_item]) >= 2 * self.num_len:
      self.groups[last_item+1] = [last_item][self.num_len:]

    return fetched


test1 = MRQueue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])


#tested repeatedly to ensure that pruning occurs
#looks like there's a bug that prevents the 
print(test1.groups)

print(test1.fetch(5))

print(test1.groups)

print(test1.fetch(5))

print(test1.groups)
print(test1.fetch(5))

print(test1.groups)
print(test1.fetch(5))

print(test1.groups)

print(test1.fetch(5))

print(test1.groups)
print(test1.fetch(5))

print(test1.groups)