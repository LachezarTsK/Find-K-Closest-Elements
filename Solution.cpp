
#include <vector>
using namespace std;

class Solution {
    
public:
    vector<int> findClosestElements(vector<int>& input, int numberOfClosestElementsToFind, int elementToCompare) const {
        size_t left = 0;
        size_t right = input.size() - numberOfClosestElementsToFind;

        while (left < right) {
            size_t middle = left + (right - left) / 2;

            if (elementToCompare - input[middle] > input[middle + numberOfClosestElementsToFind] - elementToCompare) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }

        return vector<int>(input.begin() + left, input.begin() + left + numberOfClosestElementsToFind);
    }
};
