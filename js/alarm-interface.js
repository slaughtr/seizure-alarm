var funTime = require('./../js/alarm.js').funTime
let hour = null
let minute = null
let time = null
let nyanCat = new Audio('./../resources/nyan.mp3')

$(function() {
  $('.blinks').hide()
  $('*').removeClass('blinks')
  
  $('.area').hide()
  $('#snoozer').hide()

  let currentTime = function() { $('#currentTime').text(moment().format('LTS')) }
  currentTime()
  setInterval(currentTime, 1000)
  setInterval(alarmTimer, 1000)

  function alarmTimer() {
    var currentHour = parseInt(moment().format('HH'))
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
    $('*').removeClass('blinks')
    $('*').css('backgroundColor','white')
    $('.area').slideUp(2000)
    $('#nextAlarm').text('Next alarm at: '+hour+':'+minute)
    nyanCat.pause()
  })

  $('.alarm-form').submit(function(event) {
    event.preventDefault()
    alarmTime = $('#alarmTime').val()
    hour = parseInt(alarmTime.substring(0,2))
    minute = parseInt(alarmTime.substring(3,5))
    $('#nextAlarm').text('Next alarm at: '+alarmTime)
  })
})
