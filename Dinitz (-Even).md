---
aliases: 
tags: working
cssclass: 
publish: 
---

Links: 
Created: 2022-04-28
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
## Idea
La idea básica de Dinitz es “guardar” todos los posibles caminos aumentantes de la misma longitud (mínima) en una estructura auxiliar.
Una vez construido el network auxiliar usando BFS, encontramos los caminos aumentantes que vamos a usar.... corriendo "Greedy" en ese network auxiliar usando "DFS".
Se usa el network auxiliar hasta que no se puede usar mas, y luego se contruye otro a partir del nuevo flujo.

## Esquema basico de Dinitz
1. Construir un network auxiliar (usando BFS).
2. Correr Greedy con DFS en el network auxiliar hasta no poder seguir.
3. Usar el flujo obtenido en el network auxiliar para modificar el flujo en el network original.
4. Repetir (1) con el nuevo flujo, hasta que, al querer construir un network auxiliar, no llegamos a $t$.

**Detalles**
* En la práctica, cuando encontramos un camino dirigido en el network auxiliar, como ese camino estará representando un camino aumentante de Ford-Fulkerson en el network original, se puede directamente cambiar el flujo original en el network original. 
* En el network auxiliar, como se usa Greedy, nunca se des-satura un lado en el network auxiliar. 
* Obviamente como algunos de los lados del network auxiliar van a estar representando lados backwards en el network original, al mandar flujo POR el lado en el network auxiliar, estariamos DEVOLVIENDO flujo en el original. 
* Asi que los lados siguen pudiendo des-saturarse, es sólo en el network auxiliar que no se des-saturan.

## Algoritmos tipo Dinitz
Reformulamos el esquema basico de Dinitz, usando la definicion de flujo bloqueante.
1. Construir un network auxiliar (usando BFS).
2. Encontrar un flujo bloqueante en el network auxiliar.
3. Usar ese flujo bloqueante del network auxiliar para modificar el flujo en el network original.
4. Repetir (1) con el nuevo flujo, hasta que, al querer construir un network auxiliar, no llegamos a $t$.

Otras variaciones del algoritmo que surguieron:
* Tambien usan un network auxiliar pero cambian la forma de hacer (2), es decir, cambian la forma de encontrar un flujo bloqueante, usando un método distinto del Greedy original de Dinitz.
* De hecho hay algoritmos que encuentran un flujo bloqueante sin necesidad de ir encontrando caminos dirigidos desde s a t.

## Actualizacion del network auxiliar
Si bien teóricamente estamos diciendo que vamos a buscar un flujo bloqueante en el network auxiliar, ese es el refinamiento de Karzanov.
Dinitz originalmente hacia otra cosa, que es lo que haremos en la práctica porque es mas fácil de implementar.
Observemos que, luego de cada camino, queda al menos un lado saturado en ese camino, el cual no es mas utilizable en el network auxiliar.
Dinitz toma ventaja de esto cambiando el network auxiliar luego de cada camino, borrando esos lados.
Asi, en realidad el algoritmo se detiene cuando se borraron tantos lados que s quedó desconectado de t. (lo cual es equivalente a tener un flujo bloqueante en el network auxiliar inicial).

## Diferencia entre la version rusa y la occidental de Dinitz
Luego de borrar los lados saturados en un camino, se puede actualizar aun mas el network auxiliar, buscando lados o vértices que ya no se pueden usar debido a haber borrado esos lados.
Dinitz original hace esto inmediatamente luego de cada camino, mientras que la versión de Evens es mas “lazy” y sólo los borra mientras está haciendo la busqueda DFS y llega a uno de ellos.

## Network auxiliar (NA)
El network auxiliar tiene una estructura particular, es un [[network por niveles]].

### Cómo se define el network auxiliar, usando el network original y un flujo $f$
* Vértices: el conjunto de vértices es $V = \bigcup_{r}^{i=0}V_i$, donde los $V_i$ son:
	* Sea $r = d_f(s, t)$ donde $d_f$ es la función definida en la prueba de Edmonds-Karp (es decir, $r$ es la distancia entre $s$ y $t$ usando caminos aumentantes)
	* Para $i = 0, 1, ..., r-1$, definimos $V_i = \{x : d_f(s, x) = i\}$.
	  Observar que $V_0 = {s}$
	* Definimos $V_r = {t}$

