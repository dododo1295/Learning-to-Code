import { sleep } from "jsr:@so-dang-cool/sleep";
// self-exploration on types

const numOne: number = 123;
console.log(numOne);

const numTwo: number = 456;

console.log(numOne + numTwo);

// begin back and forth...

const helloWorldTime = async () => {
  try {
    console.log("...");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("Hello");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("...");
    await sleep.millis(500);
    console.log("World!!!!");
  } catch (error) {
    console.error("it broke dude");
    console.log(error);
  }
};

const wordOne: string = "Hello, ";
const wordTwo: string = "whats you're name?";
console.log(wordOne + wordTwo);
const input = prompt("Enter your name!"); // just learned that Deno can use prompt as a CLI input
// i just assumed that because Go also used prompt it was default in TS... not the case.
console.log(`hello ${input}, I am Hello-World.ts coming to say...`);

await helloWorldTime();

await sleep.millis(750);
console.log(
  "sorry that took so long to say... my code is a bit of a mess cause I was the first project",
);
