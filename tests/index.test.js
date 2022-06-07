const index = require('../src/index');


test('Test capitalize', () => {
  expect(index.capitalize("homework")).toBe("Homework");
  expect(index.capitalize("happy birthday")).toBe("Happy birthday");
  expect(index.capitalize(" do you understand")).toBe(" do you understand");

})

test("Test allCaps", () => {
  expect(index.allCaps("alright")).toBe("ALRIGHT");
  expect(index.allCaps("CAFFEINE!!")).toBe("CAFFEINE!!");
  expect(index.allCaps("anYWays i Am coLd")).toBe("ANYWAYS I AM COLD");
})

test("Test capitalizeWords", () => {
  expect(index.capitalizeWords("how are you today")).toBe("How Are You Today");
  expect(index.capitalizeWords("wHAT IS thAT")).toBe("WHAT IS ThAT");
  expect(index.capitalizeWords("i'm nOT sure!")).toBe("I'm NOT Sure!");
})

test("Test capitalizeHeadline", () => {
  expect(index.capitalizeHeadline("the sad rock and the sky")).toBe("The Sad Rock and the Sky");
  expect(index.capitalizeHeadline("everyone nEEDS the spoon")).toBe("Everyone NEEDS the Spoon");
  expect(index.capitalizeHeadline("local teen is trying")).toBe("Local Teen is Trying");
})

test("Test removeExtraSpaces", () => {
  expect(index.removeExtraSpaces("  what  is the  time    ")).toBe("what is the time");
  expect(index.removeExtraSpaces("how    many")).toBe("how many");
  expect(index.removeExtraSpaces("     yep ")).toBe("yep");
})

test("Test kebobCase", () => {
  expect(index.kebobCase("yeah for sure")).toBe("yeah-for-sure");
  expect(index.kebobCase(" what IS the  issue")).toBe("what-is-the-issue");
  expect(index.kebobCase(" airPLane time      !")).toBe("airplane-time-!");
})

test("Test snakeCase", () => {
  expect(index.snakeCase("how    many serpENTs?")).toBe("how_many_serpents?");
  expect(index.snakeCase("    is There more  rice")).toBe("is_there_more_rice");
  expect(index.snakeCase("thirsty thirsty  BOy")).toBe("thirsty_thirsty_boy");
})

test("Test camelCase", () => {
  expect(index.camelCase("my neck hurts")).toBe("myNeckHurts");
  expect(index.camelCase("  YUCKY  tea ")).toBe("yuckyTea");
  expect(index.camelCase(" buRNT      tongue ouch ")).toBe("burntTongueOuch");
})

test("Test shift", () => {
  expect(index.shift("hello audience")).toBe("ello audienceh");
  expect(index.shift("sleepy time", 3)).toBe("epy timesle");
  expect(index.shift("mornING", 2)).toBe("rnINGmo");
})

test("Test makeHashTag", () => {
  expect(index.makeHashTag("such terrific work son")).toStrictEqual(["#terrific", "#such", "#work"]);
  expect(index.makeHashTag("incredibly GROSS")).toStrictEqual(["#incredibly", "#gross"]);
  expect(index.makeHashTag("what sparkly masterpieces you create")).toStrictEqual(["#masterpieces", "#sparkly", "#create"]);
})

test("Test isEmpty", () => {
  expect(index.isEmpty("   ")).toBe(true);
  expect(index.isEmpty("    ")).toBe(true);
  expect(index.isEmpty(" soups    and such")).toBe(false);
})