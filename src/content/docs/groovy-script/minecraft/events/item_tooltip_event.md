---
title: Item Tooltip Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.ItemTooltipEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](/groovy-script/minecraft/events/player_event/), [LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
net.minecraft.client.util.ITooltipFlag getFlags()
```

```groovy
net.minecraft.entity.player.EntityPlayer getEntityPlayer()
```

```groovy
java.util.List getToolTip()
```

```groovy
net.minecraft.item.ItemStack getItemStack()
```
