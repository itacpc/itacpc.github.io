<script>
	// @ts-nocheck

	export let score;

	function formatTime(solveTime) {
		if (solveTime == null) {
			return '-';
		}

		const hours = Math.floor(solveTime / 60);
		const minutes = `${solveTime % 60}`;
		return `${hours}:${minutes.padStart(2, '0')}`;
	}
</script>

{#if score.attempts > 0}
	<span
		class="indicator-item indicator-top indicator-center badge
				{score.solve_time == null ? 'badge-error' : 'badge-success'}"
	>
		{formatTime(score.solve_time)}
	</span>
{/if}
