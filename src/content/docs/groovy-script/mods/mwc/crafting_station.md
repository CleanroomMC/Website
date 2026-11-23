---
title: MWC Crafting (Modern Warfare Cubed)
description: Converts multiple items into another item, with a way to recover some of original resources when dismantled. Recipes with group `BULLET, MAGAZINE, GRENADE` can be only crafted via Ammo Press, while recipes with `GUN, ATTACHMENT_NORMAL, ATTACHMENT_MODIFICATION` categories can only be crafted with Crafting Station.
sidebar:
  label: MWC Crafting
source_code_link: https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/groovyscript/script/CraftingStation.java
---

## Description

Converts multiple items into another item, with a way to recover some of original resources when dismantled. Recipes with group `BULLET, MAGAZINE, GRENADE` can be only crafted via Ammo Press, while recipes with `GUN, ATTACHMENT_NORMAL, ATTACHMENT_MODIFICATION` categories can only be crafted with Crafting Station.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mwc.crafting_station/* Used as page default */
mods.mwc.craftingstation
mods.mwc.craftingStation
mods.mwc.CraftingStation
mods.mwc.ammo_press
mods.mwc.ammopress
mods.mwc.ammoPress
mods.mwc.AmmoPress
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the MWC Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mwc.crafting_station.recipeBuilder()</summary>

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `CraftingGroup`. Category of crafting recipe. Requires not null. (Default `GUN`).

    ```groovy
    setGroupGun()
    setGroupBullet()
    setGroupGrenade()
    setGroupMagazine()
    setGroupNormalAttachment()
    setGroupModificationAttachment()
    setGroup(String)
    setGroup(CraftingGroup)
    ```

- `List<CraftingEntry>`. Input entries of the recipe, `double` is refund yield of the ingredient. Requires greater than 0.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(double, IIngredient)
    input(double, IIngredient...)
    input(Collection<IIngredient>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.paneedah.mwc.groovyscript.recipes.GSCraftingRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mwc.crafting_station.recipeBuilder()
    .input(1, item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.mwc.crafting_station.recipeBuilder()
    .input(0.5, item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Remove all recipes with the category of Bullet:

    ```groovy
    mods.mwc.crafting_station.removeAllBullet()
    ```

- Remove all recipes with the category of Grenade:

    ```groovy
    mods.mwc.crafting_station.removeAllGrenade()
    ```

- Remove all recipes with the category of Gun:

    ```groovy
    mods.mwc.crafting_station.removeAllGun()
    ```

- Remove all recipes with the category of Magazine:

    ```groovy
    mods.mwc.crafting_station.removeAllMagazine()
    ```

- Remove all recipes with the category of Modification Attachment:

    ```groovy
    mods.mwc.crafting_station.removeAllModificationAttachment()
    ```

- Remove all recipes with the category of Normal Attachment:

    ```groovy
    mods.mwc.crafting_station.removeAllNormalAttachment()
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Bullet:

    ```groovy
    mods.mwc.crafting_station.removeBulletByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Grenade:

    ```groovy
    mods.mwc.crafting_station.removeGrenadeByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Gun:

    ```groovy
    mods.mwc.crafting_station.removeGunByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Magazine:

    ```groovy
    mods.mwc.crafting_station.removeMagazineByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Modification Attachment:

    ```groovy
    mods.mwc.crafting_station.removeModificationAttachmentByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Normal Attachment:

    ```groovy
    mods.mwc.crafting_station.removeNormalAttachmentByOutput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.mwc.crafting_station.removeByOutput(IIngredient)
    ```

- Removes all recipes that output the given `ingredient` and given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE", and "GRENADE":

    ```groovy
    mods.mwc.crafting_station.removeInGroupByOutput(IIngredient, CraftingGroup)
    ```

- Removes all recipes that output the given `ingredient` and given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE", and "GRENADE":

    ```groovy
    mods.mwc.crafting_station.removeInGroupByOutput(IIngredient, String)
    ```

- Removes all recipes that match the given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", and "MAGAZINE":

    ```groovy
    mods.mwc.crafting_station.removeByGroup(CraftingGroup)
    ```

- Removes all recipes that match the given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", and "MAGAZINE":

    ```groovy
    mods.mwc.crafting_station.removeByGroup(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mwc.crafting_station.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mwc.crafting_station.removeAllBullet()
mods.mwc.crafting_station.removeAllGrenade()
mods.mwc.crafting_station.removeAllGun()
mods.mwc.crafting_station.removeAllMagazine()
mods.mwc.crafting_station.removeAllModificationAttachment()
mods.mwc.crafting_station.removeAllNormalAttachment()
mods.mwc.crafting_station.removeBulletByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeGrenadeByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeGunByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeMagazineByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeModificationAttachmentByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeNormalAttachmentByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeAll()
```

</details>
