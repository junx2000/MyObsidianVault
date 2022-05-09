---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-26 15:11
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
Dada una funcion $f$, definamos:
$$
\begin{eqnarray*} D_{f} = \text{ dominio de }f = \{x:(x,y) \in f \text{ para algun }y\} \\
I_{f} = \text{ imagen de }f=\{y:(x,y)\in f \text{ para algun }x\}
\end{eqnarray*}
$$
Como es usual dado $x \in Df$ , usaremos $f(x)$ para denotar al unico $y \in If$ tal que $(x, y) \in f$
Notese que $\emptyset$ es una funcion y que $D_{\emptyset}=I_{\emptyset }=\emptyset$.
Escribiremos $f:S\subseteq A\rightarrow B$ para expresar que $f$ es una funcion tal que $D_{f}=S\subseteq A$ y $I_{f}\subseteq B$. 
Tambien escribiremos $f:A\rightarrow B$ para expresar que $f$ es una funcion tal que $D_{f}=A$ y $I_{f}\subseteq B$. 
En tal contexto llamaremos a $B$ $\textit{conjunto de llegada}$. 
Por supuesto $B$ no esta determinado por $f$ ya que solo debe cumplir $I_{f}\subseteq B$.

Muchas veces para definir una funcion $f$, lo haremos dando su dominio y su
regla de asignacion:

Por ejemplo si decimos que $f$ es la funcion dada por:
$$
\begin{eqnarray*}
D_{f} &=&\omega \\
f(x) &=&23x^{2}
\end{eqnarray*}
$$
nos estaremos refiriendo a la funcion $\{(x,23x^{2}):x\in \omega \}$.
Tambien escribiremos
$$
\begin{equation*}
\begin{array}{rll}
f:\omega & \rightarrow & \omega \\ 
x & \rightarrow & 23x^{2}
\end{array}
\end{equation*}
$$
para describir a $f$.

---
References: 