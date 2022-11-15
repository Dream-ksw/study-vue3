import { sum } from './js/math'
const { priceFormat } = require('./js/format')
import './js/element'

console.log(sum(20, 30))
console.log(priceFormat(98.88))

const names = ['abc', 'cba', 'nba']
names.forEach(item => console.log(item))