---
aliases: [caminos aumentantes]
tags:
---
Links: 
Created: 2022-04-22 15:57
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
>**Definicion**
>Un **camino aumentante** (o $f$-camino aumentante si necesitamos especificar $f$) o camino de Ford-Fulkerson, es una sucesión de vértices $x_0, x_1, \cdots, x_r$ tales que:
>$x_0 = s, x_r = t$ 
>Para cada $i = 0, \cdots, r − 1$ ocurre una de las dos cosas siguientes: 
>1. $\overrightarrow{x_i x_{i+1}} \in E$ y $f(\overrightarrow{x_i x_{i+1}}) \lt c(\overrightarrow{x_i x_{i+1}})$
>2. $\overrightarrow{x_{i+1} x_i} \in E$ y $f(\overrightarrow{x_{i+1} x_i}) \gt 0$

Si en vez de comenzar en $s$ y terminar $t$ el camino es como arriba pero con $x_0 = x,x_r = z$ diremos que es un camino aumentante desde $x$ a $z$

A los lados en (1) los llamaremos “lados de tipo I” o “lados forward” 
A los lados en (2) los llamaremos “lados de tipo II” o “lados backward”

## Ejemplo y notación
![[Pasted image 20220422161751.png]]

Dado $s, E, D, C, B, A, F, t$, es un camino aumentante.
Denotaremos la acción de mandar 10 unidades de flujo (u otra cantidad) por ese camino asi: 
$sE \overleftarrow{DC}\overleftarrow{BA}Ft$ : 10 
Las flechas de derecha a izquierda indicando cuales son los lados “backward”, pues $\overrightarrow{DC}$ y $\overrightarrow{BA}$ no existen en el network. 
Los que existen son $\overrightarrow{CD}$ y $\overrightarrow{AB}$ pero el orden en que listamos los vértices es $D$ primero, luego $C$. Y $B$ primero, luego $A$.
Ademas con esa notación sabemos que esos lados deben “devolver” flujo. Es decir, el flujo $f$ cambia de la siguiente forma:
$f+$ = 10 en los lados $\overrightarrow{sE}$, $\overrightarrow{ED}$, $\overrightarrow{CB}, $\overrightarrow{AF}$, $\overrightarrow{Ft}$
$f−$ = 10 en los lados $\overrightarrow{CD}$, $\overrightarrow{AB}$.

![[Pasted image 20220422162108.png]]

En general, “mandar” ε unidades de flujo por un camino aumentante $x_0, x_1, ...., x_r$ significará cambiar $f$ por medio de: 
$f(\overrightarrow{x_i x_{i+1}})+ = \varepsilon$ en los lados forward. 
$f(\overrightarrow{x_{i+1} x_i})- = \varepsilon$ en los lados backwards.

## Como encontrar caminos aumentantes
Hay varias maneras, aqui menciono algunas:
* Usar una versión modificada de DFS ([[Ford-Fulkerson]]).
* Usar una versión modificada de BFS. ([[Edmonds-Karp]])
* Usar una versión modificada de Dijsktra. ([[Edmonds-Karp]])

---
References: 