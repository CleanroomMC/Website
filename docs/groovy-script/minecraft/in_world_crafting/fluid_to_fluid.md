---
title: "Fluid and ItemStack To Fluid Conversion"
titleTemplate: "In-World Crafting | CleanroomMC"
description: "Converts any number of input itemstacks and a fluid source block into a fluid block in-world, with each input having a chance to be consumed. Allows an additional closure check to start the recipe and a closure run after the recipe is finished."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/inworldcrafting/FluidToFluid.java"
---

# Fluid and ItemStack To Fluid Conversion (In-World Crafting)

## Description

Converts any number of input itemstacks and a fluid source block into a fluid block in-world, with each input having a chance to be consumed. Allows an additional closure check to start the recipe and a closure run after the recipe is finished.

## Identifier

The identifier `in_world_crafting.fluid_to_fluid` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {16}
inworldcrafting.fluidtofluid
inworldcrafting.fluidToFluid
inworldcrafting.FluidToFluid
inWorldCrafting.fluidtofluid
inWorldCrafting.fluidToFluid
inWorldCrafting.FluidToFluid
InWorldCrafting.fluidtofluid
InWorldCrafting.fluidToFluid
InWorldCrafting.FluidToFluid
inworldcrafting.fluid_to_fluid
inWorldCrafting.fluid_to_fluid
InWorldCrafting.fluid_to_fluid
in_world_crafting.fluidtofluid
in_world_crafting.fluidToFluid
in_world_crafting.FluidToFluid
in_world_crafting.fluid_to_fluid/* Used as page default */ // [!code focus]
mc.inworldcrafting.fluidtofluid
mc.inworldcrafting.fluidToFluid
mc.inworldcrafting.FluidToFluid
MC.inworldcrafting.fluidtofluid
MC.inworldcrafting.fluidToFluid
MC.inworldcrafting.FluidToFluid
mc.inWorldCrafting.fluidtofluid
mc.inWorldCrafting.fluidToFluid
mc.inWorldCrafting.FluidToFluid
MC.inWorldCrafting.fluidtofluid
MC.inWorldCrafting.fluidToFluid
MC.inWorldCrafting.FluidToFluid
mc.InWorldCrafting.fluidtofluid
mc.InWorldCrafting.fluidToFluid
mc.InWorldCrafting.FluidToFluid
MC.InWorldCrafting.fluidtofluid
MC.InWorldCrafting.fluidToFluid
MC.InWorldCrafting.FluidToFluid
mc.inworldcrafting.fluid_to_fluid
MC.inworldcrafting.fluid_to_fluid
mc.inWorldCrafting.fluid_to_fluid
MC.inWorldCrafting.fluid_to_fluid
mc.InWorldCrafting.fluid_to_fluid
MC.InWorldCrafting.fluid_to_fluid
mc.in_world_crafting.fluidtofluid
mc.in_world_crafting.fluidToFluid
mc.in_world_crafting.FluidToFluid
MC.in_world_crafting.fluidtofluid
MC.in_world_crafting.fluidToFluid
MC.in_world_crafting.FluidToFluid
mc.in_world_crafting.fluid_to_fluid
MC.in_world_crafting.fluid_to_fluid
vanilla.inworldcrafting.fluidtofluid
vanilla.inworldcrafting.fluidToFluid
vanilla.inworldcrafting.FluidToFluid
Vanilla.inworldcrafting.fluidtofluid
Vanilla.inworldcrafting.fluidToFluid
Vanilla.inworldcrafting.FluidToFluid
vanilla.inWorldCrafting.fluidtofluid
vanilla.inWorldCrafting.fluidToFluid
vanilla.inWorldCrafting.FluidToFluid
Vanilla.inWorldCrafting.fluidtofluid
Vanilla.inWorldCrafting.fluidToFluid
Vanilla.inWorldCrafting.FluidToFluid
vanilla.InWorldCrafting.fluidtofluid
vanilla.InWorldCrafting.fluidToFluid
vanilla.InWorldCrafting.FluidToFluid
Vanilla.InWorldCrafting.fluidtofluid
Vanilla.InWorldCrafting.fluidToFluid
Vanilla.InWorldCrafting.FluidToFluid
vanilla.inworldcrafting.fluid_to_fluid
Vanilla.inworldcrafting.fluid_to_fluid
vanilla.inWorldCrafting.fluid_to_fluid
Vanilla.inWorldCrafting.fluid_to_fluid
vanilla.InWorldCrafting.fluid_to_fluid
Vanilla.InWorldCrafting.fluid_to_fluid
vanilla.in_world_crafting.fluidtofluid
vanilla.in_world_crafting.fluidToFluid
vanilla.in_world_crafting.FluidToFluid
Vanilla.in_world_crafting.fluidtofluid
Vanilla.in_world_crafting.fluidToFluid
Vanilla.in_world_crafting.FluidToFluid
vanilla.in_world_crafting.fluid_to_fluid
Vanilla.in_world_crafting.fluid_to_fluid
minecraft.inworldcrafting.fluidtofluid
minecraft.inworldcrafting.fluidToFluid
minecraft.inworldcrafting.FluidToFluid
Minecraft.inworldcrafting.fluidtofluid
Minecraft.inworldcrafting.fluidToFluid
Minecraft.inworldcrafting.FluidToFluid
minecraft.inWorldCrafting.fluidtofluid
minecraft.inWorldCrafting.fluidToFluid
minecraft.inWorldCrafting.FluidToFluid
Minecraft.inWorldCrafting.fluidtofluid
Minecraft.inWorldCrafting.fluidToFluid
Minecraft.inWorldCrafting.FluidToFluid
minecraft.InWorldCrafting.fluidtofluid
minecraft.InWorldCrafting.fluidToFluid
minecraft.InWorldCrafting.FluidToFluid
Minecraft.InWorldCrafting.fluidtofluid
Minecraft.InWorldCrafting.fluidToFluid
Minecraft.InWorldCrafting.FluidToFluid
minecraft.inworldcrafting.fluid_to_fluid
Minecraft.inworldcrafting.fluid_to_fluid
minecraft.inWorldCrafting.fluid_to_fluid
Minecraft.inWorldCrafting.fluid_to_fluid
minecraft.InWorldCrafting.fluid_to_fluid
Minecraft.InWorldCrafting.fluid_to_fluid
minecraft.in_world_crafting.fluidtofluid
minecraft.in_world_crafting.fluidToFluid
minecraft.in_world_crafting.FluidToFluid
Minecraft.in_world_crafting.fluidtofluid
Minecraft.in_world_crafting.fluidToFluid
Minecraft.in_world_crafting.FluidToFluid
minecraft.in_world_crafting.fluid_to_fluid
Minecraft.in_world_crafting.fluid_to_fluid
mods.mc.inworldcrafting.fluidtofluid
mods.mc.inworldcrafting.fluidToFluid
mods.mc.inworldcrafting.FluidToFluid
mods.MC.inworldcrafting.fluidtofluid
mods.MC.inworldcrafting.fluidToFluid
mods.MC.inworldcrafting.FluidToFluid
mods.mc.inWorldCrafting.fluidtofluid
mods.mc.inWorldCrafting.fluidToFluid
mods.mc.inWorldCrafting.FluidToFluid
mods.MC.inWorldCrafting.fluidtofluid
mods.MC.inWorldCrafting.fluidToFluid
mods.MC.inWorldCrafting.FluidToFluid
mods.mc.InWorldCrafting.fluidtofluid
mods.mc.InWorldCrafting.fluidToFluid
mods.mc.InWorldCrafting.FluidToFluid
mods.MC.InWorldCrafting.fluidtofluid
mods.MC.InWorldCrafting.fluidToFluid
mods.MC.InWorldCrafting.FluidToFluid
mods.mc.inworldcrafting.fluid_to_fluid
mods.MC.inworldcrafting.fluid_to_fluid
mods.mc.inWorldCrafting.fluid_to_fluid
mods.MC.inWorldCrafting.fluid_to_fluid
mods.mc.InWorldCrafting.fluid_to_fluid
mods.MC.InWorldCrafting.fluid_to_fluid
mods.mc.in_world_crafting.fluidtofluid
mods.mc.in_world_crafting.fluidToFluid
mods.mc.in_world_crafting.FluidToFluid
mods.MC.in_world_crafting.fluidtofluid
mods.MC.in_world_crafting.fluidToFluid
mods.MC.in_world_crafting.FluidToFluid
mods.mc.in_world_crafting.fluid_to_fluid
mods.MC.in_world_crafting.fluid_to_fluid
mods.vanilla.inworldcrafting.fluidtofluid
mods.vanilla.inworldcrafting.fluidToFluid
mods.vanilla.inworldcrafting.FluidToFluid
mods.Vanilla.inworldcrafting.fluidtofluid
mods.Vanilla.inworldcrafting.fluidToFluid
mods.Vanilla.inworldcrafting.FluidToFluid
mods.vanilla.inWorldCrafting.fluidtofluid
mods.vanilla.inWorldCrafting.fluidToFluid
mods.vanilla.inWorldCrafting.FluidToFluid
mods.Vanilla.inWorldCrafting.fluidtofluid
mods.Vanilla.inWorldCrafting.fluidToFluid
mods.Vanilla.inWorldCrafting.FluidToFluid
mods.vanilla.InWorldCrafting.fluidtofluid
mods.vanilla.InWorldCrafting.fluidToFluid
mods.vanilla.InWorldCrafting.FluidToFluid
mods.Vanilla.InWorldCrafting.fluidtofluid
mods.Vanilla.InWorldCrafting.fluidToFluid
mods.Vanilla.InWorldCrafting.FluidToFluid
mods.vanilla.inworldcrafting.fluid_to_fluid
mods.Vanilla.inworldcrafting.fluid_to_fluid
mods.vanilla.inWorldCrafting.fluid_to_fluid
mods.Vanilla.inWorldCrafting.fluid_to_fluid
mods.vanilla.InWorldCrafting.fluid_to_fluid
mods.Vanilla.InWorldCrafting.fluid_to_fluid
mods.vanilla.in_world_crafting.fluidtofluid
mods.vanilla.in_world_crafting.fluidToFluid
mods.vanilla.in_world_crafting.FluidToFluid
mods.Vanilla.in_world_crafting.fluidtofluid
mods.Vanilla.in_world_crafting.fluidToFluid
mods.Vanilla.in_world_crafting.FluidToFluid
mods.vanilla.in_world_crafting.fluid_to_fluid
mods.Vanilla.in_world_crafting.fluid_to_fluid
mods.minecraft.inworldcrafting.fluidtofluid
mods.minecraft.inworldcrafting.fluidToFluid
mods.minecraft.inworldcrafting.FluidToFluid
mods.Minecraft.inworldcrafting.fluidtofluid
mods.Minecraft.inworldcrafting.fluidToFluid
mods.Minecraft.inworldcrafting.FluidToFluid
mods.minecraft.inWorldCrafting.fluidtofluid
mods.minecraft.inWorldCrafting.fluidToFluid
mods.minecraft.inWorldCrafting.FluidToFluid
mods.Minecraft.inWorldCrafting.fluidtofluid
mods.Minecraft.inWorldCrafting.fluidToFluid
mods.Minecraft.inWorldCrafting.FluidToFluid
mods.minecraft.InWorldCrafting.fluidtofluid
mods.minecraft.InWorldCrafting.fluidToFluid
mods.minecraft.InWorldCrafting.FluidToFluid
mods.Minecraft.InWorldCrafting.fluidtofluid
mods.Minecraft.InWorldCrafting.fluidToFluid
mods.Minecraft.InWorldCrafting.FluidToFluid
mods.minecraft.inworldcrafting.fluid_to_fluid
mods.Minecraft.inworldcrafting.fluid_to_fluid
mods.minecraft.inWorldCrafting.fluid_to_fluid
mods.Minecraft.inWorldCrafting.fluid_to_fluid
mods.minecraft.InWorldCrafting.fluid_to_fluid
mods.Minecraft.InWorldCrafting.fluid_to_fluid
mods.minecraft.in_world_crafting.fluidtofluid
mods.minecraft.in_world_crafting.fluidToFluid
mods.minecraft.in_world_crafting.FluidToFluid
mods.Minecraft.in_world_crafting.fluidtofluid
mods.Minecraft.in_world_crafting.fluidToFluid
mods.Minecraft.in_world_crafting.FluidToFluid
mods.minecraft.in_world_crafting.fluid_to_fluid
mods.Minecraft.in_world_crafting.fluid_to_fluid
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.add(FluidToFluid.Recipe)
    ```

### Recipe Builder

Just like other recipe types, the Fluid and ItemStack To Fluid Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.recipeBuilder()
    ```

