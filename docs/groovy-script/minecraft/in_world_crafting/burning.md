---
title: "Burning Conversion"
titleTemplate: "In-World Crafting | CleanroomMC"
description: "Converts an input item into an output itemstack after some number of ticks while burning. This also makes the input item effectively fireproof."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/inworldcrafting/Burning.java"
---

# Burning Conversion (In-World Crafting)

## Description

Converts an input item into an output itemstack after some number of ticks while burning. This also makes the input item effectively fireproof.

## Identifier

The identifier `in_world_crafting.burning` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {7}
inworldcrafting.burning
inworldcrafting.Burning
inWorldCrafting.burning
inWorldCrafting.Burning
InWorldCrafting.burning
InWorldCrafting.Burning
in_world_crafting.burning/* Used as page default */ // [!code focus]
in_world_crafting.Burning
mc.inworldcrafting.burning
mc.inworldcrafting.Burning
MC.inworldcrafting.burning
MC.inworldcrafting.Burning
mc.inWorldCrafting.burning
mc.inWorldCrafting.Burning
MC.inWorldCrafting.burning
MC.inWorldCrafting.Burning
mc.InWorldCrafting.burning
mc.InWorldCrafting.Burning
MC.InWorldCrafting.burning
MC.InWorldCrafting.Burning
mc.in_world_crafting.burning
mc.in_world_crafting.Burning
MC.in_world_crafting.burning
MC.in_world_crafting.Burning
vanilla.inworldcrafting.burning
vanilla.inworldcrafting.Burning
Vanilla.inworldcrafting.burning
Vanilla.inworldcrafting.Burning
vanilla.inWorldCrafting.burning
vanilla.inWorldCrafting.Burning
Vanilla.inWorldCrafting.burning
Vanilla.inWorldCrafting.Burning
vanilla.InWorldCrafting.burning
vanilla.InWorldCrafting.Burning
Vanilla.InWorldCrafting.burning
Vanilla.InWorldCrafting.Burning
vanilla.in_world_crafting.burning
vanilla.in_world_crafting.Burning
Vanilla.in_world_crafting.burning
Vanilla.in_world_crafting.Burning
minecraft.inworldcrafting.burning
minecraft.inworldcrafting.Burning
Minecraft.inworldcrafting.burning
Minecraft.inworldcrafting.Burning
minecraft.inWorldCrafting.burning
minecraft.inWorldCrafting.Burning
Minecraft.inWorldCrafting.burning
Minecraft.inWorldCrafting.Burning
minecraft.InWorldCrafting.burning
minecraft.InWorldCrafting.Burning
Minecraft.InWorldCrafting.burning
Minecraft.InWorldCrafting.Burning
minecraft.in_world_crafting.burning
minecraft.in_world_crafting.Burning
Minecraft.in_world_crafting.burning
Minecraft.in_world_crafting.Burning
mods.mc.inworldcrafting.burning
mods.mc.inworldcrafting.Burning
mods.MC.inworldcrafting.burning
mods.MC.inworldcrafting.Burning
mods.mc.inWorldCrafting.burning
mods.mc.inWorldCrafting.Burning
mods.MC.inWorldCrafting.burning
mods.MC.inWorldCrafting.Burning
mods.mc.InWorldCrafting.burning
mods.mc.InWorldCrafting.Burning
mods.MC.InWorldCrafting.burning
mods.MC.InWorldCrafting.Burning
mods.mc.in_world_crafting.burning
mods.mc.in_world_crafting.Burning
mods.MC.in_world_crafting.burning
mods.MC.in_world_crafting.Burning
mods.vanilla.inworldcrafting.burning
mods.vanilla.inworldcrafting.Burning
mods.Vanilla.inworldcrafting.burning
mods.Vanilla.inworldcrafting.Burning
mods.vanilla.inWorldCrafting.burning
mods.vanilla.inWorldCrafting.Burning
mods.Vanilla.inWorldCrafting.burning
mods.Vanilla.inWorldCrafting.Burning
mods.vanilla.InWorldCrafting.burning
mods.vanilla.InWorldCrafting.Burning
mods.Vanilla.InWorldCrafting.burning
mods.Vanilla.InWorldCrafting.Burning
mods.vanilla.in_world_crafting.burning
mods.vanilla.in_world_crafting.Burning
mods.Vanilla.in_world_crafting.burning
mods.Vanilla.in_world_crafting.Burning
mods.minecraft.inworldcrafting.burning
mods.minecraft.inworldcrafting.Burning
mods.Minecraft.inworldcrafting.burning
mods.Minecraft.inworldcrafting.Burning
mods.minecraft.inWorldCrafting.burning
mods.minecraft.inWorldCrafting.Burning
mods.Minecraft.inWorldCrafting.burning
mods.Minecraft.inWorldCrafting.Burning
mods.minecraft.InWorldCrafting.burning
mods.minecraft.InWorldCrafting.Burning
mods.Minecraft.InWorldCrafting.burning
mods.Minecraft.InWorldCrafting.Burning
mods.minecraft.in_world_crafting.burning
mods.minecraft.in_world_crafting.Burning
mods.Minecraft.in_world_crafting.burning
mods.Minecraft.in_world_crafting.Burning
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.burning.add(Burning.BurningRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Burning Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    in_world_crafting.burning.recipeBuilder()
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

- `int`. Sets the time in ticks the item must be burning before it converts. Requires greater than 0. (Default `40`).

    ```groovy:no-line-numbers
    ticks(int)
    ```

- `Closure<Boolean>`. Sets an additional check that must be passed before the recipe runs, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    startCondition(Closure<Boolean>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.inworldcrafting.Burning$BurningRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.burning.recipeBuilder()
    .input(item('minecraft:netherrack'))
    .output(item('minecraft:nether_star'))
    .register()

in_world_crafting.burning.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .ticks(100)
    .register()

in_world_crafting.burning.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .ticks(10)
    .startCondition({ stack -> stack.getItem().getCount() > 5 })
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.burning.remove(Burning.BurningRecipe)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    in_world_crafting.burning.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.burning.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    in_world_crafting.burning.streamRecipes()
    ```
