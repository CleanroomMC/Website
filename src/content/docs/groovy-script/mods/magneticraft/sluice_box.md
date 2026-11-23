---
title: Sluice Box (Magneticraft)
description: Converts an input itemstack into any number of output itemstacks each with a given chance. Consumes a bucket of water per batch, and can be crafted 10 at a time in a Sluice Box.
sidebar:
  label: Sluice Box
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/SluiceBox.java
---

## Description

Converts an input itemstack into any number of output itemstacks each with a given chance. Consumes a bucket of water per batch, and can be crafted 10 at a time in a Sluice Box.

## Identifier

The identifier `mods.magneticraft.sluice_box` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.magneticraft.sluicebox
mods.magneticraft.sluiceBox
mods.magneticraft.SluiceBox
mods.magneticraft.sluice_box/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.sluice_box.add(ISluiceBoxRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Sluice Box also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.sluice_box.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FloatArrayList`. Sets the chance of the corresponding output itemstack to be created. Requires greater than 0, less than or equal to 100, and must have the same number of elements as there are outputs.

    ```groovy
    output(ItemStack)
    output(ItemStack, float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.sluicebox.ISluiceBoxRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.sluice_box.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.magneticraft.sluice_box.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), 0.5)
    .register()

mods.magneticraft.sluice_box.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'), 0.5)
    .output(item('minecraft:clay'), 0.3)
    .output(item('minecraft:clay'), 0.2)
    .output(item('minecraft:clay'), 0.1)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.sluice_box.remove(ISluiceBoxRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.sluice_box.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.magneticraft.sluice_box.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.sluice_box.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.sluice_box.removeByInput(item('minecraft:sand'))
mods.magneticraft.sluice_box.removeByOutput(item('minecraft:cobblestone'))
mods.magneticraft.sluice_box.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.sluice_box.streamRecipes()
    ```
