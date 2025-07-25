---
title: "Mortar And Pestle"
titleTemplate: "Roots 3 | CleanroomMC"
description: "When right clicking a mortar containing the input items with a pestle, it will display a few colored sparkles, consume the inputs, and drop the item output."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Mortar.java"
---

# Mortar And Pestle (Roots 3)

## Description

When right clicking a mortar containing the input items with a pestle, it will display a few colored sparkles, consume the inputs, and drop the item output.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.mortar/* Used as page default */ // [!code focus]
mods.roots.Mortar
mods.roots.mortar_and_pestle
mods.roots.mortarandpestle
mods.roots.mortarAndPestle
mods.roots.MortarAndPestle
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mortar And Pestle also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.roots.mortar.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `float`. Sets the red color value of the first version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    red(float)
    red(float, float)
    red1(float)
    color(float, float, float)
    color(float, float, float, float, float, float)
    ```

- `float`. Sets the red color value of the second version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    red(float)
    red(float, float)
    red2(float)
    color(float, float, float)
    color(float, float, float, float, float, float)
    ```

- `float`. Sets the blue color value of the first version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    blue(float)
    blue(float, float)
    blue1(float)
    color(float, float, float)
    color(float, float, float, float, float, float)
    ```

- `float`. Sets the blue color value of the second version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    blue(float)
    blue(float, float)
    blue2(float)
    color(float, float, float)
    color(float, float, float, float, float, float)
    ```

- `float`. Sets the green color value of the first version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    color(float, float, float)
    color(float, float, float, float, float, float)
    green(float)
    green(float, float)
    green1(float)
    ```

- `float`. Sets the green color value of the second version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    color(float, float, float)
    color(float, float, float, float, float, float)
    green(float)
    green(float, float)
    green2(float)
    ```

- `boolean`. Sets if, when input has a single IIngredient, a recipe will be generated for each input amount. (Default `true`).

    ```groovy:no-line-numbers
    generate()
    generate(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.MortarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.mortar.recipeBuilder()
    .name('clay_mortar')
    .input(item('minecraft:stone'),item('minecraft:gold_ingot'),item('minecraft:stone'),item('minecraft:gold_ingot'),item('minecraft:stone'))
    .generate(false)
    .output(item('minecraft:clay'))
    .color(1, 0, 0.1, 1, 0, 0.1)
    .register()

mods.roots.mortar.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .color(0, 0, 0.1)
    .register()

mods.roots.mortar.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 16)
    .red(0)
    .green1(0.5)
    .green2(1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Mortar recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.mortar.removeByName(ResourceLocation)
    ```

- Removes the Mortar recipe with the given output itemstack:

    ```groovy:no-line-numbers
    mods.roots.mortar.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.mortar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.mortar.removeByName(resource('roots:wheat_flour'))
mods.roots.mortar.removeByOutput(item('minecraft:string'))
mods.roots.mortar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.mortar.streamRecipes()
    ```
