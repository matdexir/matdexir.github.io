let count = 0
$("body").terminal(
  {
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
      "ENTER": function (e, original) {
          original();
          this.set_prompt(++count + ">")
      },
    },
  }
);
