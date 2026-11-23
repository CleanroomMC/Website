---
title: Arrow Loose Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.ArrowLooseEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](/zh/groovy-script/minecraft/events/player_event/player_event/), [LivingEvent](/zh/groovy-script/minecraft/events/living_event/living_event/), [EntityEvent](/zh/groovy-script/minecraft/events/entity_event/entity_event/)

## Methods
```groovy
net.minecraft.world.World getWorld()
```

```groovy
boolean hasAmmo()
```

```groovy
int getCharge()
```

```groovy
net.minecraft.item.ItemStack getBow()
```

```groovy
void setCharge(int arg0)
```
