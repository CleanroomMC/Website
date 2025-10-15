---
title: "Sigils"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts up to 25 itemstacks into a single output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Sigil.java"
---

# Sigils (Bewitchment)

## Description

Converts up to 25 itemstacks into a single output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.sigil/* Used as page default */ // [!code focus]
mods.bewitchment.Sigil
```


## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.add(SigilRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Sigils also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 25.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.SigilRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.remove(SigilRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.sigil.remove(resource('bewitchment:mending'))
mods.bewitchment.sigil.removeByInput(item('bewitchment:bottle_of_blood'))
mods.bewitchment.sigil.removeByOutput(item('bewitchment:sigil_disorientation'))
mods.bewitchment.sigil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.sigil.streamRecipes()
    ```
