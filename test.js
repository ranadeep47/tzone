var tzone = require('./');

tzone.change('Asia/Calcutta',function(err,timezone){
	console.log('Changed ' + timezone )
})