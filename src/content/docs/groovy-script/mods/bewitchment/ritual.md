---
title: Rituals (Bewitchment)
description: Converts up to 10 input ingredients into a ritual. The ritual can output up to 5 items, can require specific small, medium, and large circle sizes, can require a specific type for each circle, can require a specific entity nearby as a sacrifice, can set the time the ritual takes, and can set the Magic Power consumed to start and run the ritual.
sidebar:
  label: Rituals
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Ritual.java
---

## Description

Converts up to 10 input ingredients into a ritual. The ritual can output up to 5 items, can require specific small, medium, and large circle sizes, can require a specific type for each circle, can require a specific entity nearby as a sacrifice, can set the time the ritual takes, and can set the Magic Power consumed to start and run the ritual.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Due to the complexity of custom rituals, only the basic item output rituals can be constructed with the Recipe Builder. To create your own custom rituals, extend the class `com.bewitchment.api.registry.Ritual` and add it via `mods.bewitchment.ritual.add(Ritual)`.

</details>

## Identifier

The identifier `mods.bewitchment.ritual` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.ritual/* Used as page default */
mods.bewitchment.Ritual
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.ritual.add(Ritual)
    ```

### Recipe Builder

Just like other recipe types, the Rituals also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.ritual.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 10.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 5.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the type of chalk used for the big circle. (Default `0`).

    ```groovy
    big(int)
    ```

- `int`. Sets the time in ticks the ritual takes to complete. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the type of chalk used for the small circle. Requires greater than 0. (Default `0`).

    ```groovy
    small(int)
    ```

- `int`. Sets the type of chalk used for the medium circle. (Default `0`).

    ```groovy
    medium(int)
    ```

- `Predicate<EntityLivingBase>`. Sets what entities are valid sacrifices, if any.

    ```groovy
    sacrifice(EntityEntry)
    sacrifice(Predicate<EntityLivingBase>)
    ```

- `int`. Sets the Magic Power consumed every tick. Requires greater than 0. (Default `0`).

    ```groovy
    runningPower(int)
    ```

- `int`. Sets the starting Magic Power consumed by the ritual. Requires greater than 0. (Default `0`).

    ```groovy
    startingPower(int)
    ```

- `boolean`. Sets if the ritual can be activated via a Waystone instead of immediately. (Default `true`).

    ```groovy
    canBePerformedRemotely(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.Ritual`).

    ```groovy
    register()
    ```

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.ritual.remove(Ritual)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.ritual.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.ritual.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.ritual.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.ritual.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.ritual.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.ritual.removeByInput(item('minecraft:poisonous_potato'))
mods.bewitchment.ritual.removeByOutput(item('bewitchment:purifying_earth'))
mods.bewitchment.ritual.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.ritual.streamRecipes()
    ```
