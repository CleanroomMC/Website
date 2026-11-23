---
title: Potion Color Calculation Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.PotionColorCalculationEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
void setColor(int arg0)
```

```groovy
void shouldHideParticles(boolean arg0)
```

```groovy
boolean areParticlesHidden()
```

```groovy
int getColor()
```

```groovy
java.util.Collection getEffects()
```
