---
title: Mortar And Pestle (Roots 3)
description: When right clicking a mortar containing the input items with a pestle, it will display a few colored sparkles, consume the inputs, and drop the item output.
sidebar:
  label: Mortar And Pestle
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Mortar.java
---

## Description

When right clicking a mortar containing the input items with a pestle, it will display a few colored sparkles, consume the inputs, and drop the item output.

## Identifier

The identifier `mods.roots.mortar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.roots.mortar/* Used as page default */
mods.roots.Mortar
mods.roots.mortarandpestle
mods.roots.mortarAndPestle
mods.roots.MortarAndPestle
mods.roots.mortar_and_pestle
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mortar And Pestle also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.roots.mortar.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `float`. Sets the red color value of the first version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    red(float)
    red(float, float)
    red1(float)
    color(float, float, float) // red, green, blue
    color(float, float, float, float, float, float) // red1, green1, blue1, red2, green2, blue2
    ```

- `float`. Sets the red color value of the second version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    red(float)
    red(float, float)
    red2(float)
    color(float, float, float) // red, green, blue
    color(float, float, float, float, float, float) // red1, green1, blue1, red2, green2, blue2
    ```

- `float`. Sets the blue color value of the first version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    blue(float)
    blue(float, float)
    blue1(float)
    color(float, float, float) // red, green, blue
    color(float, float, float, float, float, float) // red1, green1, blue1, red2, green2, blue2
    ```

- `float`. Sets the blue color value of the second version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    blue(float)
    blue(float, float)
    blue2(float)
    color(float, float, float) // red, green, blue
    color(float, float, float, float, float, float) // red1, green1, blue1, red2, green2, blue2
    ```

- `float`. Sets the green color value of the first version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    color(float, float, float) // red, green, blue
    color(float, float, float, float, float, float) // red1, green1, blue1, red2, green2, blue2
    green(float)
    green(float, float)
    green1(float)
    ```

- `float`. Sets the green color value of the second version of the particle spawned. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    color(float, float, float) // red, green, blue
    color(float, float, float, float, float, float) // red1, green1, blue1, red2, green2, blue2
    green(float)
    green(float, float)
    green2(float)
    ```

- `boolean`. Sets if, when input has a single IIngredient, a recipe will be generated for each input amount. (Default `true`).

    ```groovy
    generate()
    generate(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.MortarRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
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

</details>

</details>

## Removing Recipes

- Removes the Mortar recipe with the given name:

    ```groovy
    mods.roots.mortar.removeByName(ResourceLocation)
    ```

- Removes the Mortar recipe with the given output itemstack:

    ```groovy
    mods.roots.mortar.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.mortar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.mortar.removeByName(resource('roots:wheat_flour'))
mods.roots.mortar.removeByOutput(item('minecraft:string'))
mods.roots.mortar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.mortar.streamRecipes()
    ```