Observar que $\{x : d_f(s, x) = i\}$ puede tener mas vertices que solo t, pero $V_r$ se define como ${t}$.
* Lados y capacidades: $\overrightarrow{xy}$ es un lado del network auxiliar si:
	* $x \in V_i, \; y \in V_{i+1}$
	* y (de o):
		1. $\overrightarrow{xy}$ es un lado del network original con $f(\overrightarrow{xy}) \lt c(\overrightarrow{xy})$.
		2. $\overrightarrow{yx}$ es un lado del network original con $f(\overrightarrow{yx}) \gt 0$.

En el caso de (1), la capacidad de $\overrightarrow{xy}$ en el network auxiliar será $c(\overrightarrow{xy}) − f(\overrightarrow{xy})$, y en el caso de (2), la capacidad del lado $\overrightarrow{yx}$ en el network auxiliar será $f(\overrightarrow{yx})$.

### Construccion del network auxiliar
* Tomar como $V_0$ a ${s}$. 
* Luego ir construyendo una cola a partir de $s$ al estilo Edmonds-Karp. 
* Y si $x$ agrega a $z$ y $x$ está en $V_i$ , entonces $z$ está en $V_{i+1}$. 
* Excepto que en Edmonds-Karp si un vértice $x$ va a agregar a un vértice $z$ a la cola, pero z ya estaba en la cola, no se hace nada. 
* En cambio aca, si $z$ ya está agregado, si bien $z$ no se vuelve a agregar, el lado $\overrightarrow{xz}$ si se agrega al network auxiliar, siempre y cuando la distancia de $z$ a $s$ sea uno mas que la distancia de $x$ a $s$.
* Si en algún momento llegamos a $t$, no paramos inmediatamente, pues podria haber mas lados que lleguen a $t$. 
* Pero borramos todos los vértices que ya hubieramos incluido en el mismo $V_r$ en el cual estamos poniendo a $t$ (y los lados que terminaban en ellos). 
* Y de ahi en mas no agregamos mas vértices, sólo lados entre vértices de $V_{r−1}$ y $t$.

#### Observaciones
* Como el network auxiliar es un network por niveles, **todos** los caminos de un mismo network auxiliar deben tener la **misma longitud**.
* Si obtienen dos caminos de distinta longitud dentro de un mismo NA, lo tienen mal. (lo mas probable es que hayan construido mal el NA).
* Cuando terminemos con ese NA, todos los demas caminos que encontremos van a tener longitud estrictamente mayor. Esto es algo que probaremos y es clave para la complejidad de todos los algoritmos “tipo” Dinitz.

#### Ejemplo
Vease pag. 27-79 MD_T10_Dinic_parte1.pdf

#### Implementacion del network auxiliar de Dinitz
COMPLETAR pag 43-47 MD_T12_complejidadDinic

#### Implementacion de Even
Cuando corremos DFS, si llegamos a un vértice $x$ que no tiene vecinos, debemos hacer un backtrack, borrando a $x$ de la pila y usando el vértice anterior a $x$ en el camino para seguir buscando. 
Esa información de que es inútil seguir buscando por $x$ no deberiamos perderla y hay que “guardarla” para futuras corridas de DFS. 
La forma que tiene Even de “guardar” esa información es simplemente borrar $x$, o bien, si hacemos backtrack desde $x$ a $z$, borrar el lado $\overrightarrow{zx}$ .

