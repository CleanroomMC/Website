---
title: Analysing Chamber (Calculator)
description: Takes a non-analysed Circuit and analyses it, converting it into usable Stable or Analysed Circuit. Will produce power and item outputs based on randomly generated NBT data.
sidebar:
  label: Analysing Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/AnalysingChamber.java
---

## Description

Takes a non-analysed Circuit and analyses it, converting it into usable Stable or Analysed Circuit. Will produce power and item outputs based on randomly generated NBT data.

<details class="cr-block cr-note" open>
<summary>Note</summary>

When a void upgrade is installed in the Analysing Chamber, slots 1 and 2 will be voided as trash, but 3, 4, 5, and 6 will continue giving outputs.

</details>

:::caution[Warning]
JEI incorrectly represents the chance to obtain an output. 6% is actually 2%, 0.2% is actually 1%, 0.1% is correct, 0.02% is actually 0.05%, 0.001% is correct, and 0% is actually 0.005%.
:::

## Identifier

The identifier `mods.calculator.analysing_chamber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {7}
mods.calculator.analysingchamber
mods.calculator.analysingChamber
mods.calculator.AnalysingChamber
mods.calculator.analyzingchamber
mods.calculator.analyzingChamber
mods.calculator.AnalyzingChamber
mods.calculator.analysing_chamber/* Used as page default */
mods.calculator.analyzing_chamber
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.calculator.analysing_chamber.add(CalculatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Analysing Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.calculator.analysing_chamber.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. What pool the output is in. Requires greater than or equal to 1 and less than or equal to 6. (Default `0`).

    ```groovy
    slot(int)
    ```

- `int`. Specific number to be rolled to gain the output. Duplicate numbers are *not* validated, and will not be output. Requires greater than or equal to 1 and less than or equal to 20000. (Default `0`).

    ```groovy
    location(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.analysing_chamber.recipeBuilder()
    .slot(6)
    .location(1)
    .output(item('minecraft:diamond'))
    .register()

mods.calculator.analysing_chamber.recipeBuilder()
    .slot(1)
    .location(18)
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.calculator.analysing_chamber.remove(CalculatorRecipe)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.calculator.analysing_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.calculator.analysing_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.analysing_chamber.removeByOutput(item('sonarcore:reinforceddirtblock'))
mods.calculator.analysing_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.calculator.analysing_chamber.streamRecipes()
    ```
