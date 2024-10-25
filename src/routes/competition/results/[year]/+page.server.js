// @ts-nocheck
import universities from '$lib/json-data/universities.json';
import { error } from '@sveltejs/kit';

function addData(results) {
	// Compute totals
	for (let row of results) {
		row['Solved tasks'] = 0;
		row['Penalty'] = 0;
		for (let task of row['Tasks']) {
			if (task[0] != null) {
				row['Solved tasks'] += 1;
			}
			if (task[0] != null && task[1] > 0) {
				row['Penalty'] += 20 * (task[1] - 1) + task[0];
			}
		}
	}

	// Compute ranking within the same university
	const univ = {};
	for (let university of universities) {
		univ[university['short_name']] = 0;
	}
	for (let row of results) {
		univ[row['University']] += 1;
		row['univ_rank'] = univ[row['University']];
	}
}

export async function load({ params }) {
	const year = params.year;

	const { default: results } = await import(`$lib/json-data/results${year}.json`);
	const { default: tasks } = await import(`$lib/json-data/tasks${year}.json`);

	if (!results) {
		error(404, 'Not Found');
	}

	const rows = results;
	const headers = Object.keys(rows[0]).filter(
		(value) => !['Solved tasks', 'Penalty', 'Tasks', 'univ_rank'].includes(value)
	);
	headers.push('Solved tasks');
	headers.push('Penalty');

	// Add auxiliary data *after* calculating headers because we don't want to
	// show this data in separate columns.
	addData(rows);

	const universityMap = {};
	for (let university of universities) {
		universityMap[university['short_name']] = university['name'];
	}

	return { headers, tasks, rows, year, universityMap };
}
