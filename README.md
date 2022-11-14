# Back-End-Bsale
Al realizar una petición HTTP, el servicio retornara un JSON con la siguiente estructura:
```
{
id: 5
name: "ENERGETICA MR BIG"
url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg"
price : 1490
discount: 20
category: 1
}
```

## Propiedades
- id: identificador del producto
- name: nombre del producto
- url_image: imagen del producto
- price: precio del producto
- discount: descuento que se le hace al producto
- category: es la categoria la que pertenece el producto se represanta con un numero del 1-7

## Categorias
- 1: bebida energetica
- 2: pisco
- 3: ron
- 4: bebida
- 5: snack
- 6: cerveza
- 7: vodka
#### Obtener todos los Productos

```http
  GET /products
```
### Obtener todas las Categorias
```http
  GET /category
```

### Obtener Productos por nombre
```http
  GET /products/search?name=
```
## Obtener Productos por Categoria
```http
  GET /products/category
```
