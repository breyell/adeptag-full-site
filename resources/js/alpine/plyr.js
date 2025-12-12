import Alpine from 'alpinejs'
import Plyr from 'plyr';

import 'plyr/dist/plyr.css';

export default function ({options}) {
	return {
		plyr: undefined,
		init() {
			this.plyr = new Plyr(this.$el, {
				controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
				...options,
			})
		},
	}
}
