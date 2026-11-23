---
title: Fermentation Station (Industrial Foregoing)
description: Converts an input fluidstack into an output fluidstack.
sidebar:
  label: Fermentation Station
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreFermenter.java
---

## Description

Converts an input fluidstack into an output fluidstack.

## Identifier

The identifier `mods.industrialforegoing.ore_fermenter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.industrialforegoing.fermentation
mods.industrialforegoing.Fermentation
mods.industrialforegoing.orefermenter
mods.industrialforegoing.oreFermenter
mods.industrialforegoing.OreFermenter
mods.industrialforegoing.ore_fermenter/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.ore_fermenter.add(OreFluidEntryFermenter)
    ```

- Adds a Fermentation Station recipe in the format `input`, `output`:

    ```groovy
    mods.industrialforegoing.ore_fermenter.add(FluidStack, FluidStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.ore_fermenter.add(fluid('if.ore_fluid_raw').withNbt(['Ore': 'oreGold']), fluid('if.ore_fluid_fermented').withNbt(['Ore': 'oreGold']) * 2)
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.ore_fermenter.remove(OreFluidEntryFermenter)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.ore_fermenter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.ore_fermenter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.ore_fermenter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.ore_fermenter.removeByInput(fluid('if.ore_fluid_raw').withNbt([Ore: 'oreRedstone']))
mods.industrialforegoing.ore_fermenter.removeByOutput(fluid('if.ore_fluid_fermented').withNbt([Ore: 'oreRedstone']))
mods.industrialforegoing.ore_fermenter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.ore_fermenter.streamRecipes()
    ```
