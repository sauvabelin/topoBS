export default {

	descs: [],

	descriptions() {

		if(this.descs.length > 0)
			return this.descs;

		for(var i = 0; i < this.signes.length; i++)
			this.descs.push(this.signes[i].dn);

		return this.descs;
	},

	all() {
		return this.signes;
	},

	signes: [
		{
			id:	1,
			dn: "Autoroute"
		},
		{
			id:2,
			dn:"aire de repos, place de stationnement"
		},
		{
			id:3,
			dn:"entrée/sortie d'autoroute"
		},
		{
			id:4,
			dn:"Route 1ère classe"
		},
		{
			id: 6,
			dn: "Puit de ventilation"
		},
		{
			id: 7,
			dn: "Galeries"
		},
		{
			id: 8,
			dn: "Route historique"
		},
		{
			id: 9,
			dn: "Chemin de fer voie multiple"
		},
		{
			id: 10,
			dn: "Chemin de fer voie unique"
		},
		{
			id: 11,
			dn: "Tunnels"
		},
		{
			id: 12,
			dn: "Téléphérique"
		},
		{
			id: 13,
			dn: "Téléski"
		},
		{
			id: 14,
			dn: "Dépression"
		},
		{
			id: 15,
			dn: "Doline"
		},
		{
			id: 16,
			dn: "Talus"
		},
		{
			id: 17,
			dn: "Talus de pierre"
		},
		{
			id: 18,
			dn: "Déblai"
		},
		{
			id: 19,
			dn: "Remblai"
		},
		{
			id: 20,
			dn: "Glissement de terrain"
		},
		{
			id: 21,
			dn: "Gravière"
		},
		{
			id: 22,
			dn: "Glaisière"
		},
		{
			id: 23,
			dn: "Carrière"
		},
		{
			id: 24,
			dn: "Maison"
		},
		{
			id: 25,
			dn: "Ruine"
		},
		{
			id: 26,
			dn: "Auberge Isolée"
		},
		{
			id: 27,
			dn: "Tour"
		},
		{
			id: 28,
			dn: "Serre"
		},
		{
			id: 29,
			dn: "Réservoirs d'hydrocarbure/gaz"
		},
		{
			id: 30,
			dn: "Jardins familiaux"
		},
		{
			id: 31,
			dn: "Monument"
		},
		{
			id: 32,
			dn: "Eglise"
		},
		{
			id: 33,
			dn: "Chapelle"
		},
		{
			id: 34,
			dn: "Cimetière"
		},
		{
			id: 35,
			dn: "Oratoire, croix"
		},
		{
			id: 36,
			dn: "Tour de refroidissement"
		},
		{
			id: 37,
			dn: "Eolienne"
		},
		{
			id: 38,
			dn: "Cheminée marquante"
		},
		{
			id: 39,
			dn: "Château"
		},
		{
			id: 40,
			dn: "Tour d'observation"
		},
		{
			id: 41,
			dn: "Station radio"
		},
		{
			id: 42,
			dn: "Grand émetteur radio et TV"
		},
		{
			id: 43,
			dn: "Petit émetteur radio et TV"
		},
		{
			id: 44,
			dn: "Place de camping"
		},
		{
			id: 45,
			dn: "Piste de luge"
		},
		{
			id: 46,
			dn: "Terrain de sport"
		},
		{
			id: 47,
			dn: "Stade"
		},
		{
			id: 48,
			dn: "Stand de tir"
		},
		{
			id: 49,
			dn: "Hippodrome"
		},
		{
			id: 50,
			dn: "Délimitation d'une aire"
		},
		{
			id: 51,
			dn: "Terrain de golf"
		},
		{
			id: 52,
			dn: "Tremplin"
		},
		{
			id: 53,
			dn: "Mur sec"
		},
		{
			id: 54,
			dn: "Mur"
		},
		{
			id: 55,
			dn: "Pare-avalanches"
		},
		{
			id: 56,
			dn: "Caverne, grotte"
		},
		{
			id: 57,
			dn: "Bloc de rocher"
		},
		{
			id: 59,
			dn: "Forêt, limite imprécise"
		},
		{
			id: 60,
			dn: "Forêt clairsemée"
		},
		{
			id: 61,
			dn: "Arbre isolé"
		},
		{
			id: 62,
			dn: "Buissons"
		},
		{
			id: 63,
			dn: "Haie"
		},
		{
			id: 64,
			dn: "Verger"
		},
		{
			id: 65,
			dn: "Pépinière"
		},
		{
			id: 66,
			dn: "Vignes"
		},
		{
			id: 67,
			dn: "Point de triangulation"
		},
		{
			id: 68,
			dn: "Source"
		},
		{
			id: 69,
			dn: "Cascade"
		},
		{
			id: 70,
			dn: "Endiguement"
		},
		{
			id: 71,
			dn: "Marais"
		},
		{
			id: 72,
			dn: "Tourbière"
		},
		{
			id: 73,
			dn: "Barrage"
		},
		{
			id: 74,
			dn: "Lac à niveau très variable"
		},
		{
			id: 75,
			dn: "Conduite forcée"
		},
		{
			id: 76,
			dn: "Conduite multiple"
		},
		{
			id: 77,
			dn: "Galerie hydraulique"
		},
		{
			id: 78,
			dn: "Bassin"
		},
		{
			id: 79,
			dn: "Fontaine"
		},
		{
			id: 80,
			dn: "Citerne"
		},
		{
			id: 81,
			dn: "Citerne couverte"
		},
		{
			id: 82,
			dn: "Station d'épuration des eaux"
		},
		{
			id: 83,
			dn: "Piscine publique"
		},
		{
			id: 84,
			dn: "Réservoir d'eau"
		},
		{
			id: 85,
			dn: "Château d'eau"
		},
		{
			id: 86,
			dn: "Station de transformateurs électriques"
		},
		{
			id: 87,
			dn: "Ligne électrique"
		},
		{
			id: 88,
			dn: "Limite d'Etat et repères"
		},
		{
			id: 89,
			dn: "Limite de canton et bornes"
		},
		{
			id: 90,
			dn: "Limite de district et bornes"
		},
		{
			id: 91,
			dn: "Limite de commune et bornes"
		},
		{
			id: 92,
			dn: "Limite de parc naturel national ou régional"
		},
		{
			id: 93,
			dn: "Autoroute"
		},
		{
			id: 94,
			dn: "Semi-autoroute"
		},
		{
			id: 95,
			dn: "Aire de repos"
		},
		{
			id: 96,
			dn: "Gare souterraine"
		},
		{
			id: 97,
			dn: "Tunnel"
		},
		{
			id: 98,
			dn: "Bâtiment"
		},
		{
			id: 99,
			dn: "Tour d'habitation de plus de 25m"
		},
		{
			id: 101,
			dn: "Clocher, tour sacrée"
		},
		{
			id: 102,
			dn: "Chapelle"
		},
		{
			id: 108,
			dn: "Piste d'athlétisme"
		},
		{
			id: 109,
			dn: "Hippodrome"
		},
		{
			id: 113,
			dn: "Alimentation en eau"
		},
		{
			id: 114,
			dn: "Digue"
		},
		{
			id: 115,
			dn: "Barrage"
		},
		{
			id: 121,
			dn: "Héliport"
		},
		{
			id: 122,
			dn: "Hôpital, clinique"
		},
		{
			id: 123,
			dn: "Route 2ème classe"
		},
		{
			id: 124,
			dn: "Route de quartier"
		},
		{
			id: 125,
			dn: "Route 3ème classe"
		},
		{
			id: 126,
			dn: "Route 4ème classe"
		},
		{
			id: 127,
			dn: "Route 5ème classe"
		},
		{
			id: 128,
			dn: "Route 6ème classe, sentier"
		}
	]
};
