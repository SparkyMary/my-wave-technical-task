import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import { APP_PAGES } from 'utils/consts'

// pages
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'

// styling
import 'react-toastify/dist/ReactToastify.css'
import 'styles/App.scss'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect
					exact
					from={APP_PAGES.ROOT.route}
					to={`${APP_PAGES.SIGNUP.route}`}
				/>
				<Route path={`/${APP_PAGES.SIGNUP.route}`}>
					<SignUpPage />
				</Route>
				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
