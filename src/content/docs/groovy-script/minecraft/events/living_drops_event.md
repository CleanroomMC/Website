---
title: Living Drops Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.LivingDropsEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
net.minecraft.util.DamageSource getSource()
```

```groovy
java.util.List getDrops()
```

```groovy
boolean isRecentlyHit()
```

```groovy
int getLootingLevel()
```
