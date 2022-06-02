term = $("body").terminal(
  {
    help: function() {
      const help_msg = $('<p>Welcome to the help message. Here is a list of all the available commands:<br>help<br>hello<br>cat<br>name<br></p>');
      this.echo(help_msg)
      console.log(term)
    },
    hello: function (what) {
      this.echo("Hello, " + what + ". Welcome to this terminal.");
    },
    cat: function (width, height) {
      const img = $(
        '<img src="https://placekitten.com/' + width + "/" + height + '">'
      );
      img.on("load", this.resume);
      this.pause();
      this.echo(img);
      this.echo(img);
    },
    name: function (name) {
      this.read("last name:", (last_name) => {
        this.echo("Your name is " + name + " " + last_name);
      });
    },
  },
  {
    greetings: greetings.innerHTML,
    prompt: "matdexir@about> ",
    keymap: {
      // To be added
    },
    autocompleteMenu: true,
    completion: ['help', 'hello', 'cat']
  }
);
