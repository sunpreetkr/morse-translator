import { describe } from "@jest/globals";
import {  engToMorse, morseToEnglish } from "./translator.js";

describe("Testing engToMorse function which translates English Text to Morse", () => {
   const invalidEngErr = new Error("Text should contain english alphabet or space only for english to morse code translation");
   it("should translate a single English character as expected", () => {
    expect(engToMorse("a")).toBe(".-");
		expect(engToMorse("s")).toBe("...");
	});

  it("Should translate english words correctly as expected", () => {
		expect(engToMorse("hello")).toBe(
			".... . .-.. .-.. ---",
		);
	});

  it("should translate spaces between words to / correctly", () => {
		expect(engToMorse("a a")).toBe(
			".- / .-",
		);
		expect(engToMorse("this is a text")).toBe(
			"- .... .. ... / .. ... / .- / - . -..- -",
		);
	});

  it("Should ignore trailing spaces while translating correctly", () => {
		expect(engToMorse("a      ")).toBe(".-");
	});

  it("Should translate words with spaces and uppercase letters correctly", () => {
		expect(engToMorse("Whats Up")).toBe(
			".-- .... .- - ... / ..- .--.",
		);
	});
  it("should throw an error for characters with no Morse translation", () => {
		expect(() => engToMorse("*sun~")).toThrow(invalidEngErr);
		expect(() => engToMorse("<text>")).toThrow(invalidEngErr);
		expect(() => engToMorse("4")).toThrow(invalidEngErr);
	});
});

describe("Testing morseToEnglish function that translate Morse code to English text", () => {
	const invalidMorErr = new Error(
		"Error: Please ensure that the code only consists of ., -, / or  space. Please separate each letter by space and words by '/'.",
	);
  it("Should translate individual characters as expected", () => {
		expect(morseToEnglish(".-")).toBe("a");
	
	});

	it("should translate and remove spaces from English characters correctly", () => {
		expect(morseToEnglish(".... . .-.. .-.. ---")).toBe("hello");
		expect(morseToEnglish("--. --- --- -.. -... -.-- .")).toBe("goodbye");
	});
  it("Should translate consecutive and inconsistent spaces correctly and ignore trailing spaces", () => {
		expect(morseToEnglish(".-      .-")).toBe("aa");
		expect(morseToEnglish(".-/ .-")).toBe("a a");
		expect(morseToEnglish("     .-    ")).toBe("a");
	});
	it("should translate a / to a space between words correctly", () => {
		expect(morseToEnglish("/")).toBe(" ");
    expect(morseToEnglish(".- / .-")).toBe("a a");
	});

	it("should throw an error for invalid morse code character", () => {
		expect(() => morseToEnglish("234")).toThrow(invalidMorErr);
		expect(() => morseToEnglish(".- #")).toThrow(invalidMorErr);
		expect(() => morseToEnglish(".-abc")).toThrow(invalidMorErr);
	});
});

