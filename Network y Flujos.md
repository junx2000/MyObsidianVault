---
aliases: 
tags: working
cssclass: 
publish: 
---

Links: 
Created: 2022-04-21 18:54
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>

## Definición de Network
Un Network es un grafo dirigido con pesos positivos en los lados, es decir, un triple (V, E, c) donde (V, E) es un grafo dirigido y c: E $\mapsto \mathbb{R_{\geq 0}}$

Observaciones:
* En este contexto, $c(\overrightarrow{xy})$ se llamará la “capacidad” del lado $\overrightarrow{xy}$.
* Esto simboliza que no podemos mandar más de $c(\overrightarrow{xy})$ “bienes” por el lado $\overrightarrow{xy}$, sean cuales sean esos bienes.

## Notación para agilizar lecturas de sumatorias
* Si P es una propiedad que puede ser verdadera o falsa, $[P]$ denota el número 1 si P es verdadera, y 0 si P es falsa.

Supongamos que tenemos una variable x, y queremos sumar una función f(x) sobre todos los x que satisfagan una propiedad P(x)
En vez de escribir: 
$$\sum_{x : P(x)}f(x)$$podemos simplemente escribir: 
$$\sum_{x}f(x)[P(x)] \quad \text{o} \quad \sum_{x}[P(x)]f(x)$$ Y si queda claro que sumamos sobre x:
$$\sum f(x)[P(x)]$$
## Notación para funciones sobre lados
Si g es una función definida en los lados y A y B son subconjuntos de vertices, entonces g(A, B) denotará la suma:
$$g(A, B) = \sum_{x,y} [x \in A][y \in B][\overrightarrow{xy} \in E]g( \overrightarrow{xy})$$
donde g en general va a ser o bien las capacidades o bien el flujo.

## Funciones in y out
Dada una función g sobre lados y un vértice x, definimos: 
$$
out_{g}(x) = g({x}, V) = \sum_y [y \in V][\overrightarrow{xy} \in E]g(\overrightarrow{xy})
$$$$
in_g(x) = g(V, {x}) = \sum_y [y \in V][\overrightarrow{yx} \in E]g(\overrightarrow{yx})
$$
* $out_g(x)$ es todo lo que “sale” de x por medio de g.
* $in_g(x)$ es todo lo que “entra” a x por medio de g.

Observación:
* dado que: $$
  [y \in V][\overrightarrow{xy} \in E] = [y \in \Gamma^+ (x)] \quad \text{y} \quad [y \in V][\overrightarrow{yx}] \in E] = [y \in \Gamma^- (x)]
  $$podemos escribir:$$
  outg_g(x) = \sum_y [y \in \Gamma^+(x)]g(\overrightarrow{xy})= g({x}, \Gamma^+(x)) \quad \text{y} \quad in_g(x) = \sum_y [y \in \Gamma^-(x)]g(\overrightarrow{yx})= g(\Gamma^-(x), {x})
  $$

## Definición de Flujo
Dado un network (V, E, c), y un par de vértices s, t $\in$ V, un flujo de s a t es una función f : E $\mapsto \mathbb{R_{\geq 0}}$  con las siguientes propiedades:

1. $0 \leq f(\overrightarrow{xy}) \leq c(\overrightarrow{xy}) \quad \forall \overrightarrow{xy} \in E. \quad \text{(“feasability”)}$
2. $in_f(x) = out_f(x) \quad \forall x \in V − {s, t}. \quad \text{(“conservacion”)}$
3. $out_f(s) \geq in_f(s). \quad \text{(s es productor)}$
4. $in_f(t) \geq out_f(t). \quad \text{(t es consumidor)}$

Notación:
* s se llamará fuente (source).
* t se llamará resumidero (sink).
Dichos nombres surgen de pensar el network como una red de cañerías de agua.

## Explicación de la definición de Flujo
1. No vamos a transportar una cantidad negativa de un bien. Ni vamos a transportar por encima de la capacidad de transporte de un lado.
2. El network no tiene “pérdidas”, es decir, que cualquier vértice que no sea ni s ni t no consume ni produce bienes.
3. s es un vértice donde hay una producción neta de bienes, pues produce más de lo que consume.
4. t es un vértice donde se consumen los bienes, pues consume más de lo que produce.

