export type VoidFunctionType = {
	(): void
}

export type ParameterFunctionType<Input, Output> = {
	(param: Input): Output
}

export type TwoParamsFunction<Input1, Input2, Output> = {
	(param1: Input1, param2: Input2): Output
}
