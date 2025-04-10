---
title: "Custom Commands"
titleTemplate: "Minecraft | CleanroomMC"
description: "Create custom commands, either generally or specifically for the client."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Command.java"
---

# Custom Commands (Minecraft)

## Description

Create custom commands, either generally or specifically for the client.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
command/* Used as page default */ // [!code focus]
Command
minecraft.command
minecraft.Command
Minecraft.command
Minecraft.Command
vanilla.command
vanilla.Command
Vanilla.command
Vanilla.Command
mods.mc.command
mods.mc.Command
mods.vanilla.command
mods.vanilla.Command
mods.minecraft.command
mods.minecraft.Command
```


## Adding Entries

- Registers the given command to the client:

    ```groovy:no-line-numbers
    command.registerClientCommand(ICommand)
    ```

- Registers the given command to the client in the format `name`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    command.registerClientCommand(String, SimpleCommand.ICommand)
    ```

- Registers the given command to the client in the format `name`, `usage`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    command.registerClientCommand(String, String, SimpleCommand.ICommand)
    ```

- Registers the given command to the given command handler, in the format `handler`, `command`:

    ```groovy:no-line-numbers
    command.registerCommand(CommandHandler, ICommand)
    ```

- Registers the given command:

    ```groovy:no-line-numbers
    command.registerCommand(ICommand)
    ```

- Registers the given command in the format `name`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    command.registerCommand(String, SimpleCommand.ICommand)
    ```

- Registers the given command in the format `name`, `usage`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    command.registerCommand(String, String, SimpleCommand.ICommand)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
command.registerCommand('groovy_test', { server, sender, args -> sender.sendMessage('Hello from GroovyScript')})
```

::::::::::
