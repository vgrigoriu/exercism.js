export const hey = (message) => {
  message = message.trim()
  if (isSilence(message)) {
    return 'Fine. Be that way!'
  }
  if (isShout(message) && isQuestion(message)) {
    return 'Calm down, I know what I\'m doing!'
  }
  if (isShout(message)) {
    return 'Whoa, chill out!'
  }
  if (isQuestion(message)) {
    return 'Sure.'
  }
  return 'Whatever.'
};

const isSilence = (message) => {
  return message === ''
}

const isShout = (message) => {
  // there's at least one letter and all of them are uppercase
  return message.match(/[A-Z]/) && message.toUpperCase() === message
}

const isQuestion = (message) => {
  return message.endsWith('?')
}