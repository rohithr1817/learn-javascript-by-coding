

// mathUtils.js

// Function to add two numbers
export function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
    return a - b;
}



export const PI = 3.14159;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return PI * radius * radius;
}

export function getDiameter(radius) {
  return 2 * radius;
}

export function getVolume(radius) {
    return (4 / 3) * PI * radius * radius * radius;
    }