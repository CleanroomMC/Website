---
title: "Fluid and ItemStack To ItemStack Conversion"
titleTemplate: "In-World Crafting | CleanroomMC"
description: "Converts any number of input itemstacks and a fluid source block into an itemstack in-world, with each input having a chance to be consumed and a chance to consume the fluid block. Allows an additional closure check to start the recipe and a closure run after the recipe is finished."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/inworldcrafting/FluidToItem.java"
---

# Fluid and ItemStack To ItemStack Conversion (In-World Crafting)

## Description

Converts any number of input itemstacks and a fluid source block into an itemstack in-world, with each input having a chance to be consumed and a chance to consume the fluid block. Allows an additional closure check to start the recipe and a closure run after the recipe is finished.

## Identifier

The identifier `in_world_crafting.fluid_to_item` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {16}
inworldcrafting.fluidtoitem
inworldcrafting.fluidToItem
inworldcrafting.FluidToItem
inWorldCrafting.fluidtoitem
inWorldCrafting.fluidToItem
inWorldCrafting.FluidToItem
InWorldCrafting.fluidtoitem
InWorldCrafting.fluidToItem
InWorldCrafting.FluidToItem
inworldcrafting.fluid_to_item
inWorldCrafting.fluid_to_item
InWorldCrafting.fluid_to_item
in_world_crafting.fluidtoitem
in_world_crafting.fluidToItem
in_world_crafting.FluidToItem
in_world_crafting.fluid_to_item/* Used as page default */ // [!code focus]
mc.inworldcrafting.fluidtoitem
mc.inworldcrafting.fluidToItem
mc.inworldcrafting.FluidToItem
MC.inworldcrafting.fluidtoitem
MC.inworldcrafting.fluidToItem
MC.inworldcrafting.FluidToItem
mc.inWorldCrafting.fluidtoitem
mc.inWorldCrafting.fluidToItem
mc.inWorldCrafting.FluidToItem
MC.inWorldCrafting.fluidtoitem
MC.inWorldCrafting.fluidToItem
MC.inWorldCrafting.FluidToItem
mc.InWorldCrafting.fluidtoitem
mc.InWorldCrafting.fluidToItem
mc.InWorldCrafting.FluidToItem
MC.InWorldCrafting.fluidtoitem
MC.InWorldCrafting.fluidToItem
MC.InWorldCrafting.FluidToItem
mc.inworldcrafting.fluid_to_item
MC.inworldcrafting.fluid_to_item
mc.inWorldCrafting.fluid_to_item
MC.inWorldCrafting.fluid_to_item
mc.InWorldCrafting.fluid_to_item
MC.InWorldCrafting.fluid_to_item
mc.in_world_crafting.fluidtoitem
mc.in_world_crafting.fluidToItem
mc.in_world_crafting.FluidToItem
MC.in_world_crafting.fluidtoitem
MC.in_world_crafting.fluidToItem
MC.in_world_crafting.FluidToItem
mc.in_world_crafting.fluid_to_item
MC.in_world_crafting.fluid_to_item
vanilla.inworldcrafting.fluidtoitem
vanilla.inworldcrafting.fluidToItem
vanilla.inworldcrafting.FluidToItem
Vanilla.inworldcrafting.fluidtoitem
Vanilla.inworldcrafting.fluidToItem
Vanilla.inworldcrafting.FluidToItem
vanilla.inWorldCrafting.fluidtoitem
vanilla.inWorldCrafting.fluidToItem
vanilla.inWorldCrafting.FluidToItem
Vanilla.inWorldCrafting.fluidtoitem
Vanilla.inWorldCrafting.fluidToItem
Vanilla.inWorldCrafting.FluidToItem
vanilla.InWorldCrafting.fluidtoitem
vanilla.InWorldCrafting.fluidToItem
vanilla.InWorldCrafting.FluidToItem
Vanilla.InWorldCrafting.fluidtoitem
Vanilla.InWorldCrafting.fluidToItem
Vanilla.InWorldCrafting.FluidToItem
vanilla.inworldcrafting.fluid_to_item
Vanilla.inworldcrafting.fluid_to_item
vanilla.inWorldCrafting.fluid_to_item
Vanilla.inWorldCrafting.fluid_to_item
vanilla.InWorldCrafting.fluid_to_item
Vanilla.InWorldCrafting.fluid_to_item
vanilla.in_world_crafting.fluidtoitem
vanilla.in_world_crafting.fluidToItem
vanilla.in_world_crafting.FluidToItem
Vanilla.in_world_crafting.fluidtoitem
Vanilla.in_world_crafting.fluidToItem
Vanilla.in_world_crafting.FluidToItem
vanilla.in_world_crafting.fluid_to_item
Vanilla.in_world_crafting.fluid_to_item
minecraft.inworldcrafting.fluidtoitem
minecraft.inworldcrafting.fluidToItem
minecraft.inworldcrafting.FluidToItem
Minecraft.inworldcrafting.fluidtoitem
Minecraft.inworldcrafting.fluidToItem
Minecraft.inworldcrafting.FluidToItem
minecraft.inWorldCrafting.fluidtoitem
minecraft.inWorldCrafting.fluidToItem
minecraft.inWorldCrafting.FluidToItem
Minecraft.inWorldCrafting.fluidtoitem
Minecraft.inWorldCrafting.fluidToItem
Minecraft.inWorldCrafting.FluidToItem
minecraft.InWorldCrafting.fluidtoitem
minecraft.InWorldCrafting.fluidToItem
minecraft.InWorldCrafting.FluidToItem
Minecraft.InWorldCrafting.fluidtoitem
Minecraft.InWorldCrafting.fluidToItem
Minecraft.InWorldCrafting.FluidToItem
minecraft.inworldcrafting.fluid_to_item
Minecraft.inworldcrafting.fluid_to_item
minecraft.inWorldCrafting.fluid_to_item
Minecraft.inWorldCrafting.fluid_to_item
minecraft.InWorldCrafting.fluid_to_item
Minecraft.InWorldCrafting.fluid_to_item
minecraft.in_world_crafting.fluidtoitem
minecraft.in_world_crafting.fluidToItem
minecraft.in_world_crafting.FluidToItem
Minecraft.in_world_crafting.fluidtoitem
Minecraft.in_world_crafting.fluidToItem
Minecraft.in_world_crafting.FluidToItem
minecraft.in_world_crafting.fluid_to_item
Minecraft.in_world_crafting.fluid_to_item
mods.mc.inworldcrafting.fluidtoitem
mods.mc.inworldcrafting.fluidToItem
mods.mc.inworldcrafting.FluidToItem
mods.MC.inworldcrafting.fluidtoitem
mods.MC.inworldcrafting.fluidToItem
mods.MC.inworldcrafting.FluidToItem
mods.mc.inWorldCrafting.fluidtoitem
mods.mc.inWorldCrafting.fluidToItem
mods.mc.inWorldCrafting.FluidToItem
mods.MC.inWorldCrafting.fluidtoitem
mods.MC.inWorldCrafting.fluidToItem
mods.MC.inWorldCrafting.FluidToItem
mods.mc.InWorldCrafting.fluidtoitem
mods.mc.InWorldCrafting.fluidToItem
mods.mc.InWorldCrafting.FluidToItem
mods.MC.InWorldCrafting.fluidtoitem
mods.MC.InWorldCrafting.fluidToItem
mods.MC.InWorldCrafting.FluidToItem
mods.mc.inworldcrafting.fluid_to_item
mods.MC.inworldcrafting.fluid_to_item
mods.mc.inWorldCrafting.fluid_to_item
mods.MC.inWorldCrafting.fluid_to_item
mods.mc.InWorldCrafting.fluid_to_item
mods.MC.InWorldCrafting.fluid_to_item
mods.mc.in_world_crafting.fluidtoitem
mods.mc.in_world_crafting.fluidToItem
mods.mc.in_world_crafting.FluidToItem
mods.MC.in_world_crafting.fluidtoitem
mods.MC.in_world_crafting.fluidToItem
mods.MC.in_world_crafting.FluidToItem
mods.mc.in_world_crafting.fluid_to_item
mods.MC.in_world_crafting.fluid_to_item
mods.vanilla.inworldcrafting.fluidtoitem
mods.vanilla.inworldcrafting.fluidToItem
mods.vanilla.inworldcrafting.FluidToItem
mods.Vanilla.inworldcrafting.fluidtoitem
mods.Vanilla.inworldcrafting.fluidToItem
mods.Vanilla.inworldcrafting.FluidToItem
mods.vanilla.inWorldCrafting.fluidtoitem
mods.vanilla.inWorldCrafting.fluidToItem
mods.vanilla.inWorldCrafting.FluidToItem
mods.Vanilla.inWorldCrafting.fluidtoitem
mods.Vanilla.inWorldCrafting.fluidToItem
mods.Vanilla.inWorldCrafting.FluidToItem
mods.vanilla.InWorldCrafting.fluidtoitem
mods.vanilla.InWorldCrafting.fluidToItem
mods.vanilla.InWorldCrafting.FluidToItem
mods.Vanilla.InWorldCrafting.fluidtoitem
mods.Vanilla.InWorldCrafting.fluidToItem
mods.Vanilla.InWorldCrafting.FluidToItem
mods.vanilla.inworldcrafting.fluid_to_item
mods.Vanilla.inworldcrafting.fluid_to_item
mods.vanilla.inWorldCrafting.fluid_to_item
mods.Vanilla.inWorldCrafting.fluid_to_item
mods.vanilla.InWorldCrafting.fluid_to_item
mods.Vanilla.InWorldCrafting.fluid_to_item
mods.vanilla.in_world_crafting.fluidtoitem
mods.vanilla.in_world_crafting.fluidToItem
mods.vanilla.in_world_crafting.FluidToItem
mods.Vanilla.in_world_crafting.fluidtoitem
mods.Vanilla.in_world_crafting.fluidToItem
mods.Vanilla.in_world_crafting.FluidToItem
mods.vanilla.in_world_crafting.fluid_to_item
mods.Vanilla.in_world_crafting.fluid_to_item
mods.minecraft.inworldcrafting.fluidtoitem
mods.minecraft.inworldcrafting.fluidToItem
mods.minecraft.inworldcrafting.FluidToItem
mods.Minecraft.inworldcrafting.fluidtoitem
mods.Minecraft.inworldcrafting.fluidToItem
mods.Minecraft.inworldcrafting.FluidToItem
mods.minecraft.inWorldCrafting.fluidtoitem
mods.minecraft.inWorldCrafting.fluidToItem
mods.minecraft.inWorldCrafting.FluidToItem
mods.Minecraft.inWorldCrafting.fluidtoitem
mods.Minecraft.inWorldCrafting.fluidToItem
mods.Minecraft.inWorldCrafting.FluidToItem
mods.minecraft.InWorldCrafting.fluidtoitem
mods.minecraft.InWorldCrafting.fluidToItem
mods.minecraft.InWorldCrafting.FluidToItem
mods.Minecraft.InWorldCrafting.fluidtoitem
mods.Minecraft.InWorldCrafting.fluidToItem
mods.Minecraft.InWorldCrafting.FluidToItem
mods.minecraft.inworldcrafting.fluid_to_item
mods.Minecraft.inworldcrafting.fluid_to_item
mods.minecraft.inWorldCrafting.fluid_to_item
mods.Minecraft.inWorldCrafting.fluid_to_item
mods.minecraft.InWorldCrafting.fluid_to_item
mods.Minecraft.InWorldCrafting.fluid_to_item
mods.minecraft.in_world_crafting.fluidtoitem
mods.minecraft.in_world_crafting.fluidToItem
mods.minecraft.in_world_crafting.FluidToItem
mods.Minecraft.in_world_crafting.fluidtoitem
mods.Minecraft.in_world_crafting.fluidToItem
mods.Minecraft.in_world_crafting.FluidToItem
mods.minecraft.in_world_crafting.fluid_to_item
mods.Minecraft.in_world_crafting.fluid_to_item
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.add(FluidToItem.Recipe)
    ```

### Recipe Builder

Just like other recipe types, the Fluid and ItemStack To ItemStack Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.recipeBuilder()
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
    fluidInput(FluidStack, float)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
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

- `Closure<Boolean>`. Sets an additional check that must be passed before the recipe runs, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    startCondition(Closure<Boolean>)
    ```

