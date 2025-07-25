---
title: "Inscriber"
titleTemplate: "Applied Energistics 2 | CleanroomMC"
description: "Converts an item into another item, requiring either one or two additional items as either catalysts or ingredients."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/Inscriber.java"
---

# Inscriber (Applied Energistics 2)

## Description

Converts an item into another item, requiring either one or two additional items as either catalysts or ingredients.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ae2.inscriber
mods.ae2.Inscriber
mods.appliedenergistics2.inscriber/* Used as page default */ // [!code focus]
mods.appliedenergistics2.Inscriber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Inscriber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.appliedenergistics2.inscriber.recipeBuilder()
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

- `ItemStack`. Sets the top item of the inscriber recipe. Requires either top or bottom to be non-empty. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    top(ItemStack)
    ```

- `InscriberProcessType`. Sets the type of recipe, determining if the top/bottom items function as catalysts. Requires not null. (Default `InscriberProcessType.PRESS`).

    ```groovy:no-line-numbers
    type(String)
    type(InscriberProcessType)
    press()
    inscribe()
    ```

- `ItemStack`. Sets the bottom item of the inscriber recipe. Requires either top or bottom to be non-empty. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    bottom(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `appeng.api.features.IInscriberRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.appliedenergistics2.inscriber.recipeBuilder()
    .input(ore('blockGlass'))
    .output(item('minecraft:diamond'))
    .top(item('minecraft:diamond'))
    .bottom(item('minecraft:diamond'))
    .inscribe()
    .register()

mods.appliedenergistics2.inscriber.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .top(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.inscriber.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.inscriber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.appliedenergistics2.inscriber.removeByOutput(item('appliedenergistics2:material:59'))
mods.appliedenergistics2.inscriber.removeAll()
```

::::::::::
