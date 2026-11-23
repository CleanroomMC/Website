---
title: Generators (Extra Utilities 2)
description: Converts up to two input itemstacks and an input fluidstack into energy over time.
sidebar:
  label: Generators
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Generator.java
---

## Description

Converts up to two input itemstacks and an input fluidstack into energy over time.

## Identifier

The identifier `mods.extrautils2.generator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.extrautils2.generator/* Used as page default */
mods.extrautils2.Generator
mods.extrautilities2.generator
mods.extrautilities2.Generator
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Generators also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.extrautils2.generator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 2.

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

- `int`. Sets the total energy produced by the recipe. Requires greater than 0. (Default `0`).

    ```groovy
    energy(int)
    ```

- `Machine`. Sets the generator the recipe is added to. Some generators require different numbers of input itemstacks or fluidstacks. Requires not null.

    ```groovy
    generator(String)
    generator(Machine)
    generator(ResourceLocation)
    ```

- `int`. Sets the energy produced per tick by the recipe. Requires greater than 0. (Default `0`).

    ```groovy
    energyPerTick(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.rwtema.extrautils2.api.machine.IMachineRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_pink')
    .input(item('minecraft:clay'))
    .energy(1000)
    .energyPerTick(100)
    .register()

mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_slime')
    .input(item('minecraft:clay') * 3)
    .input(item('minecraft:gold_ingot'))
    .energy(1000000)
    .energyPerTick(100)
    .register()

mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_redstone')
    .input(item('minecraft:clay') * 3)
    .fluidInput(fluid('water') * 300)
    .energy(1000)
    .energyPerTick(100)
    .register()

mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_lava')
    .fluidInput(fluid('water') * 300)
    .energy(100)
    .energyPerTick(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes a Generator recipe in the format `generator`, `itemstack`:

    ```groovy
    mods.extrautils2.generator.remove(String, ItemStack)
    ```

- Removes a Generator recipe in the format `generator`, `itemstack`:

    ```groovy
    mods.extrautils2.generator.remove(Machine, ItemStack)
    ```

- Removes a Generator recipe in the format `generator`, `fluidstack`:

    ```groovy
    mods.extrautils2.generator.remove(String, FluidStack)
    ```

- Removes a Generator recipe in the format `generator`, `fluidstack`:

    ```groovy
    mods.extrautils2.generator.remove(Machine, FluidStack)
    ```

- Removes a Generator recipe in the format `generator`, `itemstack`:

    ```groovy
    mods.extrautils2.generator.remove(ResourceLocation, ItemStack)
    ```

- Removes a Generator recipe in the format `generator`, `fluidstack`:

    ```groovy
    mods.extrautils2.generator.remove(ResourceLocation, FluidStack)
    ```

- Removes all recipes with given generator:

    ```groovy
    mods.extrautils2.generator.removeByGenerator(String)
    ```

- Removes all recipes with given generator:

    ```groovy
    mods.extrautils2.generator.removeByGenerator(Machine)
    ```

- Removes all recipes with given generator:

    ```groovy
    mods.extrautils2.generator.removeByGenerator(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extrautils2.generator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.generator.remove('extrautils2:generator_culinary', item('minecraft:apple'))
mods.extrautils2.generator.remove('extrautils2:generator_lava', fluid('lava'))
mods.extrautils2.generator.removeByGenerator('extrautils2:generator_death')
mods.extrautils2.generator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extrautils2.generator.streamRecipes()
    ```
