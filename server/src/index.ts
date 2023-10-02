import { logger } from '@grotto/logysia';
import { Elysia, t } from 'elysia';

const app = new Elysia({
	websocket: {
		idleTimeout: 30,
		publishToSelf: true
	}
})
	.get('/', () => {
		return {
			message: 'Hello World!'
		};
	})
	.ws('/ws', {
		open(ws) {
			const msg = `A user has entered the-group-chat`;
			ws.subscribe('the-group-chat');
			ws.publish('the-group-chat', msg);
		},
		message(ws, message) {
			// check if user is subscribed to the-group-chat
			if (ws.isSubscribed('the-group-chat')) {
				console.log(`Received message ${message} from user`);
				ws.publish('the-group-chat', message);
			}
		},
		close(ws) {
			const msg = `A user has left the-group-chat`;
			ws.publish('the-group-chat', msg);
			ws.unsubscribe('the-group-chat');
		}
	})
	.listen(5000);

console.log(`Server started at http://${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
