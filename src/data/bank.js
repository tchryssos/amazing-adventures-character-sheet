import buildOptionsFromStrings from 'util/buildOptionsFromStrings'

export const DEFAULT = 'default'

// START - BIOGRAPHICAL - START
export const CHAR_NAME = 'charName'
export const CHAR_CLASS = 'charClass'
export const LEVEL = 'level'
export const ALIGNMENT = 'alignment'
export const TRAD_ALIGNMENTS = [
	'lawfulGood', 'neutralGood', 'chaoticGood',
	'lawfulNeutral', 'trueNeutral', 'chaoticNeutral',
	'lawfulEvil', 'neutralEvil', 'chaoticEvil',
]
export const ALIGNMENTS = 'alignments' // schema key
export const LEVEL_UP_FUNC = 'levelUpFunc'
// END - BIOGRAPHICAL - END

// START - ABILITIES - START
export const ABILITY_SCORES = 'abilityScores' // schema key
export const ABILITY_LIST = 'abilityList' // schem key
export const STR = 'strength'
export const DEX = 'dexterity'
export const CON = 'constitution'
export const WIS = 'wisdom'
export const INT = 'intelligence'
export const CHA = 'charisma'
export const TRAD_ABILITIES = [
	STR, DEX, CON, WIS, INT, CHA,
]

// END - ABILITIES - END

// START - MISC GAME - START
export const INSPIRATION = 'inspiration'
export const PROF_BONUS = 'profBonus'
export const PAS_WIS = 'pasWis'
export const DICE = [
	{
		label: 'd4',
		value: 4,
	},
	{
		label: 'd6',
		value: 6,
	},
	{
		label: 'd8',
		value: 8,
	},
	{
		label: 'd10',
		value: 10,
	},
	{
		label: 'd12',
		value: 12,
	},
	{
		label: 'd20',
		value: 20,
	},
]
// END - MISC GAME - END

// START - SKILLS - START
export const SKILLS = 'skills' // schema key
export const SKILL_LIST = 'skillList' // schema key

export const ACROBATICS = 'acrobatics'
export const ANIMAL_HANDLING = 'animalHandling'
export const ATHLETICS = 'athletics'
export const DECEPTION = 'deception'
export const HISTORY = 'history'
export const INSIGHT = 'insight'
export const INTIMIDATION = 'intimidation'
export const INVESTIGATION = 'investigation'
export const MEDICINE = 'medicine'
export const NATURE = 'nature'
export const PERCEPTION = 'perception'
export const PERFORMANCE = 'performance'
export const PERSUASION = 'persuasion'
export const RELIGION = 'religion'
export const SCIENCE = 'science'
export const SLEIGHT_OF_HAND = 'sleightOfHand'
export const STEALTH = 'stealth'
export const SURVIVAL = 'survival'
// END - SKILLS - END

// START - COMBAT STATS - START
export const AC = 'ac'
export const INITIATIVE = 'initiative'
export const SPEED = 'speed'
export const HIT_POINTS = 'hitPoints' // schema key
export const MAX_HIT_POINTS = 'maxHitPoints'
export const CURRENT_HIT_POINTS = 'currentHitPoints'
export const TEMP_HIT_POINTS = 'tempHitPoints'
export const HIT_DICE = 'hitDice' // schema key
export const CURRENT_HIT_DICE_COUNT = 'currentHitDiceCount'
export const TOTAL_HIT_DICE_COUNT = 'totalHitDiceCount'
export const TOTAL_HIT_DICE_TYPE = 'totalHitDiceType'
export const DEATH_SAVES = 'deathSaves'
export const SUCCESSFUL_DEATH_SAVES = 'successfulDeathSaves'
export const FAILED_DEATH_SAVES = 'failedDeathSaves'
// END - COMBAT STATS - END

// START - ATTACKS - START
export const ATTACKS = 'attacks'
export const CASTING_ABILITY = 'castingAbility'
export const SPELL_SAVE = 'spellSave'
export const MAGIC_ATTACK_BONUS = 'magicAttackBonus'
export const PSIONICS = 'psionics'

export const DEFAULT_ATTACK_DAM = {
	damageDiceCount: 1,
	damageDiceType: 8,
	damageType: DEFAULT,
}

export const DEFAULT_ATTACK = {
	name: '',
	attackBonus: 0,
	damage: [DEFAULT_ATTACK_DAM],
	damageBonus: 0,
}
// END - ATTACKS - END

// START - MODIFIERS - START
export const VAL = 'val'
export const MOD = 'mod'
export const PROF = 'prof'
export const ABILITY = 'ability'
// END - MODIFIERS - END
