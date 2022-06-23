import {
  GithubUsers
} from "./GithubUsers.js";

// Classe onde será trabalhado os DADOS
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();

  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:') )|| [];
  }

  save(){
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    const userExists = this.entries.find(entry => entry.login === username)

    try{
      if(userExists){
        throw new Error('Favorito já cadastrado!')
      }    

      const user = await GithubUsers.search(username)

      if(user.login === undefined){
        throw new Error('Usuário não existe!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    }catch(error){
      alert(error.message)
    }
   
  }

  deleteUser(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
    this.entries = filteredEntries
    this.save()
    this.update();
  }
}

// Classe onde será trabalhado a exibição dos dados no HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')

    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

    this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = `/${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm(`Deseja excluir ${user.name} dos Favoritos?`)
        if(isOk){
          this.deleteUser(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/RodrigoLuigi.png" alt="Imagem Rodrigo Luigi">
        <a href="https://github.com/RodrigoLuigi" target="_blank">
          <p>Rodrigo Luigi</p>
          <span>/rodrigoluigi</span>
        </a>
      </td>
      <td class="repositories">76</td>
      <td class="followers"> 928</td>
      <td>
        <button class="remove">Remover</button>
      </td>
      `

    return tr;
  }

  removeAllTr() {
    const favoritesTable = this.root.querySelector('.favorites-table')

    this.tbody.querySelectorAll('tr')
      .forEach(tr => {
        tr.remove()
      });

    if (this.entries.length === 0) {
      favoritesTable.classList.add('cleanTable')
    } else {
      favoritesTable.classList.remove('cleanTable')
    }

    this.root.querySelector('.search input').value = ''
  }
}