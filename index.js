const lobFactory = require(`lob`)

const hashObject = require(`./hash-object.js`)
const { makeObjectSnakeCase, makeObjectCamelCase } = require(`./object-case.js`)


module.exports = async({ apiKey, address, addressId, check }) => {
	const lob = lobFactory(apiKey, {
		userAgent: `lob-check`,
	})

	const lobAddressId = typeof addressId === 'string'
		? addressId
		: (await getOrCreateAddress(lob, address)).id

	const createdCheck = makeObjectCamelCase(
		await lob.checks.create(makeObjectSnakeCase(Object.assign({}, check, { to: lobAddressId })))
	)

	return createdCheck
}

const getOrCreateAddress = async(lob, address) => {
	const hash = hashObject(address)
	const metadata = { hash }
	const response = await lob.addresses.list({ limit: 1, metadata })

	if (response.data.length === 1) {
		return makeObjectCamelCase(response.data[0])
	}

	return makeObjectCamelCase(
		await lob.addresses.create(
			makeObjectSnakeCase(Object.assign({}, address, { metadata }))
		)
	)
}
