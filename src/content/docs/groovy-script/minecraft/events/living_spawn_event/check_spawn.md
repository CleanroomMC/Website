---
title: Check Spawn
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.LivingSpawnEvent.CheckSpawn
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingSpawnEvent](/groovy-script/minecraft/events/living_spawn_event/), [LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
boolean hasResult()
```

```groovy
boolean isSpawner()
```

```groovy
net.minecraft.tileentity.MobSpawnerBaseLogic getSpawner()
```
