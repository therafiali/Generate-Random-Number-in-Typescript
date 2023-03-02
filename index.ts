function game(user:number|null){
	let sys=Math.floor(Math.random()*10 +1)
	if (user==sys){
	  console.log("you win"+" "+sys)
	}else{console.log("you loss"+" "+sys)} 
	}

let user:number|null = parseFloat(prompt("enter")!);
let result=game(user)
console.log(result)
