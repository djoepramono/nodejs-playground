const shout = (text) => {
  console.log(text);
};

class Message {

  constructor(author, text) {
    this.author = author;
    this.text = text;
  }

  get value() {
    return this.text;
  }
}

export {shout, Message};
