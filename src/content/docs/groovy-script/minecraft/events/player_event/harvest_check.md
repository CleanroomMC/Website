---
title: Harvest Check
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.PlayerEvent.HarvestCheck
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](/groovy-script/minecraft/events/player_event/), [LivingEvent](/groovy-script/minecraft/events/living_event/), [EntityEvent](/groovy-script/minecraft/events/entity_event/)

## Methods
```groovy
boolean canHarvest()
```

```groovy
net.minecraft.block.state.IBlockState getTargetBlock()
```

```groovy
void setCanHarvest(boolean arg0)
```
