---
title: Alchemy (Embers Unofficial Extended Life)
description: Convert input items into an output item on a Exchange Tablet.
sidebar:
  label: Alchemy
source_code_link: https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Alchemy.java
---

## Description

Convert input items into an output item on a Exchange Tablet.

## Identifier

The identifier `mods.embers.alchemy` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.embers.alchemy/* Used as page default */
mods.embers.Alchemy
```

</details>

## Editing Values

- Returns the name of the aspect of an item:

    ```groovy
    mods.embers.alchemy.getAspect(IIngredient)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.alchemy.getAspect(item('embers:aspectus_iron'))
```

</details>

## Adding Recipes

- Register the given Aspect with the given IIngredient:

    ```groovy
    mods.embers.alchemy.addAspect(String, IIngredient)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.alchemy.addAspect('copper',item('minecraft:gold_ingot'))
mods.embers.alchemy.addAspect('glass',item('minecraft:glass'))
```

</details>

### Recipe Builder

Just like other recipe types, the Alchemy also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.embers.alchemy.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `AspectList.AspectRangeList`. Sets what aspects are part of the recipe and their minimum/maximum value. Requires not empty.

    ```groovy
    setAspect(String, int, int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.AlchemyRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.alchemy.recipeBuilder()
    .input(item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:gravel'))
    .setAspect('dawnstone', 2, 17)
    .setAspect('glass', 1, 8)
    .register()

mods.embers.alchemy.recipeBuilder()
    .input(item('minecraft:gravel'),ore('dyeGreen'),ore('dyeGreen'),ore('dyeGreen'),item('minecraft:rotten_flesh'))
    .output(item('minecraft:grass'))
    .setAspect('iron', 2, 17)
    .setAspect('copper', 1, 8)
    .register()
```

</details>

</details>

## Removing Recipes

- Remove the given Aspect:

    ```groovy
    mods.embers.alchemy.removeAspect(String)
    ```

- Removes all recipes with the center item matching the given IIngredient:

    ```groovy
    mods.embers.alchemy.removeByCenter(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.embers.alchemy.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.embers.alchemy.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.alchemy.removeAspect('copper')
mods.embers.alchemy.removeByCenter(item('minecraft:wool'))
mods.embers.alchemy.removeByOutput(item('embers:ember_pipe'))
mods.embers.alchemy.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.embers.alchemy.streamRecipes()
    ```
