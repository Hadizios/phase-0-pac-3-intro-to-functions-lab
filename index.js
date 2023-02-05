function shout(hello) {
  return hello.toUpperCase();
}

console.log(shout("hello"));

function whisper(HELLO) {
  return HELLO.toLowerCase();
}
console.log(whisper("hello"));

function logShout(hello) {
  console.log(hello.toUpperCase());
}

logShout("hello"); // HELLO

function logWhisper(HELLO) {
  console.log(HELLO.toLowerCase());
}

function sayHiToHeadphonedRoommate(HELLO) {
  if (HELLO === HELLO.toLowerCase()) return "I can't hear you!";
  if (HELLO === HELLO.toUpperCase()) return "YES INDEED!";
  if (HELLO === "Let's have dinner together!") return "I would love to!";
}

console.log(sayHiToHeadphonedRoommate("Let's have dinner together"));
