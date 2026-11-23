---
title: Animator (The Betweenlands)
description: Converts an input item, Life amount from Life Crystals, and Fuel from Sulfur into an output itemstack, summoning an entity, or a random item from a loottable.
sidebar:
  label: Animator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/Animator.java
---

## Description

Converts an input item, Life amount from Life Crystals, and Fuel from Sulfur into an output itemstack, summoning an entity, or a random item from a loottable.

## Identifier

The identifier `mods.thebetweenlands.animator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.betweenlands.animator
mods.betweenlands.Animator
mods.thebetweenlands.animator/* Used as page default */
mods.thebetweenlands.Animator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.thebetweenlands.animator.add(IAnimatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Animator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thebetweenlands.animator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0, less than or equal to 1, and Only one of output, entity, or lootTable can be set.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the fuel consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    fuel(int)
    ```

- `int`. Sets the life consumed from the life crystal. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    life(int)
    ```

- `Class<? extends Entity>`. Sets the entity being spawned. Requires Only one of output, entity, or lootTable can be set.

    ```groovy
    entity(EntityEntry)
    entity(Class<? extends Entity>)
    ```

- `ResourceLocation`. Sets the entity to render, typically the same as the entity to be spawned.

    ```groovy
    render(ResourceLocation)
    ```

- `ResourceLocation`. Sets the LootTable used to generate outputs. Requires Only one of output, entity, or lootTable can be set.

    ```groovy
    lootTable(ResourceLocation)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IAnimatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
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

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.thebetweenlands.animator.remove(IAnimatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thebetweenlands.animator.removeByInput(IIngredient)
    ```

- Removes all entries that match the given entity:

    ```groovy
    mods.thebetweenlands.animator.removeByEntity(EntityEntry)
    ```

- Removes all entries that match the given entity:

    ```groovy
    mods.thebetweenlands.animator.removeByEntity(Class<? extends Entity>)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thebetweenlands.animator.removeByOutput(IIngredient)
    ```

- Removes all entries that output the given Loot Table:

    ```groovy
    mods.thebetweenlands.animator.removeByLootTable(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thebetweenlands.animator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.animator.removeByInput(item('thebetweenlands:bone_leggings'))
mods.thebetweenlands.animator.removeByEntity(entity('thebetweenlands:sporeling'))
mods.thebetweenlands.animator.removeByOutput(item('thebetweenlands:items_misc:46'))
mods.thebetweenlands.animator.removeByLootTable(resource('thebetweenlands:animator/scroll'))
mods.thebetweenlands.animator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thebetweenlands.animator.streamRecipes()
    ```
