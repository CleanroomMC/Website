---
title: Living Entity Use Item Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.LivingEntityUseItemEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](/zh/groovy-script/minecraft/events/living_event/living_event/), [EntityEvent](/zh/groovy-script/minecraft/events/entity_event/entity_event/)

## Methods
```groovy
int getDuration()
```

```groovy
net.minecraft.item.ItemStack getItem()
```

```groovy
void setDuration(int arg0)
```
