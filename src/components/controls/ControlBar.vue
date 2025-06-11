<template>
	<section class="controls">
		<div class="button-group">
			<Button><Icon name="previous" /></Button>
			<Button><Icon name="next" /></Button>
		</div>

		<Button><Icon name="record" /></Button>
		<Button size="2"><Icon name="play" /></Button>
		<Button><Icon name="repeat" /></Button>

		<div class="button-group">
			<Button><Icon name="stop" /></Button>
			<Button><Icon name="pause" /></Button>
		</div>
	</section>
</template>

<script setup lang="ts">
import Button from '@/components/controls/ControlButton.vue'
import Icon from '@/components/IconSvg.vue'
</script>

<style scoped>
.controls {
	container: controls / inline-size;
	padding: var(--gutter-md);
	gap: var(--gutter-md);
}

.button-group {
	display: flex;
	gap: 1px;
}

.button-group :deep(:first-child) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.button-group :deep(:last-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

.button-group :deep(:not(:first-child, :last-child)) {
	border-radius: 0;
}
</style>