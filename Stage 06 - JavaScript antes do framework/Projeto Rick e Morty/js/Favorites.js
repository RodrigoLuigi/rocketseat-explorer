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
// import { GithubUser } from "./GithubUser.js"

// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
    this.id = 0;

    // RickAndMortyCharacter.search('1')
    //   .then(character => console.log(character))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-characters:')) || []

    console.log(this.entries)

    // this.entries = [{
    //     id: 43,
    //     name: 'Big Morty',
    //     status: 'Dead',
    //     species: 'Human',
    //     location: 'Citadel of Ricks',
    //     episode: 'The Ricklantis Mixup'
    //   },
    //   {
    //     id: 658,
    //     name: 'Sonia Sotomayor',
    //     status: 'Live',
    //     specie: 'Human',
    //     location: 'Universo mesclado',
    //     episode: 'Episódio do tanque de ácido'
    //   }
    // ]
  }

  // async add(characterId) {
  //   try {
  //     const character = await RickAndMortyCharacter.search(characterId)
  //     console.log(character)
  //     if (character.id === undefined) {
  //       throw new Error('Personagem não encontrado!')
  //     }

  //     this.entries = [character, ...this.entries]
  //     this.update()

  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  delete(character) {
    const filteredEntries = this.entries.filter(entry => entry.name !== character.name)

    this.entries = filteredEntries
    console.log(this.entries)

    this.update()
  }

  async adicionar(){
    const entrada = []
    
    for(let i=0; i<6; i++){
      const character = await RickAndMortyCharacter.search(this.id+1)
        entrada.push(character)
        this.id= character.id
    }
   
    this.entries = entrada
    
    this.update()
    console.log(this.entries)

  }

  async diminuir(){
    const entrada = []
    this.id = this.entries[0].id
    this.id = this.id-7
    for(let i=1; i<7; i++){
      const character = await RickAndMortyCharacter.search(this.id+1)
      this.id= character.id
      entrada.push(character)

    }
    
    console.log(this.id)
    this.entries = entrada
    
    this.update()
    console.log(this.entries)

  }
}

// classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.cardWrapper = this.root.querySelector('.card-wrapper')

    this.update()
    // this.onadd()
    this.nextPage()
    this.previewsPage()
    this.adicionar()

  }

  // onadd() {
  //   const addButtom = this.root.querySelector('.search button')
  //   addButtom.onclick = () => {
  //     const {
  //       value
  //     } = this.root.querySelector('.search input')
  //     this.add(value);
  //   }
  // }

  nextPage(){
    const addButtom = this.root.querySelector('.search .next-page')
  
       addButtom.onclick = () => {
        console.log(this.id)
    
     this.adicionar()

     }
  }

  previewsPage(){
    const addButtom = this.root.querySelector('.search .down-page')
   
       addButtom.onclick = () => {
    //   const {
    //     value
    //   } = this.root.querySelector('.search input')
    //   this.add(value);
    // x += -6;
    // y+= -6;
    console.log(this.id)

    this.diminuir()

     }
  }

  update() {

    this.removeAllCards();
    // this.createCard();


    this.entries.forEach(character => {
      const card = this.createCard();

      card.querySelector('.card-image img').src = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`
      card.querySelector('.card-info h2').textContent = character.name
      card.querySelector('.card-info .status').textContent = `${character.status} - ${character.species}`
      card.querySelector('.location p').textContent = character.location.name
      
      const leng = character.episode.length
      const epis = character.episode[leng - 1]

      const arr = epis.split('')

      let ep = '';
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
          ep += arr[i]
        }
      }
      card.querySelector('.episode p').textContent = `Episódio ${ep}`

      card.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar esse Card?')

        if (isOk) {
          this.delete(character);
        }
      }

      card.classList.add('card')
      this.cardWrapper.append(card)
    })
    if(this.id == 6){
      this.root.querySelector('.down-page span').classList.add('hide')
      this.root.querySelector('.down-page').style.background = '#000'
    }else{
      this.root.querySelector('.down-page span').classList.remove('hide')
      this.root.querySelector('.down-page').style.background = 'goldenrod'
    }
  }

  createCard() {
    const card = document.createElement('div')

    card.innerHTML = `
    <div class="card-image">
    <button class="remove">&times;</button>
      <img class="character-image" src="https://rickandmortyapi.com/api/character/avatar/43.jpeg"
        alt="Imagem do ">
    </div>

    <div class="card-info">
      <div class="section">
        <h2 class="name">Big Morty</h2>
        <span class="status">Dead - Human</span>
      </div>

      <div class="section">
        <span class="scale-gray">Último local conhecido:</span>
        <a class="location" href=""><p>Citadel of Ricks</p></a>
      </div>

      <div class="section">
        <span class="scale-gray">Visto pela última vez em:</span>
        <a class="episode" href=""><p>The Ricklantis Mixup</p></a>
      </div>
    </div>
    `

    return card;
  }

  removeAllCards() {
    this.cardWrapper.querySelectorAll('.card').forEach((card) => {
      card.remove()
    })
  }
}