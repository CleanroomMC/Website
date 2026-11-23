---
title: "XP Fluid (PneumaticCraft: Repressurized)"
description: Controls what fluids are considered XP Fluids and how much experience they provide.
sidebar:
  label: XP Fluid
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/XpFluid.java
---

## Description

Controls what fluids are considered XP Fluids and how much experience they provide.

## Identifier

The identifier `mods.pneumaticcraft.xp_fluid` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.xpfluid
mods.pneumaticcraft.xpFluid
mods.pneumaticcraft.XpFluid
mods.pneumaticcraft.xp_fluid/* Used as page default */
```

</details>

## Adding Entries

- Adds entries in the format `fluid`, `ratio`:

    ```groovy
    mods.pneumaticcraft.xp_fluid.add(Fluid, int)
    ```

- Adds entries in the format `fluid`, `ratio`:

    ```groovy
    mods.pneumaticcraft.xp_fluid.add(FluidStack, int)
    ```

### Recipe Builder

Just like other recipe types, the XP Fluid also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.xp_fluid.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `int`. Sets the amount of experience provided by the fluid for the purpose of determining the ratio between xp fluids. (Default `0`).

    ```groovy
    ratio(int)
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
mods.pneumaticcraft.xp_fluid.recipeBuilder()
    .fluidInput(fluid('lava'))
    .ratio(5)
    .register()
```

</details>

</details>

## Removing Entries

- Removes entries for the given `fluid`:

    ```groovy
    mods.pneumaticcraft.xp_fluid.remove(Fluid)
    ```

- Removes entries for the given `fluid`:

    ```groovy
    mods.pneumaticcraft.xp_fluid.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.xp_fluid.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.xp_fluid.remove(fluid('xpjuice'))
mods.pneumaticcraft.xp_fluid.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.xp_fluid.streamRecipes()
    ```
