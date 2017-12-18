/*
addBonusLanguages() - returns Randomly selected koropokuru Bonus Languages
*/
function addBonusLanguages() {
	var bonusLanguages = [
		{"language": "Amabie"},
		{"language": "Bakemono"},
		{"language": "Hibagon"},
		{"language": "Inugami"},
		{"language": "Kappa"},
		{"language": "Karura"},
		{"language": "Kitsune"},
		{"language": "Komainu"},
		{"language": "Kuda-gitsune"},
		{"language": "Mikoshi-nyūdō"},
		{"language": "Mizuchi"},
		{"language": "Mujina"},
		{"language": "Namahage"},
		{"language": "Nekomata"},
		{"language": "Ningyo"},
		{"language": "Nure-onna"},
		{"language": "Ogre-magi"},
		{"language": "Oni"},
		{"language": "Onikuma"},
		{"language": "Shojo"},
		{"language": "Tengu"}
			];
    return bonusLanguages[Math.floor(Math.random() * bonusLanguages.length)]; 
}