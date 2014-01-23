/*

Uses javascript date format
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

*/
var erf = require('./erf.js')

var root2 = Math.sqrt(2)
var day = 1000*60*60*24

module.exports = pregCalc


function pregCalc(due,start,end){
  var startMs = start.getTime()
  var endMs = end.getTime()
  var mu = due.getTime()
  var sigma = 13 * day
  return probBetween(startMs,endMs,mu,sigma)
}

function probBetween(start,end,mu,sigma){
  return genericNormalDistribution(end,mu,sigma) - genericNormalDistribution(start,mu,sigma)
}

function genericNormalDistribution(x,mu,sigma){
  return 0.5*(1+erf((x-mu)/(sigma*root2)))
}