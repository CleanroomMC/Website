---
title: Druid Altar (The Betweenlands)
description: Converts 4 input items into an output itemstack.
sidebar:
  label: Druid Altar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/DruidAltar.java
---

## Description

Converts 4 input items into an output itemstack.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The 4 sapling recipe to reactivate the Druid Altar recipe will always appear in JEI, even if it has been removed. Additionally, this recipe cannot be removed via `removeByInput` or `removeByOutput`.

</details>

## Identifier

The identifier `mods.thebetweenlands.druid_altar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.betweenlands.druidaltar
mods.betweenlands.druidAltar
mods.betweenlands.DruidAltar
mods.betweenlands.druid_altar
mods.thebetweenlands.druidaltar
mods.thebetweenlands.druidAltar
mods.thebetweenlands.DruidAltar
mods.thebetweenlands.druid_altar/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.thebetweenlands.druid_altar.add(IDruidAltarRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Druid Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thebetweenlands.druid_altar.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 4.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IDruidAltarRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.druid_altar.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.druid_altar.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_block'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.thebetweenlands.druid_altar.remove(IDruidAltarRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thebetweenlands.druid_altar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thebetweenlands.druid_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thebetweenlands.druid_altar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.druid_altar.removeByInput(item('thebetweenlands:swamp_talisman:1'))
mods.thebetweenlands.druid_altar.removeByOutput(item('thebetweenlands:swamp_talisman'))
mods.thebetweenlands.druid_altar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thebetweenlands.druid_altar.streamRecipes()
    ```
