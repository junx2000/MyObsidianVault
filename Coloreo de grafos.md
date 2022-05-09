---
aliases: 
tags: working
cssclass: 
publish: 
---

Links: 
Created: 2022-04-07 15:31

---
# Coloreo de grafos
Un coloreo (de los vértices) es una función cualquiera c : V → S
donde S es un conjunto finito.

Un coloreo es **propio** si $xy \in E \Rightarrow c(x) \neq c(y)$ (extremos con
distinto color).

Si la cardinalidad de S es k diremos que el coloreo tiene k colores. Un grafo que tiene un coloreo propio con k colores se dice k-coloreable. En general usaremos S = {0, 1, ..., k − 1} para denotar los colores.

El **número cromático** es
$\chi (G) = min\{k : \exists \text{ un coloreo propio con k colores de G}\}$.

## Calculando $\chi (G)$
Si uno dice que $\chi (G) = k$, por la definición misma de este número, hay que hacer dos cosas para probarlo:
1. Dar un coloreo propio de G con k colores. (y obviamente probar
que es propio). Esto prueba la parte del “∃ un coloreo propio con k colores de G”
2. Probar que no existe ningún coloreo propio con k −1 colores de G. Esto prueba que k es el mínimo.

Para probar (2) podemos usar:
$$\text {si H es un subgrafo de de G, entonces} \; \chi (G) \leq \chi (H)$$
Demostracion: 
Pues si necesito r colores para colorear los vértices de H, no puedo colorear a todos los vértices de G con menos de r colores, porque tendria un coloreo con menos de r colores de los vértices de H al restringir el coloreo de G a los vértices de H.

Entonces si encontramos un subgrafo H de G para el cual sepamos que $\chi (H) = k$ habremos probado (2).

El otro camino para probar (2) es COMPLETAR

Observaciones:
*  $\chi (G) \leq n$, ya que a cualquier grafo G podemos darle un color distinto a todos los vértices, tenemos la desigualdad.
* $K_n(G) = n$. Pues al estar todos los vértices unidos con todos los otros vértices, entonces todos los vértices deben tener colores distintos
* Si existe $K_r$ subgrafo de G, entonces $r \leq \chi (G)$. (La vuelta no vale).
* $\chi(G) = 1$ sii $G = \varnothing$.
* $\chi(G) \geq 2$ para cualquier grafo que tenga al menos un lado.
* $\chi(C_{2r}) = 2$. 
	* Demostracion:
	  Podemos colorear $c(i) = (i \, mod \, 2)$ y eso es un coloreo propio porque vértices consecutivos en el ciclo tendrán colores distintos.
* $\chi(C_{2r+1}) = 3$.
	* Demostracion:
	  Podemos colorear: c(i) = (i mod 2) si i < 2r + 1 y c(2r + 1) = 2.
	  Ese es un coloreo propio pues 2r + 1 tiene color distinto del resto de los vértices asi que no hay problema con el, y los demas vértices consecutivos tienen colores distintos.
	  Esto demuestra que χ(C2r+1) ≤ 3. Pero todavia no probamos que 3 ≤ χ(C2r+1) pues sólo hemos probado que un coloreo específico que dimos con 2 colores no es propio. 
	  Para ver que 3 ≤ χ(C2r+1) supongamos que no es cierto. Esto implica que existe un coloreo propio c con 2 colores.
	  Sea A = c(1). Como 12 ∈ E, entonces c(2) 6= c(1). Sea B = c(2). Entonces acabamos de ver que B 6= A y como estamos suponiendo que es un coloreo con 2 colores, entonces A y B son esos 2 colores.
	  Como 23 ∈ E, entonces c(3) 6= c(2). Como c(2) = B y sólo hay 2 colores, concluimos que necesariamente c(3) = A.
	  Como 34 ∈ E, entonces c(4) 6= c(3). Como c(3) = A y sólo hay 2 colores, concluimos que necesariamente c(4) = B.
	  Continuando de esta forma y probando por inducción, concluimos que c(i) = A si i es impar (y c(i) = B si i es par) lo cual es un absurdo pues 1 y 2r + 1 forman lado.
	  Entonces hemos probado que los ciclos impares (i.e., con un número impar de vértices) tienen número cromático igual a 3.

