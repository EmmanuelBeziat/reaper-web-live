<template>
	<RouterLink class="menu-item" :class="[!isActive || 'is-active', color]" :to>
		<Icon :name="icon"  />
		<span>{{ label }}</span>
	</RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Icon from '@/components/IconSvg.vue'

const props = defineProps({
	to: {
		type: Object,
		required: true
	},
	exact: {
		type: Boolean
	},
	label: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	}
})

const router = useRouter()
const route = useRoute()
const isActive = computed(() => router.resolve(props.to).path === '/' + route.path.split('/')[1])
</script>

<style scoped>
.menu-item {
	--contrast-high: color-mix(in hsl increasing hue, var(--c-black) 100%, var(--accent) 25%);
	--contrast-low: color-mix(in hsl increasing hue, var(--c-black) 100%, var(--accent) 10%);

	color: var(--accent);
	text-decoration: none;
	flex: 1;
	padding: var(--gutter-sm) var(--gutter-md);
	border-radius: var(--radius-md);
	background: var(--contrast-low);
	font-weight: 600;
	font-size: var(--font-size-heading-6);
	transition: var(--transition-normal) var(--ease-spring);
	display: flex;
	gap: var(--gutter-md);
	align-items: center;

	&.is-active {
		background: var(--accent);
		color: var(--contrast-high);
	}

	&.yellow {
		--accent: var(--c-yellow);
	}

	&.blue {
		--accent: var(--c-blue);
	}

	&.green {
		--accent: var(--c-green);
	}

	@container nav (width < 40rem) {
		justify-content: center;
		font-size: var(--font-size-heading-5);

		span {
			clip-path: inset(50%);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			position: absolute;
			width: 1px;
			word-wrap: normal;
		}
	}
}

:deep(svg) {
	width: 1.25em;
	fill: currentcolor;
}
</style>