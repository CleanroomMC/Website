---
order: 850
title: Keybindings
description: This pages describes the various keybindings that GroovyScript adds to the game.
---


# Keybindings


GroovyScript adds a few keybindings to the game for various purposes -
mainly to make developing easier.

Keybindings will default to being unbound if [debug is disabled in the `runConfig.json`](../getting_started/run_config.md#debug).
This is to avoid adding conflicting keybindings for players who will never use them.
<br>
The keybinds on this page only represent the default if debug is enabled.


## Reload


When `CTRL+R` is pressed, all GroovyScripts that can be reloaded will be reloaded -
see [reloading](../getting_started/reloading.md) for more information!

There is also a "Quick Reload" keybind that is unbound by default that will
only reload scripts, skipping reloading JEI.


## Copying


When `CTRL+C` is pressed, information will be added to the chat and the target ItemStack (if present)
will be copied to the clipboard.
<br>
The information printed will allow recreating the relevant objects via GroovyScript Object Mappers.
<br>
This uses the same logic as the [info](./commands/info.md) command,
and prints various information based on what is being focused in this order:
1. the focused ingredient in JEI
2. the targeted ItemStack in a GUI
3. the held ItemStack
4. the focused block in world
5. the player information
