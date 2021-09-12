import { render } from '@testing-library/react'
import { APP_PAGES } from 'utils/consts'

import SignUpFormWrapper from '../../components/SignUpFormWrapper/SignUpFormWrapper'

const pageId = `${APP_PAGES.SIGNUP.id}`

describe('Sign Up page wrapper', () => {
	test('should render a form', () => {
		const { getByTestId } = render(<SignUpFormWrapper />)
		expect(getByTestId(`${pageId}-form`)).toBeInTheDocument()
	})
})
