<script lang="ts">
	import type TanoshiNavigationModel from './TanoshiNavigationModel';

	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue, HEIGHTS, THEMES } from '$lib/enums';
	import TanoshiDesktopNavigation from './TanoshiDesktopNavigation.svelte';
	import TanoshiMobileNavigation from './TanoshiMobileNavigation.svelte';

	export let tanoshiDesktopNavigationModel: TanoshiNavigationModel;
	export let tanoshiMobileNavigationModel: TanoshiNavigationModel;

	$: desktopTheme = getThemeEnumKeyByEnumValue(tanoshiDesktopNavigationModel.theme)
	const mobileTheme: THEMES | undefined = getThemeEnumKeyByEnumValue(tanoshiMobileNavigationModel.theme)
	
	$: navigationDesktopContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(desktopTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(HEIGHTS.HAUTO)

	const navigationMobileContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(mobileTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(HEIGHTS.HAUTO)

</script>

<TanoshiDesktopNavigation bind:tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel} bind:navigationDesktopContainerModel={navigationDesktopContainerModel} />

<TanoshiMobileNavigation {tanoshiMobileNavigationModel} {navigationMobileContainerModel} {mobileTheme}/>
