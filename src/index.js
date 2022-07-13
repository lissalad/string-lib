// challenge 1
function capitalize(str) {
    var letters = str.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
}
// challenge 2
function allCaps(str) {
    return str.toUpperCase();
}
// challenge 3
function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i += 1) {
        words[i] = capitalize(words[i]);
    }
    return words.join(" ");
}
// bonus
function capitalizeHeadline(str) {
    var small = ["and", "an,", "a", "at", "but", "by", "for", "in", "the", "is"];
    var words = str.split(" ");
    // capitalize first regardless
    words[0] = capitalize(words[0]);
    // ccapitalize not small words
    for (var i = 1; i < words.length; i += 1) {
        if (!small.includes(words[i])) {
            words[i] = capitalize(words[i]);
        }
    }
    return words.join(" ");
}
// challenge 4
function removeExtraSpaces(str) {
    str = str.trim();
    return str.replace(/\s\s+/g, ' ');
}
// challenge 5
function kebobCase(str) {
    str = str.toLowerCase();
    str = removeExtraSpaces(str);
    return str.replace(/\s/g, "-");
}
// challenge 6
function snakeCase(str, replace) {
    if (replace === void 0) { replace = "_"; }
    str = str.toLowerCase();
    str = removeExtraSpaces(str);
    return str.replace(/\s/g, replace);
}
// challenge 7
function camelCase(str) {
    str = str.toLowerCase();
    str = removeExtraSpaces(str);
    var words = str.split(" ");
    for (var i = 1; i < words.length; i += 1) {
        words[i] = capitalize(words[i]);
    }
    return words.join("");
}
// challenge 8
function shift(str, pos) {
    if (pos === void 0) { pos = 1; }
    var start = str.slice(pos);
    var end = str.slice(0, pos);
    return start + end;
}
// challenge 9
function makeHashTag(str) {
    var words = str.split(" ");
    words = words.sort(function (a, b) { return b.length - a.length; });
    var tags = [];
    var numTags = 0;
    if (words.length > 3) {
        numTags = 3;
    }
    else {
        numTags = words.length;
    }
    for (var i = 0; i < numTags; i += 1) {
        tags.push("#" + words[i].toLowerCase());
    }
    return tags;
}
// challenge 10
function isEmpty(str) {
    str = str.replace(/\s/g, "");
    return str === "";
}
module.exports = {
    capitalize: capitalize,
    allCaps: allCaps,
    capitalizeWords: capitalizeWords,
    capitalizeHeadline: capitalizeHeadline,
    removeExtraSpaces: removeExtraSpaces,
    kebobCase: kebobCase,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag,
    isEmpty: isEmpty
};
