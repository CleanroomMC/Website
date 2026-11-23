---
title: "Assembly Controller (PneumaticCraft: Repressurized)"
description: Uses a given Program to convert an input itemstack into an output itemstack. Drill recipes that output an itemstack used for the input itemstack of a Laser recipe can be chained via the Drill & Laser Program.
sidebar:
  label: Assembly Controller
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/AssemblyController.java
---

## Description

Uses a given Program to convert an input itemstack into an output itemstack. Drill recipes that output an itemstack used for the input itemstack of a Laser recipe can be chained via the Drill & Laser Program.

## Identifier

The identifier `mods.pneumaticcraft.assembly_controller` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.assemblycontroller
mods.pneumaticcraft.assemblyController
mods.pneumaticcraft.AssemblyController
mods.pneumaticcraft.assembly_controller/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Assembly Controller also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.assembly_controller.recipeBuilder()
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

- `ItemStack`. Sets the program type used, between Drill and Laser. Requires not null.

    ```groovy
    drill()
    laser()
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.AssemblyRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.assembly_controller.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:gold_ingot') * 6)
    .drill()
    .register()

mods.pneumaticcraft.assembly_controller.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 6)
    .output(item('minecraft:diamond'))
    .laser()
    .register()

mods.pneumaticcraft.assembly_controller.recipeBuilder()
    .input(item('minecraft:stone'))
    .output(item('minecraft:clay') * 5)
    .laser()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeByInput(AssemblyController.AssemblyType, IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeByOutput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeByOutput(AssemblyController.AssemblyType, IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeAll()
    ```

- Removes all Drill program recipes:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeAllDrill()
    ```

- Removes all Laser program recipes:

    ```groovy
    mods.pneumaticcraft.assembly_controller.removeAllLaser()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.assembly_controller.removeByInput(item('minecraft:redstone'))
mods.pneumaticcraft.assembly_controller.removeByOutput(item('pneumaticcraft:pressure_chamber_valve'))
mods.pneumaticcraft.assembly_controller.removeAll()
mods.pneumaticcraft.assembly_controller.removeAllDrill()
mods.pneumaticcraft.assembly_controller.removeAllLaser()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.assembly_controller.streamRecipes()
    ```
