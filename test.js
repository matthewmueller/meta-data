/**
 * Module Dependencies
 */

let assert = require('assert')
let meta = require('./')

/**
 * Tests
 */

describe('meta-data', function() {
  describe('arrays', function() {
    it('1. non-enumerable', function() {
      let arr = [1, 2, 3]
      arr = meta(arr, { source: 'clojure' })
      let out = []
      for (let v of arr) out.push(v)
      assert.deepEqual(out, arr)
      assert.equal(arr.source, 'clojure')
    })

    it('2. equality', function() {
      let a = [1, 2, 3]
      a = meta(a, { source: 'clojure' })
      let b = [1, 2, 3]
      b = meta(b, { source: 'javascript' })

      assert.deepEqual(a, b)
      assert.equal(a.source, 'clojure')
      assert.equal(b.source, 'javascript')
    })
  })

  describe('objects', function() {
    it('1. non-enumerable', function() {
      let obj = { a: 1, b: 2, c: 3}
      obj = meta(obj, { source: 'clojure' })
      let out = {}
      for (let k in obj) out[k] = obj[k]
      assert.deepEqual(out, obj)
      assert.equal(obj.source, 'clojure')
    })

    it('2. equality', function() {
      let a = { a: 1, b: 2, c: 3}
      a = meta(a, { source: 'clojure' })
      let b = { a: 1, b: 2, c: 3}
      b = meta(b, { source: 'javascript' })

      assert.deepEqual(a, b)
      assert.equal(a.source, 'clojure')
      assert.equal(b.source, 'javascript')
    })
  })
})
