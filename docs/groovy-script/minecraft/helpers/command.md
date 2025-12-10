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

The identifier `minecraft.command` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {9}
mc.command
mc.Command
MC.command
MC.Command
vanilla.command
vanilla.Command
Vanilla.command
Vanilla.Command
minecraft.command/* Used as page default */ // [!code focus]
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

::::::::::

## Adding Entries

- Registers the given command:

    ```groovy:no-line-numbers
    minecraft.command.registerCommand(ICommand)
    ```

- Registers the given command to the given command handler, in the format `handler`, `command`:

    ```groovy:no-line-numbers
    minecraft.command.registerCommand(CommandHandler, ICommand)
    ```

- Registers the given command in the format `name`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    minecraft.command.registerCommand(String, SimpleCommand.ICommand)
    ```

- Registers the given command in the format `name`, `usage`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    minecraft.command.registerCommand(String, String, SimpleCommand.ICommand)
    ```

- Registers the given command to the client:

    ```groovy:no-line-numbers
    minecraft.command.registerClientCommand(ICommand)
    ```

- Registers the given command to the client in the format `name`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    minecraft.command.registerClientCommand(String, SimpleCommand.ICommand)
    ```

- Registers the given command to the client in the format `name`, `usage`, `command`, with `command` being a Closure taking 3 parameters, `MinecraftServer server`, `ICommandSender sender`, and `String... args`:

    ```groovy:no-line-numbers
    minecraft.command.registerClientCommand(String, String, SimpleCommand.ICommand)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
minecraft.command.registerCommand('groovy_test', { server, sender, args -> sender.sendMessage('Hello from GroovyScript')})
```

::::::::::
