---
title: Custom Commands (Minecraft)
description: Create custom commands, either generally or specifically for the client.
sidebar:
  label: Custom Commands
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Command.java
---

## Description

Create custom commands, either generally or specifically for the client.

## Identifier

The identifier `minecraft.command` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {9}
mc.command
mc.Command
MC.command
MC.Command
vanilla.command
vanilla.Command
Vanilla.command
Vanilla.Command
minecraft.command/* Used as page default */
minecraft.Command
Minecraft.command
Minecraft.Command
mods.mc.command
mods.mc.Command
mods.MC.command
mods.MC.Command
mods.vanilla.command
mods.vanilla.Command
mods.Vanilla.command
mods.Vanilla.Command
mods.minecraft.command
mods.minecraft.Command
mods.Minecraft.command
mods.Minecraft.Command
```

</details>

## Adding Entries

- Registers the given command:

    ```groovy
    minecraft.command.registerCommand(ICommand)
    ```

- Registers the given command to the given command handler, in the format `handler`, `command`:

    ```groovy
    minecraft.command.registerCommand(CommandHandler, ICommand)
    ```

- Registers the given command in the format `name`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy
    minecraft.command.registerCommand(String, SimpleCommand.ICommand)
    ```

- Registers the given command in the format `name`, `usage`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy
    minecraft.command.registerCommand(String, String, SimpleCommand.ICommand)
    ```

- Registers the given command to the client:

    ```groovy
    minecraft.command.registerClientCommand(ICommand)
    ```

- Registers the given command to the client in the format `name`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy
    minecraft.command.registerClientCommand(String, SimpleCommand.ICommand)
    ```

- Registers the given command to the client in the format `name`, `usage`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy
    minecraft.command.registerClientCommand(String, String, SimpleCommand.ICommand)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
minecraft.command.registerCommand('groovy_test', { server, sender, args -> sender.sendMessage('Hello from GroovyScript')})
```

</details>
