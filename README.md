# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answers

The time complextiy is $\Theta(n^2)$ in the worst case senario. On the worst case scenario, the while loop that shifts the elements will have to run an $n$ number of times every iteration. For every inner loop and merge, they loop through an $n$ number of elements as well. The outer loop doubles in sie each iteration so it's complexity would be $log(n)$. Combined this gives us a combined time complexity of $\Theta(n^2 \cdot log(n))$.

## Sources

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.