---
title: Excavator (Immersive Engineering)
description: Adds a Mineral Mix with the given name, weight, fail chance, ores, and allowed dimensions. A Mineral Mix can be mined by an Excavator Multiblock and scanned via a Core Sample Drill.
sidebar:
  label: Excavator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Excavator.java
---

## Description

Adds a Mineral Mix with the given name, weight, fail chance, ores, and allowed dimensions. A Mineral Mix can be mined by an Excavator Multiblock and scanned via a Core Sample Drill.

:::caution[Warning]
Reloading will not change chunks already 'discovered'.
:::

## Identifier

The identifier `mods.immersiveengineering.excavator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ie.excavator
mods.ie.Excavator
mods.immersiveengineering.excavator/* Used as page default */
mods.immersiveengineering.Excavator
```

</details>

## Adding Entries

- Adds entries in the format `name`, `mineralWeight`, `failChance`, `ores`, `chances`:

    ```groovy
    mods.immersiveengineering.excavator.add(String, int, float, String[], float[])
    ```

### Recipe Builder

Just like other recipe types, the Excavator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.excavator.recipeBuilder()
    ```

---

- `float`. Sets the chance that a given mining attempt with output nothing instead of an ore. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    fail(float)
    ```

- `String`. Sets the unique name of the vein.

    ```groovy
    name(String)
    ```

- `List<String>`. Sets the valid oredicts output. Requires exactly equal to the number of elements in `ores`.

    ```groovy
    ore(String, float)
    ore(OreDictIngredient, float)
    ```

- `int`. Sets the weight the Mineral Mix has to spawn in its allowed dimensions. (Default `0`).

    ```groovy
    weight(int)
    ```

- `FloatArrayList`. Sets the chance a given block output will contain the corresponding entry in ores. Requires exactly equal to the number of elements in `chances`.

    ```groovy
    ore(String, float)
    ore(OreDictIngredient, float)
    ```

- `boolean`. Sets if the `dimensions` property indicates allowed dimensions (false) or blocked dimensions (true). (Default `false`).

    ```groovy
    blacklist()
    blacklist(boolean)
    ```

- `List<Integer>`. Sets the list of dimension ids the vein can generate in (if `blacklist` is false) or are prevented from generating in (if `blacklist` is true).

    ```groovy
    dimension(int)
    dimension(int...)
    dimension(Collection<Integer>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.tool.ExcavatorHandler$MineralMix`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.excavator.recipeBuilder()
    .name('demo')
    .weight(20000)
    .fail(0.5)
    .ore(ore('blockDiamond'), 50)
    .ore('blockGold', 10)
    .dimension(0, 1)
    .register()

mods.immersiveengineering.excavator.recipeBuilder()
    .name('demo')
    .weight(2000)
    .fail(0.1)
    .ore(ore('blockDiamond'), 50)
    .dimension(-1, 1)
    .blacklist()
    .register()
```

</details>

</details>

## Removing Entries

- Removes all Mineral Mix entries containing any of the given ores:

    ```groovy
    mods.immersiveengineering.excavator.removeByOres(String...)
    ```

- Removes all Mineral Mix entries containing any of the given ores:

    ```groovy
    mods.immersiveengineering.excavator.removeByOres(OreDictIngredient...)
    ```

- Removes the Mineral Mix entry with the given name:

    ```groovy
    mods.immersiveengineering.excavator.removeByMineral(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.excavator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.excavator.removeByOres(ore('oreAluminum'))
mods.immersiveengineering.excavator.removeByMineral('silt')
mods.immersiveengineering.excavator.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.excavator.streamRecipes()
    ```
