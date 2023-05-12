/*// 1.
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName);

// 2.
var x;
var y = 6;
var z = 3;
if (z === 2) {
	x = y;
} else {
	x = 5;
}
console.log(x);
// 3. 
for (var i = 1; i <= 20; i++) {
	if (i % 2) {
		console.log('Broj ' + i + ' je neparan.');
	} else {
		console.log('Broj ' + i + ' je paran.');
	}
}*/
const klubovi = ["Dinamo", "Hajduk", "Osijek", "Varazdin","Istra", "Cibalija","Segesta"];
const engKlubovi = ["Manchester city", "Arsenal","Chelsea","Totenham","WBA"];
const itKlubovi = ["Milan","Inter","Napoli","Savona","Roma"];
function ispis(niz) {
    for (let g = 0; g < niz.length; g++) {
        const element = niz[g];
        console.log(element);
    }
    console.log("*************************************************************************");
}
let funkcija = ispis(klubovi);
klubovi.reverse();
ispis(klubovi);
klubovi.push("Rijeka");
ispis(klubovi);
ispis(engKlubovi);
ispis(itKlubovi);