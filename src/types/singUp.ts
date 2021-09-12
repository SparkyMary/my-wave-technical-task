import { ParameterFunctionType } from './generic'

export enum PredefinedFields {
	email = 'email',
	password = 'password',
	passwordSecond = 'passwordSecond',
}

export type UserData = {
	[PredefinedFields.email]?: string | null
	[PredefinedFields.password]?: string | null
	[PredefinedFields.passwordSecond]?: string | null
}

export type ErrorsData = {
	[PredefinedFields.email]?: boolean
	[PredefinedFields.password]?: boolean
	[PredefinedFields.passwordSecond]?: boolean
}

export type SignUpData = {
	id: PredefinedFields
	title: string
	errorText: string
	act: string
	placeholder?: string
	isPassword?: boolean
	error?: boolean
	validator?: ParameterFunctionType<string, void>
}
