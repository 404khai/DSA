// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
// import java.util.HashMap;
// import java.util.Map;

// public class twoSum{
//     public int[] twoSum(int[] nums, int target) {
//         HashMap<Integer, Integer> seen = new HashMap<>();

//         for (int i = 0; i < nums.length; i++){
//             int number = nums[i];
            
//             int comp = target - number;
            
//             if(comp){
//                 return comp[i] nums[i];
//             } else{
//                 // Key = number, Value = index
//                 seen.put(number, i);
//             }
            
//         }

//         return int[] nums = []
            
//     }

                

// }

import java.util.HashMap;
import java.util.Arrays;

public class twoSum {

    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> seen = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int number = nums[i];
            int complement = target - number;

            // Have we seen the complement before?
            if (seen.containsKey(complement)) {
                return new int[] { seen.get(complement), i };
            }

            // Store current number and its index
            seen.put(number, i);
        }
        
        return new int[] {};
    }

    public static void main(String[] args) {
    
        twoSum solution = new twoSum();
    
        int[] nums1 = {2, 7, 11, 15};
        System.out.println(Arrays.toString(solution.twoSum(nums1, 9)));
    
        int[] nums2 = {3, 2, 4};
        System.out.println(Arrays.toString(solution.twoSum(nums2, 6)));
    
        int[] nums3 = {3, 3};
        System.out.println(Arrays.toString(solution.twoSum(nums3, 6)));
    }
}

