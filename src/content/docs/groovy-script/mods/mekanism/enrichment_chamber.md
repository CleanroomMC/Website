---
title: Enrichment Chamber (Mekanism)
description: Converts an input itemstack into an output itemstack.
sidebar:
  label: Enrichment Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/EnrichmentChamber.java
---

## Description

Converts an input itemstack into an output itemstack.

## Identifier

The identifier `mods.mekanism.enrichment_chamber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.mekanism.enricher
mods.mekanism.Enricher
mods.mekanism.enrichmentchamber
mods.mekanism.enrichmentChamber
mods.mekanism.EnrichmentChamber
mods.mekanism.enrichment_chamber/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy
    mods.mekanism.enrichment_chamber.add(IIngredient, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.enrichment_chamber.add(item('minecraft:clay_ball'), item('minecraft:nether_star'))
```

</details>

### Recipe Builder

Just like other recipe types, the Enrichment Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.enrichment_chamber.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.EnrichmentRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.enrichment_chamber.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .output(item('minecraft:nether_star'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.enrichment_chamber.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.enrichment_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.enrichment_chamber.removeByInput(item('minecraft:diamond'))
mods.mekanism.enrichment_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.enrichment_chamber.streamRecipes()
    ```
