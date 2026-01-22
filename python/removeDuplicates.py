from typing import List

def removeDuplicates(nums: List[int]) -> int:
    """
    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
    such that each unique element appears only once. The relative order of the elements should be kept the same.
    
    Returns k, where the first k elements of nums contain the unique numbers in sorted order.
    """
    if not nums:
        return 0
    
    # k is the index where the next unique element should be placed
    # Initialize k=1 because the first element (index 0) is always unique
    k = 1
    
    for i in range(1, len(nums)):
        # If current element is different from the previous one, it's a new unique element
        if nums[i] != nums[i - 1]:
            nums[k] = nums[i]
            k += 1
            
    return k

if __name__ == "__main__":
    # Example 1
    nums1 = [1, 1, 2]
    expected1 = [1, 2]
    k1 = removeDuplicates(nums1)
    print(f"Example 1: k={k1}, nums={nums1[:k1]}")
    assert k1 == len(expected1)
    assert nums1[:k1] == expected1
    
    # Example 2
    nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expected2 = [0, 1, 2, 3, 4]
    k2 = removeDuplicates(nums2)
    print(f"Example 2: k={k2}, nums={nums2[:k2]}")
    assert k2 == len(expected2)
    assert nums2[:k2] == expected2
    
    print("All tests passed!")
