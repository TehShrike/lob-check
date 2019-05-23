const mapObj = require(`map-obj`)
const toSnakeCase = require(`just-snake-case`)
const toCamelCase = require(`just-camel-case`)

const mapKeys = (obj, fn) => mapObj(obj, (key, value) => [ fn(key), value ], { deep: true })

module.exports = {
	makeObjectSnakeCase: object => mapKeys(object, toSnakeCase),
	makeObjectCamelCase: object => mapKeys(object, toCamelCase),
}
