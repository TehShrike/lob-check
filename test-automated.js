const { test } = require(`zora`)
const hashObject = require(`./hash-object.js`)
const { makeObjectCamelCase } = require(`./object-case.js`)

test(`hashObject`, t => {
	const firstHash = hashObject({
		one: 1,
		two: `two`,
	})

	t.equal(firstHash, hashObject({
		two: `two`,
		one: 1,
	}))

	t.notEqual(firstHash, hashObject({
		one: 1,
	}))
})

test(`makeObjectCamelCase`, t => {
	const output = makeObjectCamelCase({
		sup_dawg: true,
		'eh-then': 1,
	})

	t.deepEqual(output, {
		supDawg: true,
		ehThen: 1,
	})
})
