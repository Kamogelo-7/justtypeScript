// This is a simple TypeScript example demonstrating variable declarations, string interpolation, and array operations.
const num: number = 5;
const str: string = "Hello, TypeScript!";

console.log(`Number: ${num} and String: ${str}`);

let user: string[] = ["John Doe", "Jane Smith", "John Doe"];

if (user.includes("John Doe")) {
  console.log("User John Doe exists in the array.");
} else {
  user.push("Alice Johnson");
  console.log("Updated user array:", user);
}
