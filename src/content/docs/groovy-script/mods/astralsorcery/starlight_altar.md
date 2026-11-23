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

The identifier `mods.astralsorcery.starlight_altar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.astral.starlightaltar
mods.astral.starlightAltar
mods.astral.StarlightAltar
mods.astral.starlight_altar
mods.astralsorcery.starlightaltar
mods.astralsorcery.starlightAltar
mods.astralsorcery.StarlightAltar
mods.astralsorcery.starlight_altar/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Starlight Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Discovery Altar Recipe Builder</summary>

---

- Create a Recipe Builder for Astral Sorcery Crafting recipes for the Discovery (1st) tier of the Starlight Altar.

    ```groovy
    mods.astralsorcery.starlight_altar.discoveryRecipeBuilder()
    ```

---

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 9, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List<List<IIngredient>>)
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

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy
    craftTime(int)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 1000. (Default `1`).

    ```groovy
    starlight(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.starlight_altar.discoveryRecipeBuilder()
    .output(item('minecraft:water_bucket'))
    .row('   ')
    .row(' B ')
    .row('   ')
    .key('B', item('minecraft:bucket'))
    .starlight(500)
    .craftTime(10)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Attunement Altar Recipe Builder</summary>

---

- Create a Recipe Builder for Astral Sorcery Crafting recipes for the Attunement (2nd) tier of the Starlight Altar.

    ```groovy
    mods.astralsorcery.starlight_altar.attunementRecipeBuilder()
    ```

---

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 13, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List<List<IIngredient>>)
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

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy
    craftTime(int)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 2000. (Default `1`).

    ```groovy
    starlight(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy
    register()
    ```

</details>

<details class="cr-block cr-abstract" open>
<summary>Constellation Altar Recipe Builder</summary>

---

- Create a Recipe Builder for Astral Sorcery Crafting recipes for the Constellation (3rd) tier of the Starlight Altar.

    ```groovy
    mods.astralsorcery.starlight_altar.constellationRecipeBuilder()
    ```

---

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 21, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List<List<IIngredient>>)
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

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy
    craftTime(int)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 4000. (Default `1`).

    ```groovy
    starlight(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy
    register()
    ```

---

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
<summary>Trait Altar Recipe Builder</summary>

---

- Create a Recipe Builder for Astral Sorcery Crafting recipes for the Trait tier (4th) of the Starlight Altar.

    ```groovy
    mods.astralsorcery.starlight_altar.traitRecipeBuilder()
    ```

---

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 25, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List<List<IIngredient>>)
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

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy
    craftTime(int)
    ```

- `List<IIngredient>`. Sets items placed on nearby relays once the recipe starts. Must be placed manually. Requires greater than or equal to 0 and less than or equal to 24.

    ```groovy
    outerInput(IIngredient)
    outerInput(IIngredient...)
    outerInput(Collection<IIngredient>)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 8000. (Default `1`).

    ```groovy
    starlight(int)
    ```

- `IConstellation`. Sets the required Constellation for the Rock Crystal to be attuned to. Only applies to Iridescent Altars.

    ```groovy
    constellation(IConstellation)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy
    register()
    ```

---

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
