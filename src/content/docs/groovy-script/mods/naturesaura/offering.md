---
title: Offering to the Gods (Nature's Aura)
description: Converts up to 16 times the input itemstack into output itemstacks by consuming a catalyst item from the ground in a multiblock structure.
sidebar:
  label: Offering to the Gods
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Offering.java
---

## Description

Converts up to 16 times the input itemstack into output itemstacks by consuming a catalyst item from the ground in a multiblock structure.

<details class="cr-block cr-note" open>
<summary>Note</summary>

The Offering Table can hold up to 16 items, and will try to run the recipe as many times as possible for a single catalyst item.

</details>

## Identifier

The identifier `mods.naturesaura.offering` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.naturesaura.offering/* Used as page default */
mods.naturesaura.Offering
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Offering to the Gods also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.naturesaura.offering.recipeBuilder()
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

- `IIngredient`. Sets the catalyst item. Requires not null.

    ```groovy
    catalyst(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.OfferingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.naturesaura.offering.recipeBuilder()
    .name('demo')
    .input(item('minecraft:diamond'))
    .catalyst(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 8)
    .register()

mods.naturesaura.offering.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:clay'))
    .catalyst(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 8)
    .register()

mods.naturesaura.offering.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 10)
    .catalyst(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Offering to the Gods recipe with the given name:

    ```groovy
    mods.naturesaura.offering.removeByName(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.naturesaura.offering.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.naturesaura.offering.removeByOutput(IIngredient)
    ```

- Removes all recipes that match the given catalyst:

    ```groovy
    mods.naturesaura.offering.removeByCatalyst(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.naturesaura.offering.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.naturesaura.offering.removeByName(resource('naturesaura:token_euphoria'))
mods.naturesaura.offering.removeByInput(item('minecraft:nether_star'))
mods.naturesaura.offering.removeByOutput(item('naturesaura:sky_ingot'))
mods.naturesaura.offering.removeByCatalyst(item('naturesaura:calling_spirit'))
mods.naturesaura.offering.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.naturesaura.offering.streamRecipes()
    ```
