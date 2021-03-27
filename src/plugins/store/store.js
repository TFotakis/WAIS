import { createStore } from 'vuex';
import { pageStructure } from '@/plugins/store/pageStructure';
import { auth } from '@/plugins/store/auth';
import { request } from '@/plugins/store/request';
// import { vehicle } from '@/store/vehicle';
// import { trade } from '@/store/trade';
// import { platformData } from '@/store/platformData';

import { API, graphqlOperation } from 'aws-amplify';
import { echo, me } from '@/graphql/custom-queries';

export const store = createStore({
	modules: {
		pageStructure,
		auth,
		request,
		// vehicle,
		// trade,
		// platformData
	},
	state: {},
	mutations: {
		init() {},
	},
	actions: {
		initModules({ commit }) {
			commit('init');
			commit('auth/init');
			commit('pageStructure/init');
			commit('request/init');
		},
		echo() {
			return new Promise((resolve, reject) => {
				API.graphql(graphqlOperation(echo, { msg: 'Hello from echo' }))
					.then((response) => {
						console.log('Echo response:', response);
						resolve();
					})
					.catch((error) => {
						console.error(error);
						reject(error);
					});
			});
		},
		me() {
			return new Promise((resolve, reject) => {
				API.graphql(graphqlOperation(me))
					.then((response) => {
						console.log('Me response:', response);
						resolve();
					})
					.catch((error) => {
						console.error(error);
						reject(error);
					});
			});
		},
	},
	getters: {},
});


