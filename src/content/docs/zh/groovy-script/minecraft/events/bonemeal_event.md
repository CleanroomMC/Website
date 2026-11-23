---
title: Bonemeal Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.BonemealEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](/zh/groovy-script/minecraft/events/player_event/player_event/), [LivingEvent](/zh/groovy-script/minecraft/events/living_event/living_event/), [EntityEvent](/zh/groovy-script/minecraft/events/entity_event/entity_event/)

## Methods
```groovy
net.minecraft.item.ItemStack getStack()
```

```groovy
net.minecraft.block.state.IBlockState getBlock()
```

```groovy
boolean hasResult()
```

```groovy
net.minecraft.util.EnumHand getHand()
```

```groovy
net.minecraft.util.math.BlockPos getPos()
```

```groovy
net.minecraft.world.World getWorld()
```