---

- `FloatList`. Sets the chance each input has to be consumed. Requires exactly equal to the number of elements in `input`.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient, float)
    ```

- `Closure<?>`. Sets a closure that will run after the recipe completes, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    afterRecipe(Closure<Boolean>)
    ```

- `Closure<Boolean>`. Sets an additional check that must be passed before the recipe runs, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    startCondition(Closure<Boolean>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.inworldcrafting.FluidToFluid$Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.fluid_to_fluid.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:diamond'), item('minecraft:dirt'))
    .fluidOutput(fluid('lava'))
    .register()

in_world_crafting.fluid_to_fluid.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:diamond'), item('minecraft:gold_nugget'))
    .fluidOutput(fluid('lava'))
    .register()

in_world_crafting.fluid_to_fluid.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:diamond'), item('minecraft:diamond_block'))
    .fluidOutput(fluid('lava'))
    .startCondition({ world, pos -> pos.getY() < 50 })
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.remove(FluidToFluid.Recipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.removeByInput(FluidStack, ItemStack...)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.fluid_to_fluid.removeByInput(fluid('water'))
in_world_crafting.fluid_to_fluid.removeByInput(fluid('water'), item('minecraft:clay'))
in_world_crafting.fluid_to_fluid.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_fluid.streamRecipes()
    ```
