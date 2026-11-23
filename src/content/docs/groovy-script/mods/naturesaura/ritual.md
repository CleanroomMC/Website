---
title: Ritual of the Forest (Nature's Aura)
description: Converts multiple input items into an output itemstack after a duration when a sapling grows in the middle of a multiblock structure.
sidebar:
  label: Ritual of the Forest
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Ritual.java
---

## Description

Converts multiple input items into an output itemstack after a duration when a sapling grows in the middle of a multiblock structure.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The sapling used must extended `BlockSapling` for the recipe to function properly.

</details>

## Identifier

The identifier `mods.naturesaura.ritual` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.naturesaura.ritual/* Used as page default */
mods.naturesaura.Ritual
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Ritual of the Forest also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.naturesaura.ritual.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 8.

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

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `IIngredient`. Sets the sapling used. Requires not null.

    ```groovy
    sapling(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.TreeRitualRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.naturesaura.ritual.recipeBuilder()
    .name('demo')
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(100)
    .sapling(item('minecraft:sapling:1'))
    .register()

mods.naturesaura.ritual.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .time(15)
    .sapling(item('minecraft:sapling:1'))
    .register()

mods.naturesaura.ritual.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .output(item('minecraft:diamond') * 16)
    .time(20)
    .sapling(item('minecraft:sapling:3'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Ritual of the Forest recipe with the given name:

    ```groovy
    mods.naturesaura.ritual.removeByName(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.naturesaura.ritual.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.naturesaura.ritual.removeByOutput(IIngredient)
    ```

- Removes all Rituals of the Forest using the given sapling:

    ```groovy
    mods.naturesaura.ritual.removeBySapling(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.naturesaura.ritual.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.naturesaura.ritual.removeByName(resource('naturesaura:eye_improved'))
mods.naturesaura.ritual.removeByInput(item('naturesaura:infused_stone'))
mods.naturesaura.ritual.removeByOutput(item('naturesaura:eye'))
mods.naturesaura.ritual.removeBySapling(item('minecraft:sapling:3'))
mods.naturesaura.ritual.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.naturesaura.ritual.streamRecipes()
    ```
