---
title: "Explosion Conversion"
titleTemplate: "In-World Crafting | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, with an optional fail rate."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/inworldcrafting/Explosion.java"
---

# Explosion Conversion (In-World Crafting)

## Description

Converts an input itemstack into an output itemstack, with an optional fail rate.

## Identifier

The identifier `in_world_crafting.explosion` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {7}
inworldcrafting.explosion
inworldcrafting.Explosion
inWorldCrafting.explosion
inWorldCrafting.Explosion
InWorldCrafting.explosion
InWorldCrafting.Explosion
in_world_crafting.explosion/* Used as page default */ // [!code focus]
in_world_crafting.Explosion
mc.inworldcrafting.explosion
mc.inworldcrafting.Explosion
MC.inworldcrafting.explosion
MC.inworldcrafting.Explosion
mc.inWorldCrafting.explosion
mc.inWorldCrafting.Explosion
MC.inWorldCrafting.explosion
MC.inWorldCrafting.Explosion
mc.InWorldCrafting.explosion
mc.InWorldCrafting.Explosion
MC.InWorldCrafting.explosion
MC.InWorldCrafting.Explosion
mc.in_world_crafting.explosion
mc.in_world_crafting.Explosion
MC.in_world_crafting.explosion
MC.in_world_crafting.Explosion
vanilla.inworldcrafting.explosion
vanilla.inworldcrafting.Explosion
Vanilla.inworldcrafting.explosion
Vanilla.inworldcrafting.Explosion
vanilla.inWorldCrafting.explosion
vanilla.inWorldCrafting.Explosion
Vanilla.inWorldCrafting.explosion
Vanilla.inWorldCrafting.Explosion
vanilla.InWorldCrafting.explosion
vanilla.InWorldCrafting.Explosion
Vanilla.InWorldCrafting.explosion
Vanilla.InWorldCrafting.Explosion
vanilla.in_world_crafting.explosion
vanilla.in_world_crafting.Explosion
Vanilla.in_world_crafting.explosion
Vanilla.in_world_crafting.Explosion
minecraft.inworldcrafting.explosion
minecraft.inworldcrafting.Explosion
Minecraft.inworldcrafting.explosion
Minecraft.inworldcrafting.Explosion
minecraft.inWorldCrafting.explosion
minecraft.inWorldCrafting.Explosion
Minecraft.inWorldCrafting.explosion
Minecraft.inWorldCrafting.Explosion
minecraft.InWorldCrafting.explosion
minecraft.InWorldCrafting.Explosion
Minecraft.InWorldCrafting.explosion
Minecraft.InWorldCrafting.Explosion
minecraft.in_world_crafting.explosion
minecraft.in_world_crafting.Explosion
Minecraft.in_world_crafting.explosion
Minecraft.in_world_crafting.Explosion
mods.mc.inworldcrafting.explosion
mods.mc.inworldcrafting.Explosion
mods.MC.inworldcrafting.explosion
mods.MC.inworldcrafting.Explosion
mods.mc.inWorldCrafting.explosion
mods.mc.inWorldCrafting.Explosion
mods.MC.inWorldCrafting.explosion
mods.MC.inWorldCrafting.Explosion
mods.mc.InWorldCrafting.explosion
mods.mc.InWorldCrafting.Explosion
mods.MC.InWorldCrafting.explosion
mods.MC.InWorldCrafting.Explosion
mods.mc.in_world_crafting.explosion
mods.mc.in_world_crafting.Explosion
mods.MC.in_world_crafting.explosion
mods.MC.in_world_crafting.Explosion
mods.vanilla.inworldcrafting.explosion
mods.vanilla.inworldcrafting.Explosion
mods.Vanilla.inworldcrafting.explosion
mods.Vanilla.inworldcrafting.Explosion
mods.vanilla.inWorldCrafting.explosion
mods.vanilla.inWorldCrafting.Explosion
mods.Vanilla.inWorldCrafting.explosion
mods.Vanilla.inWorldCrafting.Explosion
mods.vanilla.InWorldCrafting.explosion
mods.vanilla.InWorldCrafting.Explosion
mods.Vanilla.InWorldCrafting.explosion
mods.Vanilla.InWorldCrafting.Explosion
mods.vanilla.in_world_crafting.explosion
mods.vanilla.in_world_crafting.Explosion
mods.Vanilla.in_world_crafting.explosion
mods.Vanilla.in_world_crafting.Explosion
mods.minecraft.inworldcrafting.explosion
mods.minecraft.inworldcrafting.Explosion
mods.Minecraft.inworldcrafting.explosion
mods.Minecraft.inworldcrafting.Explosion
mods.minecraft.inWorldCrafting.explosion
mods.minecraft.inWorldCrafting.Explosion
mods.Minecraft.inWorldCrafting.explosion
mods.Minecraft.inWorldCrafting.Explosion
mods.minecraft.InWorldCrafting.explosion
mods.minecraft.InWorldCrafting.Explosion
mods.Minecraft.InWorldCrafting.explosion
mods.Minecraft.InWorldCrafting.Explosion
mods.minecraft.in_world_crafting.explosion
mods.minecraft.in_world_crafting.Explosion
mods.Minecraft.in_world_crafting.explosion
mods.Minecraft.in_world_crafting.Explosion
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.explosion.add(Explosion.ExplosionRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Explosion Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    in_world_crafting.explosion.recipeBuilder()
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

- `float`. Sets the chance the conversion occurs instead of the input being destroyed. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    chance(float)
    ```

- `Closure<Boolean>`. Sets an additional check that must be passed before the recipe runs, with the Closure taking 2 parameters, `World world` and `BlockPos blockPos`.

    ```groovy:no-line-numbers
    startCondition(Closure<Boolean>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.inworldcrafting.Explosion$ExplosionRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.explosion.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:nether_star'))
    .chance(0.4f)
    .register()

in_world_crafting.explosion.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .startCondition({ entityItem, itemStack -> entityItem.posY <= 60 })
    .register()

in_world_crafting.explosion.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    in_world_crafting.explosion.remove(Explosion.ExplosionRecipe)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    in_world_crafting.explosion.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
in_world_crafting.explosion.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    in_world_crafting.explosion.streamRecipes()
    ```
