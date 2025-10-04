---
title: Framework
---

# Framework

This page is about some core classes of a Modular GUI.

## ModularScreen

This is the core of each GUI on the client side. It keeps track of all panels.
This is where the `ModularGuiContext` is stored.

Useful methods are:

- `getOwner()` returns the owner of the screen (usually a mod id)
- `getName()` returns the name of the main panel
- `getContext()` returns the `ModularGuiContext`
- `getPanelManager()` returns the `PanelManager` (mostly an internal class which handles multiple panels)
- `getSyncManager()` returns the `ModularSyncManager`
- `isClientOnly()` returns if the screen is only open on client side
- `registerGuiActionListener()` registers an interaction listener
- `registerFrameUpdateListener()` registers a listener which is called approximately 60 times per second
- `getCurrentTheme()` returns the active theme for the screen
- `useTheme()` tries to set the new theme (does nothing if theme is overridden by resource packs)
- `pausesGame()` sets whether the game pauses when the screen is open (pausing meaning all movement and ticking stops)

## ModularGuiContext

This class keeps track of the current GUI state. For example pressed buttons and keys, focused widgets
dragging widgets, mouse position, JEI settings, themes and most importantly viewports and transformations.

Useful methods are:

- `isAbove()` returns if the mouse is above a widget
- all methods related to hovering
- all methods related to focusing
- `hasDraggable()` if the mouse is currently dragging an `IDraggable` (not including item stacks)
- `isMouseItemEmpty()` if the mouse is currently not dragging an `ItemStack`
- `getMouseX()` and `getMouseY()` returns the current mouse position with the current transformations applied to it.
  That
  means it is relative to the current widgets position
- `getMouseAbsX()` and `getMouseAbsY()` returns the true (absolute) mouse position
- `unTransformMouseX()` and `unTransformMouseY()` is like `getMouseX()` and `getMouseY()`, but the transformations are
  inverted
- `getMouseButton()` returns the last pressed mouse button
- `getMouseWheel()` returns the last scroll wheel use
- `getKeyCode()` returns the last typed key code
- `getTypedChar()` returns the last typed character
- `getPartialTicks()` returns the partial ticks for the current frame
- `getTheme()` returns the current active theme
- `getUISettings()` returns the current UI settings
- `getRecipeViewerSettings()` returns the current modifiable JEI/NEI settings

## ModularPanel

This is the root of each widget tree. Panels are also [widgets](#widget).

## Widget

A widget is an element in the widget tree. It has a size and position and it can be rendered on screen.

This class has a lot of useful methods, too many to list them all. But you can take a look yourself. I did my best
to structure it and make it clean.

## PanelManager

Keeps track of all panels and the main panels. Handles opening and closing panels. Mostly internal.

## ModularSyncManager

Manages `PanelSyncManagers`. This class is created once in `ModularContainer`.

## PanelSyncManager

Manages `SyncHandler`s for a panel. Each panel has its own manager.

## GuiScreenWrapper

This is the minecraft `GuiScreen` class which wraps the `ModularScreen`.
For synced GUI's a container exists and `GuiContainerWrapper` is used. A custom class with minimal overrides can be
used.

## ModularContainer

This is the minecraft `Container` class. It can be overridden by setting a new supplier in `UISettings`.
