---
title: Vanilla Content Creation (Minecraft)
description: Creates custom items, blocks, and fluids for later use. Textures and other assets such as translations will be loaded from the `groovy/assets/` folder.
sidebar:
  label: Vanilla Content Creation
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/content/Content.java
---

## Description

Creates custom items, blocks, and fluids for later use. Textures and other assets such as translations will be loaded from the `groovy/assets/` folder.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Item and blocks will automatically generate a model file inside if one is not present. Textures will be `missingno` until assigned, and names will be the raw lang key until a localization file sets the relevant lang key to a value. The localization file must be all lowercase, such as `en_us.lang`!

</details>

<details class="cr-block cr-danger" open>
<summary>Danger</summary>

The [packid](/groovy-script/getting_started/run_config/#packid) must be valid for any content to be created!

</details>

## Identifier

The identifier `content` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
content/* Used as page default */
Content
mc.content
mc.Content
MC.content
MC.Content
vanilla.content
vanilla.Content
Vanilla.content
Vanilla.Content
minecraft.content
minecraft.Content
Minecraft.content
Minecraft.Content
mods.mc.content
mods.mc.Content
mods.MC.content
mods.MC.Content
mods.vanilla.content
mods.vanilla.Content
mods.Vanilla.content
mods.Vanilla.Content
mods.minecraft.content
mods.minecraft.Content
mods.Minecraft.content
mods.Minecraft.Content
```

</details>

## Creative Tab Manipulation

- Sets the default Creative Tab used when registering items through GroovyScript:

    ```groovy
    content.setDefaultCreativeTab(CreativeTabs)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
content.setDefaultCreativeTab(content.createCreativeTab('groovyscript.example_creative_tab', _ -> item('groovyscriptdev:heartofauniverse')))
```

</details>

## Create Custom Content

- Create a creative tab with the given icon:

    ```groovy
    content.createCreativeTab(String, Item)
    ```

- Create a creative tab with the given icon:

    ```groovy
    content.createCreativeTab(String, ItemStack)
    ```

- Create a creative tab with the given icon:

    ```groovy
    content.createCreativeTab(String, Closure<ItemStack>)
    ```

- Create a creative tab with the given icon:

    ```groovy
    content.createCreativeTab(String, Supplier<ItemStack>)
    ```

- Register an already created item. Useful for when provided methods do not suffice to create the desired item:

    ```groovy
    content.registerItem(String, Item)
    ```

- Register an already created block. Useful for when provided methods do not suffice to create the desired block:

    ```groovy
    content.registerBlock(String, Block)
    ```

- Register an already created block. Useful for when provided methods do not suffice to create the desired block:

    ```groovy
    content.registerBlock(String, Block, ItemBlock)
    ```

- Register an already created fluid. Useful for when provided methods do not suffice to create the desired fluid:

    ```groovy
    content.registerFluid(Fluid)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
content.createCreativeTab('groovyscript.other_tab_clay', _ -> item('minecraft:clay'))
content.registerItem('snack', (new ItemFood(20, 10, false) {
    protected void onFoodEaten(ItemStack stack, World worldIn, EntityPlayer player) {
        if (!worldIn.isRemote) {
            player.addPotionEffect(new PotionEffect(potion('minecraft:regeneration'), 240000, 3, false, false))
            player.addPotionEffect(new PotionEffect(potion('minecraft:resistance'), 240000, 3, false, false))
        }
    }
}).setAlwaysEdible())
content.registerBlock('dragon_egg_lamp', (new Block(blockMaterial('redstone_light')) {
    protected static final AxisAlignedBB DRAGON_EGG_AABB = new AxisAlignedBB(0.0625D, 0.0D, 0.0625D, 0.9375D, 1.0D, 0.9375D)

    AxisAlignedBB getBoundingBox(IBlockState state, IBlockAccess source, BlockPos pos) {
        return DRAGON_EGG_AABB
    }

    boolean isOpaqueCube(IBlockState state) {
        return false
    }

    boolean isFullCube(IBlockState state) {
        return false
    }

    boolean shouldSideBeRendered(IBlockState blockState, IBlockAccess blockAccess, BlockPos pos, EnumFacing side) {
        return true
    }

    BlockFaceShape getBlockFaceShape(IBlockAccess worldIn, IBlockState state, BlockPos pos, EnumFacing face) {
        return BlockFaceShape.UNDEFINED
    }
}).setLightLevel(1.0F))
```

</details>

### Recipe Builder

Just like other recipe types, the Vanilla Content Creation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Create Custom Items</summary>

---

- Create a GroovyItem with the given name. The name is the registry name used and must consist of exclusively lower case letters, numbers, and underscores `_`.

    ```groovy
    content.createItem(String)
    ```

---

- `boolean`. Sets if the item has the shimmer effect, typically associated with potions or enchantments. (Default `false`).

    ```groovy
    setEnchantedEffect()
    ```

- `IRarity`. Sets the rarity this will be is displayed as, primarily impacts the color of its name.

    ```groovy
    setRarity(IRarity)
    ```

- `boolean`. Sets if the items render the object in full 3D, like tools. (Default `false`).

    ```groovy
    setFull3D()
    ```

- `boolean`. Sets if the item can be repaired, typically by combining two of the same item in the crafting grid. (Default `true`).

    ```groovy
    setNoRepair()
    ```

- `int`. Sets the max damage of the item, used as durability for tools. (Default `0`).

    ```groovy
    setMaxDamage(int)
    ```

- `boolean`. Sets if the item has subtypes, like dyes or terracotta. (Default `false`).

    ```groovy
    setHasSubtypes(boolean)
    ```

- `int`. Sets the max stack size of the item. (Default `64`).

    ```groovy
    setMaxStackSize(int)
    ```

- `Item`. Sets the Container Item, which will replace this item when it breaks.

    ```groovy
    setContainerItem(Item)
    ```

- `int`. Sets the enchantability level. (Default `0`).

    ```groovy
    setEnchantability(int)
    ```

- `CreativeTabs`. Sets the Creative Tab the item should display on. (Default `content.getDefaultTab()`).

    ```groovy
    setCreativeTab(CreativeTabs)
    ```

- `String`. Sets the base String used for translation. Prefixed by `tile.` and checks the suffix `.name` for the block display name. (Default `registryName`).

    ```groovy
    setTranslationKey(String)
    ```

---

- Registers the Item and returns itself (returns `GroovyItem`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
content.createItem('heartofauniverse')
    .setRarity(EnumRarity.EPIC)
    .setMaxStackSize(1)
    .register()

content.createItem('clay_2')
    .setMaxStackSize(5)
    .setRarity(EnumRarity.RARE)
    .register()

content.createItem('clay_3')
    .setCreativeTab(creativeTab('misc'))
    .setEnchantedEffect()
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Create Custom Blocks</summary>

---

- Create a GroovyBlock with the given name with the material `Material.ROCK`. The name is the registry name used and must consist of exclusively lower case letters, numbers, and underscores `_`.

    ```groovy
    content.createBlock(String)
    ```

---

- `int`. Sets how much light the block emits, multiplied by 15. (Default `0`).

    ```groovy
    setLightLevel(float)
    ```

- `int`. Sets how much light is subtracted for going through this block. (Default `0`).

    ```groovy
    setLightOpacity(int)
    ```

- `float`. Sets the difficulty of the block to break, primarily affecting the speed to break. A hardness of `0` will cause no durability loss, and a hardness of `-1` will be unbreakable. (Default `2.0f`).

    ```groovy
    setHardness(float) // Also increases block resistance to itself * 5
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `SoundType`. Sets the sound played when stepping on the block. (Default `SoundType.STONE`).

    ```groovy
    setSoundType(SoundType)
    ```

- `String`. Sets the base String used for translation. Prefixed by `item.` and checks the suffix `.name` for the item display name. (Default `registryName`).

    ```groovy
    setTranslationKey(String)
    ```

- `float`. Sets the explosion resistance of the block. (Default `10.0f`).

    ```groovy
    setHardness(float) // Also increases block resistance to itself * 5
    setResistance(float)
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `boolean`. Sets if the block has random ticks. (Default `false`).

    ```groovy
    setTickRandomly(boolean)
    ```

- `CreativeTabs`. Sets the Creative Tab the item representing the block should be displayed on.

    ```groovy
    setCreativeTab(CreativeTabs)
    ```

---

- Registers the Block and a corresponding ItemBlock and returns itself (returns `GroovyBlock`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
content.createBlock('generic_block')
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Create Custom Blocks</summary>

---

- Create a GroovyBlock with the given name and material. The name is the registry name used and must consist of exclusively lower case letters, numbers, and underscores `_`.

    ```groovy
    content.createBlock(String, Material)
    ```

---

- `int`. Sets how much light the block emits, multiplied by 15. (Default `0`).

    ```groovy
    setLightLevel(float)
    ```

- `int`. Sets how much light is subtracted for going through this block. (Default `0`).

    ```groovy
    setLightOpacity(int)
    ```

- `float`. Sets the difficulty of the block to break, primarily affecting the speed to break. A hardness of `0` will cause no durability loss, and a hardness of `-1` will be unbreakable. (Default `2.0f`).

    ```groovy
    setHardness(float) // Also increases block resistance to itself * 5
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `SoundType`. Sets the sound played when stepping on the block. (Default `SoundType.STONE`).

    ```groovy
    setSoundType(SoundType)
    ```

- `String`. Sets the base String used for translation. Prefixed by `item.` and checks the suffix `.name` for the item display name. (Default `registryName`).

    ```groovy
    setTranslationKey(String)
    ```

- `float`. Sets the explosion resistance of the block. (Default `10.0f`).

    ```groovy
    setHardness(float) // Also increases block resistance to itself * 5
    setResistance(float)
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `boolean`. Sets if the block has random ticks. (Default `false`).

    ```groovy
    setTickRandomly(boolean)
    ```

- `CreativeTabs`. Sets the Creative Tab the item representing the block should be displayed on.

    ```groovy
    setCreativeTab(CreativeTabs)
    ```

---

- Registers the Block and a corresponding ItemBlock and returns itself (returns `GroovyBlock`).

    ```groovy
    register()
    ```

</details>

<details class="cr-block cr-abstract" open>
<summary>Create Custom Fluids</summary>

---

- Create a GroovyFluid with the given name.

    ```groovy
    content.createFluid(String)
    ```

---

- `int`. Sets the color of the fluid. (Default `0xFFFFFF`).

    ```groovy
    setColor(int)
    ```

- `ResourceLocation`. Sets the texture used for when the fluid is still. (Default `DEFAULT_STILL`).

    ```groovy
    setDefaultTexture()
    setMetalTexture()
    setStill(ResourceLocation)
    setTexture(ResourceLocation, ResourceLocation) // still, flowing
    setTexture(ResourceLocation, ResourceLocation, ResourceLocation) // still, flowing, overlay
    ```

- `EnumRarity`. Sets the rarity this will be is displayed as, primarily impacts the color of its name. (Default `EnumRarity.COMMON`).

    ```groovy
    setRarity(EnumRarity)
    ```

- `int`. Sets the density of the fluid, which controls what other fluids it can displace. (Default `1000`).

    ```groovy
    setDensity(int)
    ```

- `ResourceLocation`. Sets the texture used for when the fluid is flowing. (Default `DEFAULT_FLOWING`).

    ```groovy
    setDefaultTexture()
    setMetalTexture()
    setFlowing(ResourceLocation)
    setTexture(ResourceLocation, ResourceLocation) // still, flowing
    setTexture(ResourceLocation, ResourceLocation, ResourceLocation) // still, flowing, overlay
    ```

- `ResourceLocation`. Sets the texture used as an overlay for the fluid.

    ```groovy
    setOverlay(ResourceLocation)
    setTexture(ResourceLocation, ResourceLocation, ResourceLocation) // still, flowing, overlay
    ```

- `Material`. Sets the material the block has, if a block is created. (Default `blockMaterial('water')`).

    ```groovy
    setLavaMaterial()
    setWaterMaterial()
    ```

- `SoundEvent`. Sets the sound played when the fluid is picked up.

    ```groovy
    setFillSound(SoundEvent)
    setSound(SoundEvent, SoundEvent)
    ```

- `boolean`. Sets if the fluid is gaseous, typically indicating a negative density. (Default `false`).

    ```groovy
    setGaseous(boolean)
    ```

- `int`. Sets the viscosity of the fluid, which impacts how fast the fluid spreads. (Default `1000`).

    ```groovy
    setViscosity(int)
    ```

- `SoundEvent`. Sets the sound played when the fluid is emptied out.

    ```groovy
    setEmptySound(SoundEvent)
    setSound(SoundEvent, SoundEvent)
    ```

- `int`. Sets how much light the fluid produces. (Default `0`).

    ```groovy
    setLuminosity(int)
    ```

- `boolean`. Sets if the fluid creates a block. (Default `true`).

    ```groovy
    noBlock()
    ```

- `int`. Sets the temperature of the fluid. (Default `300`).

    ```groovy
    setTemperature(int)
    ```

- `boolean`. Sets if the fluid is a finite block, if a block is created. (Default `false`).

    ```groovy
    isFinite()
    ```

---

- Registers the Fluid and returns the registered Fluid (returns `Fluid`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
content.createFluid('amongium')
    .setMetalTexture()
    .setColor(0x00FF00)
    .register()
```

</details>

</details>

## Helper methods

- Get the default Creative Tab for GroovyScript, which is set by `setDefaultCreativeTab`:

    ```groovy
    content.getDefaultTab()
    ```
