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
Dada una funcion $f:A\rightarrow B$ diremos que $f$ es $\textit{biyectiva}$ cuando $f$ sea [[Funciones inyectivas|inyectiva]] y [[Funciones suryectivas|suryectiva]]. Notese que si $f:A\rightarrow B$ es biyectiva, entonces podemos definir una nueva funcion $f^{-1}:B\rightarrow A$, de la siguiente manera:
$$
f^{-1}(b)=\text{ unico }a\in A\text{ tal que }f(a)=b
$$
La funcion $f^{-1}$ sera llamada la $\textit{inversa de }f$. Notese que $f\circ f^{-1}=Id_{B}$ y $f^{-1}\circ f=Id_{A}$.

**Lema:** Supongamos que $f:A\rightarrow B$ y $g:B\rightarrow A$ son tales que $f\circ g=Id_{B}$ y $g\circ f=Id_{A}$. Entonces $f$ y $g$ son biyectivas, $f^{-1}=g$ y $g^{-1}=f$.

---
References: 