// Assignment Code

document.querySelector('#length').value = 8
let inputs = document.querySelectorAll('input')
let password = {
  securePass: '',
  passLength: document.querySelector('#length').value,
  labelElem: document.querySelector('#display-length')
}
let upCheck = {
  elem: document.querySelector('#upper'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (upCheck.charSet.includes(p[i])) {
        return true
      }
    }
    return false
  },
  charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
let lowerCheck = {
  elem: document.querySelector('#lower'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (lowerCheck.charSet.includes(p[i])) {
        return true
      }
    }
    return false
  },
  charSet: 'abcdefghijklmnopqrstuvwxyz'
}
let numCheck = {
  elem: document.querySelector('#num'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (numCheck.charSet.includes(p[i])) {
        return true
      }
    }
    return false
  },
  charSet: '1234567890'
}
let spcCheck = {
  elem: document.querySelector('#spc'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (spcCheck.charSet.includes(p[i])) {
        return true
      }
    }
    return false
  },
  charSet: " !\"#$%&'()*+,-.\\/:;<=>?@[]^_`{|}~"
}

let generateBtn = {
  elem: document.querySelector("#generate"),
  clipLabel: document.querySelector('#copied')
}
let clickAll = {
  elem: document.querySelector('#all')
}
let checkButtons = [upCheck, lowerCheck, numCheck, spcCheck]
let possibleChar = []
let finalPassword
let passwordText
let counter = 0


// Write password to the #password input
function writePassword() {
  finalPassword = generatePassword();
  passwordText = document.querySelector("#password");

  if ((finalPassword === undefined)) {
    passwordText.value = 'Please select at least one criteria...'
  } else {
    passwordText.value = finalPassword
  }
  navigator.clipboard.writeText(finalPassword)
  generateBtn.clipLabel.textContent = 'Copied to clipboard!'

  // for (var i = 0; i < checkButtons.length; i++) {
  //   checkButtons[i].elem.checked = false
  // }
  possibleChar = []

  password.securePass = ''

}

// Generate Password function
function generatePassword() {

  for (var b = 0; b < checkButtons.length; b++) {
    let button = checkButtons[b]
    button.req = button.elem.checked
    if (button.req) {
      possibleChar.push(button)
    }
  }
  // Assembling the password
  for (let z = 0; z < (password.passLength); z++) {
    let chosenLetter
    let button
    for (let i = 0; i < possibleChar.length; i++) {
      button = possibleChar[getRandInt(possibleChar.length)]
      for (let x = 0; x < button.charSet.length; x++) {
        chosenLetter = button.charSet[getRandInt(button.charSet.length)]
      }
    }
    password.securePass += chosenLetter
  }
  return validatePassword(password.securePass)
}

// Need to verify if password meets requirements
function validatePassword(p) {
  let validated = false
  let yesCount = 0

  while (yesCount !== possibleChar.length) {
    for (var i = 0; i < possibleChar.length; i++) {
      if (possibleChar[i].isIncluded(p)) {
        yesCount++
      }
    }
    if (yesCount === possibleChar.length) {
      validated = true
    } else {
      yesCount = 0
      possibleChar = []
      password.securePass = ''
      counter++
      console.log('Recursive reruns: ' + counter)
      p = generatePassword()
    }
  }

  if (validated) {
    return p
  }
}

function getRandInt(max) {
  let randInt = Math.floor(Math.random() * max)
  return randInt
}


// Add event listener to get password length
document.querySelector('#length').addEventListener('input', function () {
  password.labelElem.textContent = document.querySelector('#length').value
  password.passLength = password.labelElem.textContent
});



clickAll.elem.addEventListener('click', function () {
  for (var i = 0; i < checkButtons.length; i++) {
    checkButtons[i].elem.checked = true
  }
})

// Add event listener to generate button
generateBtn.elem.addEventListener("click", writePassword);

password.labelElem.textContent = document.querySelector('#length').value