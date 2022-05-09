---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-26
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
Sea $A$ un conjunto cualquiera. Por un $\textit{orden total sobre } A$ entenderemos un
[[orden parcial]] $\leq$ sobre $A$ el cual cumple:
* $a\leq b$ o $b\leq a$,  cualesquiera sean $a,b\in A$.


Supongamos $A$ es finito, no vacio, y que $\leq$ es un orden total sobre $A$
La propiedad nos permite probar que para cada conjunto no vacio $S \subseteq A$, hay un elemento $s\in S$ el cual cumple $s\leq s^{\prime }$ para cada $s^{\prime }\in S$. Por supuesto, $s$ es unico y habitualmente es llamado el $\textit{menor elemento de } S$, ya que es menor que todo otro elemento de $S$.

Si $A$ es finito, no vacio, y $\leq$ es un orden total sobre $A$, podemos
definir recursivamente una funcion $f:\{1,...,\left\vert A\right\vert \}\rightarrow A$ de la siguiente manera:
 * $f(1)=$ menor elemento de $A$
 * Si $i\in \{1,...,\left\vert A\right\vert -1\}$, entonces $f(i+1)=$ menor elemento de $A-\{f(1),...,f(i)\}$

Como es habitual, $f(i)$ es llamado el $i \textit{-esimo elemento de } A$.

Muchas veces para dar un orden total sobre un conjunto finito $A$, daremos
simplemente sus elementos en forma creciente ya que esto determina el orden por completo. 
Por ejemplo si $A=\{1,2,3\}$, el orden total dado por $2<1<3$ es la relacion $\mathrm{\leq }=\{(2,1),(1,3),(2,3),(1,1),(2,2),(3,3)\}$.

---
References: 