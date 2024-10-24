// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: false },

	runtimeConfig: {
		public: {
			appId: process.env.APP_ID as stirng,
		},
		adminToken: process.env.ADMIN_TOKEN as string,
	},
});
