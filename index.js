// add solution here
var theBeatlesPlay = function(musicians,instruments) {
    var strings = [];
    for(var i = 0; i < musicians.length ; i++) {
      strings.push(musicians[i] + " plays " + instruments[i])
    }
    return strings;
};

var johnLennonFacts = function() {
  const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian","He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  for(var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!";
  }

};
