function firstWord(s) {
  // your code here
	let first =""; 
	for(let i=0; i<s.length; i++){
    
		if(s[i]==' '){
         return first;			

			
		}
		 first += s[i];
	}
	return first;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
