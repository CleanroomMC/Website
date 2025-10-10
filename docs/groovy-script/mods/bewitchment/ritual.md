---
title: "Rituals"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts up to 10 input ingredients into a ritual. The ritual can output up to 5 items, can require specific small, medium, and large circle sizes, can require a specific type for each circle, can require a specific entity nearby as a sacrifice, can set the time the ritual takes, and can set the Magic Power consumed to start and run the ritual."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Ritual.java"
---

# Rituals (Bewitchment)

## Description

Converts up to 10 input ingredients into a ritual. The ritual can output up to 5 items, can require specific small, medium, and large circle sizes, can require a specific type for each circle, can require a specific entity nearby as a sacrifice, can set the time the ritual takes, and can set the Magic Power consumed to start and run the ritual.

:::::::::: details Note {open id="note"}
Due to the complexity of custom rituals, only the basic item output rituals can be constructed with the Recipe Builder. To create your own custom rituals, extend the class `com.bewitchment.api.registry.Ritual` and add it via `mods.bewitchment.ritual.add(Ritual)`.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.ritual/* Used as page default */ // [!code focus]
mods.bewitchment.Ritual
```


## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.add(Ritual)
    ```


### Recipe Builder

Just like other recipe types, the Rituals also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 10.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 5.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the type of chalk used for the big circle. (Default `0`).

    ```groovy:no-line-numbers
    big(int)
    ```

- `int`. Sets the time in ticks the ritual takes to complete. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the type of chalk used for the small circle. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    small(int)
    ```

- `int`. Sets the type of chalk used for the medium circle. (Default `0`).

    ```groovy:no-line-numbers
    medium(int)
    ```

- `Predicate<EntityLivingBase>`. Sets what entities are valid sacrifices, if any.

    ```groovy:no-line-numbers
    sacrifice(EntityEntry)
    sacrifice(Predicate<EntityLivingBase>)
    ```

- `int`. Sets the Magic Power consumed every tick. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    runningPower(int)
    ```

- `int`. Sets the starting Magic Power consumed by the ritual. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    startingPower(int)
    ```

- `boolean`. Sets if the ritual can be activated via a Waystone instead of immediately. (Default `true`).

    ```groovy:no-line-numbers
    canBePerformedRemotely(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.remove(Ritual)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.ritual.removeByInput(item('minecraft:poisonous_potato'))
mods.bewitchment.ritual.removeByOutput(item('bewitchment:purifying_earth'))
mods.bewitchment.ritual.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.ritual.streamRecipes()
    ```
