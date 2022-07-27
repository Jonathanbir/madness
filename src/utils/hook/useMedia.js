import { useState, useEffect, useLayoutEffect } from 'react';

export const useMedia = () => {
	const phoneMedia = window.matchMedia('(max-width: 767px)');
	const desktopMedia = window.matchMedia('(min-width: 768px)');

	let defaultMedia = 'desktop';

	if (phoneMedia.matches) {
		defaultMedia = 'phone';
	}

	const [media, setMedia] = useState(defaultMedia);

	const handleMediaChange = mediaName => mediaHandler => {
		if (mediaHandler.matches && mediaName !== media) {
			setMedia(mediaName);
		}
	};

	useEffect(() => {
		const phoneHandler = handleMediaChange('phone');
		const desktopHandler = handleMediaChange('desktop');

		phoneMedia.addListener(phoneHandler);
		desktopMedia.addListener(desktopHandler);

		return () => {
			phoneMedia.removeListener(phoneHandler);
			desktopMedia.removeListener(desktopHandler);
		};
	}, [media]);

	return media;
};

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);

	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
};
