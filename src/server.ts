import Hapi from '@hapi/hapi';
import { hapiConfig } from './config/hapiConfig';
import { routes } from './routes/curdOperation';

export const init = async () => {
	const server = Hapi.server(hapiConfig);
	server.route(routes);
	await server.start().then(() => {
		console.log('Hapi server Connected');
	});
};
init();
