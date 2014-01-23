var pregCalc = require('./lib/preg_calc.js')

var kumavisDueDate = new Date('March 18, 2014')
var kumavisDueCalc = pregCalc.bind(null,kumavisDueDate)

var startDate = new Date()
var endDate = new Date('March 1, 2014')
var percent = 100 * kumavisDueCalc(startDate, endDate)

console.log(percent.toFixed(2)+'% chance of baby from now to March 1st')

// - - - - - today's chance of baby - - - - -

var dayStart = new Date()
dayStart.setHours(0,0,0,0)
var dayEnd = new Date()
dayEnd.setHours(23,59,59,999)

var todayPercent = 100 * kumavisDueCalc(dayStart, dayEnd)

console.log(todayPercent.toFixed(4)+'% chance of baby today')
