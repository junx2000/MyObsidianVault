---
aliases: grafo bipartito
tags: working
cssclass: 
publish: 
---

Links: 
Created: 2022-04-07 20:14

---
# Grafos bipartitos
Un grafo se dice **bipartito** si $\chi (G) = 2$.

## El problema 2-COLOR
Dado un grafo G, es $\chi (G) \leq 2$? 
El problema se puede generalizar a $k$-COLOR: "Dado un grafo $G$, es $\chi (G) \leq k$?".

>**Teorema**
> $\text{2-COLOR es polinomial}$

### Demostración:
Recordemos el concepto de nivel en un árbol con raíz:
En un árbol con raíz $x$ definimos el nivel de un vértice z de acuerdo con su distancia a $x$, es decir:
Dado que es un árbol, es conexo, así que entre dos vértices cualesquiera hay al menos un camino.
Puesto que es un árbol, no tiene ciclos, por lo tanto entre dos vértices cualesquiera hay UN SOLO camino. (si hubiera 2, crearían un ciclo).
Por lo tanto, tomamos el único camino entre $z$ y $x$, contamos cuantos lados hay en ese camino, y ese es el nivel de $z$ en el árbol.

### Observación:
$\chi (G) \leq 2$ si y solo si $\chi (C) \leq 2$ para toda componente conexa $C$ de $G$, pues al no haber caminos entre componentes conexas, cada componente conexa se puede colorear por separado.
Por lo tanto para ver que 2COLOR es polinomial basta dar un algoritmo polinomial que determine si $\chi (G) \leq 2$ para el caso $G$ conexo.

### Algoritmo 2-COLOR para G conexo
#### Idea:
Si G es conexo, tanto BFS(x) como DFS(x) encuentran todos los vertices de G, y como explicamos la clase pasada, si se agregan los lados entre un vértice que ya estaba agregado y los vértices que ese vértice agregó se obtiene un arbol.

#### Usando BFS:
``````
1. Elegir un vértice x cualquiera.
2. Correr BFS(x), creando un arbol.
3. Para cada vértice z, sea N(z) el nivel de z en el arbol BFS(x).
4. Colorear c(z) = (N(z) mod 2).
5. Chequear si el colorario dado en [4] es propio.
6. Si lo es, retornar “χ(G) ≤ 2”
7. Si no lo es, retornar “χ(G) > 2”
``````

#### Complejidad
Hay que probar que el algoritmo es correcto y que es polinomial.
* Polinomico:
	* Crear BFS(x) es O(m). 
	* Los niveles y el coloreo asociado se pueden ir calculando a medida que hacemos BFS(x), basicamente, si un vértice u que está en el arbol agrega a un vértice v que no está, entonces coloreamos a v con 1 si el color de u era 0 y con 0 si el color de u era 1.
	* Asi que el coloreo es “gratis”, su complejidad esté metida dentro de la complejidad O(m) de construir BFS. 
	* Chequear que un coloreo sea propio es O(m). 
	* Asi que la complejidad total es O(m) + O(m) = O(m).
* Correctitud:
	* Obviamente si la respuesta que devuelve el algoritmo es
“χ(G) ≤ 2”, entonces esa respuesta es correcta, pues el algoritmo
sólo devuelve esa respuesta si efectivamente el coloreo con 2
colores propuestos es un coloreo propio.
Asi que nos queda ver que cuando devuelve la respuesta
“χ(G) > 2”, esa respuesta es correcta.
Lo que tenemos que probar es que si devuelve “χ(G) > 2”
entonces no hay ningún coloreo con 2 colores.
Obvervemos que esa respuesta es devuelta sólo si ese coloreo
particular del algoritmo no es propio.
Entonces tenemos que probar que si ese coloreo no es propio,
ningún otro coloreo con 2 colores es propio.
Supongamos entonces que el coloreo no es propio.
Esto implica que existen z, y (z 6= y) tales que c(z) = c(y) pero
zy es un lado en G.
Sea z0z1....zk el único camino entre x y z en el arbol BFS
(z0 = x, zk = z).
Sea y0y1....yj el único camino entre x e y en el arbol BFS
(y0 = x, yj = y).
Entonces k es igual al nivel de z y j igual al nivel de y.
Por lo tanto c(z) = (k mod 2) y c(y) = (j mod 2)
Como c(z) = c(y) concluimos que (k mod 2) = (j mod 2), es
decir son ambos pares o ambos impares.
Por lo tanto la suma k + j es PAR.
Esos dos caminos comienzan igual (con x) pero terminan distinto
(con z 6= y).
En algun lado hay un último vértice en común entre esos dos
caminos.
Sea w ese último vértice en común.
Los caminos son iguales hasta ahi, asi que existe p con
z0 = y0,z1 = y1,...,zp = yp = w
Teniendo en cuenta que xy es un lado en G y que zk = z, yj = y,
entonces en G tenemos el ciclo
C : wzp+1zp+2....zk−1zyyj−1...yp+1w.
Veamos cuantos vértices hay en ese ciclo
1 w, suma 1.
2 los zp+1, zp+2, ...., zk−1z son k − p.
3 Los y, yj−1, ..., yp+1 son j − p.
El total son 1 + k − p + j − p = k + j − 2p + 1.
Como vimos antes que k + j es par y 2p es par, entonces
k + j − 2p es par.
Por lo tanto k + j − 2p + 1 es IMPAR.
Entonces G tiene adentro un ciclo impar, por lo tanto
χ(G) ≥ 3 > 2 y la respuesta es correcta.

Corolario (de la demostración):
Sea G un grafo con χ(G) ≥ 3.
Corramos el algoritmo sobre G.
Como χ(G) ≥ 3, el coloreo de 2 colores dado en el algoritmo no puede ser propio.
En la demostración de la correctitud del algoritmo vimos que en este caso, podemos construir un ciclo impar en G.
Conclusión: χ(G) ≥ 3 ⇒ existe un ciclo impar en G.
Como ya sabiamos la implicación para el otro lado, podemos decir que χ(G) ≥ 3 si y solo si existe un ciclo impar en G.

---
References: 