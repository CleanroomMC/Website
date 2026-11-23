---
title: Place Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.world.BlockEvent.PlaceEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[EntityPlaceEvent](/zh/groovy-script/minecraft/events/block_event/entity_place_event/), [BlockEvent](/zh/groovy-script/minecraft/events/block_event/block_event/)

## Methods
```groovy
net.minecraft.entity.player.EntityPlayer getPlayer()
```

```groovy
net.minecraft.util.EnumHand getHand()
```

```groovy
net.minecraft.item.ItemStack getItemInHand()
```
