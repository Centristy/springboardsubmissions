/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chainsWord = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chainsWord.has(word)) chainsWord.get(word).push(nextWord);
      else chainsWord.set(word, [nextWord]);
    }

    this.chainsWord = chainsWord;
  }



  static choice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chainsWord.keys());
    let key = MarkovMachine.choice(keys);
    let output = [];

    // produce markov chain until reaching termination word
    while (output.length < numWords && key !== null) {
      output.push(key);
      key = MarkovMachine.choice(this.chainsWord.get(key));
    }

    return output.join(" ");
  }

}


module.exports = {
  MarkovMachine,
};