---
title: Alloying (Tinkers' Construct)
description: Modifies what fluids can be mixed together in the Smeltery.
sidebar:
  label: Alloying
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/Alloying.java
---

## Description

Modifies what fluids can be mixed together in the Smeltery.

## Identifier

The identifier `mods.tconstruct.alloying` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ticon.alloying
mods.ticon.Alloying
mods.tconstruct.alloying/* Used as page default */
mods.tconstruct.Alloying
mods.tinkersconstruct.alloying
mods.tinkersconstruct.Alloying
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.tconstruct.alloying.add(AlloyRecipe)
    ```

- Adds a new recipe in the format `output`, `inputs`:

    ```groovy
    mods.tconstruct.alloying.add(FluidStack, FluidStack...)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.alloying.add(fluid('lava') * 144, fluid('water') * 500, fluid('iron') * 5, fluid('clay') * 60)
```

</details>

### Recipe Builder

Just like other recipe types, the Alloying also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.tconstruct.alloying.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 2.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.smeltery.AlloyRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.alloying.recipeBuilder()
    .fluidOutput(fluid('iron') * 3)
    .fluidInput(fluid('clay') * 1,fluid('lava') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.tconstruct.alloying.remove(AlloyRecipe)
    ```

- Removes all recipes that match the given inputs:

    ```groovy
    mods.tconstruct.alloying.removeByInputs(FluidStack...)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.tconstruct.alloying.removeByOutput(FluidStack)
    ```

- Removes all recipes that match the given output and the given inputs:

    ```groovy
    mods.tconstruct.alloying.removeByInputsAndOutput(FluidStack, FluidStack...)
    ```

- Removes all registered recipes:

    ```groovy
    mods.tconstruct.alloying.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.alloying.removeByInputs(fluid('cobalt')*2,fluid('ardite')*2)
mods.tconstruct.alloying.removeByOutput(fluid('pigiron'))
mods.tconstruct.alloying.removeByInputsAndOutput(fluid('knightslime')*72,fluid('iron')*72,fluid('stone')*144,fluid('purpleslime')*125)
mods.tconstruct.alloying.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.tconstruct.alloying.streamRecipes()
    ```
