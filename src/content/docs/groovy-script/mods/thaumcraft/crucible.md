---
title: Crucible (Thaumcraft)
description: Combines an item with any number of Aspects to drop an output itemstack, potentially requiring a specific research to be completed.
sidebar:
  label: Crucible
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/Crucible.java
---

## Description

Combines an item with any number of Aspects to drop an output itemstack, potentially requiring a specific research to be completed.

## Identifier

The identifier `mods.thaumcraft.crucible` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {5}
mods.tc.crucible
mods.tc.Crucible
mods.thaum.crucible
mods.thaum.Crucible
mods.thaumcraft.crucible/* Used as page default */
mods.thaumcraft.Crucible
```

</details>

## Adding Recipes

- Adds recipes in the format `researchKey`, `result`, `catalyst`, `tags`:

    ```groovy
    mods.thaumcraft.crucible.add(String, ItemStack, IIngredient, AspectList)
    ```

### Recipe Builder

Just like other recipe types, the Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thaumcraft.crucible.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `AspectList`. Sets the Aspects and amounts required to convert. Requires greater than 0.

    ```groovy
    aspect(AspectList)
    aspect(AspectStack)
    aspect(String, int)
    aspect(AspectStack...)
    aspect(Collection<AspectStack>)
    ```

- `IIngredient`. Sets the input item. Requires not null.

    ```groovy
    catalyst(IIngredient)
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy
    researchKey(String)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thaumcraft.api.crafting.CrucibleRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.crucible.recipeBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .catalyst(item('minecraft:rotten_flesh'))
    .output(item('minecraft:gold_ingot'))
    .aspect(aspect('metallum') * 10)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.thaumcraft.crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thaumcraft.crucible.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.crucible.removeByOutput(item('minecraft:gunpowder'))
mods.thaumcraft.crucible.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thaumcraft.crucible.streamRecipes()
    ```
