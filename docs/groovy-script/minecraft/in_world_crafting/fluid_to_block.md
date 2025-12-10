---
title: "Fluid and ItemStack To Block Conversion"
titleTemplate: "In-World Crafting | CleanroomMC"
description: "Converts any number of input itemstacks and a fluid source block into a block in-world, with each input having a chance to be consumed. Allows an additional closure check to start the recipe and a closure run after the recipe is finished."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/inworldcrafting/FluidToBlock.java"
---

# Fluid and ItemStack To Block Conversion (In-World Crafting)

## Description

Converts any number of input itemstacks and a fluid source block into a block in-world, with each input having a chance to be consumed. Allows an additional closure check to start the recipe and a closure run after the recipe is finished.

## Identifier

The identifier `in_world_crafting.fluid_to_block` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {16}
inworldcrafting.fluidtoblock
inworldcrafting.fluidToBlock
inworldcrafting.FluidToBlock
inWorldCrafting.fluidtoblock
inWorldCrafting.fluidToBlock
inWorldCrafting.FluidToBlock
InWorldCrafting.fluidtoblock
InWorldCrafting.fluidToBlock
InWorldCrafting.FluidToBlock
inworldcrafting.fluid_to_block
inWorldCrafting.fluid_to_block
InWorldCrafting.fluid_to_block
in_world_crafting.fluidtoblock
in_world_crafting.fluidToBlock
in_world_crafting.FluidToBlock
in_world_crafting.fluid_to_block/* Used as page default */ // [!code focus]
mc.inworldcrafting.fluidtoblock
mc.inworldcrafting.fluidToBlock
mc.inworldcrafting.FluidToBlock
MC.inworldcrafting.fluidtoblock
MC.inworldcrafting.fluidToBlock
MC.inworldcrafting.FluidToBlock
mc.inWorldCrafting.fluidtoblock
mc.inWorldCrafting.fluidToBlock
mc.inWorldCrafting.FluidToBlock
MC.inWorldCrafting.fluidtoblock
MC.inWorldCrafting.fluidToBlock
MC.inWorldCrafting.FluidToBlock
mc.InWorldCrafting.fluidtoblock
mc.InWorldCrafting.fluidToBlock
mc.InWorldCrafting.FluidToBlock
MC.InWorldCrafting.fluidtoblock
MC.InWorldCrafting.fluidToBlock
MC.InWorldCrafting.FluidToBlock
mc.inworldcrafting.fluid_to_block
MC.inworldcrafting.fluid_to_block
mc.inWorldCrafting.fluid_to_block
MC.inWorldCrafting.fluid_to_block
mc.InWorldCrafting.fluid_to_block
MC.InWorldCrafting.fluid_to_block
mc.in_world_crafting.fluidtoblock
mc.in_world_crafting.fluidToBlock
mc.in_world_crafting.FluidToBlock
MC.in_world_crafting.fluidtoblock
MC.in_world_crafting.fluidToBlock
MC.in_world_crafting.FluidToBlock
mc.in_world_crafting.fluid_to_block
MC.in_world_crafting.fluid_to_block
vanilla.inworldcrafting.fluidtoblock
vanilla.inworldcrafting.fluidToBlock
vanilla.inworldcrafting.FluidToBlock
Vanilla.inworldcrafting.fluidtoblock
Vanilla.inworldcrafting.fluidToBlock
Vanilla.inworldcrafting.FluidToBlock
vanilla.inWorldCrafting.fluidtoblock
vanilla.inWorldCrafting.fluidToBlock
vanilla.inWorldCrafting.FluidToBlock
Vanilla.inWorldCrafting.fluidtoblock
Vanilla.inWorldCrafting.fluidToBlock
Vanilla.inWorldCrafting.FluidToBlock
vanilla.InWorldCrafting.fluidtoblock
vanilla.InWorldCrafting.fluidToBlock
vanilla.InWorldCrafting.FluidToBlock
Vanilla.InWorldCrafting.fluidtoblock
Vanilla.InWorldCrafting.fluidToBlock
Vanilla.InWorldCrafting.FluidToBlock
vanilla.inworldcrafting.fluid_to_block
Vanilla.inworldcrafting.fluid_to_block
vanilla.inWorldCrafting.fluid_to_block
Vanilla.inWorldCrafting.fluid_to_block
vanilla.InWorldCrafting.fluid_to_block
Vanilla.InWorldCrafting.fluid_to_block
vanilla.in_world_crafting.fluidtoblock
vanilla.in_world_crafting.fluidToBlock
vanilla.in_world_crafting.FluidToBlock
Vanilla.in_world_crafting.fluidtoblock
Vanilla.in_world_crafting.fluidToBlock
Vanilla.in_world_crafting.FluidToBlock
vanilla.in_world_crafting.fluid_to_block
Vanilla.in_world_crafting.fluid_to_block
minecraft.inworldcrafting.fluidtoblock
minecraft.inworldcrafting.fluidToBlock
minecraft.inworldcrafting.FluidToBlock
Minecraft.inworldcrafting.fluidtoblock
Minecraft.inworldcrafting.fluidToBlock
Minecraft.inworldcrafting.FluidToBlock
minecraft.inWorldCrafting.fluidtoblock
minecraft.inWorldCrafting.fluidToBlock
minecraft.inWorldCrafting.FluidToBlock
Minecraft.inWorldCrafting.fluidtoblock
Minecraft.inWorldCrafting.fluidToBlock
Minecraft.inWorldCrafting.FluidToBlock
minecraft.InWorldCrafting.fluidtoblock
minecraft.InWorldCrafting.fluidToBlock
minecraft.InWorldCrafting.FluidToBlock
Minecraft.InWorldCrafting.fluidtoblock
Minecraft.InWorldCrafting.fluidToBlock
Minecraft.InWorldCrafting.FluidToBlock
minecraft.inworldcrafting.fluid_to_block
Minecraft.inworldcrafting.fluid_to_block
minecraft.inWorldCrafting.fluid_to_block
Minecraft.inWorldCrafting.fluid_to_block
minecraft.InWorldCrafting.fluid_to_block
Minecraft.InWorldCrafting.fluid_to_block
minecraft.in_world_crafting.fluidtoblock
minecraft.in_world_crafting.fluidToBlock
minecraft.in_world_crafting.FluidToBlock
Minecraft.in_world_crafting.fluidtoblock
Minecraft.in_world_crafting.fluidToBlock
Minecraft.in_world_crafting.FluidToBlock
minecraft.in_world_crafting.fluid_to_block
Minecraft.in_world_crafting.fluid_to_block
mods.mc.inworldcrafting.fluidtoblock
mods.mc.inworldcrafting.fluidToBlock
mods.mc.inworldcrafting.FluidToBlock
mods.MC.inworldcrafting.fluidtoblock
mods.MC.inworldcrafting.fluidToBlock
mods.MC.inworldcrafting.FluidToBlock
mods.mc.inWorldCrafting.fluidtoblock
mods.mc.inWorldCrafting.fluidToBlock
mods.mc.inWorldCrafting.FluidToBlock
mods.MC.inWorldCrafting.fluidtoblock
mods.MC.inWorldCrafting.fluidToBlock
mods.MC.inWorldCrafting.FluidToBlock
mods.mc.InWorldCrafting.fluidtoblock
mods.mc.InWorldCrafting.fluidToBlock
mods.mc.InWorldCrafting.FluidToBlock
mods.MC.InWorldCrafting.fluidtoblock
mods.MC.InWorldCrafting.fluidToBlock
mods.MC.InWorldCrafting.FluidToBlock
mods.mc.inworldcrafting.fluid_to_block
mods.MC.inworldcrafting.fluid_to_block
mods.mc.inWorldCrafting.fluid_to_block
mods.MC.inWorldCrafting.fluid_to_block
mods.mc.InWorldCrafting.fluid_to_block
mods.MC.InWorldCrafting.fluid_to_block
mods.mc.in_world_crafting.fluidtoblock
mods.mc.in_world_crafting.fluidToBlock
mods.mc.in_world_crafting.FluidToBlock
mods.MC.in_world_crafting.fluidtoblock
mods.MC.in_world_crafting.fluidToBlock
mods.MC.in_world_crafting.FluidToBlock
mods.mc.in_world_crafting.fluid_to_block
mods.MC.in_world_crafting.fluid_to_block
mods.vanilla.inworldcrafting.fluidtoblock
mods.vanilla.inworldcrafting.fluidToBlock
mods.vanilla.inworldcrafting.FluidToBlock
mods.Vanilla.inworldcrafting.fluidtoblock
mods.Vanilla.inworldcrafting.fluidToBlock
mods.Vanilla.inworldcrafting.FluidToBlock
mods.vanilla.inWorldCrafting.fluidtoblock
mods.vanilla.inWorldCrafting.fluidToBlock
mods.vanilla.inWorldCrafting.FluidToBlock
mods.Vanilla.inWorldCrafting.fluidtoblock
mods.Vanilla.inWorldCrafting.fluidToBlock
mods.Vanilla.inWorldCrafting.FluidToBlock
mods.vanilla.InWorldCrafting.fluidtoblock
mods.vanilla.InWorldCrafting.fluidToBlock
mods.vanilla.InWorldCrafting.FluidToBlock
mods.Vanilla.InWorldCrafting.fluidtoblock
mods.Vanilla.InWorldCrafting.fluidToBlock
mods.Vanilla.InWorldCrafting.FluidToBlock
mods.vanilla.inworldcrafting.fluid_to_block
mods.Vanilla.inworldcrafting.fluid_to_block
mods.vanilla.inWorldCrafting.fluid_to_block
mods.Vanilla.inWorldCrafting.fluid_to_block
mods.vanilla.InWorldCrafting.fluid_to_block
mods.Vanilla.InWorldCrafting.fluid_to_block
mods.vanilla.in_world_crafting.fluidtoblock
mods.vanilla.in_world_crafting.fluidToBlock
mods.vanilla.in_world_crafting.FluidToBlock
mods.Vanilla.in_world_crafting.fluidtoblock
mods.Vanilla.in_world_crafting.fluidToBlock
mods.Vanilla.in_world_crafting.FluidToBlock
mods.vanilla.in_world_crafting.fluid_to_block
mods.Vanilla.in_world_crafting.fluid_to_block
mods.minecraft.inworldcrafting.fluidtoblock
mods.minecraft.inworldcrafting.fluidToBlock
mods.minecraft.inworldcrafting.FluidToBlock
mods.Minecraft.inworldcrafting.fluidtoblock
mods.Minecraft.inworldcrafting.fluidToBlock
mods.Minecraft.inworldcrafting.FluidToBlock
mods.minecraft.inWorldCrafting.fluidtoblock
mods.minecraft.inWorldCrafting.fluidToBlock
mods.minecraft.inWorldCrafting.FluidToBlock
mods.Minecraft.inWorldCrafting.fluidtoblock
mods.Minecraft.inWorldCrafting.fluidToBlock
mods.Minecraft.inWorldCrafting.FluidToBlock
mods.minecraft.InWorldCrafting.fluidtoblock
mods.minecraft.InWorldCrafting.fluidToBlock
mods.minecraft.InWorldCrafting.FluidToBlock
mods.Minecraft.InWorldCrafting.fluidtoblock
mods.Minecraft.InWorldCrafting.fluidToBlock
mods.Minecraft.InWorldCrafting.FluidToBlock
mods.minecraft.inworldcrafting.fluid_to_block
mods.Minecraft.inworldcrafting.fluid_to_block
mods.minecraft.inWorldCrafting.fluid_to_block
mods.Minecraft.inWorldCrafting.fluid_to_block
mods.minecraft.InWorldCrafting.fluid_to_block
mods.Minecraft.InWorldCrafting.fluid_to_block
mods.minecraft.in_world_crafting.fluidtoblock
mods.minecraft.in_world_crafting.fluidToBlock
mods.minecraft.in_world_crafting.FluidToBlock
mods.Minecraft.in_world_crafting.fluidtoblock
mods.Minecraft.in_world_crafting.fluidToBlock
mods.Minecraft.in_world_crafting.FluidToBlock
mods.minecraft.in_world_crafting.fluid_to_block
mods.Minecraft.in_world_crafting.fluid_to_block
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.add(FluidToBlock.Recipe)
    ```

### Recipe Builder

Just like other recipe types, the Fluid and ItemStack To Block Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(IIngredient, float)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FloatList`. Sets the chance each input has to be consumed. Requires exactly equal to the number of elements in `input`.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient, float)
    ```

- `Closure<?>`. Sets a closure that will run after the recipe completes, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    afterRecipe(Closure<Boolean>)
    ```

- `IBlockState`. Sets the blockstate being output. Requires not null.

    ```groovy:no-line-numbers
    output(Block)
    output(IBlockState)
    ```

- `Closure<Boolean>`. Sets an additional check that must be passed before the recipe runs, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    startCondition(Closure<Boolean>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.inworldcrafting.FluidToBlock$Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.fluid_to_block.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:clay_ball'))
    .output(block('minecraft:diamond_block'))
    .register()

in_world_crafting.fluid_to_block.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:clay'), 0.5f)
    .output(block('minecraft:gold_block'))
    .register()

in_world_crafting.fluid_to_block.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:diamond'), item('minecraft:iron_ingot'))
    .output(block('minecraft:clay'))
    .startCondition({ world, pos -> pos.getY() > 50 })
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.remove(FluidToBlock.Recipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.removeByInput(FluidStack, ItemStack...)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.fluid_to_block.removeByInput(fluid('water'))
in_world_crafting.fluid_to_block.removeByInput(fluid('water'), item('minecraft:clay'))
in_world_crafting.fluid_to_block.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_block.streamRecipes()
    ```
