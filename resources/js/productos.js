// Mediante una llamada ajax, consume el API rest
// Obtiene el listado de productos
// Despliega los datos
function mostrarProductos () {
    // Llamada ajax con JQuery
    $.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Invocando metodo para mostrar los datos      
        renderHTML(data);
    });
}

// Despliega el listado de datos 
// Arma el html dinamicamente 
function renderHTML (data) {
    // Recorremos los datos recibidos por parametro
    $.each(data, function(i, item) {
        // Obtenemos el contenedor donde se van a desplegar los productos
        var products = $("#products");
        // Generamos el nodo html con los datos que vienen en el JSON 
        var html = '<a style="background-image: url('+data[i].imagen+')">' + 
        '<p>'+ data[i].descripcion + '</p></a>'; 
        // Agregamos en el contenedor de productos el html para cada dato del listado
        products.append(html);
    });
}

function mostrarFiltros() {
    // Obtengo datos
    $.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Tengo los datos 
        $.each(data, function(i, item) {
            var filtro = $(".filtros");
            //  ARmo el html           
            var html = '<option value="'+data[i].id+'">'+data[i].name+'</option>';
            filtro.append(html);
        })
    });

}

mostrarFiltros();
// Ejecucion del metodo mostrarProductos
mostrarProductos();



















