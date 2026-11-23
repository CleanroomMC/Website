---
title: Hydrator (Cyclic)
description: Converts up to 4 input itemstacks and some amount of water into an output itemstack.
sidebar:
  label: Hydrator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Hydrator.java
---

## Description

Converts up to 4 input itemstacks and some amount of water into an output itemstack.

## Identifier

The identifier `mods.cyclicmagic.hydrator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.cyclic.hydrator
mods.cyclic.Hydrator
mods.cyclicmagic.hydrator/* Used as page default */
mods.cyclicmagic.Hydrator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.cyclicmagic.hydrator.add(RecipeHydrate)
    ```

### Recipe Builder

Just like other recipe types, the Hydrator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.cyclicmagic.hydrator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

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

- `int`. Sets the amount of water consumed by the Hydrator to complete a recipe. Requires greater than or equal to 0. (Default `25`).

    ```groovy
    water(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.hydrator.RecipeHydrate`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.hydrator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.cyclicmagic.hydrator.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'))
    .output(item('minecraft:clay') * 8)
    .water(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.cyclicmagic.hydrator.remove(RecipeHydrate)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.cyclicmagic.hydrator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.cyclicmagic.hydrator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.cyclicmagic.hydrator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.hydrator.removeByInput(item('minecraft:dirt'))
mods.cyclicmagic.hydrator.removeByOutput(item('minecraft:clay_ball'))
mods.cyclicmagic.hydrator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.cyclicmagic.hydrator.streamRecipes()
    ```
