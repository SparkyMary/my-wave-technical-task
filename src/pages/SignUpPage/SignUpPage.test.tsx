import React from 'react'
import { render } from '@testing-library/react'
import { APP_PAGES } from 'utils/consts'

import App from 'src/App'
import SignUpPage from '../../pages/SignUpPage/SignUpPage'

const pageId = `${APP_PAGES.SIGNUP.id}`

describe('Sign Up page', () => {
	test('should render sign-up page', () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId(pageId)).toBeInTheDocument()
	})

	test('should render a form', () => {
		const { getByTestId } = render(<SignUpPage />)
		expect(getByTestId(`${pageId}-form`)).toBeInTheDocument()
	})
})
