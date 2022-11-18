import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/characters/characterData';

@Pipe({
  name: 'characterFilter',
})
export class CharacterFilterPipe implements PipeTransform {
  transform(
    list: ReadonlyArray<Character> | null,
    args: Readonly<string> | null
  ): Character[] {
    return list!.filter((character: Character) => {
      if (!args) return list;
      return (
        character.data.name.toLowerCase().includes(args!.toLowerCase()) ||
        character.universe
          .toLocaleLowerCase()
          .includes(args!.toLocaleLowerCase())
      );
    });
  }
}
