function takeANumber(katzDeliLine, newName) {
  return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.shift()
}