import type { ComponentType } from "svelte";
import type { TanoshiLinkModel, TanoshiTextInputModel, TanoshiNumberInputModel, TanoshiLabelModel } from "$atoms";
import type TanoshiLinkAsNavbarDropdownModel from "../molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdownModel";
import type TanoshiLinkAsButtonModel from "$molecules/link/TanoshiLinkAsButton/TanoshiLinkAsButtonModel";
import type TanoshiLinkAsImageModel from "$molecules/link/TanoshiLinkAsImage/TanoshiLinkAsImageModel";
import type TanoshiChoiceGroupModel from "$molecules/input/choiceGroup/TanoshiChoiceGroupModel";
import type TanoshiChoiceInputModel from "$atoms/input/choice/TanoshiChoiceInputModel";
import type TanoshiSelectInputModel from "$molecules/input/select/TanoshiSelectInputModel";
import type TanoshiTextareaInputModel from "$atoms/input/textarea/TanoshiTextareaInputModel";
import type TanoshiFileInputModel from "$atoms/input/file/TanoshiFileInputModel";

export type TanoshiGlobalLinkModel = TanoshiLinkModel | TanoshiLinkAsButtonModel | TanoshiLinkAsImageModel | TanoshiLinkAsNavbarDropdownModel;

export type TanoshiNavigationLinkModel = {
    link: TanoshiGlobalLinkModel,
    component: ComponentType,
}

export type TanoshiChoiceAndLabelModel = {
    label: TanoshiLabelModel,
    input: TanoshiChoiceInputModel,
}

export type TanoshiInputModel = TanoshiTextInputModel | TanoshiTextareaInputModel | TanoshiNumberInputModel | TanoshiChoiceGroupModel | TanoshiSelectInputModel | TanoshiFileInputModel