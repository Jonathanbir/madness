import { useState, useEffect } from 'react';

export const useBoolean = (options = {}) => {
	const { onTrue = () => {}, onFalse = () => {}, defaultBoolean = false } = options;

	const [boolean, setState] = useState(defaultBoolean);

	const toggle = () => {
		if (boolean) {
			onFalse();
		} else {
			onTrue();
		}
		setState(!boolean);
	};

	const setFalse = () => {
		setState(false);
		onFalse();
	};

	const setTrue = () => {
		setState(true);
		onTrue();
	};

	return [boolean, { toggle, setFalse, setTrue }];
};

export const useDom = eventHandler => {
	// Only subscribe/unsubscribe on mount/unmount lifecycle
	useEffect(() => {
		Object.keys(eventHandler).forEach(event => window.addEventListener(event, eventHandler[event]));

		return () => {
			Object.keys(eventHandler).forEach(event =>
				window.removeEventListener(event, eventHandler[event]),
			);
		};
	}, []);
};
