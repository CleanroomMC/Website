---
title: Policy (Woot)
description: Controls what entities can be farmed for what items via an entity blacklist, mod blacklist, item output blacklist, item output mod blacklist, and a mob whitelist.
sidebar:
  label: Policy
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/Policy.java
---

## Description

Controls what entities can be farmed for what items via an entity blacklist, mod blacklist, item output blacklist, item output mod blacklist, and a mob whitelist.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

If the whitelist contains any entities, any entities not in the whitelist are banned (rendering EntityModBlacklist and EntityBlacklist superfluous). GenerateOnlyList contains all entities which cannot be captured via shard, meaning the controller would need to be obtained a different way.

</details>

## Identifier

The identifier `mods.woot.policy` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.woot.policy/* Used as page default */
mods.woot.Policy
```

</details>

## Adding Recipes

- Prevents the given item from being dropped by any entity:

    ```groovy
    mods.woot.policy.addToItemBlacklist(ItemStack)
    ```

- Prevents the given entity from being captured and spawned:

    ```groovy
    mods.woot.policy.addToEntityBlacklist(String)
    ```

- Prevents the given entity from being captured and spawned:

    ```groovy
    mods.woot.policy.addToEntityBlacklist(WootMobName)
    ```

- Prevents all entities not on the list from being spawned, overriding EntityBlacklist and EntityModBlacklist:

    ```groovy
    mods.woot.policy.addToEntityWhitelist(String)
    ```

- Prevents all entities not on the list from being spawned, overriding EntityBlacklist and EntityModBlacklist:

    ```groovy
    mods.woot.policy.addToEntityWhitelist(WootMobName)
    ```

- Prevents entities from being captured via shard, but doesn't prevent spawning:

    ```groovy
    mods.woot.policy.addToGenerateOnlyList(String)
    ```

- Prevents entities from being captured via shard, but doesn't prevent spawning:

    ```groovy
    mods.woot.policy.addToGenerateOnlyList(WootMobName)
    ```

- Prevents items from the given mod from being dropped by any entity:

    ```groovy
    mods.woot.policy.addToItemModBlacklist(String)
    ```

- Prevents entities from the given mod from being captured and spawned:

    ```groovy
    mods.woot.policy.addToEntityModBlacklist(String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.policy.addToItemBlacklist(item('minecraft:gunpowder'))
mods.woot.policy.addToEntityBlacklist('minecraft:witch')
mods.woot.policy.addToEntityWhitelist('minecraft:zombie')
mods.woot.policy.addToGenerateOnlyList('minecraft:skeleton')
mods.woot.policy.addToItemModBlacklist('woot')
mods.woot.policy.addToEntityModBlacklist('minecraft')
```

</details>

## Removing Recipes

- Removes the given item from the ItemBlacklist:

    ```groovy
    mods.woot.policy.removeFromItemBlacklist(ItemStack)
    ```

- Removes the given entity from the EntityBlacklist:

    ```groovy
    mods.woot.policy.removeFromEntityBlacklist(String)
    ```

- Removes the given entity from the EntityBlacklist:

    ```groovy
    mods.woot.policy.removeFromEntityBlacklist(WootMobName)
    ```

- Removes given entity from the EntityWhitelist:

    ```groovy
    mods.woot.policy.removeFromEntityWhitelist(String)
    ```

- Removes given entity from the EntityWhitelist:

    ```groovy
    mods.woot.policy.removeFromEntityWhitelist(WootMobName)
    ```

- Removes the given entity from the GenerateOnlyList:

    ```groovy
    mods.woot.policy.removeFromGenerateOnlyList(String)
    ```

- Removes the given entity from the GenerateOnlyList:

    ```groovy
    mods.woot.policy.removeFromGenerateOnlyList(WootMobName)
    ```

- Removes the given mod from the ItemModBlacklist:

    ```groovy
    mods.woot.policy.removeFromItemModBlacklist(String)
    ```

- Removes the given mod from the EntityModBlacklist:

    ```groovy
    mods.woot.policy.removeFromEntityModBlacklist(String)
    ```

- Removes all items from the ItemBlacklist:

    ```groovy
    mods.woot.policy.removeAllFromItemBlacklist()
    ```

- Removes all entities from the EntityBlacklist:

    ```groovy
    mods.woot.policy.removeAllFromEntityBlacklist()
    ```

- Removes all entities from the EntityWhitelist:

    ```groovy
    mods.woot.policy.removeAllFromEntityWhitelist()
    ```

- Removes all entities from the GenerateOnlyList:

    ```groovy
    mods.woot.policy.removeAllFromGenerateOnlyList()
    ```

- Removes all mods from the ItemModBlacklist:

    ```groovy
    mods.woot.policy.removeAllFromItemModBlacklist()
    ```

- Removes all mods from the EntityModBlacklist:

    ```groovy
    mods.woot.policy.removeAllFromEntityModBlacklist()
    ```

- Removes all registered recipes:

    ```groovy
    mods.woot.policy.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.policy.removeFromItemBlacklist(item('minecraft:sugar'))
mods.woot.policy.removeFromEntityBlacklist('twilightforest:naga')
mods.woot.policy.removeFromEntityWhitelist('minecraft:wither_skeleton')
mods.woot.policy.removeFromGenerateOnlyList('minecraft:wither_skeleton')
mods.woot.policy.removeFromItemModBlacklist('minecraft')
mods.woot.policy.removeFromEntityModBlacklist('botania')
mods.woot.policy.removeAllFromItemBlacklist()
mods.woot.policy.removeAllFromEntityBlacklist()
mods.woot.policy.removeAllFromEntityWhitelist()
mods.woot.policy.removeAllFromGenerateOnlyList()
mods.woot.policy.removeAllFromItemModBlacklist()
mods.woot.policy.removeAllFromEntityModBlacklist()
mods.woot.policy.removeAll()
```

</details>
