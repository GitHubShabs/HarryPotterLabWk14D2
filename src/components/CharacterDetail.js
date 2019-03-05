import React from 'react';

const CharacterDetail = ({ character}) => {
  if (!character) return null;
  return (
    <dl>
     <dt>Name</dt>
     <dd>{character.name}</dd>
     <dt>Species</dt>
     <dd>{character.species}</dd>
    </dl>

  );
}

export default CharacterDetail;
