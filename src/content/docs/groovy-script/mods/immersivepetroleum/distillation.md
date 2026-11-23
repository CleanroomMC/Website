---
title: Distillation Tower (Immersive Petroleum)
description: Converts an input fluidstack into any number of output fluidstacks and any number of output itemstacks, with each itemstack having the ability to have a custom chance, using energy and taking time.
sidebar:
  label: Distillation Tower
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivepetroleum/Distillation.java
---

## Description

Converts an input fluidstack into any number of output fluidstacks and any number of output itemstacks, with each itemstack having the ability to have a custom chance, using energy and taking time.

## Identifier

The identifier `mods.immersivepetroleum.distillation` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.immersivepetroleum.distillation/* Used as page default */
mods.immersivepetroleum.Distillation
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivepetroleum.distillation.add(DistillationRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Distillation Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivepetroleum.distillation.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the duration in ticks the recipe takes. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `FloatArrayList`. Sets the chance the corresponding entry in `output` will be output. Requires greater than or equal to 0.

    ```groovy
    output(ItemStack)
    output(ItemStack, float)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `flaxbeard.immersivepetroleum.api.crafting.DistillationRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivepetroleum.distillation.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('water') * 50, fluid('lava') * 30)
    .output(item('minecraft:diamond'), 0.5)
    .output(item('minecraft:clay'), 0.2)
    .output(item('minecraft:diamond'), 0.1)
    .output(item('minecraft:clay'), 0.5)
    .output(item('minecraft:diamond') * 5, 0.01)
    .time(5)
    .energy(1000)
    .register()

mods.immersivepetroleum.distillation.recipeBuilder()
    .fluidInput(fluid('lava') * 5)
    .output(item('minecraft:diamond'))
    .time(1)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivepetroleum.distillation.remove(DistillationRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivepetroleum.distillation.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivepetroleum.distillation.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivepetroleum.distillation.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivepetroleum.distillation.removeByInput(fluid('oil'))
mods.immersivepetroleum.distillation.removeByOutput(item('immersivepetroleum:material'))
mods.immersivepetroleum.distillation.removeByOutput(fluid('lubricant'))
mods.immersivepetroleum.distillation.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivepetroleum.distillation.streamRecipes()
    ```
