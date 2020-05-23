import map from 'ramda/src/map'
import join from 'ramda/src/join'
import match from 'ramda/src/match'
import any from 'ramda/src/any'
import capitalize from 'util/capitalize'

const lowercaseWords = ['of', 'and', 'to', 'a']

export default (strings = []) => map(
	(string) => {
		let wordChunks = match(/[A-Z]/g, string)
		wordChunks = map(
			(word) => any(
				(lc) => (lc === word.toLowerCase() ? word.toLowerCase() : word),
				lowercaseWords,
			),
			wordChunks,
		)
		const label = capitalize(join(' ', wordChunks))
		return ({ label, value: string })
	},
	strings,
)
