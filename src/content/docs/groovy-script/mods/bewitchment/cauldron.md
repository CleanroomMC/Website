---
title: Witches' Cauldron (Bewitchment)
description: Converts up to 10 input ingredients into up to 3 output itemstacks in the Witches' Cauldron while Magic Power is provided.
sidebar:
  label: Witches' Cauldron
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Cauldron.java
---

## Description

Converts up to 10 input ingredients into up to 3 output itemstacks in the Witches' Cauldron while Magic Power is provided.

<details class="cr-block cr-info" open>
<summary>Info</summary>

Some items cannot be used in the Witches' Cauldron due to conflicts with other effects - `bewitchment:wood_ash` cannot be used anywhere, while `bewitchment:mandrake_root` and `bewitchment:dimensional_sand` cannot be used as the first item.

</details>

<details class="cr-block cr-info" open>
<summary>Info</summary>

Magic Power is consumed at a rate of `16 * {itemCount - 1}` every second and each time an item is added to the Cauldron.

</details>

## Identifier

The identifier `mods.bewitchment.cauldron` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.cauldron/* Used as page default */
mods.bewitchment.Cauldron
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.cauldron.add(CauldronRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Witches' Cauldron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.cauldron.recipeBuilder()
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

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.CauldronRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.cauldron.recipeBuilder()
    .input(ore('logWood'))
    .input(item('minecraft:deadbush'))
    .input(item('minecraft:dye', 3))
    .output(item('bewitchment:catechu_brown'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.cauldron.remove(CauldronRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.cauldron.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.cauldron.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.cauldron.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.cauldron.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.cauldron.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.cauldron.remove(resource('bewitchment:catechu_brown'))
mods.bewitchment.cauldron.removeByInput(item('bewitchment:tongue_of_dog'))
mods.bewitchment.cauldron.removeByOutput(item('bewitchment:iron_gall_ink'))
mods.bewitchment.cauldron.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.cauldron.streamRecipes()
    ```
