---
title: Filtered Hopper (Better With Mods)
description: Recipes for the Filtered Hopper to process. The filter targeted must allow the input item in to function.
sidebar:
  label: Filtered Hopper
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Hopper.java
---

## Description

Recipes for the Filtered Hopper to process. The filter targeted must allow the input item in to function.

## Identifier

The identifier `mods.betterwithmods.hopper` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithmods.hopper/* Used as page default */
mods.betterwithmods.Hopper
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.hopper.add(HopperInteractions.HopperRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Filtered Hopper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithmods.hopper.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the name of the filter used for the recipe, the input item must be capable of passing through the filter to be processed. Requires not null.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `ItemStackList`. Sets the items dropped in-world when the recipe is processed. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy
    inWorldItemOutput(ItemStack)
    inWorldItemOutput(ItemStack...)
    inWorldItemOutput(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.HopperInteractions$HopperRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.hopper.recipeBuilder()
    .name('betterwithmods:iron_bar')
    .input(ore('sand'))
    .output(item('minecraft:clay'))
    .inWorldItemOutput(item('minecraft:gold_ingot'))
    .register()

mods.betterwithmods.hopper.recipeBuilder()
    .name('betterwithmods:wicker')
    .input(item('minecraft:clay') * 3)
    .inWorldItemOutput(item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.hopper.remove(HopperInteractions.HopperRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithmods.hopper.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithmods.hopper.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.hopper.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.hopper.removeByInput(item('minecraft:gunpowder'))
mods.betterwithmods.hopper.removeByOutput(item('minecraft:gunpowder'))
mods.betterwithmods.hopper.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.hopper.streamRecipes()
    ```
