---
title: Crafting Category (Selection GUI Crafting)
description: All recipes in the mod are divided into categories. Each category has its own set of recipes. Each category can have its own texture for the background, border, frame, decoration, and progress bar. The category can also have its own sounds, particles, can specify how the sounds are played, if recipes in the category can be added to the crafting queue, and how the output items are handed to the player.
sidebar:
  label: Crafting Category
source_code_link: https://github.com/Ender-Development/selection-gui-crafting-continued/blob/master/src/main/java/io/enderdev/selectionguicrafting/integration/groovyscript/Category.java
---

## Description

All recipes in the mod are divided into categories. Each category has its own set of recipes. Each category can have its own texture for the background, border, frame, decoration, and progress bar. The category can also have its own sounds, particles, can specify how the sounds are played, if recipes in the category can be added to the crafting queue, and how the output items are handed to the player.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.selectionguicrafting.category/* Used as page default */
mods.selectionguicrafting.Category
```

## Adding Recipes

- Adds a new category:

    ```groovy
    mods.selectionguicrafting.category.add(Category)
    ```

### Recipe Builder

Just like other recipe types, the Crafting Category also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.selectionguicrafting.category.categoryBuilder()
    ```

---

- `String`. The Category ID, must be unique. Requires not null and the ID must be unique.

    ```groovy
    id(String)
    ```

- `ResourceLocation`. The path to the frame texture. The resource must be loaded via external methods. Can be overridden by the recipe. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/frame). (Default `selectionguicrafting:textures/gui/frame/default.png`).

    ```groovy
    frame(String)
    frame(ResourceLocation)
    ```

- `Sound`. The sounds that will be played when the recipe is crafted. Can be overridden by the recipe. The first `float` value is the volume, the second `float` value is the pitch of the sound.

    ```groovy
    sound(Sound)
    sound(String)
    sound(SoundEvent)
    sound(ResourceLocation)
    sound(String, float, float)
    sound(SoundEvent, float, float)
    sound(ResourceLocation, float, float)
    ```

- `ResourceLocation`. The path to the border texture. The resource must be loaded via external methods. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/background). (Default `selectionguicrafting:textures/gui/background/default.png`).

    ```groovy
    border(String)
    border(ResourceLocation)
    ```

- `AbstractTrigger`. A trigger that will open a GUI with all recipes for that category. Can be a block or an item. The first `double` value modifies the item damage, the second the crafting time, the third the amount of xp given to the player. Requires not null and a category needs at least one trigger.

    ```groovy
    trigger(Block)
    trigger(IIngredient)
    trigger(ItemTrigger)
    trigger(BlockTrigger)
    trigger(Block, double, double, double)
    trigger(IIngredient, double, double, double)
    ```

- `Particle`. The particles that will be spawned when the recipe is crafted. Can be overridden by the recipe. The `int` value is the amount of particles, the `float` value is the speed of the particles.

    ```groovy
    particle(String)
    particle(Particle)
    particle(EnumParticleTypes)
    particle(String, int, float)
    particle(EnumParticleTypes, int, float)
    ```

- `QueueType`. If the recipes in this category can be queued. Can be overridden by the recipe. Allowed values are: `true`, `false` or `YES`, `NO`. (Default `YES`).

    ```groovy
    queueType(String)
    queueType(boolean)
    queueType(QueueType)
    ```

- `SoundType`. How the sounds will be played. Can be overridden by the recipe. Allowed values are: `RANDOM` or `COMBINED`. (Default `RANDOM`).

    ```groovy
    soundType(String)
    soundType(SoundType)
    ```

- `ResourceLocation`. The path to the background texture. The resource must be loaded via external methods. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/background). (Default `selectionguicrafting:textures/gui/background/default.png`).

    ```groovy
    background(String)
    background(ResourceLocation)
    ```

- `ResourceLocation`. The path to the decoration texture. The resource must be loaded via external methods. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/decor). (Default `selectionguicrafting:textures/gui/decor/default.png`).

    ```groovy
    decoration(String)
    decoration(ResourceLocation)
    ```

- `OutputType`. How the output will be handed to the player. Can be overridden by the recipe. Allowed values are: `DROP` or `INVENTORY`. (Default `INVENTORY`).

    ```groovy
    outputType(String)
    outputType(OutputType)
    ```

- `ResourceLocation`. The path to the progress bar texture. The resource must be loaded via external methods. Can be overridden by the recipe. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/bar). (Default `selectionguicrafting:textures/gui/progress/default.png`).

    ```groovy
    bar(String)
    bar(ResourceLocation)
    ```

- `BackgroundType`. How the background will be rendered. The resource must be loaded via external methods. Allowed values are: `SINGLE_STRETCH`, `TILE`, or `SINGLE_CUT`. `TILE` uses a 16x16 texture and repeats it. `SINGLE_STRETCH` stretches the texture ratio to fill the screen. `SINGLE_CUT` stretches the texture while keeping the aspect ratio and cuts of anything that goes outside the gui. The texture is centered on the x and y axis. (Default `TILE`).

    ```groovy
    backgroundType(String)
    backgroundType(BackgroundType)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.enderdev.selectionguicrafting.registry.category.Category`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.selectionguicrafting.category.categoryBuilder()
    .id('dummy_category')
    .trigger(item('minecraft:diamond'), 0.2, 0.8, 2.65)
    .background('selectionguicrafting:textures/gui/background/wood.png')
    .register()

mods.selectionguicrafting.category.categoryBuilder()
    .id('blub')
    .trigger(item('minecraft:stone_shovel'))
    .background('selectionguicrafting:textures/gui/background/lake.png')
    .backgroundType('SINGLE_CUT')
    .register()

mods.selectionguicrafting.category.categoryBuilder()
    .id('dead')
    .trigger(block('minecraft:snow'))
    .background('selectionguicrafting:textures/gui/background/deadlands.png')
    .decoration('selectionguicrafting:textures/gui/decor/gold.png')
    .border('selectionguicrafting:textures/gui/background/wood.png')
    .backgroundType('SINGLE_CUT')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given category:

    ```groovy
    mods.selectionguicrafting.category.remove(Category)
    ```

- Remove a category by its name:

    ```groovy
    mods.selectionguicrafting.category.removeByName(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.selectionguicrafting.category.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.selectionguicrafting.category.removeByName('dummy_category_1')
mods.selectionguicrafting.category.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.selectionguicrafting.category.streamCategories()
    ```
