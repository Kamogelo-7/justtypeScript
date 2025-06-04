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

const letters: string[] = ["a", "b", "c", "d", "e"];
const nums: number[] = [1, 2, 3, 4, 5];

const iterationProcessor = setTimeout(() => {
  console.log(`Processing letters: ${letters} and numbers: ${nums}`);
}, 1000);

clearInterval(iterationProcessor);

// This code iterates through letters and numbers, skipping a specific condition.
for (const letter of letters) {
  for (let numn = 0; numn < 7; numn++) {
    if (`${letter}${numn}` === "c3") {
      console.log(`${letter.toUpperCase()}${numn} - Skipped`);
    } else {
      console.log(`${letter.toUpperCase()}${num} - Processed`);
    }
  }
}

for (const letter of letters) {
  for (const numn of nums) {
    if (letter === "C" && numn === 3)
      console.log(`${letter.toUpperCase()}${numn} - Skipped`);
  }
  console.log(`${letter.toUpperCase()}${num} - Processed`);
}

