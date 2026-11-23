---
title: Evaporator (Alchemistry)
description: Converts an input fluidstack into an output fluidstack, taking a set amount of time.
sidebar:
  label: Evaporator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Evaporator.java
---

## Description

Converts an input fluidstack into an output fluidstack, taking a set amount of time.

## Identifier

The identifier `mods.alchemistry.evaporator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.alchemistry.evaporator/* Used as page default */
mods.alchemistry.Evaporator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.alchemistry.evaporator.add(EvaporatorRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.alchemistry.evaporator.add(FluidStack, ItemStack)
    ```

### Recipe Builder

Just like other recipe types, the Evaporator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.alchemistry.evaporator.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.EvaporatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.evaporator.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:redstone') * 8)
    .register()

mods.alchemistry.evaporator.recipeBuilder()
    .fluidInput(fluid('water') * 10)
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.alchemistry.evaporator.remove(EvaporatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.evaporator.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.alchemistry.evaporator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.alchemistry.evaporator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.evaporator.removeByInput(fluid('lava'))
mods.alchemistry.evaporator.removeByOutput(item('alchemistry:mineral_salt'))
mods.alchemistry.evaporator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.alchemistry.evaporator.streamRecipes()
    ```
