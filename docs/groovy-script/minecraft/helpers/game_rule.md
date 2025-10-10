---
title: "Default GameRules"
titleTemplate: "Minecraft | CleanroomMC"
description: "Create or assign a default value to GameRules."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/GameRule.java"
---

# Default GameRules (Minecraft)

## Description

Create or assign a default value to GameRules.

:::::::::: details Warning {open id="warning"}
GameRules are case-sensitive! Enable logging of new GameRules via `setWarnNewGameRule` to ensure you are modifying an existing GameRule and not creating a new and unused one!
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {2}
minecraft.gamerule
minecraft.game_rule/* Used as page default */ // [!code focus]
minecraft.gameRule
minecraft.GameRule
Minecraft.gamerule
Minecraft.game_rule
Minecraft.gameRule
Minecraft.GameRule
vanilla.gamerule
vanilla.game_rule
vanilla.gameRule
vanilla.GameRule
Vanilla.gamerule
Vanilla.game_rule
Vanilla.gameRule
Vanilla.GameRule
mods.mc.gamerule
mods.mc.game_rule
mods.mc.gameRule
mods.mc.GameRule
mods.vanilla.gamerule
mods.vanilla.game_rule
mods.vanilla.gameRule
mods.vanilla.GameRule
mods.minecraft.gamerule
mods.minecraft.game_rule
mods.minecraft.gameRule
mods.minecraft.GameRule
```


## Editing Values

- Sets if creating new GameRules logs a warning. Enable it if you need to check spelling/capitalization. Disabled by default:

    ```groovy:no-line-numbers
    minecraft.game_rule.setWarnNewGameRule(boolean)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
minecraft.game_rule.setWarnNewGameRule(true)
```

::::::::::

## Adding Entries

- Adds a map of GameRule name to values:

    ```groovy:no-line-numbers
    minecraft.game_rule.add(Map<String, String>)
    ```

- Adds a new entry in the format `name`, `value`, with `value` being a String that can represent a number (`-1`, `5`) or boolean (`true`, `false`):

    ```groovy:no-line-numbers
    minecraft.game_rule.add(String, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
minecraft.game_rule.add(['mobGriefing': 'false', 'keepInventory': 'true'])
minecraft.game_rule.add('doDaylightCycle', 'false')
```

::::::::::
