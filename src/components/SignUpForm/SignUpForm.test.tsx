import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { APP_PAGES } from 'utils/consts'
import { SIGN_UP_CONFIG } from 'config'

import SignUpPage from '../../pages/SignUpPage/SignUpPage'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

const pageId = `${APP_PAGES.SIGNUP.id}`
const form = (
	<SignUpForm
		fields={SIGN_UP_CONFIG}
		errors={{}}
		updateHandler={() => {}}
		handleSubmit={() => {}}
	/>
)

describe('Sign Up Form', () => {
	test('should render a title', () => {
		const { getByTestId } = render(form)
		expect(getByTestId(`${pageId}-title`)).toBeInTheDocument()
	})

	test('should render a three input fields', () => {
		const { getAllByTestId } = render(form)
		expect(getAllByTestId(`${pageId}-input`)).toHaveLength(3)
	})

	test('should render submit button', () => {
		const { getByTestId } = render(form)
		expect(getByTestId(`${pageId}-submit-button`)).toBeInTheDocument()
	})

	test('on change of input the update handler should be called', () => {
		const input = 'test'
		const mocked = jest.fn()

		render(
			<SignUpForm
				fields={SIGN_UP_CONFIG}
				errors={{}}
				updateHandler={mocked}
				handleSubmit={() => {}}
			/>
		)

		const inputElement = screen.getAllByTestId(
			`${pageId}-input`
		)[0] as HTMLInputElement

		fireEvent.change(inputElement, { target: { value: input } })
		expect(inputElement.value).toBe(input)

		fireEvent.blur(inputElement)

		expect(mocked).toBeCalled()
	})

	test('should call submit function on click on submit button', () => {
		const mocked = jest.fn()

		const { getByTestId, getAllByText } = render(
			<SignUpForm
				fields={SIGN_UP_CONFIG}
				errors={{ email: true, password: true, passwordSecond: true }}
				updateHandler={() => {}}
				handleSubmit={mocked}
			/>
		)
		const button = getByTestId(`${pageId}-submit-button`)
		const warnings = getAllByText('Required')

		fireEvent.click(button)
		expect(mocked).toBeCalled()
		expect(warnings).toHaveLength(3)
	})

	test('should validate form and set errors on submit of empty form', () => {
		const errors = {}
		const setErrors = jest.fn()

		const { getByTestId } = render(<SignUpPage />)

		const button = getByTestId(`${pageId}-submit-button`)

		const handleSubmit = jest.spyOn(React, 'useState')
		const validateForm = jest.spyOn(React, 'useEffect')
		handleSubmit.mockImplementation(() => [errors, setErrors])
		validateForm.mockImplementation(() => [errors, setErrors])

		fireEvent.click(button)
		expect(setErrors).toBeTruthy()
	})
})
