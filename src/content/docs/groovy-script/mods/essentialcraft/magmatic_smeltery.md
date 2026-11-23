---
title: Magmatic Smeltery (EssentialCraft 4)
description: A machine used to quadruple ores using MRU and lava. Also adds the same recipes for Magmatic Furnace, which is used to double ores using MRU.
sidebar:
  label: Magmatic Smeltery
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/MagmaticSmeltery.java
---

## Description

A machine used to quadruple ores using MRU and lava. Also adds the same recipes for Magmatic Furnace, which is used to double ores using MRU.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Magmatic Smeltery does not have a JEI handler. This means its recipes will not be displayed in JEI and have to be tested manually.

</details>

## Identifier

The identifier `mods.essentialcraft.magmatic_smeltery` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ec4.magmaticsmeltery
mods.ec4.magmaticSmeltery
mods.ec4.MagmaticSmeltery
mods.ec4.magmatic_smeltery
mods.essentialcraft.magmaticsmeltery
mods.essentialcraft.magmaticSmeltery
mods.essentialcraft.MagmaticSmeltery
mods.essentialcraft.magmatic_smeltery/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Magmatic Smeltery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.essentialcraft.magmatic_smeltery.recipeBuilder()
    ```

---

- `int`. Sets the overlay color for the Magmatic Alloy item of this ore. Requires greater than or equal to 0 and less than or equal to the hexadecimal number `0xffffff`. (Default `0`).

    ```groovy
    color(int)
    ```

- `String`. Sets the OreDict name of the input item. Requires exactly 1.

    ```groovy
    input(String)
    input(OreDictIngredient)
    ```

- `int`. Sets the output factor of the recipe. Magmatic Furnace will smelt the input item into this many Magmatic Alloys, Magmatic Smeltery will give double this many Magmatic Alloys, and Alloys will always be smelted into 2x of the output item. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    factor(int)
    ```

- `String`. Sets the OreDict name of the output item. Requires exactly 1.

    ```groovy
    output(String)
    output(OreDictIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.OreSmeltingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.magmatic_smeltery.recipeBuilder()
    .input('blockIron')
    .output('ingotGold')
    .factor(3)
    .color(0x0000ff)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.essentialcraft.magmatic_smeltery.removeByInput(String)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.essentialcraft.magmatic_smeltery.removeByInput(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.essentialcraft.magmatic_smeltery.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.magmatic_smeltery.removeByInput('oreDiamond')
mods.essentialcraft.magmatic_smeltery.removeByInput(ore('oreIron'))
mods.essentialcraft.magmatic_smeltery.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.essentialcraft.magmatic_smeltery.streamRecipes()
    ```
