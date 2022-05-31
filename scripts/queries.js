$("body").terminal(
  {
    hello: function (what) {
      this.echo("Hello, " + what + ". Welcome to this terminal.");
    },
    cat: function(width, height) {
        const img = $('<img src="https://placekitten.com/' +
                      width + '/' + height + '">');
        img.on('load', this.resume);
        this.pause();
        this.echo(img);
        this.echo(img);
    },
  },
  {
    greetings: greetings.innerHTML,
  }
);
