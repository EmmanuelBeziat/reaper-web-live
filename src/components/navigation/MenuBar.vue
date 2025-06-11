<template>
	<nav v-once aria-label="Main navigation">
		<MenuItem :to="{ name: 'Dashboard' }" label="Dashboard" icon="dashboard" color="yellow" />
		<MenuItem :to="{ name: 'Tracks' }" label="Tracks" icon="tracks" color="blue" />
		<MenuItem :to="{ name: 'Mixer' }" label="Mixer" icon="mixer" color="green" />
	</nav>
</template>

<script setup lang="ts">
import MenuItem from '@/components/navigation/MenuItem.vue'
</script>

<style scoped>
nav {
	container: nav / inline-size;
	padding: var(--gutter-md);
	gap: var(--gutter-md);
	display: flex;
	justify-content: stretch;
}
</style>