### Algoritmo de fuerza bruta:
Un algoritmo para encontrar χ(G) es simplemente tomar todos los coloreos posibles con los colores {0, 1, ..., n − 1} y calcular cuales de esos coloreo son propios, y ver de entre esos quien tiene la menor cantidad de colores.
Este algoritmo calcula χ(G) pero:
- Hay $n^n$ posibles coloreos.
- Chequear que un coloreo es propio es O(m). por lo tanto el algoritmo tiene complejidad O($n^n m$) asi que no es útil salvo para n muy chicos.

### Algoritmo de Greedy:
No calcula χ(G) pero al menos da un coloreo propio en tiempo polinomial requiere como input no sólo un grafo G sino un orden de los vértices.
Algunas implementaciones en vez de requerir un orden simplemente usan algún orden cualquiera, pero para extraer el mayor beneficio posible de Greedy conviene poder llamarlo varias veces cambiando el orden.
Si bien Greedy no necesariamente colorea G con χ(G) colores, existe un orden de los vértices tal que Greedy, con ese orden, colorea G con χ(G) colores, asi que el orden es importante.

#### Idea:
La idea de Greedy consiste de dos partes: 
1. Ir coloreando los vértices de G uno por uno, en el orden dado, manteniendo siempre el invariante que el coloreo parcial que se va obteniendo es propio.
2. Darle a cada vértice al momento de colorearlo el menor color posible que se le pueda dar manteniendo el invariante de que el coloreo es propio. 

(1) nos asegura que cuando Greedy termina, el coloreo que da es propio. 
(2) es lo que le da el nombre al algoritmo: usar siempre el menor color posible.

Input: Grafo G y orden de los vértices x1, x2, ...., xn. c(x1) = 0 Para i > 1, asumiendo que los vértices x1, x2, . . . , xi−1 ya han sido coloreados, colorear xi con: c(xi) = min{k ≥ 0 : k ∈/ c ({x1, . . . , xi−1} ∩ Γ(xi))} Arriba estamos usando la notación usual de c(A) = {c(a) : a ∈ A}. Es decir, xi recibe el menor color que sea distinto del color de todos los vecinos anteriores a xi .

#### Ejemplos:
1. G = el grafo del ejemplo del principio, con el orden alfabetico. 
   c(A) = 0.
   Como AB ∈ E, B no puede tener el color de A, coloreamos B con el menor color posible distinto de 0: c(B) = 1.
   Como AC ∈ E, C no puede tener el color de A. Pero A es el único vécino de C en el conjunto {A, B} asi que Greedy le da c(C) = 1.
   Como D no tiene vecinos, c(D) = 0.
   Como Γ(E) = {A, C}, entonces E no puede tener ni el color 0 ni el 1, Greedy le da c(E) = 2.
   En este caso Greedy coloreó con 3 colores, y como el grafo tiene un $K_3$ entonces χ(G) = 3.
2. Tomemos $C_6$ pero con el orden 1, 4, 2, 3, 5, 6. c(1) = 0. 4 no es vecino de 1, por lo tanto, Greedy tambien le da el color 0. 2 es vecino de 1, Greedy hace c(2) = 1. 3 tiene vecinos a 2 (de color 1) y a 4 (de color 0) asi que Greedy le da el color 2. 5 tiene vecino anterior solamente a 4, asi que Greedy le da el color 1. 6 tiene vecinos a 1 (color 0) y a 5 (color 1) asi que Greedy hace c(6) = 2. Conclusión: Greedy colorea C6, en ese orden, con 3 colores. Pero sabemos que χ(C6) = 2 asi que este es un ejemplo de que Greedy puede colorear con mas de χ(G) colores.
3. COMPLETAR MD_T02_grafosGreedy.pdf page 3-9

