# <img src="https://imgur.com/X4HdxWx.png"  width="50px" align="center" alt="Logo Explorer em formato de Hexagono Azul com detalhes azul claro"> Explorer - Projeto 01

### 📌 Nessa aula apresentamos a ferramenta Figma e o projeto que iremos desenvolver durante o Stage 02.
### Introdução ao Figma e Projeto 1 HTML / CSS.

### **Figma**
* Ferramenta de design UI/UX estudo das cores, posicionamento , layout e melhor interação com usuário.
Projeto simples , no qual iremos trabalhar com imagens, títulos propriedades de texto , links , cores , entre outros...

### **O que iremos aprender** 
* imagens, textos, fonts, tamanhos, cores , negritos, links, linhas , bordas, posicionamento de elementos, alinhamento, espaço , e todo o básico de HTML e CSS estruturado de forma semântica.

## Início Projeto

### 📌 Codificamos a estrutura inicial do nosso projeto, passando por todos os elementos do HTML *(head, meta, body)*.

### _**Estrutura do HTML**_
### **< !DOCTYPE *html*>**
DEFINE O TIPO DE DOCUMENTO COMO HTML5
### **< html *lang*="pt-br">**  
LINGUAGEM QUE VAMOS UTILIZAR NO DOCUMENTO 
**< head>**
### **<meta *charset*="UTF-8">**
CONFIGURAÇÂO DE TEXTO PARA CARACTERES ESPECIAIS
### **<meta *name*="viewport" *content*="width=device-width, initial-scale=1.0">**  
**VIEWPORT** É TODA ÀREA VISIVEL DO NAVEGADOR , VARIA DE ACORDO COM O TAMANHO DE TELA DO DISPOSITIVO
### **< title>Móveis customizados</ title>**
TÍTULO DA PÁGINA
**</ head>**

### **< body>**
CONTEÚDO DA PÁGINA
### **</ body>**

### **</ html>**

SVG é um arquivo de imagem no formato de HTML, mantém a qualidade e é um arquivo mais leve.

- Estrutura HTML:   uma div contendo uma imagem, um texto grande , dois parágrafos pequenos , mais uma div contendo dois links,  e  uma imagem(balls).

Nessa aula organizamos a posição dos nossos elementos respeitando a ordem do HTML e aprendemos sobre `block`
 e `inline`
 e acrescentamos mais dois novos elementos `<span>`
 e `<strong>`

Existem 2 tipos de elementos de especificação de como os elementos ficarão posicionados que é : um abaixo do outro, ou,  um ao lado do outro 

os que ficam um abaixo do outro tem uma especificação de “bloco” (display: block;) 

ex. div, h1, p...

os que ficam um ao lado do outro tem especificação “in-line”(display: inline;)

img, a, i...

Nessa aula aplicamos fontes customizadas e demos inicio a estilização do nosso projeto 01.

- Fonts
    - **[Open Sans - Google Fonts](https://fonts.google.com/specimen/Open+Sans?query=open+sans)**
    - **[Inter - Google Fonts](https://fonts.google.com/specimen/Inter?query=inter)**
    
    A tag <link>  faz referência “href” a algum css externo como no exemplo: e o real é qual a relação desse link no caso “preconnect”.
    
    <link rel=”preconnect” href=”https://fonts.googleapis.com”> 
    
    o arquivo .css é inserido no <head> do HTML através de um link, utilizando a referência do arquivo style.css que está na pasta raiz do projeto, e que possui uma relação de stylesheet ( folha de estilo).
    
    Ex.
    
    <link rel=”stylesheet” href=”style.css”>
    
    foi aplicado:
    
    font-family: ‘Inter’, sans serif; ,
    
    e
    
    font-family: ‘Open Sans’, sans serif;
    
    nos seletores de body , h1, a,

    Nessa aula começamos a dar cores ao textos do nosso projeto de acordo com o layout do Figma. Também aprendemos algumas propriedades do CSS: `color`
, `font-size`
, `line-height`
, `font-weight`

è uma numeração que vai de 0 a F e se repetem em pares de 2 

ex.

#FF9900 ou seja FF é a quantidade de vermelho,

 o 99 é a quantidade de verde ,

e o 00 é a quantidade de azul

todos variam de 0 a F  

#FF0000 = vermelhor ,

#00FF00 = verde ,

#0000FF = azul

foi aplicado a propriedade color em <span>, <p>,<a>

Nessa aula fizemos alguns ajustes nos textos do nosso projeto e aprendemos como quebrar linhas e uma maneira de utilizar espaços.

utilizamos a tag <br/> para fazer quebras de linha em textos pelo html e também utilizamos a sintaxe &nbsp; para dar espaços

Nessa aula aprendemos sobre as propriedades `margin`
 do CSS, aplicamos o *shorthand*
 em um trecho de código e ajustamos os espaçamentos do nosso projeto.

Seletor especial ‘ + ‘ 

Ex. a + a , ou seja ele pega o ‘a’ que anterior a ele tenha um ‘a’  ou seja utiliza o espaço entre os dois ‘a’.

Ex. propriedades de margin:

magin: 10px 15px 8px 5px;

margin: 10px 15px 8px

margin: 10px 15px

margin: 10px

margin-top: ***

margin-right: ***

margin-bottom: ***

margin-left: ***

Nessa aula aprendemos como adicionar uma linha em nossa página com a propriedade `border`
 do CSS

utilizamos as propriedades

border-color: green; - cor

border-style: solid; - estilo

height: 2px - altura 

border: green solid 2px

ficaria uma borda de cor verde sólida e com altura de 2px.

Nessa aula nós aprendemos sobre posicionamento de elementos na página utilizando a propriedade `position`
 do CSS.

temos valores do tipo:

position: absolute;

position: fixed;

position: relative;

position: static; (padrão)

position: sticky;

Ao criar um position , estamos criando um novo contexto, como se existisse uma folha  em cima de outra folha ou camadas uma em cima da outra para que possamos posicionar o elemento;

Aprendemos sobre o Figma a ferramenta dos Web designer e como transformar em html e css , aprendemos ao html quais as melhores tags para se utilizar de forma semântica como utilizar links, posicionamentos , espaçamentos , fontes , bordas , alinhamentos ,textos ...

## Screenshots

<img src="">

