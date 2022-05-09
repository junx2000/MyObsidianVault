---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-05-03
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
Sea un espacio muestral $S$, y suponemos que existe una funcion $P$ definida sobre el conjunto de eventos de $S$ que satisface los siguientes axiomas: 
* Axioma 1: $0 \leq P(A) \leq 1$, para todo evento $A$.
* Axioma 2: $P(S) = 1$.
* Axioma 3: Si $A_1, A_2, \cdots , A_n, \cdots$, son mutuamente excluyentes dos a dos, entonces 
$$
P \left (\bigcup_{i=1}^{n}A_i  \right ) = \sum_{i=1}^{n}A_i \quad n=1,2,\cdots
$$
Una tal funcion $P$ se la denomina **probabilidad**, y $P(A)$ es la probabilidad del evento $A$.

## Observaciones
* $P(A^c ) = 1 − P(A)$, para todo evento $A$. 
* $P(\varnothing) = 0$. 
* $P(A \cup B) = P(A) + P(B) − P(AB)$, para cualquier par de eventos $A$ y $B$.

---
References: 