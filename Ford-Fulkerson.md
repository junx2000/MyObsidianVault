---
aliases: 
tags: working
cssclass: 
publish: 
---

Links: 
Created: 2022-04-22 15:48
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %> (FF)
## Idea de FF
Al pararnos en un vértice $x$, en vez de limitar la busqueda a vértices a los cuales $x$ les pueda “mandar” flujo. Permitir que $x$ tambien busque vértices a los cuales les pueda pedir que no le manden mas flujo, o al menos no tanto flujo como le estan mandando.
Para pedirle a alguien que no te mande mas flujo, ese “alguien” te tiene que haber mandado flujo. Entonces, técnicamente, lo que Ford y Fulkerson hacen es que:
en vez de limitar la busqueda a $y \in \Gamma^+ (x)$ con $f(\overrightarrow{xy}) \lt c(\overrightarrow{xy})$ permiten ademas buscar $y \in \Gamma^-(x)$ con $f(\overrightarrow{yx}) \gt 0$

## Algoritmo de FF para hallar flujo maximal
1. Comenzar con $f = 0$ (es decir,$f(\overrightarrow{xy}) = 0 \forall \overrightarrow{xy} \in E$).
2. Buscar un $f$-camino aumentante $s = x_0, x_1, ..., x_r = t$.
3. Definamos $\varepsilon_i$ de la siguiente manera: 
	- $\varepsilon_i = c(\overrightarrow{x_i x_{i+1}}) − f(\overrightarrow{x_i x_{i+1}})$ en los lados forward.
	- $\varepsilon_i = f(\overrightarrow{x_{i+1} x_i})$ en los lados backward
4. Calcular $\varepsilon = min\{\varepsilon_i\}$.
5. Aumentar $f$ a lo largo del camino de (2) en $\varepsilon$, como se explicó antes.
6. Repetir (2) hasta que no se puedan hallar mas caminos aumentantes.

## Ford-Fulkerson vs Greedy
Ford-Fulkerson | Greedy
-------------- | ------
Usa caminos aumentantes | Usa caminos dirigidos no saturados
(complejidad del algoritmo que lo encuentra es $O(m)$) | (complejidad del algoritmo que lo tencuentra es $O(m)$)
SI termina, da un flujo maximal (puede no terminar, si se usa DFS) | Termina y da un flujo (puede o no ser maximal)
Complejidad | Complejidad $O(m^2)$

## FF mantiene “flujocidad”
>**Teorema** 
>Si $f$ es un flujo de valor $v$ y aumentamos $f$ con un $f$-camino aumentante con $\varepsilon$ calculado como se explica en el algoritmo de Ford-Fulkerson, entonces lo que queda sigue siendo un flujo y el valor del nuevo flujo es $v + \varepsilon$.

**Demostracion:**
Sea $s = x_0, x_1, ..., x_r = t$ el camino aumentante. 
Para diferenciar entre ambos, llamaremos $f$ al flujo antes de aumentar y $f^*$ a lo que queda luego de aumentar. 
Veamos primero que $f^*$ satisface la primera condición de flujo. 
Es decir, tenemos que ver que $0 \leq f^* \leq c$.
**Prueba $f \leq c$**
En los lados backward le restamos algo a $f$, por lo tanto $f^* \lt f \leq c$ en ellos.
Mientras que en los lados forward, tenemos:
$$
\begin{array}{rll}
f^*(\overrightarrow{x_i x_{i+1}}) & = f(\overrightarrow{x_i x_{i+1}}) + \varepsilon \\
& \leq f(\overrightarrow{x_i x_{i+1}}) + \varepsilon_i \quad \text{pues } \varepsilon \text{ es el min de los } \varepsilon_i \\
& = f(\overrightarrow{x_i x_{i+1}}) + c(\overrightarrow{x_i x_{i+1}}) - f(\overrightarrow{x_i x_{i+1}}) \\
& = c(\overrightarrow{x_i x_{i+1}})
\end{array}
$$
Por lo tanto $f^* \leq c$ tambien vale en los lados forward. 

**Prueba $0 \leq f$**
En los lados forward le sumamos algo a $f$, por lo tanto $0 \leq f \lt f^∗$ en ellos. Mientras que en los lados backward, tenemos:
$$
\begin{array}{rll}
f^*(\overrightarrow{x_{i+1} x_i}) & = f(\overrightarrow{x_{i+1} x_i}) - \varepsilon \\
& \geq f(\overrightarrow{x_{i+1} x_i}) + \varepsilon_i \quad \text{pues } \varepsilon \leq \varepsilon_i \Rightarrow -\varepsilon \geq -\varepsilon_i  \\
& = 0 \quad \text{pues } \varepsilon_i = f(\overrightarrow{x_{i+1} x_i}) \text{ en los lados backward}
\end{array}
$$
Por lo tanto $f \geq 0$ tambien vale en los lados backward. 

Ahora tenemos que ver la ley de conservación para $f^*$.
**Prueba $in = out$**
Sea $x \neq s, t$. Si $x$ no es ningún $x_i$ , entonces como no se cambia ningún lado que entre o salga de $x$, tenemos: 
inf ∗ (x) = inf(x) y outf ∗ (x) = outf(x). Por lo tanto inf ∗ (x) = outf ∗ (x). 
Ahora tomemos un x = xi .Como $x \neq s, t$, entonces 0 < i < r.  Y entonces los vértices xi−1 y xi+1 existen. 
Los lados que cambian son los lados entre xi−1 y xi y entre xi y xi+1. 
Pero no sabemos si son forward o backward
Por lo tanto, tendremos que analizar cuatro casos, dependiendo de las combinaciones posibles de forward y backward entre ellos:

