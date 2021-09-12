import { validateEmail, validatePassword } from './'

describe('Email Validation', () => {
	test('should not validate empty string', () => {
		const email = ''
		expect(validateEmail(email)).toBe(false)
	})

	test('should not validate string with no @ symbol', () => {
		const email = 'qwerty'
		expect(validateEmail(email)).toBe(false)
	})

	test('should not validate string with @ symbol but without domain', () => {
		const email = 'qwerty@'
		expect(validateEmail(email)).toBe(false)
	})

	test('should not validate string with @ symbol and domain but without first level domain', () => {
		const email = 'qwerty@yuio'
		expect(validateEmail(email)).toBe(false)
	})

	test('should not validate string with @ symbol, domain and first level domain but no name', () => {
		const email = '@yuio.com'
		expect(validateEmail(email)).toBe(false)
	})

	test('should validate string with name, @ symbol, domain and first level domain', () => {
		const email = 'qwerty@yuio.com'
		expect(validateEmail(email)).toBe(true)
	})
})

describe('Password Validation', () => {
	test('should not validate empty string', () => {
		const pwd = ''
		expect(validatePassword(pwd)).toBe(false)
	})

	test('should not validate string with no capital letter', () => {
		const pwd = 'qwerty'
		expect(validatePassword(pwd)).toBe(false)
	})

	test('should not validate string with capital letter but no digits', () => {
		const pwd = 'Q'
		expect(validatePassword(pwd)).toBe(false)
	})

	test('should not validate string with capital letter, 1 digit but no special character', () => {
		const pwd = 'Q1'
		expect(validatePassword(pwd)).toBe(false)
	})

	test('should validate with 1 capital letter, 1 digit and 1 special character', () => {
		const pwd = 'Q1!'
		expect(validatePassword(pwd)).toBe(true)
	})

	test('should validate with 1 capital letter, 1 digit and 1 special character in different order', () => {
		const pwd = '#3R'
		expect(validatePassword(pwd)).toBe(true)
	})
})
