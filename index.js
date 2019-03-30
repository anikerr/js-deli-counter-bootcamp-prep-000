function takeANumber(katzDeliLine, newName) {
  return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return katzDeliLine.shift();
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    for (let customer in katzDeliLine) {
      let lineMessage = 'The line is currently:';
      let number = customer + 1 + '.';
      lineMessage += `number katzDeliLine[customer],`
      console.log(lineMessage);
      return lineMessage;
    }
  } else {
    return 'The line is currently empty.'
  }
}