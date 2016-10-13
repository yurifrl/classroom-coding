const { getJSON } = require('jquery')
const Task = require('data.task')
const {curry} = require('ramda')
const {Just, Nothing} = require('data.maybe')

const Http = {
  // get :: Url -> Task Error Json
  get: (url) => new Task((rej, res) => getJSON(url).error(rej).done(res))
}

// preventDefault :: Event -> State Event
const preventDefault = (e) => e.preventDefault()

// indexOf :: a -> [a] -> Maybe Number
const indexOf = curry((x, xs) => {
  const idx = x.indexOf(x)
  return idx < 0 ? Nothing() : Just(idx)
})

module.exports = {preventDefault, Http, indexOf}
