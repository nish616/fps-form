<script lang="ts">
	import Modal from "./components/modal.svelte";

	let left = "0px";
	let top = "0px";
	let style1 = `left:${left};top:${top}`;
	let style2 = `left:${left};top:${top}`;

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

	let digit1 = getRandomDigits();
	let digit2 = getRandomDigits();

	function randomize() {
		digit1 = getRandomDigits();
		digit2 = getRandomDigits();

		const container: any = document.getElementById("arena");

		const containerWidth = container.clientWidth;
		const containerHeight = container.clientHeight;

		const randomCoordinate1 = getRandomCoordinates(containerWidth, containerHeight);
		const randomCoordinate2 = getRandomCoordinates(containerWidth, containerHeight);

		style1 = `left:${randomCoordinate1.x}px;top:${randomCoordinate1.y}px`;
		style2 = `left:${randomCoordinate2.x}px;top:${randomCoordinate2.y}px`;
	}

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}

	let clear: any;
	$: {
		if (showModal == true) {
			clear = setInterval(randomize, 1500);
		} else {
			clearInterval(clear);
		}
	}
</script>

<main>
	<Modal visible={showModal} {style1} {style2} {digit1} {digit2}></Modal>
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
