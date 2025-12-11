---
title: "Altar Upgrades"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Controls the valid upgrades placed atop the Witches' Altar, a multiblock that gain Magic Power from nearby plants and logs based on their uniqueness. The upgrades modify the amount gained per second and the maximum Magic Power the Altar can hold."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/AltarUpgrades.java"
---

# Altar Upgrades (Bewitchment)

## Description

Controls the valid upgrades placed atop the Witches' Altar, a multiblock that gain Magic Power from nearby plants and logs based on their uniqueness. The upgrades modify the amount gained per second and the maximum Magic Power the Altar can hold.

:::::::::: details Note {open id="note"}
Magic Power is increased once a second, with the multipliers stacking on top of the base regeneration rate of 8.
::::::::::

:::::::::: details Note {open id="note"}
The Max Magic Power increase provided by wands is multiplied by 64.
::::::::::

## Identifier

The identifier `mods.bewitchment.altar_upgrade` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.bewitchment.altarupgrade
mods.bewitchment.altarUpgrade
mods.bewitchment.AltarUpgrade
mods.bewitchment.altar_upgrade/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Register a new Altar Upgrade in the form `state`, `upgrade`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.add(Predicate<BlockWorldState>, AltarUpgrade)
    ```

- Adds the given entry as a cup upgrade in the format `condition`, `gain`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addCup(IBlockState, int, double)
    ```

- Adds the given entry as a cup upgrade in the format `condition`, `gain`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addCup(IIngredient, int, double)
    ```

- Adds the given entry as a cup upgrade in the format `condition`, `gain`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addCup(Predicate<BlockWorldState>, int, double)
    ```

- Adds the given entry as a wand upgrade in the format `condition`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addWand(IBlockState, double)
    ```

- Adds the given entry as a wand upgrade in the format `condition`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addWand(IIngredient, double)
    ```

- Adds the given entry as a wand upgrade in the format `condition`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addWand(Predicate<BlockWorldState>, double)
    ```

- Adds the given entry as a sword upgrade in the format `condition`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addSword(IBlockState, double)
    ```

- Adds the given entry as a sword upgrade in the format `condition`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addSword(IIngredient, double)
    ```

- Adds the given entry as a sword upgrade in the format `condition`, `multiplier`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addSword(Predicate<BlockWorldState>, double)
    ```

- Adds the given entry as a pentacle upgrade in the format `condition`, `gain`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addPentacle(IBlockState, int)
    ```

- Adds the given entry as a pentacle upgrade in the format `condition`, `gain`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addPentacle(IIngredient, int)
    ```

- Adds the given entry as a pentacle upgrade in the format `condition`, `gain`:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.addPentacle(Predicate<BlockWorldState>, int)
    ```

### Recipe Builder

Just like other recipe types, the Altar Upgrades also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.recipeBuilder()
    ```

---

- `int`. Sets the gain value, which is used for cups and pentacles. Requires only if the type is cup or pentacle. (Default `0`).

    ```groovy:no-line-numbers
    gain(int)
    ```

- `AltarUpgrade.Type`. Sets the type of Altar Upgrade being created. Requires not null.

    ```groovy:no-line-numbers
    cup()
    wand()
    sword()
    pentacle()
    type(AltarUpgrade.Type)
    type(String)
    ```

- `Predicate<BlockWorldState>`. Sets the predicate used to check if the block/item matches. Requires not null.

    ```groovy:no-line-numbers
    predicate(IBlockState)
    predicate(IIngredient)
    predicate(Predicate<BlockWorldState>)
    ```

- `double`. Sets the multiplier value, which is used for cups, swords, and wands. Requires only if the type is cup, sword, or wand. (Default `0.0d`).

    ```groovy:no-line-numbers
    multiplier(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.AltarUpgrade`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.altar_upgrade.recipeBuilder()
    .cup()
    .predicate(blockstate('minecraft:clay'))
    .gain(-10)
    .multiplier(500)
    .register()

mods.bewitchment.altar_upgrade.recipeBuilder()
    .pentacle()
    .predicate(item('minecraft:gold_ingot'))
    .gain(1000)
    .register()

mods.bewitchment.altar_upgrade.recipeBuilder()
    .sword()
    .predicate(blockstate('minecraft:gold_block'))
    .multiplier(50)
    .register()

mods.bewitchment.altar_upgrade.recipeBuilder()
    .wand()
    .predicate(item('minecraft:iron_ingot'))
    .multiplier(0.5)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the given Altar Upgrade entry:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.remove(ItemStack)
    ```

- Removes the given Altar Upgrade entry:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.remove(IBlockState)
    ```

- Removes the given Altar Upgrade entry:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.remove(BlockWorldState)
    ```

- Removes all Altar Upgrades of the given type:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.removeByType(AltarUpgrade.Type)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.altar_upgrade.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.altar_upgrade.remove(item('bewitchment:garnet'))
mods.bewitchment.altar_upgrade.remove(blockstate('bewitchment:goblet'))
mods.bewitchment.altar_upgrade.removeByType(com.bewitchment.api.registry.AltarUpgrade.Type.WAND)
mods.bewitchment.altar_upgrade.removeAll()
```

::::::::::
