---
title: Straw (Industrial Foregoing)
description: Converts an fluid block in-world into various effects for the player when consumed via a straw.
sidebar:
  label: Straw
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/Straw.java
---

## Description

Converts an fluid block in-world into various effects for the player when consumed via a straw.

## Identifier

The identifier `mods.industrialforegoing.straw` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.industrialforegoing.straw/* Used as page default */
mods.industrialforegoing.Straw
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.industrialforegoing.straw.add(StrawHandler)
    ```

- Adds a Straw recipe in the format `fluidInput`, `effect`:

    ```groovy
    mods.industrialforegoing.straw.add(FluidStack, Collection<PotionEffect>)
    ```

- Adds a Straw recipe in the format `name`, `fluidInput`, `effect`:

    ```groovy
    mods.industrialforegoing.straw.add(String, FluidStack, Collection<PotionEffect>)
    ```

### Recipe Builder

Just like other recipe types, the Straw also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.industrialforegoing.straw.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `Collection<PotionEffect>`. Sets what potion effects are given upon consuming the fluid. Requires greater than or equal to 1.

    ```groovy
    effect(PotionEffect)
    effect(PotionEffect...)
    effect(Collection<PotionEffect>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.buuz135.industrial.api.straw.StrawHandler`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.straw.recipeBuilder()
    .fluidInput(fluid('if.pink_slime'))
    .effect(new PotionEffect(potion('minecraft:strength'), 1800, 3))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.industrialforegoing.straw.remove(StrawHandler)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.industrialforegoing.straw.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.industrialforegoing.straw.remove(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.straw.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.straw.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.straw.streamRecipes()
    ```
