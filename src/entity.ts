import { HasGraphic } from "./graphics";
import { HasPosition } from "./position";

export type Entity = Partial<HasPosition> & Partial<HasGraphic>;
