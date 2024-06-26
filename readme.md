# binary-search-element

This package provides a binary search function that can handle unsorted arrays by first sorting them.

## Installation

You can install the package using npm:

```sh
npm install binary-search-element


****************  Usage *******************
import BinarysearchElement from 'binary-search-element';

const unsortedArr = [10, 5, 3, 8, 2, 7, 6, 4, 9, 1];
const target = 7;

const result = BinarysearchElement(unsortedArr, target);

console.log(result); // Output: 6 (index of target value 7 after sorting)

********************* Example ************************

import BinarysearchElement from 'binary-search-element';

const unsortedArr = [10, 5, 3, 8, 2, 7, 6, 4, 9, 1];
const target = 7;

const result = BinarysearchElement(unsortedArr, target);

console.log(result); // Output: 6 (index of target value 7 after sorting)
