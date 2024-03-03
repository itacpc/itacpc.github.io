// @ts-nocheck
import tasks_json from '$lib/json-data/tasks.json';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const year = params.year;

    if(!tasks_json[`${year}`]) {
        throw error(404, "Not Found");
    }

    let ret = tasks_json[`${year}`];
    ret.year = year;

    return ret;
};
