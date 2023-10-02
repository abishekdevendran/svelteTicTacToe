<script lang="ts">
	import '../app.postcss';
	import { Toaster } from 'svelte-french-toast';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import { connect } from '$lib/stores/ws';
	import { browser } from '$app/environment';

	const queryClient = new QueryClient();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	if (browser) {
		connect('ws://localhost:5000/ws');
	}
</script>

<QueryClientProvider client={queryClient}>
	<Toaster />
	<AppShell>
		<svelte:fragment slot="header">Header</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<!-- (pageFooter) -->
		<!-- (footer) -->
	</AppShell>
</QueryClientProvider>
