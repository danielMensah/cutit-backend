import { dbConfig } from './factories';

require('dotenv').config();

import { ApolloServer } from 'apollo-server';
import middleware from './middleware';

class Server {
	private readonly server: ApolloServer;

	constructor() {
		this.server = new ApolloServer(middleware);
	}

	async start() {
		await dbConfig.sync();
		this.server.listen(process.env.PORT || 4000).then(({ url }) => {
			console.log(`🚀 Server ready at ${url}`);
		});
	}
}

const server = new Server();
server.start();
