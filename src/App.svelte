<script lang="ts">
	
	let left = '0px', top = '0px';
	let style=`left:${left};top:${top}`;

	function getRandomCoordinates(
		containerWidth: number,
		containerHeight: number,
	) {
		const x = Math.floor(Math.random() * (containerWidth - 20));
		const y = Math.floor(Math.random() * (containerHeight - 20));
		return { x, y };
	}

	function getRandomDigits () {
		return Math.floor(Math.random() * 10);
	}

	let digit = getRandomDigits();

	function handleClick() {
		digit = getRandomDigits();

		const container: any = document.getElementById("arena");
		
		const containerWidth = container.clientWidth;
		const containerHeight = container.clientHeight;

		const { x, y } = getRandomCoordinates(containerWidth, containerHeight);

		style = `left:${x}px;top:${y}px`;
	}

</script>

<main>
	<div
		class="modal fade"
		id="staticBackdrop"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
				<div id="arena" class="modal-body">
					<p id="random" {style}>{digit}</p>
				</div>
				<div class="modal-footer">
					<button on:click={handleClick}></button>
				</div>
			</div>
		</div>
	</div>
	<form action="" method="">
		<label for="phone">Phone</label>
		<input
			id="phone"
			data-bs-toggle="modal"
			data-bs-target="#staticBackdrop"
			autocomplete="off"
			type="number"
		/>

		<input type="button" value="submit" />
	</form>
</main>

<style>
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
