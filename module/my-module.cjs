/**
 * Merges discontinuous time ranges within a given threshold.
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) {
    return [];
  }
  // Sort ranges by start time
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let [currentStart, currentEnd] = ranges[0];
  for (let i = 1; i < ranges.length; i++) {
    const [nextStart, nextEnd] = ranges[i];
    if (nextStart <= currentEnd + threshold) {
      // Ranges overlap or are within the threshold, merge them
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      // No overlap, push the current range and start a new one
      merged.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }
  // Push the last range
  merged.push([currentStart, currentEnd]);
  return merged;
};

module.exports = {
  mergeTimeRanges,
};
