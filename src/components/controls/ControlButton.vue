<template>
	<button type="button"><slot /></button>
</template>

<script setup lang="ts">
</script>

<style scoped>
:deep(svg) {
	width: 2rem;
}

button {
	border: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: var(--gutter-sm);
	aspect-ratio: 1;
	border-radius: var(--radius-lg);
}
</style>
