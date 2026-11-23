---
title: Get Collision Boxes Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.world.GetCollisionBoxesEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[WorldEvent](/zh/groovy-script/minecraft/events/world_event/world_event/)

## Methods
```groovy
net.minecraft.entity.Entity getEntity()
```

```groovy
java.util.List getCollisionBoxesList()
```

```groovy
net.minecraft.util.math.AxisAlignedBB getAabb()
```
