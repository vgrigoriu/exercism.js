export const hey = message => {
  message = message.trim();
  const isSilence = message === "";
  const isShout = message.match(/[A-Z]/) && message.toUpperCase() === message;
  const isQuestion = message.endsWith("?");

  if (isSilence) {
    return "Fine. Be that way!";
  }

  if (isShout && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isShout) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
};
