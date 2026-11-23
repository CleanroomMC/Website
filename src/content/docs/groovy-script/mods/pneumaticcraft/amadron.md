---
title: "Amadron (PneumaticCraft: Repressurized)"
description: Uses an Amadron Tablet and linked inventories in world to trade via drones.
sidebar:
  label: Amadron
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/Amadron.java
---

## Description

Uses an Amadron Tablet and linked inventories in world to trade via drones.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Amadron recipes added or removed via GroovyScript will be saved to a config file in `config/pneumaticcraft/`, meaning changes made may persist unexpectedly through restarts.

</details>

## Identifier

The identifier `mods.pneumaticcraft.amadron` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.pneumaticcraft.amadron/* Used as page default */
mods.pneumaticcraft.Amadron
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Amadron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.amadron.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `boolean`. Sets if the Amadron recipe is periodic. (Default `false`).

    ```groovy
    periodic()
    periodic(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.AmadronOffer`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.amadron.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:gold_ingot'))
    .register()

mods.pneumaticcraft.amadron.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .output(item('minecraft:clay') * 3)
    .register()

mods.pneumaticcraft.amadron.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 10)
    .periodic()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.amadron.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.amadron.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.amadron.removeAll()
    ```

- Removes all static recipes:

    ```groovy
    mods.pneumaticcraft.amadron.removeAllStatic()
    ```

- Removes all periodic recipes:

    ```groovy
    mods.pneumaticcraft.amadron.removeAllPeriodic()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.amadron.removeByInput(item('minecraft:rotten_flesh'))
mods.pneumaticcraft.amadron.removeByOutput(item('minecraft:emerald'))
mods.pneumaticcraft.amadron.removeAll()
mods.pneumaticcraft.amadron.removeAllStatic()
mods.pneumaticcraft.amadron.removeAllPeriodic()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.amadron.streamRecipes()
    ```
