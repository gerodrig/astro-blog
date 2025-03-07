---
title: Exploring ES06 Functions
date: 2023-06-01
description: JavaScript ES6 introduced several new functions that have made coding in JavaScript more efficient and enjoyable. Let's explore some of these functions.
author: jane-doe
# image: https://placehold.co/1400x900/
image: 'images/post-01.png'
tags: [JavaScript, ES6, Programming]

# layout: ../../layouts/BlogLayout.astro
---

# Exploring ES06 Functions

JavaScript ES6 introduced several new functions that have made coding in JavaScript more efficient and enjoyable. Let's explore some of these functions.

## Arrow Functions - Funciones de Flecha

Arrow functions provide a new syntax for writing function expressions. They are more concise and lexically bind the value `this`.

### Ejemplo

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

## Template Literals - Literales de Plantilla

Template literals allow for easier string interpolation and multi-line strings. They use backticks (\`) instead of single or double quotes.

### Ejemplo

```javascript
const name = 'Jane';
console.log(`Hello, ${name}!`);
// Output: Hello, Jane!
```

## Destructuring Assignment - Asignación por Desestructuración

Destructuring assignment allows you to extract values from arrays or objects and assign them to variables in a more concise way.

### Ejemplo

```javascript
const person = { name: 'Jane', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Jane 30
```
