import Alpine from 'alpinejs'
import Plyr from 'plyr';

import 'plyr/dist/plyr.css';

export default function ($slideIndex) {
	return {
		plyr: undefined,
		init() {
			const plyr = new Plyr(this.$el, {
				controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
			})

			main.on('move', function(newIndex, prevIndex, destIndex) {
				if (prevIndex === $slideIndex) {
					plyr.pause()
				}
			})
		},
	}
}
