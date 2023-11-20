# Linear Search

* Search each item in the list from start to finish.
* If you find the item return its index.
* If not, return the length of the list or -1, whichever you wish.

| 0  | 1 | 2  | 3  | 4  | 5  | 6  | 7  |
|----|---|----|----|----|----|----|----|
| 15 | 4 | 41 | 13 | 24 | 14 | 12 | 21 |

```
L[0] == 14? NO!
L[2] == 14? NO!
L[3] == 14? NO!
L[4] == 14? NO!
L[5] == 14? NO!
L[6] == 14? YES!
```

## Linear Search Flowchart
<img src="images/Untitled Diagram.drawi.svg">

# Binary Search
**Binary Search** is a search algorith **used in a sorted array** by repeatedly dividing the search interval in half.
Becasue we repeatedly divide the serach space, it is said to follow the **divide and conquer approach**

## Algorithm in pseudo code

1. Sort the list!!!
1. Set low - first item in list
1. Set high = last item in list
1. Set mid = (high + low) //2  <--- use floor division here
1. If item at mid location return item, else it must be to the left or right of the middle.
1. If the value at the mid position is less than the target value
    * Set low = mid + 1
1. If the value at the mid position is less than the target value
    * Set high = mid - 1
    
**Make sure that low is never greater than high**

| 0 | 1 | 2 | 3 | 4 | 5 | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|----|----|----|----|----|----|----|----|----|----|
| 2 | 4 | 5 | 7 | 8 | 9 | 12 | 14 | 17 | 19 | 22 | 25 | 27 | 28 | 33 | 37 |

### Psuedo-code: 
1. Set low = 0
2. Set high = length of list -1
3. Set mid = (low + high) / 2, rounded down to an integer
4. If the value at them idposition is the same as the target value
    * Return mid
5. Else if the Value at the mid position is less than the target value
    * Set low = mid + 1
6. Else if the value at hte mid position is greater than the target value
    

# Sort Algorithms
## Algorithm in pseudo code
1. Initialise an unsorted list
2. Initialise an empty sorted list
3. Repeat as long as there are items in teh unsorted list
4. Find the smallest item
5. Move the smallest itemn to the unsorted olist
6. Remove the item from the original lest
7. Stop

# The Insertion Sort
The steps in the insertion sort algorithm are as follows:

1. The first item considered to be sorted with respect to itself
1. Select the first item from the unsorted list
1. Insert the selected item into the  correct position within the sorted list (this is done by swapping this item to the left until it arrives at the correct position)
1. advance the mareker to the right by one position

# Quicksort
1. Choose the rightmost element in the list as the "pivot"
1. Create three empty lists called "left_list", middle_list" and "right_list"
- if "element" is < pivot add it to left_list
- if "element" is == pivot add it to middle_list
- if "element" is > pivot add it to right_list
4. The result is a list made up by applying steps 1-3 to left_list, followewd by the elements in middle_list, followed by applying steps 1-3 to right_list

Quicksort is a divide and Conquer algorithm