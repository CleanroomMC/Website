# Player Set Spawn Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerSetSpawnEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](player_event/player_event.md), [LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
boolean isForced()
```

```groovy:no-line-numbers
net.minecraft.util.math.BlockPos getNewSpawn()
```
