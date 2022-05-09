---
aliases: 
tags: 
  - theorem
created_date: 2022-05-06
references: Guia 5 - Lenguajes Formales y Computabilidad
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Supongamos que $f,f_{1},...,f_{r}$ son funciones $\Sigma$-mixtas, con $r\geq 1$. Supongamos ademas que $f\circ \lbrack f_{1},...,f_{r}]\neq \emptyset$. Entonces hay $n,m,k,l\in \omega$ y $s\in \{\#,\ast \}$ tales que 

$r=n+m$
$f$ es de tipo $(n,m,s)$
$f_{i}$ es de tipo $(k,l,\#)$, para cada $i=1,...,n$
$f_{i}$ es de tipo $(k,l,\ast )$, para cada $i=n+1,...,n+m$

Mas aun, en tal caso la funcion $f\circ \lbrack f_{1},...,f_{n+m}]$ es $\Sigma$-mixta de tipo $(k,l,s)$ y:
$$
\begin{eqnarray*}
D_{f\circ \lbrack f_{1},...,f_{n+m}]} &=&
\left\{ (\vec{x},\vec{\alpha})\in \bigcap_{i=1}^{n+m}D_{f_{i}} :(f_{1}(\vec{x},\vec{\alpha}),...,f_{n+m}(\vec{x},\vec{\alpha}))\in D_{f}\right\}
\\
f\circ \lbrack f_{1},...,f_{n+m}](\vec{x},\vec{\alpha}) &=&
f(f_{1}(\vec{x},\vec{\alpha}),...,f_{n+m}(\vec{x},\vec{\alpha}))
\end{eqnarray*}
$$
