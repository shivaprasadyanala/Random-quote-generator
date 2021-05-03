var authorName
var quote
// setInterval(() => {
	load = document.getElementsByClassName('loading')[0]
	load.innerHTML = `loading...`		
// }, 10);

fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "03f6e19719msh1a6a4ca1b9ec984p10139djsndf2ad0f8bb84",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	authorName = response.originator.name
	quote = response.content
})
.catch(err => {
	console.error(err);
});

head = document.getElementsByClassName('quote')
div = document.getElementsByClassName('author')
wrapper = document.getElementsByClassName('wrapper')[0]

// console.log(body);

setTimeout(() => {
	// console.log(authorName);	
	// console.log(quote);
	// console.log(head);
	// animate(h1,'flipInY')
	loading = document.getElementsByClassName('loading')[0]
	console.log(loading.innerHTML);
	loading.innerHTML = ' ';

	head[0].innerHTML = quote;
	
	div[0].innerHTML = `--${authorName}`
	// btn = document.getElementsByTagName('button')[0]
	// loading = document.getElementsByClassName('loading')[0]
	// console.log(loading);
	
	next = document.createElement('button')
	next.classList.add("button")
	next.innerHTML = 'Next';
	console.log(next);
	wrapper.appendChild(next);
	
	btn = document.getElementsByTagName('button')[0]
	
	btn.addEventListener("click",()=>{
	location.reload();
	})
}, 2000);


// next = document.createElement('button')
// next.innerHTML = 'Next';
// body.appendChild(next);
// btn = document.getElementsByTagName('button')[0]
// btn.addEventListener('click',()=>{// 
// 	setInterval(() => {
// 		load = document.getElementsByClassName('loading')[0]
// 		load.innerHTML = `loading...`		
// 	}, 4000);	
// })


