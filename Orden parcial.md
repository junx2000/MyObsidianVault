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
Una [[relacion binaria]] $R$ sobre un conjunto $A$ es llamada un $\textit{orden parcial sobre } A$ si cumple las siguientes tres propiedades:

**(Reflexividad)** $xRx$, cualesquiera sea $x\in A$

**(Transitividad)** $xRy$ y $yRz$ implica $xRz$, cualesquiera sean $x,y,z\in A$

**(Antisimetria)** $xRy$ y $yRx$ implica $x=y$, cualesquiera sean $x,y\in A$

**Ejemplos:**
1. $\{(r,t)\in \mathbf{R}^{2}:r\leq t\}$ es un orden parcial sobre $\mathbf{R}$, llamado el orden usual de $\mathbf{R}$ 
2. Sea $R=\{(1,2),(1,3),(1,1),(2,2),(3,3)\}$. Entonces $R$ es un orden parcial sobre $\{1,2,3\}$
3.  Sea $R=\{(S,T)\in \mathcal{P}(\omega )^{2}:S\subseteq T\}$. Entonces $R$ es un orden parcial sobre $\mathcal{P}(\omega )$
4. $\{(x,y)\in \omega ^{2}:$ $x\leq y\}$ es un orden parcial sobre $\omega$.
5. Sea $R=\{(1,1)\}$. Entonces $R$ es un orden parcial sobre $\{1\}$.
6. $\{(a,b):a=b\}$ es un orden parcial sobre $A$, cualesquira sea el conjunto $A$.
7. Sea $\mathrm{\leq }=\{(n,m)\in \mathbf{N}^{2}:n\mid m\}$. Es facil ver que $\leq$ es un orden parcial sobre $\mathbf{N}$

**Convencion notacional:**
Si hemos denotado con $\leq$ a cierto orden parcial sobre un conjunto $A$, entonces denotaremos con $<$ a la relacion binaria $\{(a,b)\in A^{2}:a\leq b$ y $a\neq b\}$. Es decir que $\mathrm{<}=\{(a,b)\in A^{2}:a\leq b$ y $a\neq b\}$. Cuando se de $a<b$ diremos que $a \textit{ es menor que } b$ o que $b \textit{ es mayor que } a$ ($\textit{respecto de } \leq$).

Por ejemplo:
si $A=\{1,2,3,4\}$ y $\mathrm{\leq } =\{(1,2),(2,3),(1,3),(1,1),(2,2),(3,3),(4,4)\}$, entonces $\mathrm{<} =\{(1,2),(2,3),(1,3)\}$.

---
References: 