// Assignment Code
let inputs = document.querySelectorAll('input')
let password = {
  securePass: '',
  passLength: document.querySelector('#length').value,
  labelElem: document.querySelector('#display-length')
}
let upCheck = {
  elem: document.querySelector('#upper'),
  req: false,
  isIncluded: false,
  charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
let lowerCheck = {
  elem: document.querySelector('#lower'),
  req: false,
  isIncluded: false,
  charSet: 'abcdefghijklmnopqrstuvwxyz'
}
let numCheck = {
  elem: document.querySelector('#num'),
  req: false,
  isIncluded: false,
  charSet: '1234567890'
}
let spcCheck = {
  elem: document.querySelector('#spc'),
  req: false,
  isIncluded: false,
  charSet: '!@#$%^&*()_=-+?'
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password === undefined) {
    passwordText.value = password;
  }
  if (!upCheck.isIncluded && !lowerCheck.isIncluded && !numCheck.isIncluded && !spcCheck.isIncluded){
    console.log('Oopsy Woopsy')
  }
  if (!upCheck.req && !lowerCheck.req && !numCheck.req && !spcCheck.req){
    passwordText.value = 'Please select some criteria...'
  }

  for (var i = 0; i < checkButtons.length; i++) {
    checkButtons[i].elem.checked = false
  }
  possibleChar = []


}

// Generate Password function
function generatePassword() {

  for (var i = 0; i < checkButtons.length; i++) {
    let button = checkButtons[i]
    button.req = button.elem.checked
    if (button.req) {
      possibleChar.push(button.charSet)
    } else {
      console.log('Dont include ' + button.elem.id)
    }
    console.log(button)
  }
  for (let z = 0; z < (password.passLength); z++){
    password.securePass += ''
    for (let i = 0; i < possibleChar.length; i++) {
      let charSet = possibleChar[i]
  
      for (let x = 0; x < charSet.length; x++){
        let letter = charSet[x]
  
      }
    }
  }
  return password.securePass
}


  // for (var i = 0; i < password.passLength; i++) {
  //   randList = Math.floor(Math.random() * charArray.length)
  //   securePass += charArray[randList][Math.floor(Math.random() * charArray[randList].length)]

  // }
  // if (possibleChar.length !== 0) {
  //   return securePass
  //   for (var x = 0; x < securePass.length; x++) {
  //     if (num.includes(securePass[x])) {
  //       numBool = true
  //     } else if (upper.includes(securePass[x])) {
  //       upperBool = true
  //     } else if (lower.includes(securePass[x])) {
  //       lowerBool = true
  //     } else if (spc.includes(securePass[x])) {
  //       spcBool = true
  //     }
  //   }

  //   if (numBool && upperBool && lowerBool && spcBool) {
  //     possibleChar = ''
  //     navigator.clipboard.writeText(securePass)
  //     copyToClipboard.textContent = 'Copied to clipboard!'
  //     return securePass
  //   } else {
  //     possibleChar = ''
  //     securePass = ''
  //     numBool = false
  //     upperBool = false
  //     lowerBool = false
  //     spcBool = false
  //   }

  // } else {
  //   securePass = 'Please select some criteria...'

  //   return securePass
  // }




// Add event listener to get password length
document.querySelector('#length').addEventListener('change', function () {
  password.labelElem.textContent = document.querySelector('#length').value
});



clickAll.elem.addEventListener('click', function () {
  for (var i = 0; i < checkButtons.length; i++) {
    checkButtons[i].elem.checked = true
  }
})

// Add event listener to generate button
generateBtn.elem.addEventListener("click", writePassword);