export const hey = (message) => {
  if (isShout(message)) {
    return 'Whoa, chill out!'
  }
  return 'Whatever.'
};

const isShout = (message) => {
  return message.toUpperCase() === message
}