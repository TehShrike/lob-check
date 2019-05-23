A library for sending checks with [Lob](https://lob.com/).

To use via the command-line, see [lob-check-cli](https://github.com/TehShrike/lob-check-cli).

## Install
```sh
npm i lob-check
```

```js
const lobCheck = require(`lob-check`)
````

## `checkPromise = lobCheck({ apiKey, address, check })`

A function that expects an object with three properties.

- `apiKey`: a Lob API key.
- `address`: an [address](https://lob.com/docs/node#addresses_create) object.  If there is an existing address with the same properties, that address will be used instead of creating a new address.
- `check`: a [check](https://lob.com/docs/node#checks_create) object to be created.

Properties will be automatically converted from camelCase to snake_case before sending to the API.

Returns a promise that resolves to the resulting check object.

You'll need to create the `from` address and `bankAccount` manually in the [Lob Dashboard](https://dashboard.lob.com/) and pass those ids as string properties on the `check` object..

## Example

```js
const lobCheck = require(`lob-check`)

const apiKey = process.env.LOB_API_KEY

lobCheck({
	apiKey,
	address: {
		name: `Accelerando Coffee House`,
		addressLine1: `7023 Cass Street`,
		addressCity: `Omaha`,
		addressState: `NE`,
		addressZip: `68132`,
	},
	check: {
		from: `adr_2aa6e965740a9613`,
		bankAccount: `bank_647a2fce6ff7148`,
		amount: 420.69,
	},
}).then(checkResponse => {
	console.log(`Success:`)
	console.log(checkResponse)
}).catch(err => {
	console.error(err.message || err)
	process.exit(1)
})
```

# License

[WTFPL](https://wtfpl2.com)
