let command = document.getElementById("command");
let block_div = document.getElementById("output-block");
command.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
		let input = command.value
		let found = false
		for (let i = 0; i < commands.length; i++) {
			if(commands[i].name === input){
				found = true
			  let output = document.createElement("div")
			  output.innerHTML = '<h1>' + commands[i].description + '</h1>'
			  console.log(output)
			  // block_div.insertBefore(output, block_div.firstChild)
			  block_div.appendChild(output)
			  console.log(block_div)
			}
		}
		if (!found)
			console.log("Command not found")
		command.value = "";
  }
});
