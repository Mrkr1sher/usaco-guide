---
slug: /silver/binary-search
title: "Binary Search"
author: Nathan Chen
order: 4
prerequisites: 
 - 
     - Silver - Sorting
---

[Binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) can be used on monotonic functions for a logarithmic runtime.

<!-- END DESCRIPTION -->

## The Basic Application

"Find an element in a sorted array in $O(\log N)$ time." This is a very basic form of binary search. Other variations are similar, like "Given $K$, find the largest element less than $K$ in a sorted array."

## Tutorial

 - CSES 3.3
 - [Topcoder Binary Search](https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/)
 - [CSAcademy Binary Search](https://csacademy.com/lesson/binary_search)
 - [KA Binary Search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
 - [GeeksForGeeks](https://www.geeksforgeeks.org/binary-search/)

### Library Functions to do Binary Search

#### Java

 - [Arrays.binarySearch](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html)
 - [Collections.binarySearch](https://docs.oracle.com/javase/7/docs/api/java/util/Collections.html)

#### C++

 - [lower_bound](http://www.cplusplus.com/reference/algorithm/lower_bound/)
 - [upper_bound](http://www.cplusplus.com/reference/algorithm/upper_bound/)

### Problems
 - [USACO Silver Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)
 
## Binary Searching on the Answer

Oftentimes used when you need to find the minimum or maximum of some quantity such that it satisfies some property.
 
### Tutorial

  - Intro to USACO 12.1

### Problems

USACO

 - [USACO Silver Cownvention](http://www.usaco.org/index.php?page=viewproblem2&cpid=858)
 - [USACO Silver Cow Dance](http://www.usaco.org/index.php?page=viewproblem2&cpid=690)
 - [USACO Silver Social Distancing](http://www.usaco.org/index.php?page=viewproblem2&cpid=1038)
 - [USACO Silver Angry Cows](http://usaco.org/index.php?page=viewproblem2&cpid=594)
 - [USACO Silver Loan Repayment](http://www.usaco.org/index.php?page=viewproblem2&cpid=991)
   - Also needs some math and rather tricky "sqrt" analysis

Misc

 - [The Meeting Place Cannot Be Changed](http://codeforces.com/contest/782/problem/B) [](48)
 - [Preparing for Merge Sort](http://codeforces.com/contest/847/problem/B) [](53)
 - [Level Generation](http://codeforces.com/problemset/problem/818/F) [](54)
 - [Packmen](http://codeforces.com/contest/847/problem/E) [](57)
 - [Office Keys](http://codeforces.com/problemset/problem/830/A) [](60)