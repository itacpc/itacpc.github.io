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

{#if score[1] > 0}
	<span
		class="indicator-item indicator-top indicator-center badge
				{score[0] == null ? 'badge-error' : 'badge-success'}"
	>
		{formatTime(score[0])}
	</span>
{/if}
