---
title: "Lava Infuser"
titleTemplate: "Armor Plus | CleanroomMC"
description: "Convert input itemstack to output itemstack over a second, with the ability to reward a configurable amount of experience based on the output itemstack. Consumes lava at a rate of 1 bucket per 10 seconds."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/armorplus/LavaInfuser.java"
---

# Lava Infuser (Armor Plus)

## Description

Convert input itemstack to output itemstack over a second, with the ability to reward a configurable amount of experience based on the output itemstack. Consumes lava at a rate of 1 bucket per 10 seconds.

:::::::::: details Warning {open id="warning"}
Experience provided is based on the output itemstack. Experience is a fallback value, only used if the itemstack provides no experience when smelting.
::::::::::

## Identifier

The identifier `mods.armorplus.lava_infuser` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.armorplus.lavainfuser
mods.armorplus.lavaInfuser
mods.armorplus.LavaInfuser
mods.armorplus.lava_infuser/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.add(LavaInfuserRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Lava Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `double`. Sets the experience provided by the output. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    experience(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.sofodev.armorplus.common.compat.crafttweaker.lavainfuser.LavaInfuserRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
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

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.remove(LavaInfuserRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.armorplus.lava_infuser.removeByInput(item('armorplus:lava_crystal'))
mods.armorplus.lava_infuser.removeByOutput(item('armorplus:lava_infused_obsidian'))
mods.armorplus.lava_infuser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.armorplus.lava_infuser.streamRecipes()
    ```
