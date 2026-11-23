---
title: "Liquid Fuel (PneumaticCraft: Repressurized)"
description: Converts fluid into Pressure in a Liquid Compressor.
sidebar:
  label: Liquid Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/LiquidFuel.java
---

## Description

Converts fluid into Pressure in a Liquid Compressor.

## Identifier

The identifier `mods.pneumaticcraft.liquid_fuel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.liquidfuel
mods.pneumaticcraft.liquidFuel
mods.pneumaticcraft.LiquidFuel
mods.pneumaticcraft.liquid_fuel/* Used as page default */
```

</details>

## Adding Entries

- Adds entries in the format `fluid`, `pressure`:

    ```groovy
    mods.pneumaticcraft.liquid_fuel.add(String, int)
    ```

- Adds entries in the format `fluid`, `pressure`:

    ```groovy
    mods.pneumaticcraft.liquid_fuel.add(FluidStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Liquid Fuel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.liquid_fuel.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `int`. Sets the Pressure created by the fluid. (Default `0`).

    ```groovy
    pressure(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<net.minecraftforge.fluids.FluidStack, java.lang.Integer>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.liquid_fuel.recipeBuilder()
    .fluidInput(fluid('water'))
    .pressure(100_000_000)
    .register()
```

</details>

</details>

## Removing Entries

- Removes entries with the given `fluid`:

    ```groovy
    mods.pneumaticcraft.liquid_fuel.remove(String)
    ```

- Removes entries with the given `fluid`:

    ```groovy
    mods.pneumaticcraft.liquid_fuel.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.liquid_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.liquid_fuel.remove(fluid('lava'))
mods.pneumaticcraft.liquid_fuel.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.liquid_fuel.streamRecipes()
    ```
