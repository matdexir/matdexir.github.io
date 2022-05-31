let command = document.getElementById("command");
let block_div = document.getElementById("command-block");
command.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
		let input = command.value
		let found = false
		for (let i = 0; i < commands.length; i++) {
			if(commands[i].name === input){
				found = true
				console.log(commands[i].description)
			  output = document.createElement("div")
			  output.innerHTML = '<h1>' + "This is a placeholder" + '</h1>'
			  console.log(output)
			  block_div.insertBefore(output, block_div.firstChild)
			  // block_div.appendChild(output)
			  console.log(block_div)
			}
		}
		if (!found)
			console.log("Command not found")
		command.value = "";
  }
});
