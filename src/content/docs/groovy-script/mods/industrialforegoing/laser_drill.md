---
title: Laser Drill (Industrial Foregoing)
description: Converts power into ores, with a given weight, between a minimum and maximum Y value, in any whitelisted biome or not in any blacklisted biome, and with a specific color of laser lens impacting the probability.
sidebar:
  label: Laser Drill
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/LaserDrill.java
---

## Description

Converts power into ores, with a given weight, between a minimum and maximum Y value, in any whitelisted biome or not in any blacklisted biome, and with a specific color of laser lens impacting the probability.

## Identifier

The identifier `mods.industrialforegoing.laser_drill` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.industrialforegoing.laserdrill
mods.industrialforegoing.laserDrill
mods.industrialforegoing.LaserDrill
mods.industrialforegoing.laser_drill/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Laser Drill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.industrialforegoing.laser_drill.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the maximum Y the output can be found at. Requires less than or equal to 255. (Default `255`).

    ```groovy
    maxY(int)
    ```

- `int`. Sets the minimum Y the output can be found at. Requires less than or equal to 255. (Default `0`).

    ```groovy
    minY(int)
    ```

- `int`. Sets the chance the output is generated. Requires greater than 0. (Default `0`).

    ```groovy
    weight(int)
    ```

- `int`. Sets the metadata of the lens that impacts the weight probability, which determines the color of the lens. (Default `0`).

    ```groovy
    lensMeta(int)
    ```

- `List<Biome>`. Sets the biomes the output cannot be generated in.

    ```groovy
    blacklist(Biome)
    blacklist(Biome...)
    blacklist(Collection<Biome>)
    ```

- `List<Biome>`. Sets the biomes the output can be generated in.

    ```groovy
    whitelist(Biome)
    whitelist(Biome...)
    whitelist(Collection<Biome>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.buuz135.industrial.api.recipe.LaserDrillEntry$LaserDrillEntryExtended`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.laser_drill.recipeBuilder()
    .output(item('minecraft:clay'))
    .lensMeta(5)
    .weight(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all ores with the given lens meta:

    ```groovy
    mods.industrialforegoing.laser_drill.removeByLens(int)
    ```

- Removes all ores with the given lens meta:

    ```groovy
    mods.industrialforegoing.laser_drill.removeByLens(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.laser_drill.removeByOutput(IIngredient)
    ```

- Removes all ores with the given biome blacklisted:

    ```groovy
    mods.industrialforegoing.laser_drill.removeByBlacklist(Biome)
    ```

- Removes all ores with the given biome whitelisted:

    ```groovy
    mods.industrialforegoing.laser_drill.removeByWhitelist(Biome)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.laser_drill.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.laser_drill.removeByLens(5)
mods.industrialforegoing.laser_drill.removeByLens(item('industrialforegoing:laser_lens:5'))
mods.industrialforegoing.laser_drill.removeByOutput(item('minecraft:coal_ore'))
mods.industrialforegoing.laser_drill.removeByBlacklist(biome('minecraft:sky'))
mods.industrialforegoing.laser_drill.removeByWhitelist(biome('minecraft:hell'))
mods.industrialforegoing.laser_drill.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.laser_drill.streamRecipes()
    ```