- `float`. Sets the chance the fluid is consumed. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    fluidInput(FluidStack, float)
    fluidConsumptionChance(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.inworldcrafting.FluidToItem$Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.fluid_to_item.recipeBuilder()
    .fluidInput(fluid('water'), 0.22f)
    .input(item('minecraft:netherrack'))
    .input(item('minecraft:gold_ingot'), 0.1f)
    .output(item('minecraft:nether_star'))
    .register()

in_world_crafting.fluid_to_item.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidConsumptionChance(0.9f)
    .input(item('minecraft:diamond'), item('minecraft:gold_block'))
    .output(item('minecraft:diamond') * 10)
    .startCondition({ world, pos -> pos.getY() > 50 })
    .register()

in_world_crafting.fluid_to_item.recipeBuilder()
    .fluidInput(fluid('water'))
    .input(item('minecraft:diamond'), item('minecraft:iron_block') * 3)
    .output(item('minecraft:gold_ingot'))
    .afterRecipe({ world, pos -> world.setBlockState(pos, block('minecraft:dirt')) })
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.remove(FluidToItem.Recipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.removeByInput(FluidStack, ItemStack...)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.fluid_to_item.removeByInput(fluid('water'))
in_world_crafting.fluid_to_item.removeByInput(fluid('water'), item('minecraft:clay'))
in_world_crafting.fluid_to_item.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    in_world_crafting.fluid_to_item.streamRecipes()
    ```
