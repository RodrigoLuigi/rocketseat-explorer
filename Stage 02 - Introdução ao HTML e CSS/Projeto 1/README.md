# <img src="https://imgur.com/X4HdxWx.png"  width="50px" align="center" alt="Logo Explorer em formato de Hexagono Azul com detalhes azul claro"> Explorer - Projeto 01 HTML / CSS

### 📌 Trabalhando com a ferramenta Figma e o projeto que iremos desenvolver durante o Stage 02. Aprendemos sobre o Figma a ferramenta dos Web designer e como transformar um layout em html e css. Desenvolvemos a estrutura html, buscando sempre as melhores tags para se utilizar de forma semântica, utilizamos links, posicionamentos , espaçamentos , fontes , bordas , alinhamentos e textos.



### **Introdução ao Figma.**
* Figma

    - Ferramenta de design UI/UX estudo das cores, posicionamento , layout e melhor interação com usuário.

### **O que desenvolvemos neste Projeto?** 
* Projeto simples , no qual trabalhamos com imagens, textos, fonts, tamanhos, cores , negritos, links, linhas , bordas, posicionamento de elementos, alinhamento, espaço , e todo o básico de HTML e CSS estruturado de forma semântica.


### <img src="https://imgur.com/VhTBbHg.png" alt="imagem de um notebook" align="center" width="30px"> _**Início Projeto**_

### 📌 Codificamos a estrutura inicial do nosso projeto, passando por todos os elementos do HTML *(head, meta, body)*.

    Estrutura do HTML

    <!-- Define o tipo de documento como HTML5-->
    <!DOCTYPE html>

    <!-- Linguagem que vamos utilizar no documento -->
    <html lang="pt-br">  

    <head>
    
    <!-- Configuração de texto para caracteres especiais -->
    <meta charset="UTF-8">
 
    <!-- 'viewport' é toda área visivel do navegador, varia de acordo com o tamanho de tela do dispositivo -->
    <meta *name*="viewport" *content*="width=device-width, initial-scale=1.0">  
   
    < title>Móveis customizados</ title>
    TÍTULO DA PÁGINA
    </head>

    <body>
    CONTEÚDO DA PÁGINA
    </body>

    </html>



### **Estrutura HTML do Projeto:**   
* uma div contendo uma imagem
* um texto grande
* dois parágrafos pequenos 
* uma div contendo dois links 
* uma imagem(balls) em formato de **SVG**

**SVG** é um arquivo de imagem no formato de HTML, mantém a qualidade e é um arquivo mais leve.

Estudo de posicionamento dos elementos, respeitando a ordem do HTML e conceitos sobre `block` e `inline` e acrescentamos mais dois novos elementos `<span>` e `<strong>`.

Existem 2 tipos de elementos de especificação de como os elementos ficarão posicionados que é: **um abaixo do outro**, ou, **um ao lado do outro**. 

Os que ficam **um abaixo do outro** tem uma especificação de `block` (`display: block;`) 

ex. div, h1, p...

os que ficam **um ao lado do outro** tem especificação `in-line` (`display: inline;`)

ex. img, a, i...

Aplicamos fontes customizadas, e demos início a estilização do nosso projeto.

* **Fonts**

   🔗 **[Open Sans - Google Fonts](https://fonts.google.com/specimen/Open+Sans?query=open+sans)**

   🔗 **[Inter - Google Fonts](https://fonts.google.com/specimen/Inter?query=inter)**

A tag `<link>` faz referência `href` a algum css externo, e o `"rel"` é a relação da página com esse link, que no caso é `preconnect` como no exemplo a seguir.
    
    Ex.    <link rel=”preconnect” href=”https://fonts.googleapis.com”> 
    

O arquivo `.css` é inserido no `<head>` do HTML através de um **link**, utilizando a referência do arquivo `style.css` que está na pasta raiz do projeto, e que possui uma relação de **stylesheet** ( folha de estilo).
    
    Ex.    <link rel=”stylesheet” href=”style.css”>
    
Foi adicionado cores aos textos do nosso projeto de acordo com o layout do Figma. Também foram aplicado propriedades de `fonts` e `color` do CSS.

        font-size     line-height     font-weight     text-align

A propriedade `color: #FF9900;` é uma numeração que vai de 0 a F e se repetem em pares de 2. 

        Ex. #FF9900

        FF é a quantidade de vermelho
        99 é a quantidade de verde 
        00 é a quantidade de azul

        todos variam de 0 a F  

        #FF0000 = vermelho
        #00FF00 = verde
        #0000FF = azul

Fizemos alguns ajustes nos textos do nosso projeto e trabalhamos algumas **tags** para quebrar linhas e utilizar espaços em textos.

Utilizamos a tag `<br/>` para fazer quebras de linha em textos pelo html e também utilizamos a sintaxe `&nbsp;` para dar espaços

Aplicamos conceitos e propriedades `margin` do CSS, utilizando o **shorthand** em um trecho de código, e ajustamos os espaçamentos do nosso projeto. Também foi utilizado um seletor especial **`'+'`**.

        Ex. Seletor especial ‘ + ‘

        footer a + a {
        }  
        
    O seletor pega o 'a' que anterior a ele tenha um 'a' ou seja utiliza o espaço entre os dois 'a'. 

### **Propriedades de margin**

        Ex. 

        magin: 10px 15px 8px 5px;  
        top ,  right , bottom , left

        margin: 10px 15px 8px;
        top right/left bottom

        margin: 10px 15px;
        top/bottom right/left

        margin: 10px;
        global

        margin-top: **px;

        margin-right: **px;

        margin-bottom: **px;

        margin-left: **px;

Adicionamos uma linha em nossa página com a propriedade `border`
do CSS

        Propriedades:

        border-color: green; - cor

        border-style: solid; - estilo

        height: 2px; - altura 

        border: green solid 2px; - Borda de cor verde sólida e com altura de 2px.

Posicionamento de elementos na página utilizando a propriedade `position`
do CSS.

        temos valores do tipo:

        position: absolute;

        position: fixed;

        position: relative;

        position: static; (padrão)

        position: sticky;

Ao criar um position , estamos criando um novo contexto, como se existisse uma folha em cima de outra folha, ou camadas, uma em cima da outra, para que possamos posicionar o elemento;

## Screenshots

<img src="">

