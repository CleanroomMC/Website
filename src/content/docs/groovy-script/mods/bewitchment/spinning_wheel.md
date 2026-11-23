---
title: Spinning Wheel (Bewitchment)
description: Converts up to 4 itemstacks into up to 2 output itemstacks in the Spinning Wheel at the cost of 1 Magic Power per tick. Takes 10 seconds.
sidebar:
  label: Spinning Wheel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/SpinningWheel.java
---

## Description

Converts up to 4 itemstacks into up to 2 output itemstacks in the Spinning Wheel at the cost of 1 Magic Power per tick. Takes 10 seconds.

## Identifier

The identifier `mods.bewitchment.spinning_wheel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.bewitchment.spinningwheel
mods.bewitchment.spinningWheel
mods.bewitchment.SpinningWheel
mods.bewitchment.spinning_wheel/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.spinning_wheel.add(SpinningWheelRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Spinning Wheel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.spinning_wheel.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.SpinningWheelRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.spinning_wheel.recipeBuilder()
    .input(item('minecraft:string'), item('minecraft:string'), item('minecraft:string'), item('minecraft:string'))
    .output(item('minecraft:gold_ingot') * 4, item('minecraft:web'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.spinning_wheel.remove(SpinningWheelRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.spinning_wheel.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.spinning_wheel.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.spinning_wheel.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.spinning_wheel.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.spinning_wheel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.spinning_wheel.remove(resource('bewitchment:cobweb'))
mods.bewitchment.spinning_wheel.removeByInput(item('minecraft:string'))
mods.bewitchment.spinning_wheel.removeByOutput(item('bewitchment:spirit_string'))
mods.bewitchment.spinning_wheel.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.spinning_wheel.streamRecipes()
    ```
