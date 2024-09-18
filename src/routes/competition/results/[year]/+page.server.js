// @ts-nocheck
import results from '$lib/json-data/results.json';
import tasks from '$lib/json-data/tasks.json';
import universities from '$lib/json-data/universities.json';

export async function load({ params }) {
    const year = params.year;

    if(!results[`${year}`]) {
        throw error(404, "Not Found");
    }

    const rows = results[`${year}`];
    const headers = Object.keys(rows[0]);

    const hasTasks = tasks[`${year}`] ? true : false;

    const universityMap = {};
    for (let university of universities) {
        universityMap[university["short_name"]] = university["name"]
    }

    return { headers, rows, year, hasTasks, universityMap };
};
