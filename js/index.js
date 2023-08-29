const button = document.getElementsByClassName('btnProcurar')
const cep = document.getElementById('cep')
const logradouro = document.getElementById("Logradouro")
const localidade = document.getElementById("Localidade")
const bairro = document.getElementById("Bairro")
const uf = document.getElementById("UF")
const complemento = document.getElementById("Complemento")


button[0].addEventListener("click", function() {
    const cepValue = cep.value
    if(cepValue == ""){
        return alert("Informe seu cep")
    }
    if(!isValidatedCep(cepValue)) {
        return alert("Informe um cep válido")
    }
    
   search(cepValue)
});

function search(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        return response.json()
    })
    .then(response => {
        if(response.erro) {
            return alert("CEP não encontrado")
        }
        localidade.value = response.localidade
        logradouro.value = response.logradouro
        bairro.value = response.bairro
        uf.value = response.uf

        console.log(`RESULTADO DA API VIACEP:` )
        console.log(response)
    })
}

function isValidatedCep(value) {
   const cep = value.replace(/\D/g, '');

   if(cep != "") {
    const regex = /^[0-9]{8}$/;
    return regex.test(value)
   }
   
}