// challenge 1
function capitalize(str) {
  letters = str.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
}

// challenge 2
function allCaps(str) {
  return str.toUpperCase();
}

// challenge 3
function capitalizeWords(str) {
  let words = str.split(" ");
  for(let i = 0; i < words.length && i < 3; i += 1) {
    words[i] = upperFirst(words[i]);
  }
  return words.join(" ");
}

// bonus
function capitalizeHeadline(str) {
  small = ["and", "an,", "a", "at", "but", "by", "for", "in", "the"];
  words = str.split(" ");

  // capitalize first regardless
  words[0] = capitalize(words[0])

  // ccapitalize not small words
  for(let i=1; i < words.length; i+=1) {
    if(!small.includes(words[i])) {
      words[i] = capitalize(words[i]);
      console.log(words[i]);
    }
  }
  return words.join(" ");
}

// challenge 4
function removeExtraSpaces(str) {
  str = str.trim();
  return str.replace(/\s\s+/g, ' ');
}

// challenge 6
function kebobCase(str) {
  str = str.toLowerCase();
  str = removeExtraSpaces(str);
  return str.replace(/\s/g, "-");
}

// challenge 7
function snakeCase(str, replace = "_") {
  str = str.toLowerCase();
  str = removeExtraSpaces(str);
  return str.replace(/\s/g, replace);
}

// challenge 8
function shift(str, pos=1) {
  const start = str.slice(pos);
  const end = str.slice(0,pos);
  return start + end;
}

// challenge 9
function makeHashTag(str) {
  let words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  let tags = [];

  let numTags = 0;
  if (words.length > 3) {
    numTags = 3;
  }
  else {
    numTags = words.length;
  }

  for(let i=0; i<numTags; i+=1 ) {
    tags.push("#" + words[i].toLowerCase());
  }

  return tags;
}

// challenge 10
function isEmpty(str) {
  str = str.replace(/\s/g, "");
  return str === "";

}

// TESTS
// console.log(capitalizeHeadline("the most foo in bar"));
// console.log(removeExtraSpaces("   Hello    world!   dylan     !`"));
// console.log(kebobCase(" Hello   world      nice   !"));
// console.log(snakeCase(" what the heck "));
// console.log(shift('foo bar', 3));
// console.log(makeHashTag("Amazing bongo drums for sale"));

// const str = `   
			
// 			`;
// console.log(isEmpty(str));