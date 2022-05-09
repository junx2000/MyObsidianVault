---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-27
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
- Existen $2^{n-2}$ cortes, donde $n$ es la cantidad de vértices.
- Para todo flujo $f$ y para todo corte $S$, se tiene que $v(f)\leq cap(S)$.
	- Asi que ya con eso tenemos una cota superior para el valor de cualquier flujo, en particular si $S_{\mu}$ es un corte minimal, nos da la cota superior mas baja posible.
	- Y sale de inmediato que si encontramos un flujo $f$ con $v(f) = cap(S_{\mu})$, entonces $f$ es maximal.
	- Entonces si por ejemplo, usamos Greedy y terminamos con un flujo $f$ con $v(f) = cap(S_\mu)$ sabremos que la elección de caminos fue correcta y no nos equivocamos: $f$ es maximal.

Pero ¿qué pasa si el $f$ con el que terminamos tiene $v(f) < cap(S_\mu)$?
Recordemos que en el caso de los cortes $S = \{s\}$ y $S = V − \{t\}$ podiamos tener $v(f) < cap(S)$ y aun asi ser $f$ maximal en algunos ejemplos.
Esos ejemplos funcionaban asi porque en esos ejemplos ni ${s} \text{ ni } V − {t}$ eran cortes minimales.

Si $f$ es maximal entonces necesariamente debe ser $v(f) = cap(S_\mu)$, donde $S_\mu$ es un corte minimal. 
Esto no sirve para mucho, pues dado que hay $2^n−2$ cortes, encontrar un corte minimal es exponencial.

Pero hay una magia maravillosa en lo que veremos. Asociaremos a cada flujo $f$ un corte correspondiente $S(f)$. 

Mientras el flujo no sea maximal, $v(f)$ será menor que $cap(S(f))$. 

Y si $f = f_{max}$ es un flujo maximal, entonces $S(f_{max})$ será un corte minimal y $v(f_{max})$ = $cap(S(f_{max}))$.

---
References: 