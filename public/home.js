
function populateUFs() {
   const ufSelect = document.querySelector ("select[name=uf]")

   fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
   .then (res => res.json() )
   .then ( states => {
       
        

       for(const state of states) {
           ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
       }

       
   })
}

populateUFs()


function getCities(event) {
   const citySelect = document.querySelector ("select[name=city]")
   const stateInput = document.querySelector ("input[name=state]")


   console.log(event.target.value)

   const ufValue = event.target.value

   const indexOfSelectedState = event.target.selectedIndex
   stateInput.value = event.target.options[indexOfSelectedState].text
   
   const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

   citySelect.innerHTML = "<option value> Selecione a Cidade</option>"
   citySelect.disabled = true


   fetch (url)
   .then (res => res.json() )
   .then ( cities => {
       console.log(cities)
       for(const city of cities ) {
           citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` 
           
       }

           citySelect.disabled = false
       
   })


}


document
       .querySelector("select[name=uf]")
       .addEventListener("change", getCities );

       
function teste() {
        fields = {
            name,
            crm,
            telefone,
            uf,
            cidade,
            primeiraEspecialidade,
            segundaEspecialidade,
        }
       
    
    fields.name = document.getElementById('name').value
    fields.crm = document.getElementById('crm').value
    fields.telefone = document.getElementById('telefone').value

    
    fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then (res => res.json() )
    .then ( cities => {
            for (let i = 0; i < cities.length; i++) {
               if (cities[i].id == document.getElementById('uf').value) {
                   fields.uf = cities[i].nome
                   
               }
                
            }
    })

    fields.cidade = document.getElementById('cidade').value
    fields.primeiraEspecialidade = document.getElementById('primeiraEspecialidade').value
    fields.segundaEspecialidade = document.getElementById('segundaEspecialidade').value


    console.log(fields)
}

 



   