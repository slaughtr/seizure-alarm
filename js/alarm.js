function funTime() { //THIS WILL GIVE YOU SEIZURES BE CAREFUL
  let random255 = () => Math.floor(Math.random()*255)
  let randomColor = () => "rgb(" + random255() + "," + random255() + "," + random255() + ")"
  let doWork = () => $(".blinks").css("backgroundColor",randomColor())
  let doClockWork = () => $("h1").css("color",randomColor())
  let i=0
  let intervalId = setInterval(function () {
      if (i > 10000000) clearInterval(intervalId)
      doWork()
      doClockWork()
      i++
  },0)
}


exports.funTime = funTime() //SERIOUSLY, SEIZURES
