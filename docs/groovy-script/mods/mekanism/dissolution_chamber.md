---
title: "Dissolution Chamber"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input itemstack into an output gasstack at the cost of 100mb of Sulfuric Acid."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/DissolutionChamber.java"
---

# Dissolution Chamber (Mekanism)

## Description

Converts an input itemstack into an output gasstack at the cost of 100mb of Sulfuric Acid.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.dissolution_chamber/* Used as page default */ // [!code focus]
mods.mekanism.dissolutionchamber
mods.mekanism.dissolutionChamber
mods.mekanism.DissolutionChamber
mods.mekanism.dissolver
mods.mekanism.Dissolver
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.add(IIngredient, GasStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.dissolution_chamber.add(item('minecraft:packed_ice'), gas('water'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Dissolution Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.DissolutionRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.dissolution_chamber.recipeBuilder()
    .input(item('minecraft:packed_ice'))
    .gasOutput(gas('water') * 2000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.dissolution_chamber.removeByInput(item('mekanism:oreblock:0'))
mods.mekanism.dissolution_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.streamRecipes()
    ```
