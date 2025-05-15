import { atom } from "recoil";

export const user = atom<User>({
  key: "user",
  default: {
    name: "Khin Su Shar Htet",
    token: "",
  } as User,
});
