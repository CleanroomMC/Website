---
title: Looting Level Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.LootingLevelEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](/zh/groovy-script/minecraft/events/living_event/living_event/), [EntityEvent](/zh/groovy-script/minecraft/events/entity_event/entity_event/)

## Methods
```groovy
net.minecraft.util.DamageSource getDamageSource()
```

```groovy
void setLootingLevel(int arg0)
```

```groovy
int getLootingLevel()
```
