import { init, tx, id } from "@instantdb/admin";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const APP_ID = config.public.appId;
	const ADMIN_TOKEN = config.adminToken;

	const db = init({
		appId: APP_ID,
		adminToken: ADMIN_TOKEN,
	});

	const { mydogs } = await db.query({ mydogs: {} });

	return mydogs;
});
