---
title: Metal Former (Aetherworks)
description: Converts an input item in addition of an input fluid into an output item using the Aetherium Forge Metal Former.
sidebar:
  label: Metal Former
source_code_link: https://github.com/Ender-Development/Aetherworks-Extended-Life/blob/master/src/main/java/v0id/aw/compat/groovyscript/MetalFormer.java
---

## Description

Converts an input item in addition of an input fluid into an output item using the Aetherium Forge Metal Former.

## Identifier

The identifier `mods.aetherworks.metal_former` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.aetherworks.metalformer
mods.aetherworks.metalFormer
mods.aetherworks.MetalFormer
mods.aetherworks.metal_former/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Metal Former also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.aetherworks.metal_former.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the temperature the metal former requires at minimum to process the item. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    temperature(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `v0id.aw.common.recipe.MetalFormerRecipes$MetalFormerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aetherworks.metal_former.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:iron_nugget') * 9)
    .temperature(2000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.aetherworks.metal_former.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.aetherworks.metal_former.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.aetherworks.metal_former.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aetherworks.metal_former.removeByInput(item('minecraft:diamond'))
mods.aetherworks.metal_former.removeByOutput(item('aetherworks:item_resource', 4))
mods.aetherworks.metal_former.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.aetherworks.metal_former.streamRecipes()
    ```
