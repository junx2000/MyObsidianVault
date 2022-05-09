---
aliases: 
tags: 
created_date: 2022-05-06
references:
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# <%+ tp.file.title %>
Una observacion interesante es que si $f_{i}:D_{f_{i}}\rightarrow O$, $i=1,...,k$, son funciones tales que $D_{f_{i}}\cap D_{f_{j}}=\emptyset$ para $i\neq j$, entonces $f_{1}\cup ...\cup f_{k}$ es la funcion
$$
\begin{array}{rll}
D_{f_{1}}\cup ...\cup D_{f_{k}} & \rightarrow & O
\\ 
e & \rightarrow & \left\{ 
\begin{array}{clc}
f_{1}(e) &  & \text{si }e\in D_{f_{1}} 
\\ 
\vdots &  & \vdots 
\\ 
f_{k}(e) &  & \text{si }e\in D_{f_{k}}%
\end{array}%
\right.%
\end{array}%
$$

**[[Lema de division por casos para funciones Sigma-primitivas recursivas - Lemma 20|Lemma 20]]**

Recordemos 
$$
\left[ \alpha \right] _{i}=\left\{ 
\begin{array}{lll}
i\text{-esimo elemento de }\alpha &  & \text{si }1\leq i\leq \left\vert
\alpha \right\vert \\ 
\varepsilon &  & \text{caso contrario}%
\end{array}%
\right.
$$
Notese que $D_{\lambda i\alpha \left[ \lbrack \alpha ]_{i}\right] }=\omega \times \Sigma ^{\ast }$. 
Usaremos el lema de division por casos para probar que $\lambda i\alpha \left[ \lbrack \alpha ]_{i}\right]$ es $\Sigma$-p.r.

**[[Lema de division por casos para funciones Sigma-primitivas recursivas - Lemma 21|Lemma 21]]**

> [!tip] CONSEJO IMPORTANTE
> Si uno quiere usar el lema de division por casos para
probar que una funcion $f$ es $\Sigma$-p.r., entonces lo primero que hay
que hacer, antes de ver que algo sea $\Sigma$-p.r. o no, es definir
correctamente funciones $f_{1},...,f_{k}$ tales que $D_{f_{i}}\cap D_{f_{j}}=\emptyset$ para $i\neq j$ y ademas $f_{1}\cup ...\cup f_{k}=f$.

## Consejos para encontrar dichas funciones
- Determinar el $k$, es decir, $k$ es justamente la cantidad de "casos" en la descripcion de $f$
- Para cada "caso" de la descripcion de $f$, asociar un subconjunto del dominio de $f$ el cual sea justamente definido por la propiedad correspondiente a ese caso. Ojo dijimos subconjunto de $D_{f}$, no confundir los tipos!! (a veces los casos se describen usando no todas las variables de las cuales depende la funcion)
- Notar que los subconjuntos $S_{1},...,S_{k}$ asi definidos deben ser disjuntos de a pares y unidos deben dar el dominio de $f$
- Para cada $i$ defina $f_{i}$ de la siguiente manera:
	- dominio de $f_{i}=S_{i}$
	- regla de $f_{i}$ dada por la regla que describe $f$ para el caso $i$%
- En general suele suceder que $f_{i}$ es la restriccion a $S_{i}$ de una funcion con dominio mas amplio y se prueba entonces que tanto dicha funcion como $S_{i}$ son $\Sigma$-p.r., resultando asi que $f_{i}$ es $\Sigma$-p.r.
