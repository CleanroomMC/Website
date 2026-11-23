---
title: Spells (Roots 3)
description: Controls the recipe for the given spell, the sound, all properties, the base cost, and each modifier's cost.
sidebar:
  label: Spells
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Spells.java
---

## Description

Controls the recipe for the given spell, the sound, all properties, the base cost, and each modifier's cost.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.

</details>

## Identifier

The identifier `mods.roots.spells` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.roots.spells/* Used as page default */
mods.roots.Spells
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Spells also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Cost Builder</summary>

---

- Create a builder to create the cost of spell modifiers.

    ```groovy
    mods.roots.spells.costBuilder()
    ```

---

- `List<IModifierCost>`. Sets a list of all cost types used to construct a complex Cost object.

    ```groovy
    cost(CostType)
    cost(CostType, double)
    cost(CostType, Herb, double)
    cost(CostType, double, IModifierCore)
    cost(CostType, IModifierCore, double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `java.util.Map<epicsquid.roots.modifiers.CostType, epicsquid.roots.modifiers.IModifierCost>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.spells.costBuilder()
    .register()

mods.roots.spells.costBuilder()
    .cost(cost('additional_cost'), herb('dewgonia'), 0.25)
    .register()

mods.roots.spells.costBuilder()
    .cost(cost('additional_cost'), herb('spirit_herb'), 0.1)
    .cost(cost('all_cost_multiplier'), null, -0.125)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.roots.spells.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `SpellBase`. Sets the spell being modified. Requires not null.

    ```groovy
    spell(SpellBase)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.spell.SpellBase$SpellRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.spells.recipeBuilder()
    .spell(spell('spell_fey_light'))
    .input(item('minecraft:clay'), item('minecraft:diamond'), item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>
