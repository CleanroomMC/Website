---
title: Alchemical Mixer (Soot)
description: The Alchemical Mixer is a device that can be used to mix fluids and ash to create new fluids. The Mixer requires a globe to be placed on top of it, and pedestals to be placed around it. The Mixer will then mix the fluids and ash in the pedestals to create new fluids.
sidebar:
  label: Alchemical Mixer
source_code_link: https://github.com/Ender-Development/Soot-Extended-Life/blob/master/src/main/java/soot/compat/groovyscript/AlchemicalMixer.java
---

## Description

The Alchemical Mixer is a device that can be used to mix fluids and ash to create new fluids. The Mixer requires a globe to be placed on top of it, and pedestals to be placed around it. The Mixer will then mix the fluids and ash in the pedestals to create new fluids.

## Identifier

The identifier `mods.soot.alchemical_mixer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.soot.alchemicalmixer
mods.soot.alchemicalMixer
mods.soot.AlchemicalMixer
mods.soot.alchemical_mixer/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Alchemical Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.soot.alchemical_mixer.recipeBuilder()
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

- `AspectList.AspectRangeList`. Sets what aspects are part of the recipe and their minimum/maximum values. Requires not empty.

    ```groovy
    setAspect(String, int, int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `soot.recipe.RecipeAlchemicalMixer`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.alchemical_mixer.recipeBuilder()
    .fluidInput(fluid('water') * 10, fluid('lava') * 10, fluid('iron') * 16, fluid('gold') * 16)
    .fluidOutput(fluid('dawnstone') * 16)
    .setAspect('dawnstone', 1, 2)
    .setAspect('copper', 2, 3)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.soot.alchemical_mixer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.soot.alchemical_mixer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.alchemical_mixer.removeByOutput(fluid('antimony'))
mods.soot.alchemical_mixer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.soot.alchemical_mixer.streamRecipes()
    ```
