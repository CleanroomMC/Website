---
title: Fabrication Chamber (Calculator)
description: Converts Stable and Analysed Circuits into output itemstacks.
sidebar:
  label: Fabrication Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/FabricationChamber.java
---

## Description

Converts Stable and Analysed Circuits into output itemstacks.

## Identifier

The identifier `mods.calculator.fabrication_chamber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.calculator.fabricationchamber
mods.calculator.fabricationChamber
mods.calculator.FabricationChamber
mods.calculator.fabrication_chamber/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.calculator.fabrication_chamber.add(FabricationSonarRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Fabrication Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.calculator.fabrication_chamber.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.FabricationSonarRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.fabrication_chamber.recipeBuilder()
    .input(item('calculator:circuitboard:8').withNbt([Stable: 0, Analysed: 1]))
    .output(item('minecraft:diamond'))
    .register()

mods.calculator.fabrication_chamber.recipeBuilder()
    .input(item('calculator:circuitboard:0').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:1').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:2').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:3').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:4').withNbt([Stable: 0, Analysed: true]))
    .input(item('calculator:circuitboard:0').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:1').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:2').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:3').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:4').withNbt([Stable: 1, Analysed: true]))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.calculator.fabrication_chamber.remove(FabricationSonarRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.calculator.fabrication_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.calculator.fabrication_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.calculator.fabrication_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.fabrication_chamber.removeByInput(item('calculator:circuitboard:8').withNbt([Stable: 0, Analysed: 1]))
mods.calculator.fabrication_chamber.removeByOutput(item('calculator:calculatorassembly'))
mods.calculator.fabrication_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.calculator.fabrication_chamber.streamRecipes()
    ```
