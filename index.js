function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!"
  }
  else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks."
  }
  else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

const city = "NYC"
function ternaryCheckCity(city){
  // Write your code here!
return (city === "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){
let userResponse 
switch (tip) {
  case 'generous':
    userResponse = "Thank you so much."
    break
  case 'not as generous':
    userResponse = "Thank you."
    break
  default:
    userResponse = "Bye."
}
return userResponse
}