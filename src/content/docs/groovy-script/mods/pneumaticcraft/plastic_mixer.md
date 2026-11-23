---
title: "Plastic Mixer (PneumaticCraft: Repressurized)"
description: Converts a fluidstack and an item with a variable damage value into each other, requiring temperature to operate the process, optionally consuming dye, and allowing either only melting or only solidifying.
sidebar:
  label: Plastic Mixer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/PlasticMixer.java
---

## Description

Converts a fluidstack and an item with a variable damage value into each other, requiring temperature to operate the process, optionally consuming dye, and allowing either only melting or only solidifying.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Items with metadata 15 will never consume dye, even if the option is enabled.

</details>

<details class="cr-block cr-danger" open>
<summary>Danger</summary>

Only one meta value can be used for a recipe per fluid, and the meta value will be applied to the item.

</details>

## Identifier

The identifier `mods.pneumaticcraft.plastic_mixer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.plasticmixer
mods.pneumaticcraft.plasticMixer
mods.pneumaticcraft.PlasticMixer
mods.pneumaticcraft.plastic_mixer/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.pneumaticcraft.plastic_mixer.add(PlasticMixerRegistry.PlasticMixerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Plastic Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.plastic_mixer.recipeBuilder()
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

- `int`. Sets the meta value for selecting the recipe, only one meta value can be used for a fluid. (Default `0`).

    ```groovy
    meta(int)
    ```

- `boolean`. Sets if the recipe consumes a random dye. (Default `false`).

    ```groovy
    useDye()
    useDye(boolean)
    ```

- `boolean`. Sets if the recipe allows melting the output item back into the input fluid. (Default `false`).

    ```groovy
    allowMelting()
    allowMelting(boolean)
    ```

- `boolean`. Sets if the recipe allows solidifying the input fluid into the output item. (Default `false`).

    ```groovy
    allowSolidifying()
    allowSolidifying(boolean)
    ```

- `int`. Sets the required temperature in Kelvin to melt or solidify the recipe. (Default `0`).

    ```groovy
    requiredTemperature(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.PlasticMixerRegistry$PlasticMixerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.plastic_mixer.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:clay'))
    .allowMelting()
    .allowSolidifying()
    .requiredTemperature(323)
    .register()

mods.pneumaticcraft.plastic_mixer.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .output(item('minecraft:sapling'))
    .allowSolidifying()
    .requiredTemperature(298)
    .meta(-1)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.pneumaticcraft.plastic_mixer.remove(PlasticMixerRegistry.PlasticMixerRecipe)
    ```

- Removes all recipes with the given item output:

    ```groovy
    mods.pneumaticcraft.plastic_mixer.removeByItem(IIngredient)
    ```

- Removes all recipes with the given fluid input:

    ```groovy
    mods.pneumaticcraft.plastic_mixer.removeByFluid(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.plastic_mixer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.plastic_mixer.removeByItem(item('pneumaticcraft:plastic'))
mods.pneumaticcraft.plastic_mixer.removeByFluid(fluid('plastic'))
mods.pneumaticcraft.plastic_mixer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.plastic_mixer.streamRecipes()
    ```
