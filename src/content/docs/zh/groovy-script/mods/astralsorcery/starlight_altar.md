---
title: Starlight Altar (Astral Sorcery)
description: Allows creation of shaped recipes in the Astral Sorcery Crafting Altar chain.
sidebar:
  label: Starlight Altar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/starlightaltar/StarlightAltar.java
---

## Description

Allows creation of shaped recipes in the Astral Sorcery Crafting Altar chain.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.astralsorcery.starlight_altar/* Used as page default */
mods.astralsorcery.starlightaltar
mods.astralsorcery.starlightAltar
mods.astralsorcery.StarlightAltar
mods.astral.starlight_altar
mods.astral.starlightaltar
mods.astral.starlightAltar
mods.astral.StarlightAltar
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Starlight Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.astralsorcery.starlight_altar.discoveryRecipeBuilder()</summary>

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String[])
    shape(String...)
    matrix(String[])
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1 and less than or equal to 9. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List)
    shape(List<List<IIngredient>>)
    matrix(List)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `0`).

    ```groovy
    craftTime(int)
    ```

- `IConstellation`. Sets the required Constellation for the Rock Crystal to be attuned to. Only applies to Iridescent Altars.

    ```groovy
    constellation(IConstellation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.starlight_altar.discoveryRecipeBuilder()
    .output(item('minecraft:water_bucket'))
    .row('   ')
    .row(' B ')
    .row('   ')
    .key('B', item('minecraft:bucket'))
    .starlight(1)
    .craftTime(10)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.astralsorcery.starlight_altar.attunementRecipeBuilder()</summary>

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String[])
    shape(String...)
    matrix(String[])
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1 and less than or equal to 9. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List)
    shape(List<List<IIngredient>>)
    matrix(List)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `0`).

    ```groovy
    craftTime(int)
    ```

- `IConstellation`. Sets the required Constellation for the Rock Crystal to be attuned to. Only applies to Iridescent Altars.

    ```groovy
    constellation(IConstellation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.astralsorcery.starlight_altar.constellationRecipeBuilder()</summary>

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String[])
    shape(String...)
    matrix(String[])
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1 and less than or equal to 9. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List)
    shape(List<List<IIngredient>>)
    matrix(List)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `0`).

    ```groovy
    craftTime(int)
    ```

- `IConstellation`. Sets the required Constellation for the Rock Crystal to be attuned to. Only applies to Iridescent Altars.

    ```groovy
    constellation(IConstellation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.starlight_altar.constellationRecipeBuilder()
    .output(item('minecraft:pumpkin'))
    .matrix('ss ss',
            's   s',
            '  d  ',
            's   s',
            'ss ss')
    .key('s', item('minecraft:pumpkin_seeds'))
    .key('d', ore('dirt'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.astralsorcery.starlight_altar.traitRecipeBuilder()</summary>

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String[])
    shape(String...)
    matrix(String[])
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1 and less than or equal to 9. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List)
    shape(List<List<IIngredient>>)
    matrix(List)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `0`).

    ```groovy
    craftTime(int)
    ```

- `IConstellation`. Sets the required Constellation for the Rock Crystal to be attuned to. Only applies to Iridescent Altars.

    ```groovy
    constellation(IConstellation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.starlight_altar.traitRecipeBuilder()
    .output(item('astralsorcery:itemrockcrystalsimple').setSize(300).setPurity(50).setCutting(50))
    .matrix('sssss',
            'sgggs',
            'sgdgs',
            'sgggs',
            'sssss')
    .key('s', item('minecraft:pumpkin'))
    .key('g', ore('treeLeaves'))
    .key('d', item('minecraft:diamond_block'))
    .outerInput(item('astralsorcery:blockmarble'))
    .outerInput(ore('ingotAstralStarmetal'))
    .outerInput(fluid('astralsorcery.liquidstarlight') * 1000)
    .outerInput(ore('treeSapling'))
    .constellation(constellation('discidia'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output in all Altar tiers:

    ```groovy
    mods.astralsorcery.starlight_altar.removeByOutput(ItemStack)
    ```

- Removes all recipes that match the given output in only the specified Altar tier, in the format `output`, `altarLevel`:

    ```groovy
    mods.astralsorcery.starlight_altar.removeByOutput(ItemStack, TileAltar.AltarLevel)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.starlight_altar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.starlight_altar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.starlight_altar.streamRecipes()
    ```
