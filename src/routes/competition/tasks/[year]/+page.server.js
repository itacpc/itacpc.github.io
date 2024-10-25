import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const year = params.year;

	const { default: tasks_json } = await import(`$lib/json-data/tasks${year}.json`);

	if (!tasks_json) {
		error(404, 'Not Found');
	}

	tasks_json.year = year;

	return tasks_json;
}
