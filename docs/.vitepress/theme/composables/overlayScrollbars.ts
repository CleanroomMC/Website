import {
  OverlayScrollbars,
  type OverlayScrollbars as OverlayScrollbarsInstance,
} from "overlayscrollbars";
import { nextTick, onBeforeUnmount, onMounted, watch, type Ref } from "vue";

const DARK_MODE_SCROLLBAR_THEME = "os-theme-light";
const LIGHT_MODE_SCROLLBAR_THEME = "os-theme-dark";

function getScrollbarTheme(isDark: boolean) {
  return isDark ? DARK_MODE_SCROLLBAR_THEME : LIGHT_MODE_SCROLLBAR_THEME;
}

function updateScrollbarTheme(
  instance: OverlayScrollbarsInstance | undefined,
  isDark: boolean,
) {
  instance?.options({
    scrollbars: {
      theme: getScrollbarTheme(isDark),
      autoHide: "scroll",
    },
  });
}

export function useOverlayScrollbars(isDark: Ref<boolean>) {
  let bodyInstance: OverlayScrollbarsInstance | undefined;
  let sidebarInstance: OverlayScrollbarsInstance | undefined;
  let sidebarTarget: HTMLElement | null = null;

  const syncBodyInstance = () => {
    if (!document.body) {
      return;
    }

    bodyInstance ??= OverlayScrollbars(document.body, {
      scrollbars: { autoHide: "scroll" },
    });
    updateScrollbarTheme(bodyInstance, isDark.value);
  };

  const syncSidebarInstance = () => {
    const nextSidebarTarget = document.querySelector<HTMLElement>(".VPSidebar");

    if (sidebarTarget && sidebarTarget !== nextSidebarTarget) {
      sidebarInstance?.destroy();
      sidebarInstance = undefined;
      sidebarTarget = null;
    }

    if (!nextSidebarTarget) {
      return;
    }

    sidebarTarget = nextSidebarTarget;
    sidebarInstance ??= OverlayScrollbars(nextSidebarTarget, {
      scrollbars: { autoHide: "scroll" },
    });
    updateScrollbarTheme(sidebarInstance, isDark.value);
  };

  const syncOverlayScrollbars = async () => {
    await nextTick();

    syncBodyInstance();
    syncSidebarInstance();
  };

  onMounted(() => {
    void syncOverlayScrollbars();
  });

  watch(isDark, (value) => {
    updateScrollbarTheme(bodyInstance, value);
    updateScrollbarTheme(sidebarInstance, value);
  });

  onBeforeUnmount(() => {
    bodyInstance?.destroy();
    sidebarInstance?.destroy();
  });

  return {
    syncOverlayScrollbars,
  };
}
