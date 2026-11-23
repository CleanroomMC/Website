---
title: Brew Effect (Botania)
description: Creates a custom brew, but not a recipe for the brew.
sidebar:
  label: Brew Effect
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Brew.java
---

## Description

Creates a custom brew, but not a recipe for the brew.

## Identifier

The identifier `mods.botania.brew` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.botania.brew/* Used as page default */
mods.botania.Brew
```

</details>

## Adding Entries

### Recipe Builder

Just like other recipe types, the Brew Effect also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Brew Builder</summary>

---

- Create a builder to create custom brews.

    ```groovy
    mods.botania.brew.brewBuilder()
    ```

---

- `String`. Sets a unique key for the effect. Requires not null.

    ```groovy
    key(String)
    ```

- `String`. Sets the name of the effect.

    ```groovy
    name(String)
    ```

- `int`. Sets the base mana cost to make the brew. The Tainted Blood Pendant and Incense Stick recipes will cost 10 times as much mana. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    cost(int)
    mana(int)
    ```

- `int`. Sets the color of effect. Requires not null. (Default `0xFFFFFF`).

    ```groovy
    color(int)
    ```

- `List<PotionEffect>`. Sets the potion effects, quantity, and duration of each when consuming the potion. Requires greater than or equal to 1.

    ```groovy
    effect(PotionEffect)
    effect(PotionEffect...)
    effect(Collection<PotionEffect>)
    ```

- `boolean`. Sets if the brew can be infused on a Incense Stick, making it apply the effect persistently in a long-lasting AOE. (Default `true`).

    ```groovy
    incense()
    incense(boolean)
    ```

- `boolean`. Sets if the custom brew can be infused on a Tainted Blood Pendant, making it a persistent effect at the cost of mana. (Default `true`).

    ```groovy
    bloodPendant()
    bloodPendant(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.brew.Brew`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.brew.brewBuilder()
    .key('groovy_example_brew')
    .name('Groovy Brew')
    .color(0x00FFFF)
    .cost(100)
    .effect(new PotionEffect(potion('minecraft:strength'), 1800, 3), new PotionEffect(potion('minecraft:speed'), 1800, 2), new PotionEffect(potion('minecraft:weakness'), 3600, 1))
    .incense(true)
    .bloodPendant(true)
    .register()
```

</details>

</details>

## Removing Entries

- Removes the given brew matching the brew key:

    ```groovy
    mods.botania.brew.remove(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.brew.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.brew.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every brew in the brew registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.brew.streamBrews()
    ```
