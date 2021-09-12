import { screen, render, fireEvent } from '@testing-library/react'
import { APP_PAGES } from 'utils/consts'

import InputField from '../../components/InputField/InputField'

const pageId = `${APP_PAGES.SIGNUP.id}`
const input = 'sometext'
const field = {
	title: 'Title',
	errorText: 'Error',
}

describe('Sign Up Input Field', () => {
	test('should set the value on change', () => {
		render(
			<InputField
				title={field.title}
				errorText={field.errorText}
				dataTestIdPrefix={APP_PAGES.SIGNUP.id}
			/>
		)

		const inputElement = screen.getAllByTestId(
			`${pageId}-input`
		)[0] as HTMLInputElement

		fireEvent.change(inputElement, { target: { value: input } })
		expect(inputElement.value).toBe(input)
	})

	test('should present Required if gets error and value is empty', () => {
		const { getByText } = render(
			<InputField
				title={field.title}
				errorText={field.errorText}
				dataTestIdPrefix={APP_PAGES.SIGNUP.id}
				error={true}
			/>
		)

		expect(getByText('Required')).toBeInTheDocument()
	})

	test('should present error text when gets error and value not empty', () => {
		const { getByText } = render(
			<InputField
				title={field.title}
				errorText={field.errorText}
				dataTestIdPrefix={APP_PAGES.SIGNUP.id}
				error={true}
			/>
		)

		const inputElement = screen.getAllByTestId(
			`${pageId}-input`
		)[0] as HTMLInputElement

		fireEvent.change(inputElement, { target: { value: input } })
		expect(inputElement.value).toBe(input)
		fireEvent.blur(inputElement)

		expect(getByText(field.errorText)).toBeInTheDocument()
	})

	test('should not present error when not getting error', () => {
		render(
			<InputField
				title={field.title}
				errorText={field.errorText}
				dataTestIdPrefix={APP_PAGES.SIGNUP.id}
				error={false}
			/>
		)

		const inputElement = screen.getAllByTestId(
			`${pageId}-input`
		)[0] as HTMLInputElement

		fireEvent.change(inputElement, { target: { value: input } })
		expect(inputElement.value).toBe(input)
		fireEvent.blur(inputElement)

		expect(screen.queryByText(field.errorText)).not.toBeInTheDocument()
	})

	test('should call the onBlur function in input field on blur', () => {
		const mocked = jest.fn()

		render(
			<InputField
				title={field.title}
				errorText={field.errorText}
				dataTestIdPrefix={APP_PAGES.SIGNUP.id}
				onBlur={mocked}
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
})