La idea original de Dinitz es distinta.
La diferencia entre Dinitz y Dinic-Even es en cómo y cuando se actualiza el network a medida que encontramos nuevos caminos. Ambos borran los lados saturados en un camino, pero luego, como dije recien, Ever borra varios lados (o vértices) extras mientras corre DFS, cada vez que tiene que hacer un backtrack. En la versión original de Dinitz, el network auxiliar se construye de forma tal que DFS nunca tenga que hacer backtrack. Y cada vez que se encuentra un camino entre s y t y se cambia el flujo, tambien se cambia el network auxiliar para seguir teniendo esta propiedad.
Es decir, en el original se usa un poco mas de tiempo actualizando el network auxiliar luego de cada camino, para asegurarse que cada busqueda de camino por DFS demore lo mismo, pues ninguna hace backtrack. mientras que en la versión de Even, no se pierde tanto tiempo actualizando el network auxiliar entre caminos, pero las busquedas DFS no demoran todas igual pues algunas modificarán el network mas que otras. Esto trae algunas diferencias a la hora de, pej, probar la complejidad, aunque las complejidades de ambas versiones son iguales.
Entonces podemos decir que Ever es mas “lazy” y sólo borra lados si los encuentra y se da cuenta que no los necesita, mientras que la versión original de Dinitz es mas proactiva y borra todos los lados que sabe que son inútiles aún si luego nunca los encontraria.

## Complejidades
### Cota superior del numero de networks auxiliares
> **Teorema**
> La distancia entre $s$ y $t$ aumenta entre networks auxiliares consecutivos. 
> Es decir, salvo en el último network auxiliar, donde no llegamos a $t$ y la distancia entre $s$ y $t$ es infinita, la cantidad de niveles de un network auxiliar es menor que la cantidad de niveles de cualquier network auxiliar posterior.

#### Prueba
COMPLETAR pag 5-14 MD_T12_complejidadDinic

>**Corolario 1**
>En cualquier corrida de un algoritmo “tipo” Dinitz, hay a lo sumo $n$ networks auxiliares.

#### Prueba
La distancia entre $s$ y $t$ aumenta en al menos 1 por cada network auxiliar. 
Salvo por el último network auxiliar, donde la distancia es infinita, en los demas la distancia debe ser un número natural entre 1 y $n − 1$.
Por lo tanto hay a lo sumo $n$ networks auxiliares.

>**Corolario 2**
>Sea $CFB$ la complejidad de hallar un flujo bloqueante en un network auxiliar con un algoritmo “tipo” Dinitz. 
>La complejidad del algoritmo es entonces $O(n ∗ (m + CFB))$.

#### Prueba
La complejidad es: 
(número de networks auxiliares) * (complejidad de crear un network auxiliar + complejidad de hallar un flujo bloqueante en ese network auxiliar). 
Por el (corolario 1), número de networks auxiliares $\leq n$. 
La complejidad de crear un network auxiliar es $O(m)$, pues lo hacemos usando BFS. 
Entonces tenemos $n*(O(m) + CFB) = O(n ∗ (m + CFB))$.

#### Observaciones
* CFB pareceria que no puede ser menor que $O(m)$, pues deberiamos revisar todos los lados para saber si el flujo es bloqueante o no. 
* En cuyo caso, la complejidad quedaria $O(n ∗ (m + CFB)) = O(n ∗ CFB)$. 
* En todos los algoritmos que veamos pasará eso. 
* Pero por las dudas alguien alguna vez descubra una forma mas eficiente de crear un flujo bloqueante que $O(m)$, escribimos el teorema de esta forma.

### Complejidad de Dinitz (-Even)
>**Teorema**
>La complejidad de los algoritmos de Dinitz original y de la versión de Even es $O(mn^2 )$

**Observacion**
Para networks densos, Dinitz o Dinitz-Even son $n$ veces mas rápidos que Edmonds-Karp.

#### Prueba
Si probamos que CFB = la complejidad de hallar un flujo bloqueante en un network auxiliar es $O(mn)$ tanto en Dinitz como en la versión de Even, entonces por el teorema general tendremos que la complejidad es:
$$
O(n∗(m+CFB)) = O(n∗(m+O(mn)) = O(n∗O(mn)) = O(mn^2)
$$

Vamos a dividir la prueba en la versión original de Dinitz y la versión de Even.

##### Prueba version original de Dinitz
COMPLETAR pag 20-32 MD_T12_complejidadDinic

##### Prueba version Even de Dinitz
COMPLETAR pag 33-42 MD_T12_complejidadDinic

---
References: 