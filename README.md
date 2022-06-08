# stringLib

#### library making practice

## Installation

`npm i lissa-string-lib`

---
# Usage

## capitalize()
#### returns input string with first character capitalized

```js
 capitalize("fish");  
  // returns "Fish"
```

## allCaps()
#### returns input string with all capital characters

```js
allCaps("salmon");    
  // returns "SALMON"
```

## capitalizeWords()
#### returns input string with first character of each word capitalized

```js
capitalizeWords("you are my best friend");  
  // returns "You Are My Best Friend"
```

## capitalizeHeadline()
#### returns input string with first character of each word capitalized
#### EXCLUDING 
#### "and", "an", "a", "at", "but", "by", "for", "in", "the", and "is"

```js
capitalizeHeadline("the bean and the boot");  
  // returns "The Bean and the Boot"
```

## removeExtraSpaces()
#### returns input string with empty space trimmed from beginning and end,
#### and removes any empty characters more than one space

```js
capitalizeWords("  this   is cool     ");  
  // returns "this is cool"
```

## kebobCase()
#### returns input string with dashes instead of spaces
#### output is all lowercase, and without extra spaces

```js
kebobCase("cool STory bro  ");  
  // returns "cool-story-bro"
```

## snakeCase()
#### returns input string with underscores instead of spaces
#### output is all lowercase, and without extra spaces

```js
snakeCase(" HOW   many bags ");  
  // returns "how_many_bags"
```

## camelCase()
### returns input string with no spaces
#### each word's first character is capitalized EXCLUDING the first word

#### output is otherwise all lowercase

```js
camelCase(" Nice  collection there   ");  
  // returns "niceCollectionThere"
```

## shift()
#### returns input string with first character shifted to back
#### with a second int input, specify how many character to shift

```js
shift("really cool");  
  // returns "eally coolr"

shift("no way", 2);
  // returns "wayno"
```

## makeHashTag()
#### returns list of three longest words in input string as hashtags
#### if string is three words or less, all words will be returned as hashtags
#### output is a list of all lowercase terms, beginning with "#"

```js
makeHashTag("so many amazing colors");  
  // returns [ "#amazing", "#colors", "#many" ]

makeHashTag("wow cool");  
  // returns [ "#cool", "#wow" ]
```

## isEmpty()
#### returns true if input string is empty
#### an empty string contains only whitespace

```js
isEmpty("       ");  
  // returns true

isEmpty("   hi    ");  
  // returns false
```


