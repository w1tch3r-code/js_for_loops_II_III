"use strict";

// ===================================================
//      	JS-Vertiefung – Loops-Level-2_1
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-2_1", "color: tomato");

// Aufgabenstellung:

// Nehmen wir an, wir haben 100 Bilder in unserem Ordner.
// Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren.
// Gib in der Konsole image_001.jpg bis image_100.jpg aus.
// Deklariere die Function imageArray.
// In Funktionskörper deklariere die Variable returnArray als leeres Array.
// Schreibe eine for-Schleife.
// Nutze push() und Conditionals Statements (if, else if, else).
// Lass dir returnArray in der Konsole ausgeben.

const imageArray = () => {
	const returnArray = [];

	for (let i = 1; i <= 100; i++) {
		if (i < 100) {
			returnArray.push(`image_${i.toString().padStart(3, "0")}.jpg`);
		} else {
			returnArray.push(`image_${i}.jpg`);
		}
	}
	console.log(returnArray);
};

imageArray();

// ===================================================
//      	JS-Vertiefung – Loops-Level-2_2
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-2_2", "color: tomato");

// Aufgabenstellung:
// Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.

const output = document.querySelector("#output");

const loopMe = () => {
	const numberLength = Number(document.querySelector("#numberLength").value);
	// console.log(numberLength);
	output.innerText = "";
	const charO = "o";

	for (let i = 0; i <= numberLength; i++) {
		output.innerText = `L${charO.repeat(numberLength)}p`;
	}
};

// ===================================================
//      	JS-Vertiefung – Loops-Level-3_2
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-3_2", "color: tomato");

// Aufgabenstellung:
// Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// Schreibe das Ergebnis in dein HTML.
// Das Array findest du im Code-Snippet!

const output2 = document.querySelector("#output2");

let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < numArr.length; i++) {
	let num = numArr[i];
	let divisors = [];

	for (let j = 2; j <= num; j++) {
		if (num % j === 0 && j !== num) {
			divisors.push(j);
		}
	}

	if (divisors.length > 0) {
		for (let k = 0; k < divisors.length; k++) {
			output2.innerHTML += `${num} is devidable by ${
				divisors[k]
			}. The result is: ${num / divisors[k]}<br>`;
		}
	}
}

// ===================================================
//      	JS-Vertiefung – Loops-Level-3_3
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-3_3", "color: tomato");

// Aufgabenstellung:
// Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// Du verfeinerst deine "Loooooop"-Aufgabe.
// Jetzt soll eine Fehlermeldung ausgegeben werden, wenn der/die User:in 0 eingibt.
// Wenn die Eingabe gerade ist (z. B. 2, 4, 6, ...), sollten sich die "o"-Buchstaben in das Wort "L..p" einfügen, wobei die Anzahl der "o"-Buchstaben der Eingabezahl entspricht. Zum Beispiel: Bei der Eingabe von 4 wird "Loooop" ausgegeben.
// Wenn die Eingabe ungerade ist (z. B. 1, 3, 5, ...), sollten sich abwechselnd "o" und "0" in das Wort "L..p" einfügen, beginnend mit "o". Zum Beispiel: Bei der Eingabe von 5 wird "Lo0o0op" ausgegeben.

const output3 = document.querySelector("#output3");

const loopMe2 = () => {
	const numberLength2 = Number(
		document.querySelector("#numberLength2").value
	);
	output3.innerText = "";
	const charO = "o";
	const number0 = "0";

	for (let i = 0; i <= numberLength2; i++) {
		if (numberLength2 === 0) {
			output3.innerText = "Bitte eine Zahl größer 0 eingeben";
		} else if (numberLength2 % 2 === 1 && numberLength2 === 1) {
			output3.innerText = `L${number0}p`;
		} else if (numberLength2 % 2 === 0) {
			output3.innerText = `L${charO.repeat(numberLength2)}p`;
		} else {
			output3.innerText = `L${charO}`;
			for (let j = 2; j < numberLength2; j += 2) {
				output3.innerText += `${number0}`;
				output3.innerText += `${charO}`;
			}
			output3.innerText += `p`;
		}
	}
};
