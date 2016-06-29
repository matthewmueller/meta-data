# meta-data

Experimental Javascript library to assign metadata to Objects and Arrays.

Inspired by Clojure's [metadata](http://clojure.org/reference/metadata).

## Installation

```bash
npm install meta-data
```

## Properties

1. Metadata is non-enumerable. It cannot be looped over.
2. Metadata does not impact equality. Two objects that differ only in metadata are equal.
3. Attaching metadata create a new object. An object with different metadata is a different object.

## Usage

```js
meta = require('meta-data')
let arr = meta([1, 2, 3], { source: 'clojure' })

for (let n of arr) {
  console.log(n) // 1...2...3
}

console.log(arr.source) // clojure
```

## License

MIT
