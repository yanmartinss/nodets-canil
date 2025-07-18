import { data, PetTipo, PetType } from "./data";

export const Pet = {
  getAll: (): PetType[] => {
    return data;
  },
  getFromType: (type: PetTipo): PetType[] => {
    return data.filter((item) => item.type === type);
  },
  getFromName: (name: string): PetType[] => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};
