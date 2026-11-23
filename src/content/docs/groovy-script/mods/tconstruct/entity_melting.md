---
title: Entity Melting (Tinkers' Construct)
description: Allows mobs to create a bit of fluid when hurt by the Smeltery.
sidebar:
  label: Entity Melting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/EntityMelting.java
---

## Description

Allows mobs to create a bit of fluid when hurt by the Smeltery.

## Identifier

The identifier `mods.tconstruct.entity_melting` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ticon.entitymelting
mods.ticon.entityMelting
mods.ticon.EntityMelting
mods.ticon.entity_melting
mods.tconstruct.entitymelting
mods.tconstruct.entityMelting
mods.tconstruct.EntityMelting
mods.tconstruct.entity_melting/* Used as page default */
mods.tinkersconstruct.entitymelting
mods.tinkersconstruct.entityMelting
mods.tinkersconstruct.EntityMelting
mods.tinkersconstruct.entity_melting
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Entity Melting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.tconstruct.entity_melting.recipeBuilder()
    ```

---

- `ResourceLocation`. The entity to melt. Requires not null.

    ```groovy
    input(String)
    input(EntityEntry)
    input(String, String)
    input(ResourceLocation)
    ```

- `FluidStack`. The fluid created each damage tick. Requires not null.

    ```groovy
    fluidOutput(FluidStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.mods.tinkersconstruct.recipe.EntityMeltingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.entity_melting.recipeBuilder()
    .fluidOutput(fluid('iron') * 500)
    .input(resource('minecraft:pig'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.tconstruct.entity_melting.removeByInput(EntityEntry)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.tconstruct.entity_melting.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.tconstruct.entity_melting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.entity_melting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.tconstruct.entity_melting.streamRecipes()
    ```
