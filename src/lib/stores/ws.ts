import { derived, writable } from 'svelte/store';

type WsState =
	| {
			ready: true;
			ws: WebSocket;
	  }
	| {
			ready: false;
			ws: null;
	  };

export const WsState = writable<WsState>({
	ready: false,
	ws: null
});

export const Messages = writable<string[]>([]);

export const send = derived(WsState, ($WsState) => {
	if ($WsState.ready) {
		return (message: string) => {
			$WsState.ws.send(message);
		};
	}
	return () => {};
});

export const connect = (url: string) => {
	const ws = new WebSocket(url);
	console.log('connecting to ', url);
	ws.onopen = () => {
		console.log('connected');
		WsState.set({
			ready: true,
			ws
		});
	};

	ws.onmessage = (event) => {
		Messages.update((messages) => {
			return [...messages, event.data];
		});
	};

	ws.onclose = () => {
		console.log('disconnected');
		WsState.set({
			ready: false,
			ws: null
		});
	};
};

export const disconnect = () => {
	WsState.update((WsState) => {
		if (WsState.ready) {
			WsState.ws.close();
		}
		return {
			ready: false,
			ws: null
		};
	});
};

export default Messages;
