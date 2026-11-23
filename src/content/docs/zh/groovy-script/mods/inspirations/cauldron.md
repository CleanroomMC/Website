---
title: Cauldron (Inspirations)
description: Converts up to 1 itemstack and up to 1 fluid into up to 1 itemstack or up to 1 fluid, with a boiling boolean and variable amount of fluid consumed or produced.
sidebar:
  label: Cauldron
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/inspirations/Cauldron.java
---

## Description

Converts up to 1 itemstack and up to 1 fluid into up to 1 itemstack or up to 1 fluid, with a boiling boolean and variable amount of fluid consumed or produced.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Cauldrons have a cap of either 3 or 4 levels, depending on the config.

</details>

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.inspirations.cauldron/* Used as page default */
mods.inspirations.Cauldron
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Cauldron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `EnumDyeColor`. Sets the dye color fluid required for the input. Requires not null.

    ```groovy
    dye(String)
    dye(EnumDyeColor)
    ```

- `Cauldron.RecipeBuilder.RecipeType`. Sets what type of recipe is being processed.

    ```groovy
    dye()
    mix()
    fill()
    type(String)
    type(Cauldron.RecipeBuilder.RecipeType)
    potion()
    brewing()
    standard()
    transform()
    ```

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy
    sound(String)
    sound(SoundEvent)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy
    boiling()
    boiling(Boolean)
    ```

- `PotionType`. Sets the input potion type. Requires not null.

    ```groovy
    inputPotion(PotionType)
    ```

- `PotionType`. Sets the output potion type. Requires not null.

    ```groovy
    outputPotion(PotionType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilder()
    .standard()
    .input(item('minecraft:gold_ingot'))
    .fluidInput(fluid('lava'))
    .output(item('minecraft:clay'))
    .boiling()
    .sound(sound('minecraft:block.anvil.destroy'))
    .levels(3)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderBrewing()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `PotionType`. Sets the input potion type. Requires not null.

    ```groovy
    inputPotion(PotionType)
    ```

- `PotionType`. Sets the output potion type. Requires not null.

    ```groovy
    outputPotion(PotionType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderBrewing()
    .input(item('minecraft:diamond_block'))
    .inputPotion(potionType('minecraft:fire_resistance'))
    .outputPotion(potionType('minecraft:strength'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderDye()</summary>

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

- `EnumDyeColor`. Sets the dye color fluid required for the input. Requires not null.

    ```groovy
    dye(String)
    dye(EnumDyeColor)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy
    levels(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderDye()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'))
    .dye('blue')
    .levels(2)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderFill()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy
    sound(String)
    sound(SoundEvent)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy
    boiling()
    boiling(Boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderFill()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .fluidInput(fluid('milk'))
    .sound(sound('minecraft:block.anvil.destroy'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderMix()</summary>

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderMix()
    .output(item('minecraft:clay'))
    .fluidInput(fluid('milk'), fluid('lava'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderPotion()</summary>

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

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy
    boiling()
    boiling(Boolean)
    ```

- `PotionType`. Sets the input potion type. Requires exactly 0 and exactly 1.

    ```groovy
    inputPotion(PotionType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderPotion()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'))
    .inputPotion(potionType('minecraft:fire_resistance'))
    .levels(2)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderStandard()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy
    sound(String)
    sound(SoundEvent)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy
    boiling()
    boiling(Boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderStandard()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .fluidInput(fluid('lava'))
    .levels(3)
    .sound(sound('minecraft:block.anvil.destroy'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>mods.inspirations.cauldron.recipeBuilderTransform()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

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

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy
    sound(String)
    sound(SoundEvent)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy
    boiling()
    boiling(Boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.recipeBuilderTransform()
    .input(item('minecraft:stone:3'))
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('milk'))
    .levels(2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes with the given fluid input:

    ```groovy
    mods.inspirations.cauldron.removeByFluidInput(Fluid)
    ```

- Removes all recipes with the given fluid input:

    ```groovy
    mods.inspirations.cauldron.removeByFluidInput(FluidStack)
    ```

- Removes all recipes with the given fluid output:

    ```groovy
    mods.inspirations.cauldron.removeByFluidOutput(Fluid)
    ```

- Removes all recipes with the given fluid output:

    ```groovy
    mods.inspirations.cauldron.removeByFluidOutput(FluidStack)
    ```

- Removes all recipes with the given item input:

    ```groovy
    mods.inspirations.cauldron.removeByInput(IIngredient)
    ```

- Removes all recipes with the given item output:

    ```groovy
    mods.inspirations.cauldron.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.inspirations.cauldron.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.inspirations.cauldron.removeByFluidInput(fluid('mushroom_stew'))
mods.inspirations.cauldron.removeByFluidOutput(fluid('beetroot_soup'))
mods.inspirations.cauldron.removeByInput(item('minecraft:ghast_tear'))
mods.inspirations.cauldron.removeByOutput(item('minecraft:piston'))
mods.inspirations.cauldron.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.inspirations.cauldron.streamRecipes()
    ```
