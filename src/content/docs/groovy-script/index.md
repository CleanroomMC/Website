---
title: GroovyScript
description: GroovyScript is a comprehensive scripting sandbox for Minecraft 1.12.2 via the Groovy language.
next:
  label: Getting Started
  link: /groovy-script/getting_started/
---

:::caution[Work In Progress]

This Wiki is WIP.
Not all information is on it or located properly.
We would appreciate any help to improve the wiki.

*Thank you for using GroovyScript!*

:::

## Welcome

A comprehensive scripting sandbox for Minecraft 1.12.2.

Are you not seeing what other see on this wiki? Try reloading it.

## Download

GroovyScript can be downloaded on
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/groovyscript)
- [Modrinth](https://modrinth.com/mod/groovyscript)
- [GitHub](https://github.com/CleanroomMC/GroovyScript/releases)

## Features

1. Groovy: a powerful and tested scripting language
    - Java-compatible syntax + interoperable code
    - Static compilation
    - Optional dynamic typing
    - Metaprogramming
2. Sandboxed: scripts are effectively ran in a sandbox, with sensitive operations blacklisted from being called or referenced
3. Reloading: able to test script changes within the game without restarting
    - Most if not all Forge Registry objects can be reloaded on the fly
    - Most mod registries are supported natively
4. Events: Easily listen to Forge's EventBuses with Groovy Closures
5. Informational: commands to display rich information for the item in your hand and more
6. Optimized: Making sure no compromises are being made while delivering features with efficient code
7. API: Great catalogue of code for other mod authors to make their mods compatible with GroovyScript such as package/class/method/field blacklists

## Wiki

- Get started with [Getting Started](/groovy-script/getting_started/)
- Read about the basics of the [Groovy](/groovy-script/groovy/) coding language.
- Learn how to interact with [Vanilla Registries](/groovy-script/minecraft/).
- Create your own custom items, blocks, and fluids via the [Content](/groovy-script/minecraft/helpers/content/) compat.
- Read the documentation for over 25 [Mods](/groovy-script/mods/)
- Create your own [External Compat](/groovy-script/getting_started/external_compat/) for GroovyScript!
