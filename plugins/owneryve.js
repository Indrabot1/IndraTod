let handler = function (m) {
	this.sendContact(m.chat, '6282228302341', 'Owner IndraBotz :)', m)
}

handler.customPrefix = ['🍭Owner Indrabot'] 
handler.command = new RegExp

module.exports = handler