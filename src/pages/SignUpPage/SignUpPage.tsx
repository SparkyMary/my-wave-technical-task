import { APP_PAGES } from 'utils/consts'

import PageContainer from 'components/PageContainer/PageContainer'
import SignUpFormWrapper from 'components/SignUpFormWrapper/SignUpFormWrapper'

const SignUpPage = () => {
	return (
		<PageContainer pageId={APP_PAGES.SIGNUP.id}>
			<SignUpFormWrapper />
		</PageContainer>
	)
}

export default SignUpPage