#### Complejidad:
Para colorear el vertice xi Greedy debe chequear d(xi) vecinos de x para ver sus colores. Por lo tanto la complejidad de Greedy es O(d(x1) + d(x2) + · · · + d(xn)). (en realidad el d1 esta de mas porque colorear x1 es O(1) pero no importa). Por el lema del apretón de manos que vieron en Discreta I, la suma de todos los grados es igual a 2m. Por lo tanto la complejidad de Greedy es O(2m) = O(m), polinomial. (el lema del apreton de manos es facil de probar: al sumar sobre todos los grados, estamos contando cada lado xy dos veces: una vez cuando pasamos por x y otra cuando pasamos por y).

#### Cotas para Greedy:
$$χ(G) ≤ ∆ + 1$$
Prueba: Cuando Greedy colorea un vértice x, debe eliminar de consideración todos los colores de los vecinos de x que esten antes que x en la lista de vértices. En el peor de los casos, todos los vecinos de x estan antes. Asi que en el peor de los casos, Greedy elimina d(x) colores. Como d(x) ≤ ∆, si tenemos ∆ + 1 colores disponibles siempre habrá un color extra para colorear a x.

Hay grafos conexos para los que $χ(G) = ∆ + 1$? Grafos con ciclos impares y grafos completos. 
Otros grafos conexos que cumplan la propiedad? No

## Teorema de Brooks (1941)
$$\text{Si G es conexo, entonces } \chi(G) \leq \Delta, \text{ a menos que G sea un ciclo impar o un grafo completo}$$
Demostración: COMPLETAR MD_T02_grafosGreedy.pdf y MD_T03_BrooksRegular.pdf

## Propiedad
Si G es conexo, entonces existe un ordenamiento de los vértices tal que Greeedy colorea todos los vértices, salvo uno, con ∆ colores o menos.

Greedy depende del orden en que se corra los vértices. 
Una estrategia consistiría en correr Greedy en algún orden, luego en otro, luego en otro, etc, y quedarse con el mejor coloreo posible. 
Quizas no sea χ(G) pero habria alguna esperanza de tener un coloreo aunque sea aproximado. 
En general si uno simplemente busca reordenes al azar, es muy dificil encontrar uno que funcione bien. 
Otra posible estrategia seria ir reordenando los vértices de forma tal de asegurarnos de nunca empeorar el coloreo. ¿esto es posible?

## Very Important Theorem (VIT)
Sea G = (V, E) un grafo cuyos vértices estan coloreados con un coloreo propio c con r colores {0, 1, ..., r − 1}.
Sea π una permutación de los números 0, 1, ..., r − 1, es decir,
π : {0, 1, ..., r − 1} 7→ {0, 1, ..., r − 1} es una biyección.
Sea Vi = {x ∈ V : c(x) = i}, i = 0, 1, ..., r − 1.
Ordenemos los vértices poniendo primero los vértices de Vπ(0), luego
los de Vπ(1),etc, hasta Vπ(r−1). (el orden interno de los vértices dentro
de cada Vπ(i) es irrelevante)
Entonces Greedy en ese orden coloreará G con r colores o menos.

### Demostracion:
COMPLETAR

### Corolario:
Existe un ordenamiento de los vértices de G tal que Greedy colorea G
con χ(G) colores.

#### Demostración:
Por definición χ(G) es el menor k tal que existe un coloreo propio con k colores de G.
Sea c un coloreo propio de G con k = χ(G) colores.
Sea Vi = {x ∈ V : c(x) = i}, i = 0, 1, ..., k − 1.
Ordenemos los vértices poniendo primero los vértices de V0, luego los de V1, etc.
Por el VIT, Greedy en ese orden no usa mas de k colores.
Dado que no hay coloreo propio con menos de k colores, Greedy usa exactamente k colores.

#### Observaciones:
Podriamos entonces simplemente ordenar con todos los ordenes posibles y correr Greedy para obtener χ(G). 
Pero dado que hay n! ordenes posibles, este algoritmo no es polinomial. 
Pero al menos, si no podemos obtener χ(G) polinomialmente, usaremos el VIT para tratar de obtener una aproximación a χ(G). 
No siempre se puede, y hay grafos construidos especialmente para hacer fracasar a VIT, pero en la practica suele funcionar bastante bien, dependiendo de cuales permutaciones π se usen.

---
References: 