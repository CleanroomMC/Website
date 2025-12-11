---
title: "Piston Pushing Conversion"
titleTemplate: "In-World Crafting | CleanroomMC"
description: "Converts an input item into an output item when a piston pushes the item into a block, with an optional minimum harvest level requirement for the block. Amount converted in each entity item per push is configurable."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/inworldcrafting/PistonPush.java"
---

# Piston Pushing Conversion (In-World Crafting)

## Description

Converts an input item into an output item when a piston pushes the item into a block, with an optional minimum harvest level requirement for the block. Amount converted in each entity item per push is configurable.

## Identifier

The identifier `in_world_crafting.piston_push` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {16}
inworldcrafting.pistonpush
inworldcrafting.pistonPush
inworldcrafting.PistonPush
inWorldCrafting.pistonpush
inWorldCrafting.pistonPush
inWorldCrafting.PistonPush
InWorldCrafting.pistonpush
InWorldCrafting.pistonPush
InWorldCrafting.PistonPush
inworldcrafting.piston_push
inWorldCrafting.piston_push
InWorldCrafting.piston_push
in_world_crafting.pistonpush
in_world_crafting.pistonPush
in_world_crafting.PistonPush
in_world_crafting.piston_push/* Used as page default */ // [!code focus]
mc.inworldcrafting.pistonpush
mc.inworldcrafting.pistonPush
mc.inworldcrafting.PistonPush
MC.inworldcrafting.pistonpush
MC.inworldcrafting.pistonPush
MC.inworldcrafting.PistonPush
mc.inWorldCrafting.pistonpush
mc.inWorldCrafting.pistonPush
mc.inWorldCrafting.PistonPush
MC.inWorldCrafting.pistonpush
MC.inWorldCrafting.pistonPush
MC.inWorldCrafting.PistonPush
mc.InWorldCrafting.pistonpush
mc.InWorldCrafting.pistonPush
mc.InWorldCrafting.PistonPush
MC.InWorldCrafting.pistonpush
MC.InWorldCrafting.pistonPush
MC.InWorldCrafting.PistonPush
mc.inworldcrafting.piston_push
MC.inworldcrafting.piston_push
mc.inWorldCrafting.piston_push
MC.inWorldCrafting.piston_push
mc.InWorldCrafting.piston_push
MC.InWorldCrafting.piston_push
mc.in_world_crafting.pistonpush
mc.in_world_crafting.pistonPush
mc.in_world_crafting.PistonPush
MC.in_world_crafting.pistonpush
MC.in_world_crafting.pistonPush
MC.in_world_crafting.PistonPush
mc.in_world_crafting.piston_push
MC.in_world_crafting.piston_push
vanilla.inworldcrafting.pistonpush
vanilla.inworldcrafting.pistonPush
vanilla.inworldcrafting.PistonPush
Vanilla.inworldcrafting.pistonpush
Vanilla.inworldcrafting.pistonPush
Vanilla.inworldcrafting.PistonPush
vanilla.inWorldCrafting.pistonpush
vanilla.inWorldCrafting.pistonPush
vanilla.inWorldCrafting.PistonPush
Vanilla.inWorldCrafting.pistonpush
Vanilla.inWorldCrafting.pistonPush
Vanilla.inWorldCrafting.PistonPush
vanilla.InWorldCrafting.pistonpush
vanilla.InWorldCrafting.pistonPush
vanilla.InWorldCrafting.PistonPush
Vanilla.InWorldCrafting.pistonpush
Vanilla.InWorldCrafting.pistonPush
Vanilla.InWorldCrafting.PistonPush
vanilla.inworldcrafting.piston_push
Vanilla.inworldcrafting.piston_push
vanilla.inWorldCrafting.piston_push
Vanilla.inWorldCrafting.piston_push
vanilla.InWorldCrafting.piston_push
Vanilla.InWorldCrafting.piston_push
vanilla.in_world_crafting.pistonpush
vanilla.in_world_crafting.pistonPush
vanilla.in_world_crafting.PistonPush
Vanilla.in_world_crafting.pistonpush
Vanilla.in_world_crafting.pistonPush
Vanilla.in_world_crafting.PistonPush
vanilla.in_world_crafting.piston_push
Vanilla.in_world_crafting.piston_push
minecraft.inworldcrafting.pistonpush
minecraft.inworldcrafting.pistonPush
minecraft.inworldcrafting.PistonPush
Minecraft.inworldcrafting.pistonpush
Minecraft.inworldcrafting.pistonPush
Minecraft.inworldcrafting.PistonPush
minecraft.inWorldCrafting.pistonpush
minecraft.inWorldCrafting.pistonPush
minecraft.inWorldCrafting.PistonPush
Minecraft.inWorldCrafting.pistonpush
Minecraft.inWorldCrafting.pistonPush
Minecraft.inWorldCrafting.PistonPush
minecraft.InWorldCrafting.pistonpush
minecraft.InWorldCrafting.pistonPush
minecraft.InWorldCrafting.PistonPush
Minecraft.InWorldCrafting.pistonpush
Minecraft.InWorldCrafting.pistonPush
Minecraft.InWorldCrafting.PistonPush
minecraft.inworldcrafting.piston_push
Minecraft.inworldcrafting.piston_push
minecraft.inWorldCrafting.piston_push
Minecraft.inWorldCrafting.piston_push
minecraft.InWorldCrafting.piston_push
Minecraft.InWorldCrafting.piston_push
minecraft.in_world_crafting.pistonpush
minecraft.in_world_crafting.pistonPush
minecraft.in_world_crafting.PistonPush
Minecraft.in_world_crafting.pistonpush
Minecraft.in_world_crafting.pistonPush
Minecraft.in_world_crafting.PistonPush
minecraft.in_world_crafting.piston_push
Minecraft.in_world_crafting.piston_push
mods.mc.inworldcrafting.pistonpush
mods.mc.inworldcrafting.pistonPush
mods.mc.inworldcrafting.PistonPush
mods.MC.inworldcrafting.pistonpush
mods.MC.inworldcrafting.pistonPush
mods.MC.inworldcrafting.PistonPush
mods.mc.inWorldCrafting.pistonpush
mods.mc.inWorldCrafting.pistonPush
mods.mc.inWorldCrafting.PistonPush
mods.MC.inWorldCrafting.pistonpush
mods.MC.inWorldCrafting.pistonPush
mods.MC.inWorldCrafting.PistonPush
mods.mc.InWorldCrafting.pistonpush
mods.mc.InWorldCrafting.pistonPush
mods.mc.InWorldCrafting.PistonPush
mods.MC.InWorldCrafting.pistonpush
mods.MC.InWorldCrafting.pistonPush
mods.MC.InWorldCrafting.PistonPush
mods.mc.inworldcrafting.piston_push
mods.MC.inworldcrafting.piston_push
mods.mc.inWorldCrafting.piston_push
mods.MC.inWorldCrafting.piston_push
mods.mc.InWorldCrafting.piston_push
mods.MC.InWorldCrafting.piston_push
mods.mc.in_world_crafting.pistonpush
mods.mc.in_world_crafting.pistonPush
mods.mc.in_world_crafting.PistonPush
mods.MC.in_world_crafting.pistonpush
mods.MC.in_world_crafting.pistonPush
mods.MC.in_world_crafting.PistonPush
mods.mc.in_world_crafting.piston_push
mods.MC.in_world_crafting.piston_push
mods.vanilla.inworldcrafting.pistonpush
mods.vanilla.inworldcrafting.pistonPush
mods.vanilla.inworldcrafting.PistonPush
mods.Vanilla.inworldcrafting.pistonpush
mods.Vanilla.inworldcrafting.pistonPush
mods.Vanilla.inworldcrafting.PistonPush
mods.vanilla.inWorldCrafting.pistonpush
mods.vanilla.inWorldCrafting.pistonPush
mods.vanilla.inWorldCrafting.PistonPush
mods.Vanilla.inWorldCrafting.pistonpush
mods.Vanilla.inWorldCrafting.pistonPush
mods.Vanilla.inWorldCrafting.PistonPush
mods.vanilla.InWorldCrafting.pistonpush
mods.vanilla.InWorldCrafting.pistonPush
mods.vanilla.InWorldCrafting.PistonPush
mods.Vanilla.InWorldCrafting.pistonpush
mods.Vanilla.InWorldCrafting.pistonPush
mods.Vanilla.InWorldCrafting.PistonPush
mods.vanilla.inworldcrafting.piston_push
mods.Vanilla.inworldcrafting.piston_push
mods.vanilla.inWorldCrafting.piston_push
mods.Vanilla.inWorldCrafting.piston_push
mods.vanilla.InWorldCrafting.piston_push
mods.Vanilla.InWorldCrafting.piston_push
mods.vanilla.in_world_crafting.pistonpush
mods.vanilla.in_world_crafting.pistonPush
mods.vanilla.in_world_crafting.PistonPush
mods.Vanilla.in_world_crafting.pistonpush
mods.Vanilla.in_world_crafting.pistonPush
mods.Vanilla.in_world_crafting.PistonPush
mods.vanilla.in_world_crafting.piston_push
mods.Vanilla.in_world_crafting.piston_push
mods.minecraft.inworldcrafting.pistonpush
mods.minecraft.inworldcrafting.pistonPush
mods.minecraft.inworldcrafting.PistonPush
mods.Minecraft.inworldcrafting.pistonpush
mods.Minecraft.inworldcrafting.pistonPush
mods.Minecraft.inworldcrafting.PistonPush
mods.minecraft.inWorldCrafting.pistonpush
mods.minecraft.inWorldCrafting.pistonPush
mods.minecraft.inWorldCrafting.PistonPush
mods.Minecraft.inWorldCrafting.pistonpush
mods.Minecraft.inWorldCrafting.pistonPush
mods.Minecraft.inWorldCrafting.PistonPush
mods.minecraft.InWorldCrafting.pistonpush
mods.minecraft.InWorldCrafting.pistonPush
mods.minecraft.InWorldCrafting.PistonPush
mods.Minecraft.InWorldCrafting.pistonpush
mods.Minecraft.InWorldCrafting.pistonPush
mods.Minecraft.InWorldCrafting.PistonPush
mods.minecraft.inworldcrafting.piston_push
mods.Minecraft.inworldcrafting.piston_push
mods.minecraft.inWorldCrafting.piston_push
mods.Minecraft.inWorldCrafting.piston_push
mods.minecraft.InWorldCrafting.piston_push
mods.Minecraft.InWorldCrafting.piston_push
mods.minecraft.in_world_crafting.pistonpush
mods.minecraft.in_world_crafting.pistonPush
mods.minecraft.in_world_crafting.PistonPush
mods.Minecraft.in_world_crafting.pistonpush
mods.Minecraft.in_world_crafting.pistonPush
mods.Minecraft.in_world_crafting.PistonPush
mods.minecraft.in_world_crafting.piston_push
mods.Minecraft.in_world_crafting.piston_push
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.piston_push.add(PistonPush.PistonPushRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Piston Pushing Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    in_world_crafting.piston_push.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `Closure<Boolean>`. Sets an additional check that must be passed before the recipe runs, with the Closure taking 3 parameters, `EntityItem entityItem`, `ItemStack itemStack`, and `IBlockState pushingAgainst`.

    ```groovy:no-line-numbers
    startCondition(Closure<Boolean>)
    ```

- `int`. Sets the minimum harvest level required of the block being pushed against. (Default `-1`).

    ```groovy:no-line-numbers
    minHarvestLevel(int)
    ```

- `int`. Sets the maximum number of items converted from an itemstack in one press. Requires greater than 0 and less than or equal to 64. (Default `64`).

    ```groovy:no-line-numbers
    maxConversionsPerPush(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.inworldcrafting.PistonPush$PistonPushRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.piston_push.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .minHarvestLevel(2)
    .maxConversionsPerPush(3)
    .register()

in_world_crafting.piston_push.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

in_world_crafting.piston_push.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .startCondition({entityItem, itemStack, pushingAgainst -> pushingAgainst.getBlock() == block('minecraft:clay') })
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.piston_push.remove(PistonPush.PistonPushRecipe)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    in_world_crafting.piston_push.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.piston_push.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    in_world_crafting.piston_push.streamRecipes()
    ```
