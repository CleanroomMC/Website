---
title: "Crystallizer"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input gasstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Crystallizer.java"
---

# Crystallizer (Mekanism)

## Description

Converts an input gasstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.crystallizer/* Used as page default */ // [!code focus]
mods.mekanism.Crystallizer
```


## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.crystallizer.add(GasStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.crystallizer.add(gas('cleanGold'), item('minecraft:gold_ingot'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Crystallizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.mekanism.crystallizer.recipeBuilder()
    ```

---

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.CrystallizerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.crystallizer.recipeBuilder()
    .gasInput(gas('cleanGold'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.crystallizer.removeByInput(GasStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.crystallizer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.crystallizer.removeByInput(gas('cleanGold'))
mods.mekanism.crystallizer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.crystallizer.streamRecipes()
    ```
