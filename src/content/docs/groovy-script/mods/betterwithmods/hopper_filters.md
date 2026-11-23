---
title: Hopper Filters (Better With Mods)
description: Items placed in the middle slot of the Filtered Hopper to restrict what is capable of passing through.
sidebar:
  label: Hopper Filters
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/HopperFilters.java
---

## Description

Items placed in the middle slot of the Filtered Hopper to restrict what is capable of passing through.

## Identifier

The identifier `mods.betterwithmods.hopper_filters` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.betterwithmods.hopperfilters
mods.betterwithmods.hopperFilters
mods.betterwithmods.HopperFilters
mods.betterwithmods.hopper_filters/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Hopper Filters also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithmods.hopper_filters.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the valid items allowed through the filter. Requires greater than or equal to 0.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `IIngredient`. Sets the filter itemstack. Requires not null.

    ```groovy
    filter(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.api.tile.IHopperFilter`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.hopper_filters.recipeBuilder()
    .name('too_weak_to_stop')
    .filter(item('minecraft:string'))
    .register()

mods.betterwithmods.hopper_filters.recipeBuilder()
    .name('groovyscript:clay_only')
    .filter(item('minecraft:clay'))
    .input(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the filter with the given name:

    ```groovy
    mods.betterwithmods.hopper_filters.removeByName(String)
    ```

- Removes all filters with the given filter item:

    ```groovy
    mods.betterwithmods.hopper_filters.removeByFilter(IIngredient)
    ```

- Removes all filters with the given items allowed through the filter:

    ```groovy
    mods.betterwithmods.hopper_filters.removeByFiltered(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.hopper_filters.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.hopper_filters.removeByName('betterwithmods:ladder')
mods.betterwithmods.hopper_filters.removeByFilter(item('minecraft:trapdoor'))
mods.betterwithmods.hopper_filters.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.hopper_filters.streamRecipes()
    ```
