export const hey = (message) => {
  if (isShout(message)) {
    return 'Whoa, chill out!'
  }
  if (isQuestion(message)) {
    return 'Sure.'
  }
  return 'Whatever.'
};

const isShout = (message) => {
  return message.toUpperCase() === message
}

const isQuestion = (message) => {
  return message.endsWith('?')
}