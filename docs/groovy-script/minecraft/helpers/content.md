---
title: "Vanilla Content Creation"
titleTemplate: "Minecraft | CleanroomMC"
description: "Creates custom items, blocks, and fluids for later use. Textures and other assets such as translations will be loaded from the `groovy/assets/` folder."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/content/Content.java"
order: 500
---

# Vanilla Content Creation (Minecraft)

## Description

Creates custom items, blocks, and fluids for later use. Textures and other assets such as translations will be loaded from the `groovy/assets/` folder.

:::::::::: details Warning {open id="warning"}
Item and blocks will automatically generate a model file inside if one is not present. Textures will be `missingno` until assigned, and names will be the raw lang key until a localization file sets the relevant lang key to a value. The localization file must be all lowercase, such as `en_us.lang`!
::::::::::

:::::::::: details Danger {open id="danger"}
The [packid](../../getting_started/run_config.md#packid) must be valid for any content to be created!
::::::::::

## Identifier

The identifier `content` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
content/* Used as page default */ // [!code focus]
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

::::::::::

## Creative Tab Manipulation

- Sets the default Creative Tab used when registering items through GroovyScript:

    ```groovy:no-line-numbers
    content.setDefaultCreativeTab(CreativeTabs)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
content.setDefaultCreativeTab(content.createCreativeTab('groovyscript.example_creative_tab', _ -> item('groovyscriptdev:heartofauniverse')))
```

::::::::::

## Create Custom Content

- Create a creative tab with the given icon:

    ```groovy:no-line-numbers
    content.createCreativeTab(String, Item)
    ```

- Create a creative tab with the given icon:

    ```groovy:no-line-numbers
    content.createCreativeTab(String, ItemStack)
    ```

- Create a creative tab with the given icon:

    ```groovy:no-line-numbers
    content.createCreativeTab(String, Closure<ItemStack>)
    ```

- Create a creative tab with the given icon:

    ```groovy:no-line-numbers
    content.createCreativeTab(String, Supplier<ItemStack>)
    ```

- Register an already created item. Useful for when provided methods do not suffice to create the desired item:

    ```groovy:no-line-numbers
    content.registerItem(String, Item)
    ```

- Register an already created block. Useful for when provided methods do not suffice to create the desired block:

    ```groovy:no-line-numbers
    content.registerBlock(String, Block)
    ```

- Register an already created block. Useful for when provided methods do not suffice to create the desired block:

    ```groovy:no-line-numbers
    content.registerBlock(String, Block, ItemBlock)
    ```

- Register an already created fluid. Useful for when provided methods do not suffice to create the desired fluid:

    ```groovy:no-line-numbers
    content.registerFluid(Fluid)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
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

::::::::::

### Recipe Builder

Just like other recipe types, the Vanilla Content Creation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Create Custom Items {open id="abstract"}

---

- Create a GroovyItem with the given name. The name is the registry name used and must consist of exclusively lower case letters, numbers, and underscores `_`.

    ```groovy:no-line-numbers
    content.createItem(String)
    ```

---

- `boolean`. Sets if the item has the shimmer effect, typically associated with potions or enchantments. (Default `false`).

    ```groovy:no-line-numbers
    setEnchantedEffect()
    ```

- `IRarity`. Sets the rarity this will be is displayed as, primarily impacts the color of its name.

    ```groovy:no-line-numbers
    setRarity(IRarity)
    ```

- `boolean`. Sets if the items render the object in full 3D, like tools. (Default `false`).

    ```groovy:no-line-numbers
    setFull3D()
    ```

- `boolean`. Sets if the item can be repaired, typically by combining two of the same item in the crafting grid. (Default `true`).

    ```groovy:no-line-numbers
    setNoRepair()
    ```

- `int`. Sets the max damage of the item, used as durability for tools. (Default `0`).

    ```groovy:no-line-numbers
    setMaxDamage(int)
    ```

- `boolean`. Sets if the item has subtypes, like dyes or terracotta. (Default `false`).

    ```groovy:no-line-numbers
    setHasSubtypes(boolean)
    ```

- `int`. Sets the max stack size of the item. (Default `64`).

    ```groovy:no-line-numbers
    setMaxStackSize(int)
    ```

- `Item`. Sets the Container Item, which will replace this item when it breaks.

    ```groovy:no-line-numbers
    setContainerItem(Item)
    ```

- `int`. Sets the enchantability level. (Default `0`).

    ```groovy:no-line-numbers
    setEnchantability(int)
    ```

- `CreativeTabs`. Sets the Creative Tab the item should display on. (Default `content.getDefaultTab()`).

    ```groovy:no-line-numbers
    setCreativeTab(CreativeTabs)
    ```

- `String`. Sets the base String used for translation. Prefixed by `tile.` and checks the suffix `.name` for the block display name. (Default `registryName`).

    ```groovy:no-line-numbers
    setTranslationKey(String)
    ```

---

- Registers the Item and returns itself (returns `GroovyItem`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
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

:::::::::

::::::::::

:::::::::: details Create Custom Blocks {open id="abstract"}

---

- Create a GroovyBlock with the given name with the material `Material.ROCK`. The name is the registry name used and must consist of exclusively lower case letters, numbers, and underscores `_`.

    ```groovy:no-line-numbers
    content.createBlock(String)
    ```

---

- `int`. Sets how much light the block emits, multiplied by 15. (Default `0`).

    ```groovy:no-line-numbers
    setLightLevel(float)
    ```

- `int`. Sets how much light is subtracted for going through this block. (Default `0`).

    ```groovy:no-line-numbers
    setLightOpacity(int)
    ```

- `float`. Sets the difficulty of the block to break, primarily affecting the speed to break. A hardness of `0` will cause no durability loss, and a hardness of `-1` will be unbreakable. (Default `2.0f`).

    ```groovy:no-line-numbers
    setHardness(float) // Also increases block resistance to itself * 5
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `SoundType`. Sets the sound played when stepping on the block. (Default `SoundType.STONE`).

    ```groovy:no-line-numbers
    setSoundType(SoundType)
    ```

- `String`. Sets the base String used for translation. Prefixed by `item.` and checks the suffix `.name` for the item display name. (Default `registryName`).

    ```groovy:no-line-numbers
    setTranslationKey(String)
    ```

- `float`. Sets the explosion resistance of the block. (Default `10.0f`).

    ```groovy:no-line-numbers
    setHardness(float) // Also increases block resistance to itself * 5
    setResistance(float)
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `boolean`. Sets if the block has random ticks. (Default `false`).

    ```groovy:no-line-numbers
    setTickRandomly(boolean)
    ```

- `CreativeTabs`. Sets the Creative Tab the item representing the block should be displayed on.

    ```groovy:no-line-numbers
    setCreativeTab(CreativeTabs)
    ```

---

- Registers the Block and a corresponding ItemBlock and returns itself (returns `GroovyBlock`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
content.createBlock('generic_block')
    .register()
```

:::::::::

::::::::::

:::::::::: details Create Custom Blocks {open id="abstract"}

---

- Create a GroovyBlock with the given name and material. The name is the registry name used and must consist of exclusively lower case letters, numbers, and underscores `_`.

    ```groovy:no-line-numbers
    content.createBlock(String, Material)
    ```

---

- `int`. Sets how much light the block emits, multiplied by 15. (Default `0`).

    ```groovy:no-line-numbers
    setLightLevel(float)
    ```

- `int`. Sets how much light is subtracted for going through this block. (Default `0`).

    ```groovy:no-line-numbers
    setLightOpacity(int)
    ```

- `float`. Sets the difficulty of the block to break, primarily affecting the speed to break. A hardness of `0` will cause no durability loss, and a hardness of `-1` will be unbreakable. (Default `2.0f`).

    ```groovy:no-line-numbers
    setHardness(float) // Also increases block resistance to itself * 5
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `SoundType`. Sets the sound played when stepping on the block. (Default `SoundType.STONE`).

    ```groovy:no-line-numbers
    setSoundType(SoundType)
    ```

- `String`. Sets the base String used for translation. Prefixed by `item.` and checks the suffix `.name` for the item display name. (Default `registryName`).

    ```groovy:no-line-numbers
    setTranslationKey(String)
    ```

- `float`. Sets the explosion resistance of the block. (Default `10.0f`).

    ```groovy:no-line-numbers
    setHardness(float) // Also increases block resistance to itself * 5
    setResistance(float)
    setBlockUnbreakable() // Makes the block unbreakable by setting hardness to -1.0f
    ```

- `boolean`. Sets if the block has random ticks. (Default `false`).

    ```groovy:no-line-numbers
    setTickRandomly(boolean)
    ```

- `CreativeTabs`. Sets the Creative Tab the item representing the block should be displayed on.

    ```groovy:no-line-numbers
    setCreativeTab(CreativeTabs)
    ```

---

- Registers the Block and a corresponding ItemBlock and returns itself (returns `GroovyBlock`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::::

:::::::::: details Create Custom Fluids {open id="abstract"}

---

- Create a GroovyFluid with the given name.

    ```groovy:no-line-numbers
    content.createFluid(String)
    ```

---

- `int`. Sets the color of the fluid. (Default `0xFFFFFF`).

    ```groovy:no-line-numbers
    setColor(int)
    ```

- `ResourceLocation`. Sets the texture used for when the fluid is still. (Default `DEFAULT_STILL`).

    ```groovy:no-line-numbers
    setDefaultTexture()
    setMetalTexture()
    setStill(ResourceLocation)
    setTexture(ResourceLocation, ResourceLocation) // still, flowing
    setTexture(ResourceLocation, ResourceLocation, ResourceLocation) // still, flowing, overlay
    ```

- `EnumRarity`. Sets the rarity this will be is displayed as, primarily impacts the color of its name. (Default `EnumRarity.COMMON`).

    ```groovy:no-line-numbers
    setRarity(EnumRarity)
    ```

- `int`. Sets the density of the fluid, which controls what other fluids it can displace. (Default `1000`).

    ```groovy:no-line-numbers
    setDensity(int)
    ```

- `ResourceLocation`. Sets the texture used for when the fluid is flowing. (Default `DEFAULT_FLOWING`).

    ```groovy:no-line-numbers
    setDefaultTexture()
    setMetalTexture()
    setFlowing(ResourceLocation)
    setTexture(ResourceLocation, ResourceLocation) // still, flowing
    setTexture(ResourceLocation, ResourceLocation, ResourceLocation) // still, flowing, overlay
    ```

- `ResourceLocation`. Sets the texture used as an overlay for the fluid.

    ```groovy:no-line-numbers
    setOverlay(ResourceLocation)
    setTexture(ResourceLocation, ResourceLocation, ResourceLocation) // still, flowing, overlay
    ```

- `Material`. Sets the material the block has, if a block is created. (Default `blockMaterial('water')`).

    ```groovy:no-line-numbers
    setLavaMaterial()
    setWaterMaterial()
    ```

- `SoundEvent`. Sets the sound played when the fluid is picked up.

    ```groovy:no-line-numbers
    setFillSound(SoundEvent)
    setSound(SoundEvent, SoundEvent)
    ```

- `boolean`. Sets if the fluid is gaseous, typically indicating a negative density. (Default `false`).

    ```groovy:no-line-numbers
    setGaseous(boolean)
    ```

- `int`. Sets the viscosity of the fluid, which impacts how fast the fluid spreads. (Default `1000`).

    ```groovy:no-line-numbers
    setViscosity(int)
    ```

- `SoundEvent`. Sets the sound played when the fluid is emptied out.

    ```groovy:no-line-numbers
    setEmptySound(SoundEvent)
    setSound(SoundEvent, SoundEvent)
    ```

- `int`. Sets how much light the fluid produces. (Default `0`).

    ```groovy:no-line-numbers
    setLuminosity(int)
    ```

- `boolean`. Sets if the fluid creates a block. (Default `true`).

    ```groovy:no-line-numbers
    noBlock()
    ```

- `int`. Sets the temperature of the fluid. (Default `300`).

    ```groovy:no-line-numbers
    setTemperature(int)
    ```

- `boolean`. Sets if the fluid is a finite block, if a block is created. (Default `false`).

    ```groovy:no-line-numbers
    isFinite()
    ```

---

- Registers the Fluid and returns the registered Fluid (returns `Fluid`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
content.createFluid('amongium')
    .setMetalTexture()
    .setColor(0x00FF00)
    .register()
```

:::::::::

::::::::::

## Helper methods

- Get the default Creative Tab for GroovyScript, which is set by `setDefaultCreativeTab`:

    ```groovy:no-line-numbers
    content.getDefaultTab()
    ```
