---
title: Incense (Bewitchment)
description: Converts up to 8 input ingredients in the Brazier when activated by a Flint and Steel for any number of potion effects that apply whenever a player wakes up nearby.
sidebar:
  label: Incense
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Incense.java
---

## Description

Converts up to 8 input ingredients in the Brazier when activated by a Flint and Steel for any number of potion effects that apply whenever a player wakes up nearby.

## Identifier

The identifier `mods.bewitchment.incense` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.incense/* Used as page default */
mods.bewitchment.Incense
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.incense.add(Incense)
    ```

### Recipe Builder

Just like other recipe types, the Incense also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.incense.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 8.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the time the Brazier will remain active before being extinguished in seconds. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `List<Potion>`. Sets the potion effects provided upon waking up while the Incense is active. Requires greater than or equal to 1.

    ```groovy
    potion(Potion)
    potion(Potion...)
    potion(Collection<Potion>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.Incense`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.incense.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 5, item('minecraft:iron_ingot'))
    .potion(potion('minecraft:strength'), potion('minecraft:resistance'))
    .time(10000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.incense.remove(Incense)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.incense.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.incense.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.incense.removeByInput(IIngredient)
    ```

- Removes all recipes providing the given potion effect:

    ```groovy
    mods.bewitchment.incense.removeByPotion(Potion)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.incense.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.incense.removeByInput(item('bewitchment:essence_of_vitality'))
mods.bewitchment.incense.removeByPotion(potion('minecraft:haste'))
mods.bewitchment.incense.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.incense.streamRecipes()
    ```
