# Merge Discontinuous Time Ranges

A Node.js module that efficiently merges overlapping and near-continuous time ranges based on a configurable threshold.

## 📋 Problem Description

Given an array of time ranges representing when a system was active, this module merges ranges that:

- Overlap or touch each other
- Are separated by gaps smaller than a specified threshold
- Converts them into non-overlapping, sorted intervals

Each time range is represented as `[start, end]` where:

- `start` and `end` are UNIX timestamps in milliseconds
- The range includes `start` but excludes `end` (e.g., `[0, 5]` includes 0, 1, 2, 3, 4)

## 🚀 Features

- ✅ Merges overlapping time ranges
- ✅ Handles unsorted input arrays
- ✅ Configurable threshold for gap tolerance
- ✅ Returns sorted, non-overlapping intervals
- ✅ Robust input validation
- ✅ Zero external dependencies

## 📦 Installation

1. Clone or download this repository
2. No additional installation required - uses only Node.js built-in modules

## 🔧 Usage

### Basic Example

```javascript
const { mergeTimeRanges } = require("./module/my-module.cjs");

// Example 1: Overlapping ranges with threshold
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500],
];
const threshold1 = 200;

const result1 = mergeTimeRanges(ranges1, threshold1);
console.log(result1);
// Output: [[1000, 2000], [2500, 4100], [8000, 9500]]

// Example 2: No merging needed
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30],
];
const threshold2 = 4;

const result2 = mergeTimeRanges(ranges2, threshold2);
console.log(result2);
// Output: [[0, 10], [15, 20], [25, 30]]

// Example 3: All ranges merged into one
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35],
];
const threshold3 = 3;

const result3 = mergeTimeRanges(ranges3, threshold3);
console.log(result3);
// Output: [[0, 35]]
```

### Running the Demo

```bash
node index.js
```

## 📝 API Reference

### `mergeTimeRanges(ranges, threshold)`

Merges discontinuous time ranges within a given threshold.

#### Parameters

| Parameter   | Type                      | Description                                                             |
| ----------- | ------------------------- | ----------------------------------------------------------------------- |
| `ranges`    | `Array<[number, number]>` | Array of time ranges where each range is `[start, end]`                 |
| `threshold` | `number`                  | Maximum gap (in milliseconds) allowed between ranges to still be merged |

#### Returns

| Type                      | Description                                   |
| ------------------------- | --------------------------------------------- |
| `Array<[number, number]>` | Sorted array of non-overlapping merged ranges |

#### Input Validation

- Returns empty array `[]` if input is not an array or is empty
- Handles unsorted input ranges
- Manages overlapping ranges correctly

## 🧮 Algorithm Explanation

The algorithm works in the following steps:

1. **Input Validation**: Check if the input is a valid non-empty array
2. **Sorting**: Sort ranges by their start time to process them in chronological order
3. **Merging Logic**:
   - Initialize with the first range
   - For each subsequent range, check if it overlaps or is within the threshold distance
   - If mergeable: extend the current range to include the new range
   - If not mergeable: save the current range and start a new one
4. **Return**: Return the array of merged, non-overlapping ranges

### Time Complexity

- **O(n log n)** where n is the number of ranges (due to sorting)

### Space Complexity

- **O(n)** for the output array in worst case (no merging occurs)

## 📁 Project Structure

```
SaralWeb/
├── index.js              # Demo file with test cases
├── module/
│   └── my-module.cjs     # Main module with mergeTimeRanges function
└── README.md            # This documentation
```

## 🧪 Test Cases

The project includes three comprehensive test cases in `index.js`:

### Test Case 1: Partial Merging

- **Input**: 5 ranges with threshold 200ms
- **Expected**: 3 merged ranges
- **Tests**: Overlapping ranges and threshold-based merging

### Test Case 2: No Merging

- **Input**: 3 non-overlapping ranges with small threshold
- **Expected**: Same 3 ranges (no changes)
- **Tests**: Ranges that don't meet merge criteria

### Test Case 3: Complete Merging

- **Input**: 4 ranges with threshold 3ms
- **Expected**: Single merged range
- **Tests**: Chain merging where gaps are within threshold

## 🔍 Edge Cases Handled

- Empty input arrays
- Single range arrays
- Ranges that exactly touch (end of one equals start of another)
- Unsorted input ranges
- Overlapping ranges of various patterns
- Zero or negative thresholds

## 👨‍💻 Author

Created as part of a technical assignment for a company evaluation.

---

**Note**: This implementation focuses on correctness, readability, and efficiency without external dependencies, making it suitable for production use in time-sensitive applications.
