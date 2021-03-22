const lobCheck = require(`./`)

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
	addressId: 'adr_40b76d26dd074094',
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
