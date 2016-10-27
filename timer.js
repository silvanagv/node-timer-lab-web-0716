process.argv.shift()
process.argv.shift()
if (process.argv[0].includes("min")){
  var timeInSecs = parseInt(process.argv[0])*60
}
else {
  var timeInSecs = process.argv[0]
}

var timeLeft = parseInt(timeInSecs)

var interval = setInterval(()=>{
  timeLeft --
  console.log(`Left: ${timeLeft}s`)
  if (timeLeft == 0) {
    clearInterval(interval)
    process.exit(0)
  }
}, 1000)
