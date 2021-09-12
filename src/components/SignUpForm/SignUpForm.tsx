import _ from 'lodash'

import { APP_PAGES } from 'utils/consts'
import { TwoParamsFunction, VoidFunctionType } from 'types/generic'
import { PredefinedFields, SignUpData, ErrorsData } from 'types/singUp'
import styles from './SignUpForm.module.scss'

import InputField from 'components/InputField/InputField'

type SignUpFormProps = {
	fields: SignUpData[]
	errors: ErrorsData
	updateHandler: TwoParamsFunction<PredefinedFields, string | null, void>
	handleSubmit: VoidFunctionType
}

const SignUpForm = ({
	fields,
	errors,
	updateHandler,
	handleSubmit,
}: SignUpFormProps) => {
	return (
		<div data-testid={`${APP_PAGES.SIGNUP.id}-form`} className={styles.root}>
			<div
				className={styles.title}
				data-testid={`${APP_PAGES.SIGNUP.id}-title`}
			>
				Sign Up
			</div>
			<div
				className={styles.fieldsContainer}
				data-testid={`${APP_PAGES.SIGNUP.id}-fields-container`}
			>
				{_.map(fields, field => {
					const action = {
						[field.act]: (value: string | null) =>
							updateHandler(field.id, value),
					}

					return (
						<InputField
							title={field.title}
							isPassword={field.isPassword}
							errorText={field.errorText}
							placeholder={field.placeholder}
							error={errors ? errors[field.id] : false}
							dataTestIdPrefix={APP_PAGES.SIGNUP.id}
							{...action}
							key={field.id}
						/>
					)
				})}
			</div>
			<button
				data-testid={`${APP_PAGES.SIGNUP.id}-submit-button`}
				onClick={handleSubmit}
				className={styles.submitButton}
			>
				Submit
			</button>
		</div>
	)
}

export default SignUpForm
