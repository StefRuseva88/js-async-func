# Exercise: JavaScript Async Functions I

This exercise focuses on asynchronous functions in JavaScript, using callbacks, promises, and async/await. These problems aim to enhance your skills in handling asynchronous operations, making your code more efficient and responsive. The tasks range from simple timeout-based operations to complex asynchronous flows. These exercises are part of the "Front-End Test Automation" module at SoftUni.

## Table of Contents
1. [Hello World](#1-hello-world)
2. [Chained Promises](#2-chained-promises)
3. [Simple Promise](#3-simple-promise)
4. [Promise Rejection](#4-promise-rejection)
5. [Promise with Multiple Handlers](#5-promise-with-multiple-handlers)
6. [Promise All](#6-promise-all)
7. [Promise Race](#7-promise-race)
8. [Async Function with Await](#8-async-function-with-await)
9. [Async Function with Error Handling](#9-async-function-with-error-handling)
10. [Chained Promises with Async/Await](#10-chained-promises-with-asyncawait)
11. [Quiz](#11-quiz)
12. [Simple Stopwatch](#12-simple-stopwatch)
13. [Countdown Timer](#13-countdown-timer)
14. [Sum Even Numbers in Background](#14-sum-even-numbers-in-background)
15. [Simple Text Adventure Game](#15-simple-text-adventure-game)

## 1. Hello World
Function `helloWorld()`, using `setTimeout` with callbacks, which logs two messages to the console with a time delay between them.
- **Requirements**
  - Log "Hello" immediately.
  - Log "World" after a 2-second delay.

## 2. Chained Promises
Function `chainedPromises()`, using `setTimeout` with callbacks, which logs a series of messages to the console with increasing delays.
- **Requirements**
  - Log "Start" immediately.
  - Log "1" after 1 second.
  - Log "2" after 2 seconds.
  - Log "3" after 3 seconds.

## 3. Simple Promise
Function `simplePromise()` which creates a promise that resolves to "Success!" after 2 seconds and logs the result.
- **Requirements**
  - The promise resolves to "Success!" after 2 seconds.
  - Log "Success!" to the console.

## 4. Promise Rejection
Function `promiseRejection()` which creates a promise that rejects with an error message after 1 second and logs the error.
- **Requirements**
  - The promise rejects with "Something went wrong!" after 1 second.
  - Log the error message.

## 5. Promise with Multiple Handlers
Function `promiseWithMultipleHandlers()` which creates a promise that resolves to "Hello World" after 2 seconds and logs the message twice using multiple `.then` handlers.
- **Requirements**
  - The promise resolves to "Hello World" after 2 seconds.
  - Log "Hello World" twice.

## 6. Promise All
Function `allPromise()`, using `Promise.all` that creates three promises that resolve after 1, 2, and 3 seconds respectively and logs all results together when they are all resolved.
- **Requirements**
  - Create three promises with specified delays.
  - Use `Promise.all` to wait for all promises to resolve.
  - Log all results together.

## 7. Promise Race
Function `racePromise()`, using `Promise.race` which creates three promises that resolve after 1, 2, and 3 seconds respectively and logs the first resolved result.
- **Requirements**
  - Create three promises with specified delays.
  - Use `Promise.race` to log the first resolved result.

## 8. Async Function with Await
Async function `simplePromiseAsync()` that waits for 2 seconds and then logs "Async/Await is awesome!"
- **Requirements**
  - Create an async function.
  - Use `await` to wait for 2 seconds.
  - Log the message after the delay.

## 9. Async Function with Error Handling
Using async/await, write an async function `promiseRejectionAsync()` which throws an error and catches it, logging the error message.
- **Requirements**
  - Create an async function that throws an error.
  - Catch the error and log the message.

## 10. Chained Promises with Async/Await
Async function `chainedPromisesAsync()` that waits for three promises that resolve after 1, 2, and 3 seconds respectively and logs their results in order.
- **Requirements**
  - Create an async function.
  - Wait for three promises with specified delays.
  - Log the results in order.

## 11. Quiz
Simple quiz game that runs in the console. The game will ask questions, accept user input, and provide feedback.
- **Requirements**
  - Use promises and async/await for asynchronous operations.
  - Display questions and possible answers.
  - Accept user input and provide feedback.
  - Tally the score and display the result.

## 12. Simple Stopwatch
Creates a simple stopwatch that starts counting elapsed time in seconds when the "Start Stopwatch" button is clicked and stops when the "Stop Stopwatch" button is clicked.
- **Requirements**
  - Start counting when the "Start Stopwatch" button is clicked.
  - Display elapsed time every second in the console.
  - Stop counting when the "Stop Stopwatch" button is clicked.
  - Reset elapsed time when stopped.

## 13. Countdown Timer
Creates a countdown timer that starts from a specified number of seconds when the "Start Countdown" button is clicked.
- **Requirements**
  - Start countdown from input number of seconds.
  - Display remaining time every second in the console.
  - Stop when the timer reaches zero and display a finished message.
  - Save remaining time asynchronously when countdown finishes.

## 14. Sum Even Numbers in Background
Calculates the sum of all even numbers in the range from 1 to 1,000,000,000 without blocking the console interface.
- **Requirements**
  - Start calculation when the "Start Calculation" button is clicked.
  - Enable user input for commands while calculating.
  - Print the current sum with the "show" command.
  - Stop calculation with the "exit" command.

## 15. Simple Text Adventure Game
Creates a text-based adventure game that guides the player through choices leading to different outcomes.
- **Requirements**
  - Start game with the "Start Adventure" button.
  - Prompt player for choices using `prompt` function.
  - Provide feedback based on player's decisions.
  - Include simulated delays using promises and `setTimeout`.
  - Handle different scenarios and allow player to restart or end the game.


