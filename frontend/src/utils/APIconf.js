// Recupère toutes les informations que peut renvoyé l'API
export async function getApi() {

  return await fetch('http://localhost:8080/api/properties')
    .then(response => response.json())
    .catch(error => console.error("getApi-erreur",error))

}

// Recupère l'id de la page (ex: url) et si l'id correspond à un id dans l'API alors renvoie les informations liés sinon null
export async function getApiWithId(id) {
  return await fetch('http://localhost:8080/api/properties/'+ id)
  .then(r => r.ok ? r.json() : null)
}



