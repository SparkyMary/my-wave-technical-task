import { PredefinedFields } from 'types/singUp'
import { ACTIONS_ON } from 'utils/consts'
import { validateEmail, validatePassword } from 'utils'

export const SIGN_UP_CONFIG = [
	{
		id: PredefinedFields.email,
		title: 'Your email',
		placeholder: 'john@mywave.ai',
		errorText: 'This should be a valid email address',
		act: ACTIONS_ON.BLUR,
		validator: validateEmail,
	},
	{
		id: PredefinedFields.password,
		title: 'Your password',
		isPassword: true,
		errorText:
			'This field must include at least one capital letter, one digit and one special character',
		act: ACTIONS_ON.BLUR,
		validator: validatePassword,
	},
	{
		id: PredefinedFields.passwordSecond,
		title: 'Confirm your password',
		isPassword: true,
		errorText: 'This password should be the same as above',
		act: ACTIONS_ON.CHANGE,
	},
]
