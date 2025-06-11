<template>
  <div class="live-view">
		<header>
			<Menu />
		</header>

		<RouterView />
		<ControlBar />
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/navigation/MenuBar.vue'
import ControlBar from '@/components/controls/ControlBar.vue'
</script>

<style scoped>
.live-view {
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
}
</style>
