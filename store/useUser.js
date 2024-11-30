import { create } from "zustand";

// NOTE: at the moment that everything i think we'll need
const initialState = {
	id: '',
	name: '',
	email: '',
	profilePic: '',
	isActive: false,
	gym: '',
}

export const useUser = create((set) => ({
  user: '',
  set_user: (user) => set({user: user})
}))
