# Configurando o Git

Status: Completo

<aside>
💡 Qual o comando de configuração do git?

</aside>

Nessa aula aprenderemos a configurar o arquivo de configurações do **Git** para que o histórico de alterações fique com o nosso nome e e-mail corretamente no repositório.

Configuração inicial

Definir nome e e-mail para identificar quem está fazendo os commit’s e alterações no código

- Configurando o nome e e-mail
    
    **git config** **—globa**l [user.name](http://user.name) “rodrigo”
    
    **git config** **—global** [user.email](http://user.email) “digaor@gmail.com”
    
    para exibir o conteúdo do arquivo de configurações utilizamos o comando
    
    **git config —list**