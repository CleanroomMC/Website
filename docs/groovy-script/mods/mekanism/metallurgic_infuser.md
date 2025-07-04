---
title: "Metallurgic Infuser"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts and input itemstack and a variable amount of an infusion type into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/MetallurgicInfuser.java"
---

# Metallurgic Infuser (Mekanism)

## Description

Converts and input itemstack and a variable amount of an infusion type into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.metallurgic_infuser/* Used as page default */ // [!code focus]
mods.mekanism.metallurgicinfuser
mods.mekanism.metallurgicInfuser
mods.mekanism.MetallurgicInfuser
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `infuseType`, `infuseAmount`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.metallurgic_infuser.add(IIngredient, InfuseType, int, ItemStack)
    ```

- Adds recipes in the format `ingredient`, `infuseType`, `infuseAmount`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.metallurgic_infuser.add(IIngredient, String, int, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.metallurgic_infuser.add(item('minecraft:nether_star'), infusionType('groovy_example'), 50, item('minecraft:clay'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Metallurgic Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.mekanism.metallurgic_infuser.recipeBuilder()
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

- `int`. Sets the amount of the provided Infusion type consumed. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    amount(int)
    ```

- `InfuseType`. Sets the Infusion type the recipe uses. Requires not null.

    ```groovy:no-line-numbers
    infuse(String)
    infuse(InfuseType)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.MetallurgicInfuserRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.metallurgic_infuser.recipeBuilder()
    .input(item('minecraft:nether_star'))
    .infuse(infusionType('groovy_example'))
    .amount(50)
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.metallurgic_infuser.removeByInput(IIngredient, InfuseType)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.metallurgic_infuser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.metallurgic_infuser.removeByInput(ore('dustObsidian'), 'DIAMOND')
mods.mekanism.metallurgic_infuser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.metallurgic_infuser.streamRecipes()
    ```
