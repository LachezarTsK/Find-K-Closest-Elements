
import java.util.Arrays;
import java.util.List;

public class Solution {

    public List<Integer> findClosestElements(int[] input, int numberOfClosestElementsToFind, int elementToCompare) {
        int left = 0;
        int right = input.length - numberOfClosestElementsToFind;

        while (left < right) {
            int middle = left + (right - left) / 2;

            if (elementToCompare - input[middle] > input[middle + numberOfClosestElementsToFind] - elementToCompare) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }

        return Arrays.stream(Arrays.copyOfRange(input, left, left + numberOfClosestElementsToFind)).boxed().toList();
    }
}
