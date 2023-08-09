export type Avenger = { name: string };
export type AvengerPicked = Record<Avenger["name"], boolean>;
export type AvengerDied = Avenger & { died: boolean };
