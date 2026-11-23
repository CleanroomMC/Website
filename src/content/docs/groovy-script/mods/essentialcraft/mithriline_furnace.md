---
title: Mithriline Furnace (EssentialCraft 4)
description: Converts various items into other items using ESPE.
sidebar:
  label: Mithriline Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/MithrilineFurnace.java
---

## Description

Converts various items into other items using ESPE.

## Identifier

The identifier `mods.essentialcraft.mithriline_furnace` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ec4.mithrilinefurnace
mods.ec4.mithrilineFurnace
mods.ec4.MithrilineFurnace
mods.ec4.mithriline_furnace
mods.essentialcraft.mithrilinefurnace
mods.essentialcraft.mithrilineFurnace
mods.essentialcraft.MithrilineFurnace
mods.essentialcraft.mithriline_furnace/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mithriline Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.essentialcraft.mithriline_furnace.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the ESPE cost for this recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    espe(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.MithrilineFurnaceRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.mithriline_furnace.recipeBuilder()
    .input(item('minecraft:coal_block') * 3)
    .output(item('minecraft:diamond_block'))
    .espe(500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.essentialcraft.mithriline_furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.essentialcraft.mithriline_furnace.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.essentialcraft.mithriline_furnace.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.mithriline_furnace.removeByInput(ore('dustGlowstone'))
mods.essentialcraft.mithriline_furnace.removeByOutput(item('minecraft:emerald'))
mods.essentialcraft.mithriline_furnace.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.essentialcraft.mithriline_furnace.streamRecipes()
    ```
