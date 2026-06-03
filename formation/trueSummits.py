r'''
True Summits
------------

While on a hike, you are standing on the trail, looking up a peak, and wondering if it is the 
top of the mountain: the true summit. But the highest point is not always in view. It may be 
obscured by a false summit, a position that is lower than the true summit but stands in the way 
and obscures the highest point from view. For example:

                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - elevations

In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units 
high. So even though there is a higher peak further back, it can't be seen because a false summit 
is in the line of site. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result 
should be false; you cannot see the true summit, because there is another point in the way, 
blocking the view.

                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true 
summit is tall enough to be seen above everything in the foreground. However, if the value 11 is 
instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 
then becomes a false summit!

We can think about this from an urban perspective also! Imagine you are standing on a sidewalk 

                  |
                  |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
          X  |    |
  Height: 0  8  0  10
Position: 0  1  2  3  4  5  6

The function takes an array of elevations. The first elevation (at index 0) will be zero and is the 
position of the viewer. From there, the elevations at each position will potentially change and 
indicate the elevation at that point relative to the viewpoint. Return true if the highest visible 
point is the true summit.

EXAMPLE(S)

canSeeTrueSummit([0, 1, 2, 3, 4, 5]) == true
canSeeTrueSummit([0, 2, 3]) == false
canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]) == false
canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7]) == true
 
FUNCTION SIGNATURE

function canSeeTrueSummit(elevations)

EXPLORE
- observer is at hieght = 0

BRAINSTORM



- calculate the true peak
- store the slope for each peak [tp + fp] [map?]
don't need to store for each -- if highest peak has highest slope


slope = a[i] / i

PLAN

1. Set up our variables: maxHeight, maxSlope, isMaxVisible
2. Loop through the elevations list starting from index 1
   a. Calculate slope
   b. if elevations[i] > maxHeight
     i. maxHeight = elevations[i]
     ii. isMaxVisible = slope >= maxSlope
   c. maxSlope = max(slope, maxSlope)
3. Return isMaxVisible

'''


def canSeeTrueSummit(elevations):
    # 1. Set up our variables: maxHeight, maxSlope, isMaxVisible
    maxHeight = maxSlope = 0
    isMaxVisible = True
    # 2. Loop through the elevations list starting from index 1
    for i in range(1, len(elevations)):
        if elevations[i] > maxHeight :
            slope = elevations[i] / i
            if slope >= maxSlope:
                isMaxVisible = True
                maxSlope = max(slope,maxSlope)
                maxHeight = elevations[i]
            else:
                isMaxVisible = False

    return isMaxVisible

def canSeeTrueSummit(elevations):
    # 1. Set up our variables: maxHeight, maxSlope, isMaxVisible
    maxHeight = maxSlope = 0
    isMaxVisible = True
    # 2. Loop through the elevations list starting from index 1
    for i in range(1, len(elevations)):
    #     a. Calculate slope
        slope = elevations[i] / i
    #      b. if elevations[i] > maxHeight
        if elevations[i] > maxHeight :
            # i. maxHeight = elevations[i]
            # ii. isMaxVisible = slope >= maxSlope
            maxHeight = elevations[i]
            isMaxVisible = slope >= maxSlope
        maxSlope = max(slope,maxSlope)
    #     c. maxSlope = max(slope, maxSlope)
    # 3. Return isMaxVisible
    return isMaxVisible

print(canSeeTrueSummit([0, 1, 2, 3, 4, 5]) == True)    
print(canSeeTrueSummit([0, 2, 3]) == False)
print(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]) == False)
print(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7]) == True)
 
        
