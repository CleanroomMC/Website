---
title: "Moss"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Moss indicates a pair of items that can right click the input with a knife to turn it into the output and give a Terra Moss and right click the output with moss spores to turn it into the input."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Moss.java"
---

# Moss (Roots 3)

## Description

Moss indicates a pair of items that can right click the input with a knife to turn it into the output and give a Terra Moss and right click the output with moss spores to turn it into the input.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.moss/* Used as page default */ // [!code focus]
mods.roots.Moss
```


## Adding Recipes

- Adds a new Moss conversion recipe in the format `in`, `out`:

    ```groovy:no-line-numbers
    mods.roots.moss.add(ItemStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.moss.add(item('minecraft:stained_glass:3'), item('minecraft:stained_glass:4'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Moss also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.roots.moss.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<net.minecraft.item.ItemStack, net.minecraft.item.ItemStack>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.moss.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Moss conversion recipe for the given input itemstack:

    ```groovy:no-line-numbers
    mods.roots.moss.remove(ItemStack)
    ```

- Removes the Moss conversion recipe for the given input and output itemstacks, in the format `in`, `out`:

    ```groovy:no-line-numbers
    mods.roots.moss.remove(ItemStack, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.moss.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.moss.remove(item('minecraft:cobblestone'))
mods.roots.moss.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.moss.streamRecipes()
    ```
