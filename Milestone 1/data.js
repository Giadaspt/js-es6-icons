/*
**Milestone 1**
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
**Consigli del giorno**
Come sempre, iniziamo prima di tutto dall’analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria **Font Awesome**, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell’head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag `<i>` di un’icona qualsiasi, in particolare **focalizziamoci sulle classi**.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l’elemento html nel modo corretto e visualizzare l’icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all’interno l’icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/

const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//document.querySelector('.row-card').innerHTML = '';
allCards(cards);

function allCards(cards){

	let all_card = document.querySelector('.row-card');

	for(let card in cards){

		let name = cards[card].name;
		let family = cards[card].family;
		let prefix = cards[card].prefix;
		//console.log(name);
		//console.log(family);
		//console.log(prefix);

		all_card.innerHTML += `
		<div class="col-2 card d-flex justify-content-end align-items-center m-3">
			<div class="icons">
				<i class="${family +' '+ prefix + name}"></i>
			</div>
			<p>${cards[card].name}</p>
		</div>

		`;
	}
}


//unisco i valori family prefix e name così da crere l'icona
// function icon(cards){
	
// 	let final;

// 	for(let icon in cards){

// 		let name = cards[icon].name;
// 		let family = cards[icon].family;
// 		let prefix = cards[icon].prefix;

// 		final = family +' '+ prefix + name;
// 		//console.log(final);
// 	}

// 	return final;
// }


