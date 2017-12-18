
 
//  getOccupation() - returns the Randomly Generated Occupation
function getOccupation(){
	var occupations = [
		
		{"occupation": "Koropokuru fisherman", "race": "Koropokuru", "trainedWeapon": "Knife (as dagger)", "damage": "1d4", "tradeGoods": "Fishing Net"},
		{"occupation": "Koropokuru acupuncturist", "race": "Koropokuru", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Pouch of acupuncture needles"},
		{"occupation": "Koropokuru herbalist", "race": "Koropokuru", "trainedWeapon": "Tanto (as dagger)", "damage": "1d4", "tradeGoods": "Herbs, 2 lbs"},
		{"occupation": "Koropokuru woodcarver", "race": "Koropokuru", "trainedWeapon": "Carving knife (as dagger)", "damage": "1d4", "tradeGoods": "Block of wood"},
		{"occupation": "Koropokuru calligrapher", "race": "Koropokuru", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "A set of calligraphy brushes"},
		{"occupation": "Koropokuru Noh performer", "race": "Koropokuru", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Make-up set"},
		{"occupation": "Koropokuru taiko drummer", "race": "Koropokuru", "trainedWeapon": "Drumstick (as club)", "damage": "1d4", "tradeGoods": "Taiko drum"},
		{"occupation": "Koropokuru tattooist", "race": "Koropokuru", "trainedWeapon": "Needle (as dart)", "damage": "1d4", "tradeGoods": "Vial of ink"},
		{"occupation": "Koropokuru sushi chef", "race": "Koropokuru", "trainedWeapon": "Knife (as dagger)", "damage": "1d4", "tradeGoods": "Raw fish"},
		{"occupation": "Koropokuru fishmonger", "race": "Koropokuru", "trainedWeapon": "Mallet (as Club)", "damage": "1d4", "tradeGoods": "Salted fish"},
		{"occupation": "Koropokuru flutist", "race": "Koropokuru", "trainedWeapon": "Wakizashi (as short sword)", "damage": "1d6", "tradeGoods": "Shakuhachi flute"},
		];
		return occupations[Math.floor(Math.random() * 11)]; 
}
	  