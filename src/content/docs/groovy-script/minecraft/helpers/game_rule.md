---
title: Default GameRules (Minecraft)
description: Create or assign a default value to GameRules.
sidebar:
  label: Default GameRules
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/GameRule.java
---

## Description

Create or assign a default value to GameRules.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

GameRules are case-sensitive! Enable logging of new GameRules via `setWarnNewGameRule` to ensure you are modifying an existing GameRule and not creating a new and unused one!

</details>

## Identifier

The identifier `minecraft.game_rule` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {23}
mc.gamerule
mc.gameRule
mc.GameRule
MC.gamerule
MC.gameRule
MC.GameRule
mc.game_rule
MC.game_rule
vanilla.gamerule
vanilla.gameRule
vanilla.GameRule
Vanilla.gamerule
Vanilla.gameRule
Vanilla.GameRule
vanilla.game_rule
Vanilla.game_rule
minecraft.gamerule
minecraft.gameRule
minecraft.GameRule
Minecraft.gamerule
Minecraft.gameRule
Minecraft.GameRule
minecraft.game_rule/* Used as page default */
Minecraft.game_rule
mods.mc.gamerule
mods.mc.gameRule
mods.mc.GameRule
mods.MC.gamerule
mods.MC.gameRule
mods.MC.GameRule
mods.mc.game_rule
mods.MC.game_rule
mods.vanilla.gamerule
mods.vanilla.gameRule
mods.vanilla.GameRule
mods.Vanilla.gamerule
mods.Vanilla.gameRule
mods.Vanilla.GameRule
mods.vanilla.game_rule
mods.Vanilla.game_rule
mods.minecraft.gamerule
mods.minecraft.gameRule
mods.minecraft.GameRule
mods.Minecraft.gamerule
mods.Minecraft.gameRule
mods.Minecraft.GameRule
mods.minecraft.game_rule
mods.Minecraft.game_rule
```

</details>

## Editing Values

- Sets if creating new GameRules logs a warning. Enable it if you need to check spelling/capitalization. Disabled by default:

    ```groovy
    minecraft.game_rule.setWarnNewGameRule(boolean)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
minecraft.game_rule.setWarnNewGameRule(true)
```

</details>

## Adding Entries

- Adds a new entry in the format `name`, `value`, with `value` being a String that can represent a number (`-1`, `5`) or boolean (`true`, `false`):

    ```groovy
    minecraft.game_rule.add(String, String)
    ```

- Adds a map of GameRule name to values:

    ```groovy
    minecraft.game_rule.add(Map<String, String>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
minecraft.game_rule.add('doDaylightCycle', 'false')
minecraft.game_rule.add(['mobGriefing': 'false', 'keepInventory': 'true'])
```

</details>
