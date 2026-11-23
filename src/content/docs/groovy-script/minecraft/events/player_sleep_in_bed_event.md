---
title: Player Sleep In Bed Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.PlayerSleepInBedEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](/groovy-script/minecraft/events/player_event/), [LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
void setResult(net.minecraft.entity.player.EntityPlayer$SleepResult arg0)
```

```groovy
net.minecraft.util.math.BlockPos getPos()
```

```groovy
net.minecraft.entity.player.EntityPlayer$SleepResult getResultStatus()
```
