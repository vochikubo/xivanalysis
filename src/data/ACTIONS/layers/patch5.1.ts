import {Layer} from 'data/layer'
import {ActionRoot} from '../root'

// tslint:disable:no-magic-numbers

export const patch510: Layer<ActionRoot> = {
	patch: '5.1',
	data: {
		// BRD 5.1 cooldown+potency changes
		SIDEWINDER: {potency: [100, 200, 300]},
		TROUBADOUR: {cooldown: 120},
		VENOMOUS_BITE: {potency: 30},
		WINDBITE: {potency: 40},
		CAUSTIC_BITE: {potency: 40},
		STORMBITE: {potency: 50},
		REFULGENT_ARROW: {potency: 330},
	},
}
