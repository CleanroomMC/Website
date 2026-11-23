---
title: Refrigerator (Factory Tech)
description: Converts an input fluidstack into an output itemstack.
sidebar:
  label: Refrigerator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Refrigerator.java
---

## Description

Converts an input fluidstack into an output itemstack.

## Identifier

The identifier `mods.factorytech.refrigerator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.factorytech.refrigerator/* Used as page default */
mods.factorytech.Refrigerator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.factorytech.refrigerator.add(MachineRecipes.MachineRecipe<FluidStack, ItemStack>)
    ```

### Recipe Builder

Just like other recipe types, the Refrigerator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.factorytech.refrigerator.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.auxiliary.MachineRecipes$MachineRecipe<net.minecraftforge.fluids.FluidStack, net.minecraft.item.ItemStack>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.refrigerator.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.refrigerator.recipeBuilder()
    .fluidInput(fluid('lava') * 30)
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.factorytech.refrigerator.remove(MachineRecipes.MachineRecipe<FluidStack, ItemStack>)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.factorytech.refrigerator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.factorytech.refrigerator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.factorytech.refrigerator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.refrigerator.removeByInput(fluid('water'))
mods.factorytech.refrigerator.removeByOutput(item('minecraft:obsidian'))
mods.factorytech.refrigerator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.factorytech.refrigerator.streamRecipes()
    ```
