import { useState, useEffect } from 'react'
import { toast, ToastPosition } from 'react-toastify'
import cx from 'classnames'

import { SIGN_UP_CONFIG } from 'config'
import { SIGNUP_DELAY } from 'utils/consts'
import { hasErrorFields } from 'utils'
import { PredefinedFields, UserData, ErrorsData } from 'types/singUp'
import styles from './SignUpFormWrapper.module.scss'

import SignUpForm from 'components/SignUpForm/SignUpForm'

const toastOptions = {
	autoClose: SIGNUP_DELAY,
	hideProgressBar: true,
	position: 'top-left' as ToastPosition,
}

const getToast = (text: string, additionalClass: string = '') => {
	return toast(<div className={styles.content}>{text}</div>, {
		...toastOptions,
		className: cx(styles.toast, styles[additionalClass]),
	})
}

const SignUpFormWrapper = () => {
	toast.configure()

	const [userData, setUserData] = useState<UserData>({})
	const [errors, setErrors] = useState<ErrorsData>({})
	const [dataSent, setDataSent] = useState(false)

	const formHasEmptyFields = () => {
		const updatedErrors: ErrorsData = { ...errors }

		for (let key in SIGN_UP_CONFIG) {
			const field = SIGN_UP_CONFIG[key]

			updatedErrors[field.id] = !userData[field.id]
		}

		setErrors(updatedErrors)

		return hasErrorFields(updatedErrors)
	}

	const validateForm = () => {
		const updatedErrors: ErrorsData = { ...errors }

		for (let key in SIGN_UP_CONFIG) {
			const field = SIGN_UP_CONFIG[key]
			const dataValue = userData[field.id]

			let notValid

			if (field.validator) {
				notValid = !!dataValue && !field.validator(dataValue)
			}

			updatedErrors[field.id] = notValid

			if (
				userData[PredefinedFields.passwordSecond] &&
				userData[PredefinedFields.password] !==
					userData[PredefinedFields.passwordSecond]
			) {
				updatedErrors[PredefinedFields.passwordSecond] = true
			}
		}
		setErrors(updatedErrors)

		return !hasErrorFields(updatedErrors)
	}

	const updateHandler = (fieldId: PredefinedFields, value: string | null) => {
		const updatedUserData: UserData = { ...userData }

		updatedUserData[fieldId] = value
		setUserData(updatedUserData)
		setDataSent(false)
	}

	const handleSubmit = () => {
		if (dataSent) {
			getToast('Send your data only once', 'warning')
			return null
		}

		if (formHasEmptyFields() || !validateForm()) {
			getToast('Check the uncompleted fields', 'warning')
		} else {
			setDataSent(true)
			getToast('Your data has been sent')
		}
	}

	useEffect(() => {
		validateForm()
	}, [userData])

	return (
		<SignUpForm
			fields={SIGN_UP_CONFIG}
			errors={errors}
			updateHandler={updateHandler}
			handleSubmit={handleSubmit}
		/>
	)
}

export default SignUpFormWrapper
