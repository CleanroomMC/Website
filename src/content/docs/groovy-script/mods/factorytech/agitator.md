---
title: Fluid Agitator (Factory Tech)
description: Converts either one or two input fluidstacks and up to one input itemstack into an output itemstack, output fluidstack, or both.
sidebar:
  label: Fluid Agitator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Agitator.java
---

## Description

Converts either one or two input fluidstacks and up to one input itemstack into an output itemstack, output fluidstack, or both.

## Identifier

The identifier `mods.factorytech.agitator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.factorytech.agitator/* Used as page default */
mods.factorytech.Agitator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.factorytech.agitator.add(TileEntityAgitator.AgitatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Fluid Agitator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.factorytech.agitator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.tileentity.specialized.TileEntityAgitator$AgitatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.agitator.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.agitator.recipeBuilder()
    .fluidInput(fluid('ftglowstone') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.factorytech.agitator.recipeBuilder()
    .fluidInput(fluid('lava') * 100, fluid('water') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.factorytech.agitator.recipeBuilder()
    .fluidInput(fluid('lava') * 100, fluid('ftglowstone') * 100)
    .fluidOutput(fluid('ftglowstone') * 100)
    .register()

mods.factorytech.agitator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:diamond') * 5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.factorytech.agitator.remove(TileEntityAgitator.AgitatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.factorytech.agitator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.factorytech.agitator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.factorytech.agitator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.agitator.removeByInput(fluid('lava'))
mods.factorytech.agitator.removeByInput(fluid('ftglowstone'))
mods.factorytech.agitator.removeByInput(item('minecraft:sand'))
mods.factorytech.agitator.removeByOutput(fluid('h2so4'))
mods.factorytech.agitator.removeByOutput(item('minecraft:stone'))
mods.factorytech.agitator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.factorytech.agitator.streamRecipes()
    ```
