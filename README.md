tzone
=====

A simple node script to change the timezone of a linux system 

var tzone = require('tzone');

tzone.change('Asia/Culcutta',function(err,timezone){
	console.log(timezone) // 'Asia/Culcutta'
})

console.log(tzone.search('culcuta')) // ['Asia/Culcutta', ...]
