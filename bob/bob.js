//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const cleanMessage = message.replace(/[\n\t\r]/g, "");

  let lastCharacter;
  for (let i = cleanMessage.length - 1; i < cleanMessage.length; i--) {
    if (/\s$/.test(cleanMessage[i]) === false) {
      lastCharacter = cleanMessage[i];
      break;
    }
  }
  if (cleanMessage === cleanMessage.toUpperCase() && message.toUpperCase() !== cleanMessage.toLowerCase() && lastCharacter === '?') {
    return "Calm down, I know what I'm doing!";
  } else if (cleanMessage === cleanMessage.toUpperCase() && cleanMessage.toUpperCase() !== cleanMessage.toLowerCase()) {
    return 'Whoa, chill out!';
  } else if (lastCharacter === '?') {
    return 'Sure.';
  } else if (cleanMessage === '' || cleanMessage.match(/^ *$/) !== null) {
    return 'Fine. Be that way!';
  }
  else {
    return 'Whatever.'
  }
};









