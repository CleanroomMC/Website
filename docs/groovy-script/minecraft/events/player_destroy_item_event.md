# Player Destroy Item Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerDestroyItemEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](./player_event/index.md), [LivingEvent](./living_event/index.md), [EntityEvent](./entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.util.EnumHand getHand()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getOriginal()
```
