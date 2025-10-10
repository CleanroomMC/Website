---
title: "Witches' Cauldron"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts up to 10 input ingredients into up to 3 output itemstacks in the Witches' Cauldron while Magic Power is provided."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Cauldron.java"
---

# Witches' Cauldron (Bewitchment)

## Description

Converts up to 10 input ingredients into up to 3 output itemstacks in the Witches' Cauldron while Magic Power is provided.

:::::::::: details Info {open id="info"}
Some items cannot be used in the Witches' Cauldron due to conflicts with other effects - `bewitchment:wood_ash` cannot be used anywhere, while `bewitchment:mandrake_root` and `bewitchment:dimensional_sand` cannot be used as the first item.
::::::::::

:::::::::: details Info {open id="info"}
Magic Power is consumed at a rate of `16 * {itemCount - 1}` every second and each time an item is added to the Cauldron.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.cauldron/* Used as page default */ // [!code focus]
mods.bewitchment.Cauldron
```


## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.add(CauldronRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Witches' Cauldron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.recipeBuilder()
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

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.CauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.cauldron.recipeBuilder()
    .input(ore('logWood'))
    .input(item('minecraft:deadbush'))
    .input(item('minecraft:dye', 3))
    .output(item('bewitchment:catechu_brown'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.remove(CauldronRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.cauldron.remove(resource('bewitchment:catechu_brown'))
mods.bewitchment.cauldron.removeByInput(item('bewitchment:tongue_of_dog'))
mods.bewitchment.cauldron.removeByOutput(item('bewitchment:iron_gall_ink'))
mods.bewitchment.cauldron.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.cauldron.streamRecipes()
    ```
