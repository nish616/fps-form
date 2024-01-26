<script lang="ts">

	import {nums} from '../store'

	export let visible = false;

	function closeModal() {
		visible = false;
	}

	export let style1 = "";
	export let style2 = "";

	export let digit1 = 0;
	export let digit2 = 0;

	function handleShoot (event:any) {
		$nums.push(event.target.innerText);
		$nums = $nums;
	}

	function handleDelete () {
		$nums.pop();
		$nums = $nums;
	}

	let ok = false;

	$: {
		$nums.length >= 10 ? ok = true: ok = false;
	}

</script>

<main>
	<div id="arenaModal" class:visible>
		<div class="modalHeader">
			<div>
			</div>
		</div>
		<div id="arena" class="modalBody">
			<button class="random" style={style1} on:click={handleShoot}>{digit1}</button>
			<button class="random" style={style2} on:click={handleShoot}>{digit2}</button>
		</div>
		<div class="modalFooter">
			{@html $nums.length ? $nums.join(' '): '<div></div>'}
			<div>
				<button id="okBtn" class:ok on:click={closeModal}>OK</button>
				<button on:click={handleDelete}>-</button>
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.visible {
		visibility: visible !important;
	}

	.ok {
		display: block !important;
	}

	#okBtn {
		display: none;
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

	.random:hover {
		cursor: crosshair;
	}
</style>
