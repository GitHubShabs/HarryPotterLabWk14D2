import React from 'react';

const CharacterDetail = ({ character}) => {
  if (!character) return null;
  return (
    <dl>
     <dt>Name</dt>
     <dd>{character.name}</dd>
     <dt>Gender</dt>
     <dd>{character.gender}</dd>
     <dt>Species</dt>
     <dd>{character.species}</dd>
     <dt>Ancestry</dt>
     <dd>{character.ancestry}</dd>
     <dt>House</dt>
     <dd>{character.house}</dd>
    </dl>

  );
}

export default CharacterDetail;
