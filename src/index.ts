// challenge 1
function capitalize(str: string): string {
  let letters = str.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
}

// challenge 2
function allCaps(str: string): string {
  return str.toUpperCase();
}

// challenge 3
function capitalizeWords(str: string): string {
  let words = str.split(" ");
  for(let i = 0; i < words.length; i += 1) {
    words[i] = capitalize(words[i]);
  }
  return words.join(" ");
}

// bonus
function capitalizeHeadline(str: string): string {
  const small = ["and", "an,", "a", "at", "but", "by", "for", "in", "the", "is"];
  let words = str.split(" ");

  // capitalize first regardless
  words[0] = capitalize(words[0])

  // ccapitalize not small words
  for(let i=1; i < words.length; i+=1) {
    if(!small.includes(words[i])) {
      words[i] = capitalize(words[i]);
    }
  }
  return words.join(" ");
}

// challenge 4
function removeExtraSpaces(str: string): string {
  str = str.trim();
  return str.replace(/\s\s+/g, ' ');
}

// challenge 5
function kebobCase(str: string): string {
  str = str.toLowerCase();
  str = removeExtraSpaces(str);
  return str.replace(/\s/g, "-");
}

// challenge 6
function snakeCase(str: string, replace = "_"): string {
  str = str.toLowerCase();
  str = removeExtraSpaces(str);
  return str.replace(/\s/g, replace);
}

// challenge 7
function camelCase(str: string): string {
  str = str.toLowerCase();
  str = removeExtraSpaces(str);
  let words = str.split(" ");
  for (let i=1; i < words.length; i+=1) {
    words[i] = capitalize(words[i]);
  }
  return words.join("");
}

// challenge 8
function shift(str: string, pos=1): string {
  const start = str.slice(pos);
  const end = str.slice(0,pos);
  return start + end;
}

// challenge 9
function makeHashTag(str: string): string[] {
  let words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  let tags: string[] = [];

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
function isEmpty(str: string): boolean {
  str = str.replace(/\s/g, "");
  return str === "";
}

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty
};
