---
title: Reaction Chamber (Embers Unofficial Extended Life)
description: Converts an input fluidstack into an output fluidstack in a Reaction Chamber.
sidebar:
  label: Reaction Chamber
source_code_link: https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/ReactionChamber.java
---

## Description

Converts an input fluidstack into an output fluidstack in a Reaction Chamber.

## Identifier

The identifier `mods.embers.reaction_chamber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.embers.reactionchamber
mods.embers.reactionChamber
mods.embers.ReactionChamber
mods.embers.reaction_chamber/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Reaction Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.embers.reaction_chamber.recipeBuilder()
    ```

---

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

- `float`. Sets the red value of the color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    red(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `float`. Sets the blue value of the color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    blue(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `float`. Sets the green value of the color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    green(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.FluidReactionRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.reaction_chamber.recipeBuilder()
    .fluidInput(fluid('lava') * 10)
    .fluidOutput(fluid('steam') * 50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.embers.reaction_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.embers.reaction_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.reaction_chamber.removeByOutput(fluid('steam'))
mods.embers.reaction_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.embers.reaction_chamber.streamRecipes()
    ```
