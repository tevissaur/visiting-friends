// Assignment Code
let inputs = document.querySelectorAll('input')
const password = {
  securePass: '',
  passLength: document.querySelector('#length').value,
  labelElem: document.querySelector('#display-length')
}
const upCheck = {
  elem: document.querySelector('#upper'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (upCheck.charSet.includes(p[i])) {
        console.log('UPPER INCLUDED')
        return true
      }
    }
    return false
  },
  charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
const lowerCheck = {
  elem: document.querySelector('#lower'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (lowerCheck.charSet.includes(p[i])) {
        console.log('lower included')
        return true
      }
    }
    return false
  },
  charSet: 'abcdefghijklmnopqrstuvwxyz'
}
const numCheck = {
  elem: document.querySelector('#num'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (numCheck.charSet.includes(p[i])) {
        console.log('num included')
        return true
      }
    }
    return false
  },
  charSet: '1234567890'
}
const spcCheck = {
  elem: document.querySelector('#spc'),
  req: false,
  isIncluded: function (p) {
    for (var i = 0; i < p.length; i++) {
      if (spcCheck.charSet.includes(p[i])) {
        console.log('spc included')
        return true
      }
    }
    return false
  },
  charSet: '!@#$%^&*()_=-+?'
}

const generateBtn = {
  elem: document.querySelector("#generate"),
  clipLabel: document.querySelector('#copied')
}
const clickAll = {
  elem: document.querySelector('#all')
}

let checkButtons = [upCheck, lowerCheck, numCheck, spcCheck]
let possibleChar = []
let finalPassword
let passwordText


// Write password to the #password input
function writePassword() {
  finalPassword = generatePassword();
  passwordText = document.querySelector("#password");

  if ((finalPassword === undefined)) {
    passwordText.value = 'Please select at least one criteria...'
  } else{
    passwordText.value = finalPassword
  }
  navigator.clipboard.writeText(finalPassword)
  generateBtn.clipLabel.textContent = 'Copied to clipboard!'
  for (var i = 0; i < checkButtons.length; i++) {
    checkButtons[i].elem.checked = false
  }
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
let counter = 0
// Need to verify if password meets requirements
function validatePassword(p) {
  let validated = false
  let yesCount = 0

  while (yesCount !== possibleChar.length ) {
    for (var i =0; i < possibleChar.length; i++) {
      if (possibleChar[i].isIncluded(p)) {
        console.log('yes')
        yesCount++
      }
    }
    if (yesCount === possibleChar.length) {
      validated = true
    }
  }

  if (validated) {
    return p
  } else {
    possibleChar = []
    password.securePass = generatePassword()
  }
}

function getRandInt(max) {
  let randInt = Math.floor(Math.random() * max)
  return randInt
}


// Add event listener to get password length
document.querySelector('#length').addEventListener('change', function () {
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