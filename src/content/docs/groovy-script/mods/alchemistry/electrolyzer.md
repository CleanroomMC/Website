---
title: Electrolyzer (Alchemistry)
description: Converts an input fluidstack into up to 4 output itemstacks, with the 3rd and 4th output itemstacks being able to have chances applied to them. May require a catalyst input itemstack, which may also have a chance to be consumed.
sidebar:
  label: Electrolyzer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Electrolyzer.java
---

## Description

Converts an input fluidstack into up to 4 output itemstacks, with the 3rd and 4th output itemstacks being able to have chances applied to them. May require a catalyst input itemstack, which may also have a chance to be consumed.

## Identifier

The identifier `mods.alchemistry.electrolyzer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.alchemistry.electrolyzer/* Used as page default */
mods.alchemistry.Electrolyzer
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.alchemistry.electrolyzer.add(ElectrolyzerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Electrolyzer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.alchemistry.electrolyzer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(IIngredient, int)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `IntArrayList`. Sets the output chance of the 3rd and 4th output itemstacks. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy
    chance(int)
    chance(int...)
    chance(Collection<Integer>)
    ```

- `int`. Sets the chance the catalyst input itemstack has to be consumed. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    consumptionChance(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.ElectrolyzerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.electrolyzer.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.alchemistry.electrolyzer.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .input(item('minecraft:gold_ingot'))
    .consumptionChance(100)
    .output(item('minecraft:gold_nugget') * 4)
    .output(item('minecraft:gold_nugget') * 4)
    .output(item('minecraft:gold_nugget') * 4)
    .output(item('minecraft:gold_nugget') * 4)
    .chance(50)
    .chance(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.alchemistry.electrolyzer.remove(ElectrolyzerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.electrolyzer.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.electrolyzer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.alchemistry.electrolyzer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.alchemistry.electrolyzer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.electrolyzer.removeByInput(fluid('water'))
mods.alchemistry.electrolyzer.removeByInput(element('calcium_carbonate'))
mods.alchemistry.electrolyzer.removeByOutput(element('chlorine'))
mods.alchemistry.electrolyzer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.alchemistry.electrolyzer.streamRecipes()
    ```
