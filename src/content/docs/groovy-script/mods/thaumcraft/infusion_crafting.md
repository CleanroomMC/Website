---
title: Infusion Crafting (Thaumcraft)
description: Combines any number of items and aspects together in the Infusion Altar, potentially requiring a specific research to be completed.
sidebar:
  label: Infusion Crafting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/InfusionCrafting.java
---

## Description

Combines any number of items and aspects together in the Infusion Altar, potentially requiring a specific research to be completed.

## Identifier

The identifier `mods.thaumcraft.infusion_crafting` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.tc.infusioncrafting
mods.tc.infusionCrafting
mods.tc.InfusionCrafting
mods.tc.infusion_crafting
mods.thaum.infusioncrafting
mods.thaum.infusionCrafting
mods.thaum.InfusionCrafting
mods.thaum.infusion_crafting
mods.thaumcraft.infusioncrafting
mods.thaumcraft.infusionCrafting
mods.thaumcraft.InfusionCrafting
mods.thaumcraft.infusion_crafting/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `research`, `outputResult`, `inst`, `aspects`, `centralItem`, `input`:

    ```groovy
    mods.thaumcraft.infusion_crafting.add(String, ItemStack, int, Collection<AspectStack>, IIngredient, IIngredient...)
    ```

### Recipe Builder

Just like other recipe types, the Infusion Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thaumcraft.infusion_crafting.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

- `AspectList`. Sets the Aspects and amounts required to complete the craft.

    ```groovy
    aspect(AspectList)
    aspect(AspectStack)
    aspect(String, int)
    aspect(AspectStack...)
    aspect(Collection<AspectStack>)
    ```

- `IIngredient`. Sets the item on the center pedestal. Requires not null.

    ```groovy
    mainInput(IIngredient)
    ```

- `int`. Sets the instability of the recipe. (Default `0`).

    ```groovy
    instability(int)
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy
    researchKey(String)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thaumcraft.api.crafting.InfusionRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.infusion_crafting.recipeBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .mainInput(item('minecraft:gunpowder'))
    .output(item('minecraft:gold_ingot'))
    .aspect(aspect('terra') * 20)
    .aspect('ignis', 30)
    .input(crystal('aer'))
    .input(crystal('ignis'))
    .input(crystal('aqua'))
    .input(crystal('terra'))
    .input(crystal('ordo'))
    .instability(10)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.thaumcraft.infusion_crafting.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thaumcraft.infusion_crafting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.infusion_crafting.removeByOutput(item('thaumcraft:crystal_terra'))
mods.thaumcraft.infusion_crafting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thaumcraft.infusion_crafting.streamRecipes()
    ```
