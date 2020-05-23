import { dbConfig } from './factories';

import { ApolloServer } from 'apollo-server';
import middleware from './middleware';

class Server {
	private readonly server: ApolloServer;

	constructor() {
		this.server = new ApolloServer({
			...middleware,
			playground: true,
			engine: {
				apiKey: "service:Cut-it:2u7BaOmzd92U32q_OJWzCw",
			},
			introspection: true
		});
	}

	async start() {
		await dbConfig().sync({ logging: false });
		this.server.listen(process.env.PORT || 4000).then(({ url }) => {
			console.log(`🚀 Server ready at ${url}`);
		});
	}
}

const server = new Server();
server.start();
