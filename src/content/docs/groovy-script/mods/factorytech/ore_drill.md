---
title: Drill Grinder (Factory Tech)
description: Converts an input itemstack into an output itemstack, with the ability to control if stone parts are allowed.
sidebar:
  label: Drill Grinder
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/OreDrill.java
---

## Description

Converts an input itemstack into an output itemstack, with the ability to control if stone parts are allowed.

## Identifier

The identifier `mods.factorytech.ore_drill` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.factorytech.oredrill
mods.factorytech.oreDrill
mods.factorytech.OreDrill
mods.factorytech.ore_drill/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.factorytech.ore_drill.add(MachineRecipes.MachineRecipe<ItemStack, ItemStack>)
    ```

### Recipe Builder

Just like other recipe types, the Drill Grinder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.factorytech.ore_drill.recipeBuilder()
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

- `boolean`. Sets if the recipe can use stone parts. (Default `false`).

    ```groovy
    allowStoneParts()
    allowStoneParts(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.auxiliary.MachineRecipes$MachineRecipe<net.minecraft.item.ItemStack, net.minecraft.item.ItemStack>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.ore_drill.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.ore_drill.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .allowStoneParts()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.factorytech.ore_drill.remove(MachineRecipes.MachineRecipe<ItemStack, ItemStack>)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.factorytech.ore_drill.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.factorytech.ore_drill.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.factorytech.ore_drill.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.ore_drill.removeByInput(item('minecraft:gold_ore'))
mods.factorytech.ore_drill.removeByOutput(item('minecraft:sand'))
mods.factorytech.ore_drill.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.factorytech.ore_drill.streamRecipes()
    ```
