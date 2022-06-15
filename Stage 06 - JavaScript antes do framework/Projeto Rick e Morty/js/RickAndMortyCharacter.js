export class RickAndMortyCharacter {
  static search(id) {
    const endpoint = `https://rickandmortyapi.com/api/character/${id}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(({
        id,
        name,
        status,
        species,
        location,
        episode
      }) => ({
        id,
        name,
        status,
        species,
        location,
        episode,
      }))
      .catch(e => console.log('encontrei erro', e))
  }
}