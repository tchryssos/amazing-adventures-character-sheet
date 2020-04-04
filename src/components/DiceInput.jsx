import React from 'react'
import { createUseStyles } from 'react-jss'

import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'

import { dice } from 'constants/attributes'

const useStyles = createUseStyles({
	diceInputWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	input: {
		width: 48,
	},
})

export default ({ diceCountPath, diceTypePath }) => {
	const classes = useStyles()
	return (
		<div className={classes.diceInputWrapper}>
			<NumberInput
				formPath={diceCountPath}
				min={1}
				max={20}
				className={classes.input}
			/>
			<SelectInput
				formPath={diceTypePath}
				options={dice}
				className={classes.input}
			/>
		</div>
	)
}
