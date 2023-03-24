function visitLink(path) {
	//your code goes here
if(path==='Page1'){
		let count = localStorage.getItem('Page1');
		++count;
		localStorage.setItem('Page1',count) 
	} else if(path==='Page2'){
		let count = localStorage.getItem('Page2');
		++count;
		localStorage.setItem('Page2',count)
	} else if(path==='Page3'){
		let count = localStorage.getItem('Page3');
		++count;
		localStorage.setItem('Page3',count)
	}

 }

function viewResults() {
     //your code goes here
let page1 = localStorage.getItem('Page1');
		let page2 = localStorage.getItem('Page2');
		let page3 = localStorage.getItem('Page3');
		if(page1===null){
			page1=0;
		}
		if(page2===null){
			page2=0;
		}
		if(page3===null){
			page3=0;
		}
		const btn = document.querySelector('button');
		const ul =document.createElement('ul');
		const li1 = document.createElement('li');
		const li2 = document.createElement('li');
		const li3 = document.createElement('li');
		li1.innerText = `You visited Page1 ${page1} time(s)`;
		li2.innerText = `You visited Page2 ${page2} time(s)`;
		li3.innerText = `You visited Page3 ${page3} time(s)`;
		btn.insertAdjacentElement('afterend',ul);
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		localStorage.clear();
}