## Valor de un flujo
Dado un network (V, E, c) el valor de un flujo f de s a t es:
$$v(f) = out_f(s) - in_f(s)$$
Observaciones:
* Las propiedades 1, 2 y 3 implican la propiedad 4:
  Demostración:
	COMPLETAR PAGINA 30-35 de MD_T05_networksYFlujos.pdf

## Flujos maximales
Dado un network $N$ y vertices $s, t$, un flujo maximal de $s$ a $t$ (“Max flow”) es un flujo $f$ de $s$ a $t$ tal que $v(g) \leq v(f)$ para todo flujo $g$ de $s$ a $t$.

Observaciones:
* El problema a resolver es, dado un network, encontrar un flujo maximal en el network. 
* Puede haber más de un flujo maximal (obviamente todos tendrán el mismo valor, asi que si bien no podemos hablar de “el” flujo maximal, si podemos hablar de “el” valor de un flujo maximal, llamado "maxvalue").

### Ejemplo
COMPLETAR 1-11 de MD_T06_flujosGreedy.pdf

## Propiedad de la notación g(A, B)
Sean f, g funciones sobre los lados tales que $$
g(\overrightarrow{xy}) \leq f(\overrightarrow{xy}) \quad \forall \overrightarrow{xy} \in E
$$ Entonces $$
g(A, B) \leq f(A, B) \quad \forall A, B \subseteq V
$$
### Demostración
COMPLETAR 13 de MD_T06_flujosGreedy.pdf

## Criterio simple para maximalidad
Sea f flujo en un network N tal que v(f) = c({s}, V). Entonces f es maximal.

### Demostración
COMPLETAR 14-15 de MD_T06_flujosGreedy.pdf

## Existencia de flujo maximal
COMPLETAR 18-19 de MD_T06_flujosGreedy.pdf

## Encontrar flujos:
Asumiendo que existe un flujo maximal .
¿como hallarlo? (con un algoritmo polinomial). 
¿Como construir un flujo? (aun si no es maximal). 
Poder construir flujos aunque no sean maximales resultará bastante central, ya que CASI todos los algoritmos que veremos encuentran un flujo maximal construyendo flujos no maximales, cada uno con valor más grande que el anterior, hasta llegar a un flujo maximal.

### Idea
Supongamos que ya tenemos un flujo f. ¿Cómo “cambiar” f pero de tal forma que lo que quede siga siendo un flujo?

COMPLETAR 21-24 de MD_T06_flujosGreedy.pdf

### Algoritmo Greedy para hallar un flujo maximal
1. Comenzar con $f = 0$ (es decir, $f(\overrightarrow{xy}) = 0 \quad \forall \overrightarrow{xy} \in E$).
2. Buscar un camino dirigido $s = x_0, x_1, \cdots, x_r = t$, con $\overrightarrow{x_i \; x_{i+1}} \in E$ tal que $f(\overrightarrow{x_i \; x_{i+1}}) \lt c(\overrightarrow{x_i \; x_{i+1}}) \quad \forall i = 0, \cdots, r−1$. (lo llamaremos un camino dirigido “no saturado”)
3. Calcular $\varepsilon = min\{c(\overrightarrow{x_i \; x_{i+1}}) − f(\overrightarrow{x_i \; x_{i+1}})\}$
4. Aumentar $f$ a lo largo del camino de 2. en $\varepsilon$, como se explicó antes.
5. Repetir (2) hasta que no se puedan hallar mas caminos con esas condiciones.

#### Ejemplo
COMPLETAR 26-32 de MD_T06_flujosGreedy.pdf

#### Conclusiones sobre Greedy:
COMPLETAR 33 de MD_T06_flujosGreedy.pdf

### Not Greedy para hallar un flujo maximal
COMPLETAR 34 de MD_T06_flujosGreedy.pdf

---
References: