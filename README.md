# JavaScript Async Functions
[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/Made%20with-CSS-1572B6.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML](https://img.shields.io/badge/Made%20with-HTML-E34F26.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)

### This is a project for Front-End Technologies May 2024 Course @ SoftUni
---

1. [JavaScript Async Functions I](#javascript-async-functions-i)
    1. [Hello World](#hello-world)
    2. [Chained Promises](#chained-promises)
    3. [Simple Promise](#simple-promise)
    4. [Promise Rejection](#promise-rejection)
    5. [Promise with Multiple Handlers](#promise-with-multiple-handlers)
    6. [Promise All](#promise-all)
    7. [Promise Race](#promise-race)
    8. [Async Function with Await](#async-function-with-await)
    9. [Async Function with Error Handling](#async-function-with-error-handling)
    10. [Chained Promises with Async/Await](#chained-promises-with-asyncawait)
    11. [Quiz](#quiz)
    12. [Simple Stopwatch](#simple-stopwatch)
    13. [Countdown Timer](#countdown-timer)
    14. [Sum Even Numbers in Background](#sum-even-numbers-in-background)
    15. [Simple Text Adventure Game](#simple-text-adventure-game)
2. [JavaScript Async Functions II](#javascript-async-functions-ii)
    1. [Simulating Network Request with Fetch](#simulating-network-request-with-fetch)
    2. [Handling Fetch Errors](#handling-fetch-errors)
    3. [Parallel Fetch Requests](#parallel-fetch-requests)
    4. [Sequential Fetch Requests](#sequential-fetch-requests)
    5. [Multiple Promises](#multiple-promises)
    6. [Retrying a Failed Promise](#retrying-a-failed-promise)
    7. [Throttling Promises](#throttling-promises)
    8. [Timeout for Fetch Requests](#timeout-for-fetch-requests)
    9. [Async Function with Error Handling](#async-function-with-error-handling)
    10. [Combining Async/Await with Generators](#combining-asyncawait-with-generators)

## Overview
This project focuses on mastering asynchronous functions in JavaScript. It includes practical exercises, examples, and small applications focused on work with callbacks, promises, and the `async/await` syntax, which are essential for handling tasks like API requests, user interactions, and background operations.

## JavaScript Async Functions I

### Hello World
A Simple function wich is using `setTimeout` to print a greeting to the console. The first message, "Hello", appears immediately, while the second message, "World", shows up after a 2-second delay. This exercise introduces how JavaScript handles time-based asynchronous functions.    

### Chained Promises
Function `chainedPromises()`, using `setTimeout` with callbacks, which logs a series of messages to the console in a sequence, with increasing delays, each one is slightly longer from the previous.

### Simple Promise
Function `simplePromise()` which creates a promise that resolves successfully after 2 seconds. You’ll log a success message once the promise completes, demonstrating how promises help manage delayed actions without using nested callbacks.

### Promise Rejection
Function `promiseRejection()` which creates a promise that fails after 1 second, logging an error message to the console. This is a common pattern for handling things like failed API requests or unexpected behavior.

### Promise with Multiple Handlers
Function `promiseWithMultipleHandlers()` which chains multiple `.then` handlers to the same promise. The promise will be resolved with a message and will log it twice, using two `.then()` functions.

### Promise All
Function `allPromise()`, that creates three promises each with a different delay, and log the results all at once using `Promise.all`, which waits for all promises to complete before proceeding.

### Promise Race
Function `racePromise()`, helps to handle time-sensitive asynchronous operations by logging the result of whichever promise finishes first. By using `Promise.race` which creates three promises that resolve after 1, 2, and 3 seconds respectively and logs the first resolved result.

### Async Function with Await
Async function `simplePromiseAsync()` it will await a delayed message and log it to the console. This introduces a cleaner and more readable way to work with asynchronous operations compared to using plain promises.

### Async Function with Error Handling
Async function `promiseRejectionAsync()` that throws an error, then catch and log the error by using `try/catch` to demonstrate how error management works in asynchronous code

### Chained Promises with Async/Await
Async function `chainedPromisesAsync()` that uses promise chaining, but this time using `async/await`. It waits for three promises that resolve after 1, 2, and 3 seconds respectively and logs their results in order.

### Quiz
Simple interactive quiz game that asks questions and uses promises to handle user input and feedback. The game tracks the user’s score and provides final results after all questions are answered.

### Simple Stopwatch
Creates a basic stopwatch that starts counting in seconds when a button is clicked and stops when the button is clicked again. This introduces the idea of managing real-time updates in asynchronous applications.

### Countdown Timer
Function that creates a countdown timer that counts down from a specified number of seconds. It updates every second and stops when it reaches zero, demonstrating how to use asynchronous functions for time-based tasks.
    
### Sum Even Numbers in Background
Function that performs a large calculation in the background, such as summing even numbers, without blocking the main interface. Simulating a long-running task that still allows user interaction, showing how to use async operations to improve user experience.

### Simple Text Adventure Game
Function that creates a simple text-based adventure game where the player makes choices and the game responds to those choices. Delays and user input will be handled asynchronously to give a more interactive and dynamic experience.

## JavaScript Async Functions II

### Simulating Network Request with Fetch
Function `fetchData()` which uses the fetch API to simulate network requests and log the response as JSON. This task introduces real-world asynchronous operations, like fetching data from a server.

### Handling Fetch Errors
Function `fetchDataWithErrorHandling()` which expands the fetch function by adding error handling using `try/catch`. This is a practical way to manage issues like network failures or server errors when making API requests.

### Parallel Fetch Requests
Function `fetchParallel()` which handles multiple fetch requests at the same time by making two API calls in parallel and using `Promise.all` to wait for both to finish before logging the results.

### Sequential Fetch Requests
Function `fetchSequential()` Instead of running requests in parallel, it will make two fetch requests in sequence, logging each result as it comes in. This shows how to manage dependent or ordered asynchronous tasks.

### Multiple Promises
Function `multiplePromises()` wich uses `Promise.allSettled` to handle promises that may either resolve or reject. It will create multiple promises with different outcomes and log whether each one succeeded or failed.

### Retrying a Failed Promise
Function `startRetry()` that retries a promise if it fails, attempting up to three times before giving up. This is a practical pattern for handling unreliable network requests or other asynchronous tasks.

### Throttling Promises
Function `throttlePromises()` which throttles promises by limiting the number of promises that run concurrently. This is useful when working with APIs that have rate limits or when managing heavy resource usage.

### Timeout for Fetch Requests
Function `fetchWithTimeout()` wich implements a fetch request with a timeout, rejecting the promise if the request takes too long. This technique is helpful for ensuring that your application doesn’t wait indefinitely for a response.

### Async Function with Error Handling
Class `AsyncQueue()` which creates an asynchronous task queue that processes one task at a time. This is a great way to manage tasks that need to be executed in order but may have varying completion times.

### Combining Async/Await with Generators
Combine the power of async/await with JavaScript generators to handle complex sequences of asynchronous tasks. This task gives you a deeper understanding of how to manage advanced asynchronous flows.

## Contributing
Contributions are welcome! If you have any improvements or bug fixes, feel free to open a pull request.

## License
This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please open an issue in the repository.
