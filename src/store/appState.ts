import { observable } from "@legendapp/state";
import { ObservablePersistMMKV } from "@legendapp/state/persist-plugins/mmkv";
import { syncObservable } from "@legendapp/state/sync";

interface AppState {
  settings: {
    theme: "light" | "dark";
  };
}

const initialState: AppState = {
  settings: {
    theme: "light",
  },
};

export const appState$ = observable<AppState>({
  ...initialState,
});

syncObservable(appState$, {
  persist: {
    name: "appState",
    plugin: ObservablePersistMMKV,
  },
});

export const resetAppState = () => {
  appState$.set(initialState);
};

export const settingActions = {
  toggleTheme: () => {
    appState$.settings.theme.set(
      appState$.settings.theme.get() === "light" ? "dark" : "light"
    );
  },
};
