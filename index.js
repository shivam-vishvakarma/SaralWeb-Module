const modul = require("./module/my-module.cjs");

const data1 = [
  [
    [1000, 2000],
    [2500, 4000],
    [3900, 4100],
    [8000, 9000],
    [9050, 9500],
  ],
  200,
];

// Expected output data1:
// [
//   [1000, 2000],
//   [2500, 4100],
//   [8000, 9500],
// ];

const data2 = [
  [
    [0, 10],
    [15, 20],
    [25, 30],
  ],
  4,
];

// Expected output data2:
// [
//   [0, 10],
//   [15, 20],
//   [25, 30],
// ];

const data3 = [
  [
    [0, 10],
    [12, 15],
    [17, 25],
    [27, 35],
  ],
  3,
];

// Expected output data3:
// [[0, 35]];

const [ranges, threshold] = data3;
console.log(modul.mergeTimeRanges(ranges, threshold));
