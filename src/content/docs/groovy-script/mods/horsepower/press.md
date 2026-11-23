---
title: Horse Press (Horse Power)
description: Converts an itemstack into another itemstack or a fluidstack by a horse running laps.
sidebar:
  label: Horse Press
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/horsepower/Press.java
---

## Description

Converts an itemstack into another itemstack or a fluidstack by a horse running laps.

## Identifier

The identifier `mods.horsepower.press` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.horsepower.press/* Used as page default */
mods.horsepower.Press
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.horsepower.press.add(PressRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.horsepower.press.add(IIngredient, ItemStack)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.horsepower.press.add(IIngredient, FluidStack)
    ```

### Recipe Builder

Just like other recipe types, the Horse Press also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.horsepower.press.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `se.gory_moon.horsepower.recipes.PressRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.horsepower.press.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .register()

mods.horsepower.press.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('lava') * 500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.horsepower.press.remove(PressRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.horsepower.press.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.horsepower.press.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.horsepower.press.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.horsepower.press.removeByInput(item('minecraft:wheat_seeds'))
mods.horsepower.press.removeByOutput(item('minecraft:dirt'))
mods.horsepower.press.removeByOutput(fluid('water'))
mods.horsepower.press.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.horsepower.press.streamRecipes()
    ```
