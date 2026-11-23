---
title: Thermopile (Magneticraft)
description: The Thermopile generates energy from temperature differences modified by the thermal resistances of the block. This lets you generate energy when placed on either side of a Thermopile.
sidebar:
  label: Thermopile
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/Thermopile.java
---

## Description

The Thermopile generates energy from temperature differences modified by the thermal resistances of the block. This lets you generate energy when placed on either side of a Thermopile.

## Identifier

The identifier `mods.magneticraft.thermopile` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.magneticraft.thermopile/* Used as page default */
mods.magneticraft.Thermopile
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.thermopile.add(IThermopileRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Thermopile also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.thermopile.recipeBuilder()
    ```

---

- `IBlockState`. Sets the IBlockState being used. Requires not null.

    ```groovy
    state(IBlockState)
    ```

- `float`. Sets the temperature of the block. (Default `0.0f`).

    ```groovy
    temperature(float)
    ```

- `float`. Sets the thermal resistance of the block. (Default `0.0f`).

    ```groovy
    conductivity(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.generators.thermopile.IThermopileRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.thermopile.recipeBuilder()
    .state(blockstate('minecraft:clay'))
    .conductivity(10)
    .temperature(500)
    .register()

mods.magneticraft.thermopile.recipeBuilder()
    .state(blockstate('minecraft:diamond_block'))
    .conductivity(70)
    .temperature(700)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.thermopile.remove(IThermopileRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.thermopile.removeByInput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.thermopile.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.thermopile.removeByInput(blockstate('minecraft:ice'))
mods.magneticraft.thermopile.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.thermopile.streamRecipes()
    ```
