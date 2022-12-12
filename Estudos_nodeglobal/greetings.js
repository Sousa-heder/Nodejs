const getFlagsValue = require('./flags')

console.log(`Oi ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')}`)