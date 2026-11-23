---
title: Mob Config (Woot)
description: Control the default values or mob-specific values for a large number of effects, a full list can be found at `ipsis.woot.configuration.EnumConfigKey`. A full list can be viewed on [Github](https://github.com/Ipsis/Woot/blob/55e88f5a15d66cc987e676d665d20f4afbe008b8/src/main/java/ipsis/woot/configuration/EnumConfigKey.java#L14).
sidebar:
  label: Mob Config
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/MobConfig.java
---

## Description

Control the default values or mob-specific values for a large number of effects, a full list can be found at `ipsis.woot.configuration.EnumConfigKey`. A full list can be viewed on [Github](https://github.com/Ipsis/Woot/blob/55e88f5a15d66cc987e676d665d20f4afbe008b8/src/main/java/ipsis/woot/configuration/EnumConfigKey.java#L14).

## Identifier

The identifier `mods.woot.mob_config` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.woot.mobconfig
mods.woot.mobConfig
mods.woot.MobConfig
mods.woot.mob_config/* Used as page default */
```

</details>

## Adding Recipes

- Adds configuration to the default map:

    ```groovy
    mods.woot.mob_config.add(String, int)
    ```

- Adds configuration to the default map:

    ```groovy
    mods.woot.mob_config.add(EnumConfigKey, int)
    ```

- Adds configuration to the given entity:

    ```groovy
    mods.woot.mob_config.add(String, String, int)
    ```

- Adds configuration to the given entity:

    ```groovy
    mods.woot.mob_config.add(WootMobName, String, int)
    ```

- Adds configuration to the given entity:

    ```groovy
    mods.woot.mob_config.add(String, EnumConfigKey, int)
    ```

- Adds configuration to the given entity:

    ```groovy
    mods.woot.mob_config.add(WootMobName, EnumConfigKey, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.mob_config.add('spawn_ticks', 100)
mods.woot.mob_config.add('minecraft:zombie', 'spawn_ticks', 1)
```

</details>

## Removing Recipes

- Removes all configuration for the given entity:

    ```groovy
    mods.woot.mob_config.remove(String)
    ```

- Removes all configuration for the given entity:

    ```groovy
    mods.woot.mob_config.remove(WootMobName)
    ```

- Removes configuration from the given entity for the given config:

    ```groovy
    mods.woot.mob_config.remove(String, String)
    ```

- Removes configuration from the given entity for the given config:

    ```groovy
    mods.woot.mob_config.remove(WootMobName, String)
    ```

- Removes configuration from the given entity for the given config:

    ```groovy
    mods.woot.mob_config.remove(String, EnumConfigKey)
    ```

- Removes configuration from the given entity for the given config:

    ```groovy
    mods.woot.mob_config.remove(WootMobName, EnumConfigKey)
    ```

- Removes all registered recipes:

    ```groovy
    mods.woot.mob_config.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.mob_config.remove('minecraft:wither')
mods.woot.mob_config.remove('minecraft:wither_skeleton', 'spawn_units')
mods.woot.mob_config.removeAll()
```

</details>
