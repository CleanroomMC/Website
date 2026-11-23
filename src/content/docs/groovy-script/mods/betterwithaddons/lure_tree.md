---
title: Alicio Tree Foods (Better With Addons)
description: Converts an input item into an amount of food for the tree to gradually consume, eventually summoning a random creature nearby.
sidebar:
  label: Alicio Tree Foods
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/LureTree.java
---

## Description

Converts an input item into an amount of food for the tree to gradually consume, eventually summoning a random creature nearby.

<details class="cr-block cr-info" open>
<summary>Info</summary>

The creature spawned will be a passive animal, and undesirable animals can be blacklisted. The blacklist has no entries by default.

</details>

## Identifier

The identifier `mods.betterwithaddons.lure_tree` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.betterwithaddons.luretree
mods.betterwithaddons.lureTree
mods.betterwithaddons.LureTree
mods.betterwithaddons.lure_tree/* Used as page default */
```

</details>

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.lure_tree.add(TileEntityLureTree.TreeFood)
    ```

- Adds the given Entity to the blacklist:

    ```groovy
    mods.betterwithaddons.lure_tree.addBlacklist(EntityEntry)
    ```

- Adds the given Entity to the blacklist:

    ```groovy
    mods.betterwithaddons.lure_tree.addBlacklist(Class<? extends Entity>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.lure_tree.addBlacklist(entity('minecraft:chicken'))
```

</details>

### Recipe Builder

Just like other recipe types, the Alicio Tree Foods also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.lure_tree.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the value of the food. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    food(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.tileentity.TileEntityLureTree$TreeFood`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.lure_tree.recipeBuilder()
    .input(item('minecraft:diamond'))
    .food(1000)
    .register()

mods.betterwithaddons.lure_tree.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .food(4)
    .register()
```

</details>

</details>

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.lure_tree.remove(TileEntityLureTree.TreeFood)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.lure_tree.removeByInput(IIngredient)
    ```

- Removes the given Entity from the blacklist:

    ```groovy
    mods.betterwithaddons.lure_tree.removeBlacklist(EntityEntry)
    ```

- Removes the given Entity from the blacklist:

    ```groovy
    mods.betterwithaddons.lure_tree.removeBlacklist(Class<? extends Entity>)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.lure_tree.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.lure_tree.removeByInput(item('minecraft:rotten_flesh'))
mods.betterwithaddons.lure_tree.removeAll()
```

</details>

## Getting the value of entries

- Returns a list of all blacklisted classes that the Alicio Tree cannot spawn:

    ```groovy
    mods.betterwithaddons.lure_tree.getBlacklist()
    ```

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.lure_tree.streamRecipes()
    ```
