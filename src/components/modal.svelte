<script lang="ts">
	export let visible = false;

	function closeModal() {
		visible = false;
	}

	export let style = "";
	export let digit = 0;

	let nums: any[] = [];

	function handleShoot (event:any) {
		nums = [...nums, event.target.innerText];
	}

	function handleDelete () {
		nums.pop();
		nums = nums;
	}

	$: {
		console.log(nums);
	}
</script>

<main>
	<div id="arenaModal" class:visible>
		<div class="modalHeader">
			<div>
				<button class="closeBtn" on:click={closeModal}>Close</button>
			</div>
		</div>
		<div id="arena" class="modalBody">
			<button id="random" {style} on:click={handleShoot}>{digit}</button>
		</div>
		<div class="modalFooter">
			{nums.join(' ')}
			<div>
				<button on:click={handleDelete}>Saili</button>
			</div>
		</div>
	</div>
</main>

<style>
	#arenaModal {
		visibility: hidden;
		background: #fff;
		border: 1px solid black;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		color: black;
	}
	.visible {
		visibility: visible !important;
	}

	.modalHeader {
		height: 10%;
		border: 1px solid black;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.modalBody {
		position: relative;
		height: 40vh;
		width: 30vw;
	}
	.modalBody button {
		position: absolute;
		margin: 0;
		padding: 0;
		width: 20px;
	}
	.modalFooter {
		height: 10%;
		border: 1px solid black;
		display: flex;
		justify-content: space-between;
	}

	#random:hover {
		cursor: crosshair;
	}
</style>
