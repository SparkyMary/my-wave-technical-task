import { useState, ChangeEvent, FocusEvent } from 'react'
import cx from 'classnames'

import { ReactComponent as EyeOpen } from 'images/eye-open.svg'
import { ReactComponent as EyeClosed } from 'images/eye-closed.svg'
import { ParameterFunctionType } from 'types/generic'
import styles from './InputField.module.scss'

type InputFieldProps = {
	title: string
	errorText: string
	placeholder?: string
	isPassword?: boolean
	error?: boolean
	dataTestIdPrefix?: string
	onChange?: ParameterFunctionType<string, void>
	onBlur?: ParameterFunctionType<string, void>
}

const InputField = ({
	title,
	errorText,
	placeholder,
	isPassword = false,
	error = false,
	dataTestIdPrefix,
	onChange,
	onBlur,
}: InputFieldProps) => {
	const [value, setValue] = useState<string>('')
	const [showValue, setShowValue] = useState(!isPassword)

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		setValue(value)
		if (onChange) onChange(value)
	}

	const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		setValue(value)
		if (onBlur) onBlur(value)
	}

	const getButtonContent = () => {
		return isPassword && value.length > 0 ? (
			showValue ? (
				<EyeClosed />
			) : (
				<EyeOpen />
			)
		) : (
			''
		)
	}

	const type = (() => {
		return isPassword && !showValue ? { type: 'password' } : {}
	})()
	const requiredText = error && !value ? 'Required' : null
	const action = onBlur ? { onBlur: onBlurHandler } : {}

	return (
		<div className={styles.root}>
			<div className={styles.titleContainer}>
				<div className={styles.title}>{title}</div>
				<div className={styles.required}>*</div>
			</div>
			<input
				className={cx(styles.input, {
					[styles.error]: error,
				})}
				placeholder={placeholder}
				value={value}
				data-testid={`${dataTestIdPrefix}-input`}
				{...type}
				onChange={onChangeHandler}
				{...action}
			/>
			<div className={styles.additional}>
				<button onClick={() => setShowValue(!showValue)}>
					{getButtonContent()}
				</button>

				<div className={styles.errorNote}>
					{requiredText ? requiredText : error ? errorText : ''}
				</div>
			</div>
		</div>
	)
}

export default InputField
