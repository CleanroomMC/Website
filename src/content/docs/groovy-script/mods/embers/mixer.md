---
title: Mixer (Embers Unofficial Extended Life)
description: Converts up to 3 input fluidstacks into an output fluidstack in a Mixer. If Mystical Mechanics is installed, the Mechanical Actuator can be used to decrease the Ember cost of a recipe.
sidebar:
  label: Mixer
source_code_link: https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Mixer.java
---

## Description

Converts up to 3 input fluidstacks into an output fluidstack in a Mixer. If Mystical Mechanics is installed, the Mechanical Actuator can be used to decrease the Ember cost of a recipe.

## Identifier

The identifier `mods.embers.mixer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.embers.mixer/* Used as page default */
mods.embers.Mixer
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.embers.mixer.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 2 and less than or equal to 3.

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

- `double`. Sets what percentage of Ember is required when powered via the Mechanical Actuator, with 0 meaning no Ember is consumed and more than 1 meaning more Ember is consumed. Requires greater than or equal to 0. (Default `0.5`).

    ```groovy
    powerRatio(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.FluidMixingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.mixer.recipeBuilder()
    .fluidInput(fluid('water') * 100, fluid('lava') * 100)
    .fluidOutput(fluid('dawnstone') * 100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.embers.mixer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.embers.mixer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.mixer.removeByOutput(fluid('dawnstone'))
mods.embers.mixer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.embers.mixer.streamRecipes()
    ```
