---
title: Purification Chamber (Mekanism)
description: Converts an input itemstack and gasstack into an output itemstack.
sidebar:
  label: Purification Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/PurificationChamber.java
---

## Description

Converts an input itemstack and gasstack into an output itemstack.

## Identifier

The identifier `mods.mekanism.purification_chamber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.mekanism.purifier
mods.mekanism.Purifier
mods.mekanism.purificationchamber
mods.mekanism.purificationChamber
mods.mekanism.PurificationChamber
mods.mekanism.purification_chamber/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `gasInput`, `output`:

    ```groovy
    mods.mekanism.purification_chamber.add(IIngredient, GasStack, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.purification_chamber.add(item('minecraft:diamond'), gas('oxygen'), item('minecraft:nether_star'))
```

</details>

### Recipe Builder

Just like other recipe types, the Purification Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.purification_chamber.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

    ```groovy
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.PurificationRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.purification_chamber.recipeBuilder()
    .input(item('minecraft:diamond'))
    .gasInput(gas('deuterium'))
    .output(item('minecraft:nether_star'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.purification_chamber.removeByInput(IIngredient, GasStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.purification_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.purification_chamber.removeByInput(item('mekanism:oreblock:0'), gas('oxygen'))
mods.mekanism.purification_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.purification_chamber.streamRecipes()
    ```
