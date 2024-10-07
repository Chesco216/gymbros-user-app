import { create } from "zustand";

export const useDay = create((set) => ({
  day_opt: '',
  set_day_opt: (day) => set({day_opt: day})
}))
