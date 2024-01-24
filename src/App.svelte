<script lang="ts">
	let left = "0px",
		top = "0px";
	let style = `left:${left};top:${top}`;

	function getRandomCoordinates(
		containerWidth: number,
		containerHeight: number,
	) {
		const x = Math.floor(Math.random() * (containerWidth - 20));
		const y = Math.floor(Math.random() * (containerHeight - 20));
		return { x, y };
	}

	function getRandomDigits() {
		return Math.floor(Math.random() * 10);
	}

	let digit = getRandomDigits();

	function randomize() {
		digit = getRandomDigits();

		const container: any = document.getElementById("arena");

		const containerWidth = container.clientWidth;
		const containerHeight = container.clientHeight;

		const { x, y } = getRandomCoordinates(containerWidth, containerHeight);

		style = `left:${x}px;top:${y}px`;
	}

	let visible = false;

	function toggleModal() {
		visible = !visible;
	}

	let clear:any;
	$: {
		if (visible == true) {
			clear = setInterval(randomize, 500);
		} else {
			clearInterval(clear);
		}
	}
</script>

<main>
	<div id="arenaModal" class:visible>
		<div class="modal-header">
			<button class="close" on:click={toggleModal}>X</button>
		</div>
		<div id="arena" class="modal-body">
			<p id="random" {style}>{digit}</p>
		</div>
		<div class="modal-footer"></div>
	</div>
	<form action="" method="">
		<label for="phone">Phone</label>
		<input
			id="phone"
			autocomplete="off"
			on:click={toggleModal}
			type="number"
		/>

		<input type="button" value="submit" />
	</form>
</main>

<style>
	#arenaModal {
		visibility: hidden;
		border: 1px solid black;
		z-index: 2;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
	.visible {
		visibility: visible !important;
	}
	.modal-body {
		height: 30vh;
		position: relative;
	}
	.modal-body p {
		position: absolute;
		margin: 0;
		padding: 0;
		width: 20px;
	}
</style>
