---
title: Lava Infuser (Armor Plus)
description: Convert input itemstack to output itemstack over a second, with the ability to reward a configurable amount of experience based on the output itemstack. Consumes lava at a rate of 1 bucket per 10 seconds.
sidebar:
  label: Lava Infuser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/armorplus/LavaInfuser.java
---

## Description

Convert input itemstack to output itemstack over a second, with the ability to reward a configurable amount of experience based on the output itemstack. Consumes lava at a rate of 1 bucket per 10 seconds.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Experience provided is based on the output itemstack. Experience is a fallback value, only used if the itemstack provides no experience when smelting.

</details>

## Identifier

The identifier `mods.armorplus.lava_infuser` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.armorplus.lavainfuser
mods.armorplus.lavaInfuser
mods.armorplus.LavaInfuser
mods.armorplus.lava_infuser/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.armorplus.lava_infuser.add(LavaInfuserRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Lava Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.armorplus.lava_infuser.recipeBuilder()
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

- `double`. Sets the experience provided by the output. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy
    experience(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.sofodev.armorplus.common.compat.crafttweaker.lavainfuser.LavaInfuserRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.armorplus.lava_infuser.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()

mods.armorplus.lava_infuser.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .experience(5.0d)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.armorplus.lava_infuser.remove(LavaInfuserRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.armorplus.lava_infuser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.armorplus.lava_infuser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.armorplus.lava_infuser.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.armorplus.lava_infuser.removeByInput(item('armorplus:lava_crystal'))
mods.armorplus.lava_infuser.removeByOutput(item('armorplus:lava_infused_obsidian'))
mods.armorplus.lava_infuser.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.armorplus.lava_infuser.streamRecipes()
    ```
