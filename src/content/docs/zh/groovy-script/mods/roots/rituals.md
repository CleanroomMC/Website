---
title: Rituals (Roots 3)
description: Set the Pyre Ritual recipe and control all stats. Dump the modifiable stats into `roots.log` by running `/roots rituals`.
sidebar:
  label: Rituals
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Rituals.java
---

## Description

Set the Pyre Ritual recipe and control all stats. Dump the modifiable stats into `roots.log` by running `/roots rituals`.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.

</details>

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.roots.rituals/* Used as page default */
mods.roots.Rituals
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Rituals also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.roots.rituals.recipeBuilder()</summary>

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 5.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `RitualBase`. Sets the ritual being modified. Requires not null.

    ```groovy
    ritual(RitualBase)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.ritual.RitualBase$RitualRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.rituals.recipeBuilder()
    .ritual(ritual('ritual_healing_aura'))
    .input(item('minecraft:clay'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>
