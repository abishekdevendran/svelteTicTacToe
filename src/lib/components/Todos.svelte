<script lang="ts">
	import schema from '$lib/schemas/login';
	import toast from 'svelte-french-toast';
	import { superForm, superValidateSync } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	// Client API:
	const { form, enhance, errors, constraints, message, allErrors } = superForm(
		superValidateSync(schema),
		{
			SPA: true,
			validators: schema,
			customValidity: true,
			onUpdate: ({ form }) => {
				if (!form.valid) {
					console.log(form.errors);
					return console.log('form is invalid');
				}
				form.message = 'Form is valid';
			}
		}
	);

	$: if ($message?.length > 0) {
		toast.success($message);
	}
</script>

<SuperDebug data={$form} />
<form method="POST" class="flex gap-2 items-center justify-center flex-col" use:enhance>
	{#if $message}<h3>{$message}</h3>{/if}
	<label for="email">Email</label>
	<input class="input" type="email" name="email" id="email" bind:value={$form.email} />
	{#if $errors.email}<span class="text-red">{$errors.email}</span>{/if}
	<label for="password">Password</label>
	<input class="input" type="password" name="password" id="password" bind:value={$form.password} />
	{#if $errors.password}<span class="text-red">{$errors.password}</span>{/if}
	<button class="btn variant-filled-primary" type="submit" disabled={$allErrors.length > 0}
		>Submit</button
	>
</form>
