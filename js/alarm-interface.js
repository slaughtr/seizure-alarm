var funTime = require('./../js/alarm.js').funTime
let hour = null
let minute = null
let nyanCat = new Audio('./../resources/nyan.mp3')

$(function() {
  $('.blinks').hide()
  $('.area').hide()
  $('#snoozer').hide()

  let currentTime = function() { $('#currentTime').text(moment().format('LTS')) }
  currentTime()
  setInterval(currentTime, 1000)
  setInterval(alarmTimer, 1000)

  function alarmTimer() {
    var currentHour = parseInt(moment().format('H'))
    var currentMinute = parseInt(moment().format('mm'))
    if ((hour === currentHour) && (minute === currentMinute)) {
      $('*').addClass('blinks')
      $('#snoozer').show()
      $('.alarm-set').hide()
      $('.area').slideDown()
      nyanCat.play()
    }
  }

  $('#snoozer').click(function() {
    minute += 1
    debugger
    $('*').removeClass('blinks')
    $('*').css('backgroundColor','white')
    $('.area').slideUp()
    nyanCat.pause()
  })

  $('.alarm-form').submit(function(event) {
    event.preventDefault()
    hour = parseInt($('#hour').val())
    minute = parseInt($('#minute').val())
    $('#nextAlarm').text('Next alarm at: '+hour+':'+minute)
  })
})
