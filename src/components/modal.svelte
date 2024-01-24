<script lang="ts">
	export let visible = false;

	function closeModal() {
		visible = false;
	}

	export let style = "";
	export let digit = 0;
</script>

<main>
	<div id="arenaModal" class:visible>
		<div class="modal-header">
			<button class="closeBtn" on:click={closeModal}>X</button>
		</div>
		<div id="arena" class="modal-body">
			<p id="random" {style}>{digit}</p>
		</div>
		<div class="modal-footer"></div>
	</div>
</main>

<style>
	#arenaModal {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 40vw;
		height: 40vh;
		transform: translate(-50%, -50%);
		visibility: hidden;
		background: #fff;
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
