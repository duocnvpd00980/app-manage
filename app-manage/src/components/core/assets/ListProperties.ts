import { Appearance } from "./Appearance";
import { Character } from "./Character";
import { Paragraph } from "./Paragraph";
import { Transform } from "./Transform";
import { TypeOptions } from "./TypeOptions";

class ListProperties {
  transform?: Transform;
  appearance?: Appearance;
  character?: Character;
  paragraph?: Paragraph;
  typeOptions?: TypeOptions;
  constructor(
    transform?: Transform,
    appearance?: Appearance,
    character?: Character,
    paragraph?: Paragraph,
    typeOptions?: TypeOptions
  ) {
    this.transform = transform;
    this.appearance = appearance;
    this.character = character;
    this.paragraph = paragraph;
    this.typeOptions = typeOptions;
  }
}

export default ListProperties;
