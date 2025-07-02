<template>
	<section class="controls">
		<div class="button-group track-controls">
			<Button><Icon name="previous" /></Button>
			<Button><Icon name="next" /></Button>
		</div>

		<div class="button-group session-controls">
			<Button class="record-button" type="toggle"><Icon name="record" /></Button>
			<Button class="play-button" type="toggle"><Icon name="play" /></Button>
			<Button class="loop-button" type="toggle"><Icon name="repeat" /></Button>
		</div>

		<div class="button-group transport-controls">
			<Button><Icon name="stop" /></Button>
			<Button type="toggle"><Icon name="pause" /></Button>
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
	display: grid;
  grid-auto-flow: row;
  grid-template: "TrackControls SessionControls TransportControls" auto / 2fr 3fr 2fr;
}

.session-controls {
	grid-area: SessionControls;
}

.transport-controls {
	grid-area: TransportControls;
}

.track-controls {
	grid-area: TrackControls;
}

.button-group {
	display: grid;
	grid-template-columns: auto auto auto;
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
