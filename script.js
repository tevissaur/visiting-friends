// Assignment Code
let inputs = document.querySelectorAll('input')
let passLength = {
  elem: document.querySelector('#length'),
  length: elem.length,
  label: 
}
let upCheck = {
  elem: document.querySelector('#upper'),
  req: elem.checked,
  charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
let lowerCheck = {
  elem: document.querySelector('#lower'),
  req: elem.checked,
  charSet: 'abcdefghijklmnopqrstuvwxyz'
}
let numCheck = {
  elem: document.querySelector('#num'),
  req: elem.checked,
  charSet: '1234567890'
}
let spcCheck = {
  elem: document.querySelector('#spc'),
  req: elem.checked,
  charSet: '!@#$%^&*()_=-+?'
}

let generateBtn = document.querySelector("#generate");
let passLengthDisplay = document.getElementById('display-length')
let copyToClipboard = document.querySelector('#copied')
let clickAll = document.querySelector('#all')
let charArray = []
let possibleChar = ''
passLengthDisplay.textContent = passLength.value


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== undefined) {
    passwordText.value = password;
  } else {
    generatePassword.call()
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false
  }


}
// for (var i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener('change', function addChar() {
//     let input = inputs[i]
//     if (input.checked) {
//       if ((input.id === 'lower')) {
//         possibleChar += upper
//       } else if ((input.id === 'upper')) {
//         possibleChar += lower
//       } else if ((input.id === 'num')) {
//         possibleChar += num
//       } else if ((input.id === 'spc')) {
//         possibleChar += spc
//       }
//     }

//   })
// }
// Generate Password function
function generatePassword() {
  let numBool = false
  let upperBool = false
  let lowerBool = false
  let spcBool = false
  let securePass = ''


  for (var i = 0; i < passLength.value; i++) {
    var randList = Math.floor(Math.random() * charArray.length)
    securePass += charArray[randList][Math.floor(Math.random() * charArray[randList].length)]

  }
  console.log(securePass)
  if (possibleChar.length !== 0) {
    return securePass
    for (var x = 0; x < securePass.length; x++) {
      if (num.includes(securePass[x])) {
        numBool = true
      } else if (upper.includes(securePass[x])) {
        upperBool = true
      } else if (lower.includes(securePass[x])) {
        lowerBool = true
      } else if (spc.includes(securePass[x])) {
        spcBool = true
      }
    }

    if (numBool && upperBool && lowerBool && spcBool) {
      possibleChar = ''
      navigator.clipboard.writeText(securePass)
      copyToClipboard.textContent = 'Copied to clipboard!'
      return securePass
    } else {
      possibleChar = ''
      securePass = ''
      numBool = false
      upperBool = false
      lowerBool = false
      spcBool = false
    }

  } else {
    securePass = 'Please select some criteria...'

    return securePass
  }


}



// Add event listener to get password length
passLength.addEventListener('change', function () {
  passLengthDisplay.textContent = passLength.value
});

clickAll.addEventListener('click', function () {
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checked) {
      inputs[i].checked = true
    }
  }
})

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
