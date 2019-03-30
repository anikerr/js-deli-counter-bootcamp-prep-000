function takeANumber(katzDeliLine, newName) {
  return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      let lineMessage = 'The line is currently:';
      let customer = katzDeliLine[i];
      let number = i + 1;
      lineMessage += `${number}. ${customer},`
      console.log(lineMessage);
      return lineMessage;
    }
  } else {
    return 'The line is currently empty.'
  }
}