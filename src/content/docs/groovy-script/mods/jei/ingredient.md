---
title: Ingredient Sidebar (Just Enough Items)
description: Modify what ingredients show up in the search menu sidebar.
sidebar:
  label: Ingredient Sidebar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Ingredient.java
---

## Description

Modify what ingredients show up in the search menu sidebar.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Hidden ingredients will still take up load time, and recipes to create them can still be done. This only prevents seeing the ingredients in JEI.

</details>

## Identifier

The identifier `mods.jei.ingredient` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {7}
mods.hei.sidebar
mods.hei.Sidebar
mods.hei.ingredient
mods.hei.Ingredient
mods.jei.sidebar
mods.jei.Sidebar
mods.jei.ingredient/* Used as page default */
mods.jei.Ingredient
```

</details>

## Adding Entries

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy
    mods.jei.ingredient.add(IIngredient)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy
    mods.jei.ingredient.add(IIngredient...)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy
    mods.jei.ingredient.add(Iterable<IIngredient>)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy
    mods.jei.ingredient.add(IIngredientType<?>, Object...)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy
    mods.jei.ingredient.add(IIngredientType<?>, Collection<Object>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.ingredient.add(item('minecraft:stone:1').withNbt([display:[Name:'Special Granite']]))
mods.jei.ingredient.add(VanillaTypes.ITEM, item('minecraft:bed').withNbt([display:[Name:'Beds come in 16 different colors!']]))
```

</details>

## Removing Entries

- Hides the ingredient from JEI:

    ```groovy
    mods.jei.ingredient.hide(IIngredient)
    ```

- Hides the ingredient from JEI:

    ```groovy
    mods.jei.ingredient.hide(IIngredient...)
    ```

- Hides the ingredient from JEI:

    ```groovy
    mods.jei.ingredient.hide(Iterable<IIngredient>)
    ```

- Hides the ingredient from JEI:

    ```groovy
    mods.jei.ingredient.hide(IIngredientType<?>, Object...)
    ```

- Hides the ingredient from JEI:

    ```groovy
    mods.jei.ingredient.hide(IIngredientType<?>, Collection<Object>)
    ```

- Alias for `removeAndHide`:

    ```groovy
    mods.jei.ingredient.yeet(IIngredient)
    ```

- Alias for `removeAndHide`:

    ```groovy
    mods.jei.ingredient.yeet(IIngredient...)
    ```

- Alias for `removeAndHide`:

    ```groovy
    mods.jei.ingredient.yeet(Iterable<IIngredient>)
    ```

- Hides all ingredients of the given type:

    ```groovy
    mods.jei.ingredient.hideByType(IIngredientType<?>)
    ```

- Removes the vanilla crafting recipe for the given ItemStack and hides the item from JEI:

    ```groovy
    mods.jei.ingredient.removeAndHide(IIngredient)
    ```

- Removes the vanilla crafting recipe for the given ItemStack and hides the item from JEI:

    ```groovy
    mods.jei.ingredient.removeAndHide(IIngredient...)
    ```

- Removes the vanilla crafting recipe for the given ItemStack and hides the item from JEI:

    ```groovy
    mods.jei.ingredient.removeAndHide(Iterable<IIngredient>)
    ```

- Hides all ingredients of all types from the sidebar. Functionally disables JEI:

    ```groovy
    mods.jei.ingredient.hideAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.ingredient.hide(fluid('water'))
mods.jei.ingredient.hide(item('minecraft:stone:1'), item('minecraft:stone:3'))
mods.jei.ingredient.hide(mekanism.client.jei.MekanismJEI.TYPE_GAS, gas('tritium'))
mods.jei.ingredient.hide(VanillaTypes.ITEM, item('minecraft:bed:*'))
mods.jei.ingredient.hideByType(com.buuz135.thaumicjei.ThaumcraftJEIPlugin.ASPECT_LIST)
mods.jei.ingredient.hideByType(mekanism.client.jei.MekanismJEI.TYPE_GAS)
mods.jei.ingredient.hideByType(VanillaTypes.ITEM)
mods.jei.ingredient.hideByType(VanillaTypes.ENCHANT)
mods.jei.ingredient.hideByType(VanillaTypes.FLUID)
mods.jei.ingredient.hideAll()
```

</details>
