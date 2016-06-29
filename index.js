/**
 * Module Dependencies
 */

var clone = require('component-clone')

/**
 * Export `metadata`
 */

module.exports = metadata

/**
 * Metadata
 */

function metadata (col, obj) {
  if (!obj) return col
  col = clone(col)
  for (var k in obj) {
    if (!obj.hasOwnProperty(k)) continue
    Object.defineProperty(col, k, {
      enumerable: false,
      __proto__: null,
      value: obj[k]
    })
  }
  return col
}
