---
title: Stygian Iron Anvil (Woot)
description: Has a catalyst (which may or may not be consumed) placed on the anvil, with the input items thrown atop the base.
sidebar:
  label: Stygian Iron Anvil
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/StygianIronAnvil.java
---

## Description

Has a catalyst (which may or may not be consumed) placed on the anvil, with the input items thrown atop the base.

<details class="cr-block cr-note" open>
<summary>Note</summary>

The anvil must be above a Magma Block and then right clicked with a Hammer, converting the input items into the output item.

</details>

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

While more than 6 items can function as the input of a Stygian Iron Anvil recipe, only the first 6 are shown in JEI.

</details>

## Identifier

The identifier `mods.woot.stygian_iron_anvil` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.woot.anvil
mods.woot.Anvil
mods.woot.stygianironanvil
mods.woot.stygianIronAnvil
mods.woot.StygianIronAnvil
mods.woot.stygian_iron_anvil/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.woot.stygian_iron_anvil.add(IAnvilRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Stygian Iron Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.woot.stygian_iron_anvil.recipeBuilder()
    ```

---

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

- `ItemStack`. Sets the itemstack used for the base. Requires not isEmpty. (Default `ItemStack.EMPTY`).

    ```groovy
    base(ItemStack)
    ```

- `boolean`. Sets if the base is used as a catalyst and not consumed. (Default `false`).

    ```groovy
    preserveBase()
    preserveBase(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `ipsis.woot.crafting.IAnvilRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.stygian_iron_anvil.recipeBuilder()
    .input(item('minecraft:diamond'),item('minecraft:diamond'),item('minecraft:diamond'))
    .base(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .preserveBase(true)
    .register()

mods.woot.stygian_iron_anvil.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:iron_ingot'), item('minecraft:diamond_block'), item('minecraft:gold_block'), item('minecraft:iron_bars'), item('minecraft:magma'))
    .base(item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .preserveBase()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.woot.stygian_iron_anvil.remove(IAnvilRecipe)
    ```

- Removes all recipes that match the given base item:

    ```groovy
    mods.woot.stygian_iron_anvil.removeByBase(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.woot.stygian_iron_anvil.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.woot.stygian_iron_anvil.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.stygian_iron_anvil.removeByBase(item('minecraft:iron_bars'))
mods.woot.stygian_iron_anvil.removeByOutput(item('woot:stygianironplate'))
mods.woot.stygian_iron_anvil.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.woot.stygian_iron_anvil.streamRecipes()
    ```
