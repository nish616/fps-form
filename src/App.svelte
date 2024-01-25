<script lang="ts">
	import Modal from "./components/modal.svelte";

	let left = "0px";
	let top = "0px";
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

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}

	let clear: any;
	$: {
		if (showModal == true) {
			clear = setInterval(randomize, 2000);
		} else {
			clearInterval(clear);
		}
	}
</script>

<main>
	<Modal visible={showModal} {style} {digit}></Modal>
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
</style>
