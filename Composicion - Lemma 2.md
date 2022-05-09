---
aliases: 
tags: 
  - theorem
created_date: 2022-05-06
references:
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Si $f,f_{1},...,f_{r}$, con $r\geq 1$, son $\Sigma$-efectivamente computables, entonces $f\circ \lbrack f_{1},...,f_{r}]$ lo es.

---
## Proof
Si $f\circ \lbrack f_{1},...,f_{r}]=\emptyset$, entonces claramente es $\Sigma$-efectivamente computable. Supongamos entonces que $f\circ \lbrack f_{1},...,f_{r}]\neq \emptyset$. Por el lema anterior hay $n,m,k,l\in \omega$ y $s\in \{\#,\ast \}$ tales que
- $r=n+m$
- $f$ es de tipo $(n,m,s)$
- $f_{i}$ es de tipo $(k,l,\#)$, para cada $i=1,...,n$
- $f_{i}$ es de tipo $(k,l,\ast )$, para cada $i=n+1,...,n+m$

Sean $\mathbb{P},\mathbb{P}_{1},...,\mathbb{P}_{n+m}$ procedimientos efectivos los cuales computen las funciones $f,f_{1},...,f_{n+m}$, respectivamente. Usando estos procedimientos es facil definir un procedimiento efectivo el cual compute a $f\circ \lbrack f_{1},...,f_{n+m}]$