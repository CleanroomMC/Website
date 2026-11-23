---
title: Living Experience Drop Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.LivingExperienceDropEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](/zh/groovy-script/minecraft/events/living_event/living_event/), [EntityEvent](/zh/groovy-script/minecraft/events/entity_event/entity_event/)

## Methods
```groovy
int getDroppedExperience()
```

```groovy
void setDroppedExperience(int arg0)
```

```groovy
int getOriginalExperience()
```

```groovy
net.minecraft.entity.player.EntityPlayer getAttackingPlayer()
```