- Los dos son forward.
	- Los lados que existen son entonces −→ xi−1xi y −→ xixi+1 Y f ∗ = f + ε en ambos lados. Como −→ xi−1xi “entra” a xi , entonces: inf ∗ (x) = inf(x) + ε. (*) Y como −→ xixi+1 “sale”de xi , entonces: outf ∗ (x) = outf(x) + ε (**) (*) y (**) implican inf ∗ (x) = outf ∗ (x)
- Los dos son backward. 
	- En este caso la prueba es muy similar a la anterior, reemplazando + por −: Los lados que existen son −→ xixi−1 y −→ xi+1xi f ∗ = f − ε en ambos lados. Como −→ xixi−1 “sale”de xi , entonces: outf ∗ (x) = outf(x) − ε (*) Como −→ xi+1xi “entra” a xi , entonces: inf ∗ (x) = inf(x) − ε. (**) (*) y (**) implican inf ∗ (x) = outf ∗ (x)
- El primero es forward, el segundo backward. 
	- Los lados que existen son −→ xi−1xi y −→ xi+1xi f ∗ = f + ε en el primero y f ∗ = f − ε en el segundo. Como −→ xi−1xi “entra” a xi , entonces: este lado contribuye con un “+ε” a inf ∗ (x). Pero como −→ xi+1xi también entra a xi , este último lado contribuye con “−ε” a inf ∗ (x). Por lo tanto inf ∗ (x) = inf(x) + ε − ε = inf(x). (*) Como ningún lado que sale de xi es cambiado, entonces outf ∗ (x) = outf(x) Esto último y (*) implican inf ∗ (x) = outf ∗ (x)
- El primero es backward, el segundo forward. 
	- Similar al anterior Los lados que existen son −→ xixi−1 y −→ xixi+1 f ∗ = f − ε en el primero y f ∗ = f + ε en el segundo. En este caso,como ningún lado que entra a xi es cambiado, entonces inf ∗ (x) = inf(x) (*) Como −→ xixi−1 sale de xi y contribuye con −ε y −→ xixi+1 también sale de xi y contribuye con +ε entonces outf ∗ (x) = outf(x) + ε − ε = outf(x). Esto último y (*) implican inf ∗ (x) = outf ∗ (x)

Con lo que f ∗ satisface la propiedad de conservación

**Prueba $v(f^*) = v + \varepsilon$**
Para ver la tercera propiedad de flujos y calcular el valor de f ∗ simultaneamente tenemos que analizar dos casos: 
Caso 1: s, x1 es forward. En este caso el lado que existe es −→ sx1 y f ∗ = f + ε en ese lado. Por lo tanto inf ∗ (s) = inf(s) y outf ∗ (s) = outf(s) + ε. Asi que: v(f ∗ ) = outf ∗ (s) − inf ∗ (s) = outf(s) + ε − inf(s) = v(f) + ε. 
Caso 2: s, x1 es backward. En realidad en ninguno de los ejemplos que daremos o los algoritmos que usaremos se puede producir este caso. Pero probemoslo igual, por completitud. El lado que existe es −→ x1s y f ∗ = f − ε inf ∗ (s) = inf(s) − ε y outf ∗ (s) = outf(s). v(f ∗ ) = outf ∗ (s) − inf ∗ (s) = outf(s) − (inf(s) − ε) = v(f) + ε.

Hemos visto la primera parte de la correctitud de Ford-Fulkerson: en todo momento, las funciones intermedias que produce son flujos.

---
## Max Flow Min Cut (MFMC)
Ahora probaremos que algoritmo de Ford-Fulkerson, si termina, termina con un flujo maximal.
La prueba tambien involucra probar el famoso “Max Flow Min Cut Theorem” : el teorema del flujo maximal y corte minimal.
Este teorema relaciona, como el nombre lo indica, flujos maximales y cortes minimales. 
Pero ademas, permite modificar el algoritmo de Ford-Fulkerson para que si termina, no sólo termine con un flujo maximal sino con un CERTIFICADO de que el flujo es maximal. 
Es decir, con algo que permite verificar que el flujo es maximal, independientemente del algoritmo.

>**Teorema de Ford-Fulkerson (Max Flow Min Cut)**
>**(A)** Si f es un flujo y S es un corte, entonces 
>v(f) = f(S, S) − f(S, S).
>**(B)** El valor de todo flujo es menor o igual que la capacidad de todo corte.
>**(C)** Si f es un flujo, las siguientes afirmaciones son equivalentes:
>(1) Existe un corte S tal que v(f) = cap(S).
>(2) f es maximal.
>(3) No existen f-caminos aumentantes.

Y si se cumplen, el S de (1) es minimal.

**Demostracion**
COMPLETAR pag 39-63 T07


>**Corolario**
>Si el algoritmo de Ford-Fulkerson termina, termina con un flujo maximal

**Demostracion**
Si Ford-Fulkerson termina, entonces termina con un flujo f para el cual no hay mas f-caminos aumentantes. Por lo tanto f es maximal, por el Max Flow Min Cut Theorem.

COMPLETAR CON pag 51- ... T07


---
References: 