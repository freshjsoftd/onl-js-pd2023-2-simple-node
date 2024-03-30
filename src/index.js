const cow = require('cowsay');

const {create, all, sqrt} = require('mathjs');

const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'number',
    precision: 64,
    predictable: false,
    randomSeed: null
  }
const math = create(all, config);

console.log(math.gcd(150, 35, 17))
console.log(sqrt(148).toFixed(2))



/* console.log(cow.say({
    text: 'I am a module',
    e: 'oO',
    t: 'U',
    r: true,
})) */