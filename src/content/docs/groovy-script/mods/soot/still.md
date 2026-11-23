---
title: Still (Soot)
description: The Still is a device that can be used to distill fluids. The Still requires a heat source to operate.
sidebar:
  label: Still
source_code_link: https://github.com/Ender-Development/Soot-Extended-Life/blob/master/src/main/java/soot/compat/groovyscript/Still.java
---

## Description

The Still is a device that can be used to distill fluids. The Still requires a heat source to operate.

## Identifier

The identifier `mods.soot.still` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.soot.still/* Used as page default */
mods.soot.Still
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Still also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.soot.still.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

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

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets how many of the catalyst item is consumed in the recipe. Requires greater than or equal to 1 and less than or equal to 1000. (Default `1`).

    ```groovy
    catalystConsumed(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `soot.recipe.RecipeStill`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.still.recipeBuilder()
    .fluidInput(fluid('water') * 10)
    .input(item('minecraft:iron_ingot'))
    .fluidOutput(fluid('lava') * 10)
    .catalystConsumed(10)
    .register()

mods.soot.still.recipeBuilder()
    .fluidInput(fluid('iron') * 10)
    .fluidOutput(fluid('copper') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.soot.still.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.soot.still.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.soot.still.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.still.removeByInput(fluid('boiling_wort'))
mods.soot.still.removeByOutput(fluid('inner_fire'))
mods.soot.still.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.soot.still.streamRecipes()
    ```
