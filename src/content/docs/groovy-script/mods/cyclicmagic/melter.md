---
title: Melter (Cyclic)
description: Converts up to 4 input itemstacks into an output itemstack, while being placed above lava.
sidebar:
  label: Melter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Melter.java
---

## Description

Converts up to 4 input itemstacks into an output itemstack, while being placed above lava.

## Identifier

The identifier `mods.cyclicmagic.melter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.cyclic.melter
mods.cyclic.Melter
mods.cyclicmagic.melter/* Used as page default */
mods.cyclicmagic.Melter
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.cyclicmagic.melter.add(RecipeMelter)
    ```

### Recipe Builder

Just like other recipe types, the Melter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.cyclicmagic.melter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.melter.RecipeMelter`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.melter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .fluidOutput(fluid('water') * 175)
    .register()

mods.cyclicmagic.melter.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'))
    .fluidOutput(fluid('lava') * 500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.cyclicmagic.melter.remove(RecipeMelter)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.cyclicmagic.melter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.cyclicmagic.melter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.cyclicmagic.melter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.melter.removeByInput(item('minecraft:snow'))
mods.cyclicmagic.melter.removeByOutput(fluid('amber'))
mods.cyclicmagic.melter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.cyclicmagic.melter.streamRecipes()
    ```
