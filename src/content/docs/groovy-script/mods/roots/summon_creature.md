---
title: Summon Creature (Roots 3)
description: When running a Summon Creature Ritual, the input items placed on Catalyst Plate will summon the target entity.
sidebar:
  label: Summon Creature
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/SummonCreature.java
---

## Description

When running a Summon Creature Ritual, the input items placed on Catalyst Plate will summon the target entity.

## Identifier

The identifier `mods.roots.summon_creature` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.roots.summoncreature
mods.roots.summonCreature
mods.roots.SummonCreature
mods.roots.summon_creature/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Summon Creature also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.roots.summon_creature.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 10.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Class<? extends EntityLivingBase>`. Sets the target entity. Requires not null.

    ```groovy
    entity(EntityEntry)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.SummonCreatureRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.summon_creature.recipeBuilder()
    .name('wither_skeleton_from_clay')
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .entity(entity('minecraft:wither_skeleton'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Summon Creature recipe with the given name:

    ```groovy
    mods.roots.summon_creature.removeByName(ResourceLocation)
    ```

- Removes the Summon Creature recipe for the given Entity:

    ```groovy
    mods.roots.summon_creature.removeByEntity(EntityEntry)
    ```

- Removes the Summon Creature recipe for the given Entity:

    ```groovy
    mods.roots.summon_creature.removeByEntity(Class<? extends EntityLivingBase>)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.summon_creature.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.summon_creature.removeByName(resource('roots:cow'))
mods.roots.summon_creature.removeByEntity(entity('minecraft:chicken'))
mods.roots.summon_creature.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.summon_creature.streamRecipes()
    ```
