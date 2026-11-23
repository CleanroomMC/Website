---
title: Crab Pot Filter Bubbler (The Betweenlands)
description: Converts an input item into an output itemstack when a Bubbler Crab is placed inside a Crab Pot Filter.
sidebar:
  label: Crab Pot Filter Bubbler
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/CrabPotFilterBubbler.java
---

## Description

Converts an input item into an output itemstack when a Bubbler Crab is placed inside a Crab Pot Filter.

## Identifier

The identifier `mods.thebetweenlands.crab_pot_filter_bubbler` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.betweenlands.crabpotfilterbubbler
mods.betweenlands.crabPotFilterBubbler
mods.betweenlands.CrabPotFilterBubbler
mods.betweenlands.crab_pot_filter_bubbler
mods.thebetweenlands.crabpotfilterbubbler
mods.thebetweenlands.crabPotFilterBubbler
mods.thebetweenlands.CrabPotFilterBubbler
mods.thebetweenlands.crab_pot_filter_bubbler/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.add(ICrabPotFilterRecipeBubbler)
    ```

### Recipe Builder

Just like other recipe types, the Crab Pot Filter Bubbler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ICrabPotFilterRecipeBubbler`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.crab_pot_filter_bubbler.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.crab_pot_filter_bubbler.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.remove(ICrabPotFilterRecipeBubbler)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.crab_pot_filter_bubbler.removeByInput(item('thebetweenlands:silt'))
mods.thebetweenlands.crab_pot_filter_bubbler.removeByOutput(item('thebetweenlands:swamp_dirt'))
mods.thebetweenlands.crab_pot_filter_bubbler.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thebetweenlands.crab_pot_filter_bubbler.streamRecipes()
    ```
