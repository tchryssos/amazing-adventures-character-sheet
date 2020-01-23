import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import modCalc from 'util/modCalc'

import NumberInput from 'components/NumberInput'
import CheckboxInput from 'components/CheckboxInput'

import { attributes } from 'constants/attributes'
import { VAL, MOD, PROF } from 'constants/schema'
import { shadow, white } from 'constants/styles/colors'
import { fontSizeMd } from 'constants/styles/text'

const useStyles = createUseStyles({
	tableWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	tableRow: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
	},
	tableHeader: {
		backgroundColor: shadow,
		color: white,
		fontWeight: 'bold',
	},
	nameBox: {
		width: '40%',
		height: fontSizeMd,
		textTransform: 'uppercase',
	},
	numberBox: {
		width: '25%',
		display: 'flex',
		justifyContent: 'center',
	},
	saveBox: {
		width: '10%',
		display: 'flex',
		justifyContent: 'center',
		alginItems: 'center',
	},
})

const TableHeader = ({ classes }) => (
	<div
		className={clsx(
			classes.tableRow,
			classes.tableHeader,
		)}
	>
		<div className={classes.nameBox} />
		<div className={classes.numberBox}>SCORE</div>
		<div className={classes.numberBox}>MOD</div>
		<div className={classes.saveBox}>Save</div>
	</div>
)

const AttrRows = ({ formVals, setFormVals, classes }) => attributes.map(
	(attribute) => {
		return (
			<div className={classes.tableRow} key={attribute}>
				<div className={classes.nameBox}>{attribute}</div>
				<div className={classes.numberBox}>
					<NumberInput
						min={0}
						max={30}
						formPath={[attribute, VAL]}
						formVals={formVals}
						setFormVals={setFormVals}
					/>
				</div>
				<div className={classes.numberBox}>
					<NumberInput
						min={-5}
						max={10}
						readOnly
						formPath={[attribute, MOD]}
						formVals={formVals}
					/>
				</div>
				<div className={classes.saveBox}>
					<CheckboxInput
						formPath={[attribute, PROF]}
						formVals={formVals}
						setFormVals={setFormVals}
					/>
				</div>
			</div>
		)
	},
)

export default ({ formVals, setFormVals }) => {
	const classes = useStyles()
	return (
		<div className={classes.tableWrapper}>
			<TableHeader classes={classes} />
			<AttrRows
				formVals={formVals}
				setFormVals={setFormVals}
				classes={classes}
			/>
		</div>
	)
}
