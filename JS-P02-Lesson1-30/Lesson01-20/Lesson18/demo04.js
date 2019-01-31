var names = ["Hochberg", "Hönigswald", "Holzman"];
 
var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
 
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"