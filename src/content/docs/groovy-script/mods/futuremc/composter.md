---
title: Composter (Future MC)
description: Converts input items into a chance to get a layer of compost, with 8 layers providing a single bonemeal.
sidebar:
  label: Composter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Composter.java
---

## Description

Converts input items into a chance to get a layer of compost, with 8 layers providing a single bonemeal.

## Identifier

The identifier `mods.futuremc.composter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.futuremc.composter/* Used as page default */
mods.futuremc.Composter
```

</details>

## Adding Entries

- Adds entries in the format `ingredient`, `chance`:

    ```groovy
    mods.futuremc.composter.add(Ingredient, byte)
    ```

- Adds entries in the format `ingredient`, `chance`:

    ```groovy
    mods.futuremc.composter.add(IIngredient, byte)
    ```

### Recipe Builder

Just like other recipe types, the Composter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.futuremc.composter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the chance the recipe has to provide a layer of compost. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    chance(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<net.minecraft.item.crafting.Ingredient, java.lang.Byte>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.composter.recipeBuilder()
    .input(item('minecraft:clay'))
    .chance(100)
    .register()

mods.futuremc.composter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .chance(30)
    .register()
```

</details>

</details>

## Removing Entries

- Removes an entry with the same Ingredient:

    ```groovy
    mods.futuremc.composter.remove(Ingredient)
    ```

- Removes an entry with the same Ingredient:

    ```groovy
    mods.futuremc.composter.remove(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.futuremc.composter.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.futuremc.composter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.composter.removeByInput(item('minecraft:cactus'))
mods.futuremc.composter.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.futuremc.composter.streamRecipes()
    ```
