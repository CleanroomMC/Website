---
title: Still Catalyst (Soot)
description: Tweak the values of various Catalysts used in the Still. If a catalyst is not defined, it will have a default value of 1000.
sidebar:
  label: Still Catalyst
source_code_link: https://github.com/Ender-Development/Soot-Extended-Life/blob/master/src/main/java/soot/compat/groovyscript/StillCatalyst.java
---

## Description

Tweak the values of various Catalysts used in the Still. If a catalyst is not defined, it will have a default value of 1000.

## Identifier

The identifier `mods.soot.still_catalyst` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.soot.stillcatalyst
mods.soot.stillCatalyst
mods.soot.StillCatalyst
mods.soot.still_catalyst/* Used as page default */
```

</details>

## Editing Values

- Return the amount of value that is removed from the catalyst:

    ```groovy
    mods.soot.still_catalyst.getAmount(IIngredient)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.still_catalyst.getAmount(item('minecraft:snowball'))
```

</details>

## Adding Recipes

- Adds a new catalyst with the specified amount:

    ```groovy
    mods.soot.still_catalyst.addCatalyst(IIngredient, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.still_catalyst.addCatalyst(item('minecraft:iron_ingot'), 600)
mods.soot.still_catalyst.addCatalyst(item('minecraft:glass'), 50)
```

</details>

## Removing Recipes

- Removes the specified value from the catalyst. Recipes with this Catalyst won't be removed. Instead the Catalyst will have the default value of 1000:

    ```groovy
    mods.soot.still_catalyst.removeCatalyst(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.soot.still_catalyst.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.soot.still_catalyst.removeCatalyst(ore('logWood'))
mods.soot.still_catalyst.removeAll()
```

</details>

## Getting the value of recipes

- Returns a stream of all specified Catalysts:

    ```groovy
    mods.soot.still_catalyst.streamCatalysts()
    ```
