---
title: "Straw"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an fluid block in-world into various effects for the player when consumed via a straw."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/Straw.java"
---

# Straw (Industrial Foregoing)

## Description

Converts an fluid block in-world into various effects for the player when consumed via a straw.

## Identifier

The identifier `mods.industrialforegoing.straw` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.industrialforegoing.straw/* Used as page default */ // [!code focus]
mods.industrialforegoing.Straw
```

::::::::::

## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.add(StrawHandler)
    ```

- Adds a Straw recipe in the format `fluidInput`, `effect`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.add(FluidStack, Collection<PotionEffect>)
    ```

- Adds a Straw recipe in the format `name`, `fluidInput`, `effect`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.add(String, FluidStack, Collection<PotionEffect>)
    ```

### Recipe Builder

Just like other recipe types, the Straw also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `Collection<PotionEffect>`. Sets what potion effects are given upon consuming the fluid. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    effect(PotionEffect)
    effect(PotionEffect...)
    effect(Collection<PotionEffect>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.buuz135.industrial.api.straw.StrawHandler`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.straw.recipeBuilder()
    .fluidInput(fluid('if.pink_slime'))
    .effect(new PotionEffect(potion('minecraft:strength'), 1800, 3))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.remove(StrawHandler)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.remove(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.straw.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.straw.streamRecipes()
    ```
