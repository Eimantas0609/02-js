console.clear();

class Dog {
	constructor(name) {
		this.name = name;
		this.boneCount = 0;
		this.sound = "au";
	}
	sayHi() {
		return `${this.name}: Labas!`;
	}

	sayGoodbye(otherName = "Petrai") {
		return `${this.name}: Iki ${otherName}!`;
	}
	voice() {
		const sound = `${this.sound} ${this.sound}`;
		return `${this.name}: ${this.capitalize(sound)} !`;
	}
	capitalize(str) {
		return str
			.split(" ")
			.map((w) => this.firstLetterUp(w))
			.join(" ");
	}
	firstLetterUp(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
	changeVoice(sound) {
		this.sound = sound;
	}
	newBone() {
		return `${this.name}: ${"🦴".repeat(++this.boneCount)}!`;
	}
}

const rex = new Dog("Rex");
const kuzia = new Dog("Kuzia");
const tuzikas = new Dog("Tuzikas");

console.log(rex);
console.log(kuzia);
console.log(tuzikas);
console.log(tuzikas);
console.log(tuzikas);
console.log(kuzia.newBone());
console.log(kuzia.newBone());
console.log(kuzia.newBone());
console.log(kuzia.newBone());

console.log(rex.sayHi());
console.log(kuzia.sayHi());
console.log(tuzikas.sayHi());
console.log(kuzia.voice());
console.log(tuzikas.voice());

console.log(rex.voice());
rex.changeVoice("bark");
console.log(rex.voice());

rex.voice();

class Cat {
	constructor(name) {
		this.name = name;
		this.mouse = 0;
	}
	sayHi() {
		return `${this.name}: Labas!`;
	}
	sayGoodbye(otherName = "Petrai") {
		return `${this.name}: Iki ${otherName}!`;
	}
	newMouse() {
		return `${this.name}: ${"🐭".repeat(++this.mouse)}!`;
	}
}
const rainis = new Cat("Rainis");
console.log(rainis);
console.log(rainis.sayGoodbye("Petrai"));
console.log(rainis.newMouse());
console.log(rainis.newMouse());
console.log(rainis.newMouse());
console.log(rainis.newMouse());
