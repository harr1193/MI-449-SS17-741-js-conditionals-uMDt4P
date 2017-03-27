window.alert(
  'Joker: "Welcome to my maze batman, you have until midnight or' +
 'say bye-bye to everyone in gotham!"*insert joker laugh here*'
)
/* User prompt choice */
var saveTheCity = window.prompt('Joker: "What do you say Bat, type \'yes\'' +
' if you want to save your precious city."')
saveTheCity = saveTheCity.toLowerCase().trim()
var randNum = Math.random()

if (randNum > 0.5) {
  if (saveTheCity === null || saveTheCity === '') {
    window.alert('Joker: "Say something Batman, you\'re weirding ME out, of all people."')
  } else if (saveTheCity === 'yes') { /* User enters 'yes ' */
    window.alert('Joker: "Well I guess we should begin then"')
    var doorNum = window.prompt('Pick a door 1, 2, or 3?')
    doorNum = parseInt(doorNum)
    if (doorNum === null || isNaN(doorNum)) { /* End game if not valid number */
      window.alert('Joker: "You chose nothing, that\'s no fun.", Gotham is destroyed"')
    } else if (doorNum === 1) { /* Move on if door is 1 */
      var destroyMachine = window.confirm('You found Joker\'s earthquake machine, ' +
      'do you want to destroy it?')
      if (destroyMachine === true) { /* Win game if true */
        window.alert('Joker: "You foiled my plan this time Bat but, but I\'ll be back!"')
      } else { /* lose game if false */
        window.alert('The machine went off Gotham has been destroyed, Joker wins.')
      }
    } else if (doorNum === 2) { /* Move on if door is 1 */
      var useJoker = window.confirm('You found Joker, make him turn off machine?')
      if (useJoker === true) { /* Win game if true */
        window.alert('Joker: "You foiled my plan this time Bat but, but I\'ll be back!"')
      } else { /* If doorNum is 3 game is lost */
        window.alert('The machine went off Gotham has been destroyed, Joker wins.')
      }
    }
  } else { /* End game is saveTheCity is not 'yes' */
    window.alert('The machine went off Gotham has been destroyed, Joker wins.')
  }
} else {
  window.alert('Joker: "You know, I don\'t feel like playing fair today Batman"' +
  ' Gotham was destroyed.')
}
