# teste 01

Este teste realiza uma consulta na api viacep, trazendo as informações do endereço do usuário de acordo com o cep informado por ele no **_input_**.


No teste consta um pequeno formlário html no arquivo **_index.html_** e também uma pequena estilização com **_css_**.

No momento que o usuário terminar de digitar o cep, e clicar no botão de cor laranja chamado **PROCURAR**, é feita uma validação se o cep não está vazio e se o cep informado é valido. Caso tudo ocorrer bem, é então realizada a consulta no viacep utilizando o fetch, caso o
cep não seja encontrado, é mostrada a mensagem para o usuário, caso o cep for encontrado, é preenchido os restantes dos inputs do formulário com a resposta retornada da api viacep.

## Descrição dos métodos criados no arquivo javascript

### Método *search(cep)* - Esse método é responsável por realizar a consulta na api viacep e preencher os inputs com as informações retornadas da api.

### Método *isValidatedCep(cep)* - Esse método é resposável por validar se o cep informado no input é válido.
