---
title: Use Hoe Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.UseHoeEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](/groovy-script/minecraft/events/player_event/), [LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
boolean hasResult()
```

```groovy
net.minecraft.util.math.BlockPos getPos()
```

```groovy
net.minecraft.world.World getWorld()
```

```groovy
net.minecraft.item.ItemStack getCurrent()
```
