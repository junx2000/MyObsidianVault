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
Dadas funciones $f$ y $g$ definamos la funcion $f\circ g$ de la siguiente manera:
$$
\begin{eqnarray*}
D_{f\circ g} &=&\{e\in D_{g}:g(e)\in D_{f}\} \\
f\circ g(e) &=&f(g(e))
\end{eqnarray*}%
$$
Notar que $f\circ g=\{(u,v):$ existe $z$ tal que $(u,z)\in g$ y $(z,v)\in f\}$.

**Teorema:** $f\circ g\neq \emptyset$ si y solo si $I_{g}\cap D_{f}\neq \emptyset$ (esto nos dice que que muchas veces sucedera que $f\circ g=\emptyset$)

---
References: 