---
title: "Animator"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item, Life amount from Life Crystals, and Fuel from Sulfur into an output itemstack, summoning an entity, or a random item from a loottable."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/Animator.java"
---

# Animator (The Betweenlands)

## Description

Converts an input item, Life amount from Life Crystals, and Fuel from Sulfur into an output itemstack, summoning an entity, or a random item from a loottable.

## Identifier

The identifier `mods.thebetweenlands.animator` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {3}
mods.betweenlands.animator
mods.betweenlands.Animator
mods.thebetweenlands.animator/* Used as page default */ // [!code focus]
mods.thebetweenlands.Animator
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.add(IAnimatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Animator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0, less than or equal to 1, and Only one of output, entity, or lootTable can be set.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the fuel consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    fuel(int)
    ```

- `int`. Sets the life consumed from the life crystal. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    life(int)
    ```

- `Class<? extends Entity>`. Sets the entity being spawned. Requires Only one of output, entity, or lootTable can be set.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(Class<? extends Entity>)
    ```

- `ResourceLocation`. Sets the entity to render, typically the same as the entity to be spawned.

    ```groovy:no-line-numbers
    render(ResourceLocation)
    ```

- `ResourceLocation`. Sets the LootTable used to generate outputs. Requires Only one of output, entity, or lootTable can be set.

    ```groovy:no-line-numbers
    lootTable(ResourceLocation)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IAnimatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .life(1)
    .fuel(1)
    .register()

mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .lootTable(resource('minecraft:entities/zombie'))
    .life(5)
    .fuel(1)
    .register()

mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .entity(entity('minecraft:zombie').getEntityClass())
    .life(1)
    .fuel(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.remove(IAnimatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByInput(IIngredient)
    ```

- Removes all entries that match the given entity:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByEntity(EntityEntry)
    ```

- Removes all entries that match the given entity:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByEntity(Class<? extends Entity>)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByOutput(IIngredient)
    ```

- Removes all entries that output the given Loot Table:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByLootTable(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.animator.removeByInput(item('thebetweenlands:bone_leggings'))
mods.thebetweenlands.animator.removeByEntity(entity('thebetweenlands:sporeling'))
mods.thebetweenlands.animator.removeByOutput(item('thebetweenlands:items_misc:46'))
mods.thebetweenlands.animator.removeByLootTable(resource('thebetweenlands:animator/scroll'))
mods.thebetweenlands.animator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.streamRecipes()
    ```
