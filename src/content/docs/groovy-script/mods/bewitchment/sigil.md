---
title: Sigils (Bewitchment)
description: Converts up to 25 itemstacks into a single output itemstack.
sidebar:
  label: Sigils
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Sigil.java
---

## Description

Converts up to 25 itemstacks into a single output itemstack.

## Identifier

The identifier `mods.bewitchment.sigil` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.sigil/* Used as page default */
mods.bewitchment.Sigil
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.sigil.add(SigilRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Sigils also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.sigil.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 25.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.SigilRecipe`).

    ```groovy
    register()
    ```

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.sigil.remove(SigilRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.sigil.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.sigil.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.sigil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.sigil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.sigil.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.sigil.remove(resource('bewitchment:mending'))
mods.bewitchment.sigil.removeByInput(item('bewitchment:bottle_of_blood'))
mods.bewitchment.sigil.removeByOutput(item('bewitchment:sigil_disorientation'))
mods.bewitchment.sigil.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.sigil.streamRecipes()
    ```
