import universities from '$lib/json-data/universities.json';

export async function load() {
    universities.sort((a, b) => {
        if (a.total_gold_medals != b.total_gold_medals)
            return b.total_gold_medals - a.total_gold_medals;
        if (a.total_silver_medals != b.total_silver_medals)
            return b.total_silver_medals - a.total_silver_medals;
        if (a.total_bronze_medals != b.total_bronze_medals)
            return b.total_bronze_medals - a.total_bronze_medals;
        if (a.total_participations != b.total_participations)
            return b.total_participations - a.total_participations;
        return a.name.localeCompare(b.name);
    });

    return {universities};
};
