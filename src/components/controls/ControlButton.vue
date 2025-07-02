<template>
	<button type="button" :class="{ pressed: isPressed }" @click="handleClick">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	type: {
		type: String,
		validator: (value: string) => ['toggle'].includes(value),
	},
})

const isPressed = ref(false)

const handleClick = () => {
	if (props.type === 'toggle') {
		isPressed.value = !isPressed.value
	}
}
</script>

<style scoped>
:deep(svg) {
	width: 1rem;
	fill: currentcolor;
	transition: fill var(--transition-fast), ease-in-out;
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

.pressed {
	color: red;
}
</style>
