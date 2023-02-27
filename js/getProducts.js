fetch('/data/stock.json')
        .then((resp) => resp.json())
        .then(data => {
            pintarProductos(data)
        })



//Solicitud HTTP que devuelve la promesa para traer los datos del json