
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
# Proposition
Un conjunto $S$ es $\Sigma$-p.r. sii $S$ es el dominio de alguna funcion $\Sigma$-p.r.

---
## Proof
Supongamos que $S\subseteq \omega ^{n}\times \Sigma ^{\ast m}$.
($\Rightarrow$) Note que $S=D_{Pred\circ \chi _{S}^{\omega ^{n}\times \Sigma ^{\ast m}}}$.
($\Leftarrow$) Probaremos por induccion en $k$ que $D_{F}$ es $\Sigma$-p.r., para cada $F\in \mathrm{PR}_{k}^{\Sigma }.$ El caso $k=0$ es facil$.$
Supongamos el resultado vale para un $k$ fijo y supongamos $F\in \mathrm{PR}_{k+1}^{\Sigma }$. 
Veremos entonces que $D_{F}$ es $\Sigma$-p.r. 
Hay varios casos. 
Consideremos primero el caso en que $F=R(f,g)$, donde
$$
\begin{eqnarray*}
f &:&S_{1}\times ...\times S_{n}\times L_{1}\times ...\times
L_{m}\rightarrow \Sigma ^{\ast } \\
g &:&\omega \times S_{1}\times ...\times S_{n}\times L_{1}\times ...\times
L_{m}\times \Sigma ^{\ast }\rightarrow \Sigma ^{\ast },
\end{eqnarray*}
$$
con $S_{1},...,S_{n}\subseteq \omega$ y $L_{1},...,L_{m}\subseteq \Sigma^{\ast }$ conjuntos no vacios y $f,g\in \mathrm{PR}_{k}^{\Sigma }$. 
Notese que por definicion de $R(f,g)$, tenemos que
$$
D_{F} = \omega \times S_{1}\times ... \times S_{n}\times L_{1} \times ... \times L_{m}
$$
Por hipotesis inductiva tenemos que $D_{f}=S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}$ es $\Sigma$-p.r., lo cual por el Lema 16 nos dice que los conjuntos $S_{1},...,S_{n}$, $L_{1},...,L_{m}$ son $\Sigma$-p.r. Ya que $\omega$ es $\Sigma$-p.r., el Lema 16 nos dice que $D_{F}$ es $\Sigma$-p.r..
Los otros casos de recursion primitiva son dejados al lector.

Supongamos ahora que $F=g\circ \lbrack g_{1},...,g_{r}]$ con $g,g_{1},...,g_{r}\in \mathrm{PR}_{k}^{\Sigma }$. 
Si $F=\emptyset$, entonces es claro que $D_{F}=\emptyset$ es $\Sigma$-p.r. 
Supongamos entonces que $F$ no es la funcion $\emptyset$. 
Tenemos entonces que $r$ es de la forma $n+m$ y 
$$
\begin{eqnarray*}
g &:&D_{g}\subseteq \omega ^{n}\times \Sigma ^{\ast m} \rightarrow O 
\\
g_{i} &:&D_{g_{i}}\subseteq \omega ^{k}\times \Sigma ^{\ast l} \rightarrow \omega \text{, }i=1,...,n 
\\
g_{i} &:&D_{g_{i}}\subseteq \omega ^{k}\times \Sigma ^{\ast l}\rightarrow \Sigma ^{\ast },i=n+1,...,n+m
\end{eqnarray*}
$$
con $O\in \{\omega ,\Sigma ^{\ast }\}$ y $k,l\in \omega$. Por Lema18, hay funciones $\Sigma$-p.r. $\bar{g}_{1},...,\bar{g}_{n+m}$ las cuales son $\Sigma$-totales y cumplen
$$
g_{i}=\bar{g}_{i}|_{D_{g_{i}}}\text{, para }i=1,...,n+m.
$$
Por hipotesis inductiva los conjuntos $D_{g}$, $D_{g_{i}}$, $i=1,...,n+m$, son $\Sigma$-p.r. y por lo tanto
$$
S=\bigcap_{i=1}^{n+m}D_{g_{i}}
$$
lo es. 
Notese que
$$
\chi _{D_{F}}^{\omega ^{k}\times \Sigma ^{\ast l}} = 
(\chi _{D_{g}}^{\omega^{n} \times \Sigma ^{\ast m}} 
\circ 
\left[ \bar{g}_{1},...,\bar{g}_{n+m}\right]
\wedge 
\chi _{S}^{\omega ^{k}\times \Sigma ^{\ast l}})
$$
lo cual nos dice que $D_{F}$ es $\Sigma$-p.r.