import { useEffect } from 'react'
import mergeDeepRight from 'ramda/src/mergeDeepRight'
import prop from 'ramda/src/prop'

import {
	ABILITIES, ABILITY, PROF, DEX, WIS,
	STR, CHA, INT, CHAR_NAME,
	ACROBATICS, ANIMAL_HANDLING, ATHLETICS, DECEPTION, HISTORY,
	INSIGHT, INTIMIDATION, INVESTIGATION, MEDICINE, NATURE,
	PERCEPTION, PERFORMANCE, PERSUASION, RELIGION, SCIENCE,
	SLEIGHT_OF_HAND, STEALTH, SURVIVAL, CHAR_CLASS, LEVEL,
	ALIGNMENT, DEFAULT, INSPIRATION, PROF_BONUS, PAS_WIS,
	AC, INITIATIVE, SPEED, MAX_HIT_POINTS, CURRENT_HIT_POINTS,
	TEMP_HIT_POINTS, CURRENT_HIT_DICE_COUNT, TOTAL_HIT_DICE_COUNT, TOTAL_HIT_DICE_TYPE,
	SUCCESSFUL_DEATH_SAVES, FAILED_DEATH_SAVES, ATTACKS, CASTING_ABILITY,
	SPELL_SAVE, MAGIC_ATTACK_BONUS, PSIONICS, DEFAULT_ATTACK, LEVEL_UP_FUNC,
	ABILITY_SCORES, SKILLS, SKILL_LIST, HIT_POINTS, HIT_DICE,
	DEATH_SAVES, TRAD_ALIGNMENTS, ALIGNMENTS,
} from 'data/bank'
import buildAbilityStatObjs from 'util/buildAbilityStatObjs'
import profBonusCalc from 'util/profBonusCalc'

const skillList = [
	ACROBATICS, ANIMAL_HANDLING, ATHLETICS, DECEPTION, HISTORY,
	INSIGHT, INTIMIDATION, INVESTIGATION, MEDICINE, NATURE,
	PERCEPTION, PERFORMANCE, PERSUASION, RELIGION, SCIENCE,
	SLEIGHT_OF_HAND, STEALTH, SURVIVAL,
]

const levelUpFunc = (formVals, setFormVals, level) => {
	useEffect(() => {
		setFormVals(
			mergeDeepRight(
				formVals,
				{
					[PROF_BONUS]: profBonusCalc(level),
					[TOTAL_HIT_DICE_COUNT]: prop(TOTAL_HIT_DICE_COUNT, formVals) + 1,
				},
			),
		)
	}, [level])
}

export const schema = {
	// META
	[CHAR_NAME]: '',
	[CHAR_CLASS]: '',
	[LEVEL]: 1,
	[LEVEL_UP_FUNC]: levelUpFunc,
	[ALIGNMENT]: DEFAULT,
	[ALIGNMENTS]: TRAD_ALIGNMENTS,

	[ABILITY_SCORES]: { ...buildAbilityStatObjs(ABILITIES) },
	[INSPIRATION]: 0,
	[PROF_BONUS]: 2,
	[PAS_WIS]: 10,

	// SKILLS
	[SKILL_LIST]: skillList,
	[SKILLS]: {
		[ACROBATICS]: {
			[ABILITY]: DEX,
			[PROF]: false,
		},
		[ANIMAL_HANDLING]: {
			[ABILITY]: WIS,
			[PROF]: false,
		},
		[ATHLETICS]: {
			[ABILITY]: STR,
			[PROF]: false,
		},
		[DECEPTION]: {
			[ABILITY]: CHA,
			[PROF]: false,
		},
		[HISTORY]: {
			[ABILITY]: INT,
			[PROF]: false,
		},
		[INSIGHT]: {
			[ABILITY]: WIS,
			[PROF]: false,
		},
		[INTIMIDATION]: {
			[ABILITY]: CHA,
			[PROF]: false,
		},
		[INVESTIGATION]: {
			[ABILITY]: INT,
			[PROF]: false,
		},
		[MEDICINE]: {
			[ABILITY]: WIS,
			[PROF]: false,
		},
		[NATURE]: {
			[ABILITY]: INT,
			[PROF]: false,
		},
		[PERCEPTION]: {
			[ABILITY]: WIS,
			[PROF]: false,
		},
		[PERFORMANCE]: {
			[ABILITY]: CHA,
			[PROF]: false,
		},
		[PERSUASION]: {
			[ABILITY]: CHA,
			[PROF]: false,
		},
		[RELIGION]: {
			[ABILITY]: CHA,
			[PROF]: false,
		},
		[SCIENCE]: {
			[ABILITY]: INT,
			[PROF]: false,
		},
		[SLEIGHT_OF_HAND]: {
			[ABILITY]: DEX,
			[PROF]: false,
		},
		[STEALTH]: {
			[ABILITY]: DEX,
			[PROF]: false,
		},
		[SURVIVAL]: {
			[ABILITY]: WIS,
			[PROF]: false,
		},
	},

	// COMBAT STATS
	[AC]: 10,
	[INITIATIVE]: 0,
	[SPEED]: 30,
	[HIT_POINTS]: {
		[MAX_HIT_POINTS]: 1,
		[CURRENT_HIT_POINTS]: 1,
		[TEMP_HIT_POINTS]: 0,
	},
	[HIT_DICE]: {
		[CURRENT_HIT_DICE_COUNT]: 1,
		[TOTAL_HIT_DICE_COUNT]: 1,
		[TOTAL_HIT_DICE_TYPE]: 8,
	},
	[DEATH_SAVES]: {
		[SUCCESSFUL_DEATH_SAVES]: {
			total: 3,
			saves: [],
		},
		[FAILED_DEATH_SAVES]: {
			total: 3,
			saves: [],
		},
	},

	// ATTACKS
	[ATTACKS]: [
		DEFAULT_ATTACK,
	],
	[CASTING_ABILITY]: DEFAULT,
	[SPELL_SAVE]: 8,
	[MAGIC_ATTACK_BONUS]: 0,
	[PSIONICS]: 0,
}
