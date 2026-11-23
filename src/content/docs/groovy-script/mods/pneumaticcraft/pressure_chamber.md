---
title: "Pressure Chamber (PneumaticCraft: Repressurized)"
description: Converts any number of input itemstacks into any number of output itemstacks, either generating Pressure or consuming Pressure from the Pressure Chamber.
sidebar:
  label: Pressure Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/PressureChamber.java
---

## Description

Converts any number of input itemstacks into any number of output itemstacks, either generating Pressure or consuming Pressure from the Pressure Chamber.

## Identifier

The identifier `mods.pneumaticcraft.pressure_chamber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.pressurechamber
mods.pneumaticcraft.pressureChamber
mods.pneumaticcraft.PressureChamber
mods.pneumaticcraft.pressure_chamber/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.pneumaticcraft.pressure_chamber.add(IPressureChamberRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Pressure Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.pressure_chamber.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `float`. Sets the Pressure consumed to perform the craft, if negative will generate Pressure instead. (Default `0.0f`).

    ```groovy
    pressure(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.api.recipe.IPressureChamberRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.pressure_chamber.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:gold_ingot'))
    .pressure(4)
    .register()

mods.pneumaticcraft.pressure_chamber.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:gold_block'), item('minecraft:gold_nugget'), item('minecraft:diamond'), item('minecraft:diamond_block'), item('minecraft:obsidian'), item('minecraft:stone'), item('minecraft:stone:1'), item('minecraft:stone:2'), item('minecraft:stone:3'), item('minecraft:stone:4'), item('minecraft:stone:5'), item('minecraft:stone:6'))
    .output(item('minecraft:cobblestone'))
    .pressure(4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.pneumaticcraft.pressure_chamber.remove(IPressureChamberRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.pressure_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.pressure_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.pressure_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.pressure_chamber.removeByInput(item('minecraft:iron_block'))
mods.pneumaticcraft.pressure_chamber.removeByOutput(item('minecraft:diamond'))
mods.pneumaticcraft.pressure_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.pressure_chamber.streamRecipes()
    ```
