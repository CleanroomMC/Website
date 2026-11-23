---
title: Distiller (Immersive Technology)
description: Converts an input fluidstack into an output fluidstack and has a chance to output an itemstack after a given amount of time in a multiblock structure.
sidebar:
  label: Distiller
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/Distiller.java
---

## Description

Converts an input fluidstack into an output fluidstack and has a chance to output an itemstack after a given amount of time in a multiblock structure.

## Identifier

The identifier `mods.immersivetech.distiller` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.immersivetech.distiller/* Used as page default */
mods.immersivetech.Distiller
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.distiller.add(DistillerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Distiller also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.distiller.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `float`. Sets the chance the output itemstack with be output. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    chance(float)
    ```

- `int`. Sets the energy used in total IF consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.DistillerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.distiller.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.distiller.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 50)
    .output(item('minecraft:diamond'))
    .chance(0.5f)
    .time(50)
    .energy(5000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.distiller.remove(DistillerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.distiller.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.distiller.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.distiller.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.distiller.removeByInput(fluid('water'))
mods.immersivetech.distiller.removeByOutput(fluid('distwater'))
mods.immersivetech.distiller.removeByOutput(item('immersivetech:material'))
mods.immersivetech.distiller.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.distiller.streamRecipes()
    ```
