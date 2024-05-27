import { defineStore } from "pinia";

interface navbarState {
  drawer: boolean;
  rail: boolean;
  sizeDisplay?: string;
}

interface SnackBar {
  show: boolean;
  title: string;
  text?: string;
  color?: string;
  variant?: string;
}
const useStore = defineStore("store", {
  state: () =>
  ({
    drawer: true,
    rail: true
  } as navbarState),
  getters: {},
  actions: {
    setChangeRail() {
      this.rail = !this.rail;
    },
    setChangeDrawer() {
      this.rail = false;
      this.drawer = !this.drawer;
    }
  }
});
const useSnackbarStore = defineStore("snackbarStore", {
  state: () =>
  ({
    show: false,
    title: "",
    text: "",
    color: "",
    variant: ""
  } as SnackBar),
  actions: {
    setStatus(status: string, title: string, text?: string) {
      this.show = true;
      this.title = title;
      this.text = text;
      this.color = status;
    }
  }
});

export { useStore, useSnackbarStore };
