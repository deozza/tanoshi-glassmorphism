<script lang="ts">
	import type TanoshiTextInputModel from './TanoshiTextInputModel';

	export let tanoshiInputModel: TanoshiTextInputModel;

	function handleInput(e: any) {
		tanoshiInputModel.setValue(e.target.value);
	}
</script>

<div class="input-container">
	<input
		class:border-danger={tanoshiInputModel.error === true}
		class:text-danger={tanoshiInputModel.error === true}
		id={tanoshiInputModel.id}
		maxlength={tanoshiInputModel.maxLength}
		minlength={tanoshiInputModel.minLength}
		name={tanoshiInputModel.name}
		on:change
		on:focusout
		on:input={handleInput}
		placeholder={tanoshiInputModel.placeholder}
		readonly={tanoshiInputModel.readonly}
		required={tanoshiInputModel.required}
		type={tanoshiInputModel.type}
		value={tanoshiInputModel.value}
	/>

	{#if tanoshiInputModel.error}
		<span class="text-danger">{tanoshiInputModel.errorMessage}</span>
	{/if}
</div>


<style>
	
div.input-container {
	margin: 0.5rem/* 8px */;
	flex: 2;
	width: 100%;

}

input {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
	border-width: 1px;
	border-radius: 0.375rem/* 6px */;
	color: var(--black-text-input, var(--black));
}

input:read-only:hover {
	cursor: not-allowed;
}

span.text-danger {
	color: var(--danger-text-input, var(--danger));
}

input.text-danger, input.text-danger:focus {
	border: 1px solid var(--danger-border-input, var(--danger));
}

@media (max-width: 639px) {
	div.input-container {
		margin: 0.5rem 0/* 8px */;
		flex: 2;
	}
}
</style>