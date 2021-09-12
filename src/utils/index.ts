import _ from 'lodash'
import { ErrorsData } from 'types/singUp'

export const validateEmail = (email: string) =>
	/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:+)\])$/.test(
		email
	)

export const validatePassword = (password: string) =>
	/^(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&'*+/=?^_`{|}~-])[A-Za-z\d@!#$%&'*+/=?^_`{|}~-]{3,}$/.test(
		password
	)

export const hasErrorFields = (object: ErrorsData) =>
	_.filter(object, field => !!field).length > 0
