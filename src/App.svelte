<script lang="ts">
	import Modal from "./components/modal.svelte";

	import { nums } from "./store";

	import {getRandomCoordinates, getRandomDigits} from "./lib/common"

	let style1 = 'left:0px;top:0px';
	let style2 = 'left:0px;top:0px';

	let digit1 = getRandomDigits(10);
	let digit2 = getRandomDigits(10);

	function randomize() {
		digit1 = getRandomDigits(10);
		digit2 = getRandomDigits(10);

		const container: any = document.getElementById("arena");

		const containerWidth = container.clientWidth;
		const containerHeight = container.clientHeight;

		const randomCoordinate1 = getRandomCoordinates(
			containerWidth,
			containerHeight,
		);
		const randomCoordinate2 = getRandomCoordinates(
			containerWidth,
			containerHeight,
		);

		style1 = `left:${randomCoordinate1.x}px;top:${randomCoordinate1.y}px`;
		style2 = `left:${randomCoordinate2.x}px;top:${randomCoordinate2.y}px`;
	}

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}

	let clear: number;
	$: {
		if (showModal) {
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
			value={$nums.join("")}
		/>

		<input type="button" value="submit" />
	</form>
</main>

<style>
</style>
