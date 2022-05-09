---
aliases: [p.r.]
tags: 
created_date: 2022-05-06
references: Guia 5 - Lenguajes Formales y Computabilidad
---
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# <%+ tp.file.title %>
Las funciones $\Sigma$-recursivas primitivas son precisamente, las que se obtienen a partir de las iniciales y usando solo los constructores de composicion y recursion primitiva.

## Recursion primitiva
### Recursion primitiva sobre variable numerica con valores numericos
Supongamos tenemos dadas funciones 
$$
\begin{eqnarray*}
f &:&S_{1}\times ...\times S_{n}\times L_{1}\times ...\times
L_{m}\rightarrow \omega \\
g &:&\omega \times \omega \times S_{1}\times ...\times S_{n}\times
L_{1}\times ...\times L_{m}\rightarrow \omega
\end{eqnarray*}
$$
 con $S_{1},...,S_{n}\subseteq \omega$ y $L_{1},...,L_{m}\subseteq \Sigma^{\ast }$ conjuntos no vacios. Hay una unica funcion
$$
R:\omega \times S_{1}\times ...\times S_{n}\times L_{1}\times ...\times
L_{m}\rightarrow \omega
$$
la cual cumple las ecuaciones

$R(0,\vec{x},\vec{\alpha})=f(\vec{x},\vec{\alpha})$
$R(t+1,\vec{x},\vec{\alpha})=g(R(t,\vec{x},\vec{\alpha}),t,\vec{x},\vec{\alpha})$

LLamaremos $R(f,g)$ a esta unica funcion que cumple las ecuaciones anteriores. 

Resumiendo, diremos que las ecuaciones

**(1)** $R(f,g)(0,\vec{x},\vec{\alpha})=f(\vec{x},\vec{\alpha})$
**(2)** $R(f,g)(t+1,\vec{x},\vec{\alpha}) = g(R(f,g(t,\vec{x},\vec{\alpha}),t,\vec{x},\vec{\alpha})$

definen recursivamente a la funcion $R(f,g)$. Tambien diremos que $R(f,g)$ es obtenida por **recursion primitiva** a partir de $f$ y $g$.

>[! Warning] NOTA IMPOTANTE
No confundirse y pensar que $R(f,g)$ es el resultado de aplicar una funcion $R$ al par $(f,g)$, de hecho hasta el momento no hemos definido ninguna funcion $R$ cuyo dominio sea cierto conjunto de pares ordenados de funciones!

**[[Funciones Sigma-recursivas primitivas - Lemma 4 y 5|Lemma 4 y 5]]**

### Recursion primitiva sobre variable numerica con valores alfabeticos
**Definition**
Supongamos $\Sigma$ es un alfabeto finito. Sean
$$
\begin{eqnarray*}
f &:&S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\rightarrow \Sigma ^{\ast } 
\\
g &:&\omega \times S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\times \Sigma ^{\ast }\rightarrow \Sigma ^{\ast }
\end{eqnarray*}
$$
con $S_{1},...,S_{n}\subseteq \omega$ y $L_{1},...,L_{m}\subseteq \Sigma^{\ast }$ conjuntos no vacios. Definamos
$$
R(f,g):\omega \times S_{1}\times \cdots \times S_{n}\times L_{1}\times \cdots \times L_{m}\rightarrow \Sigma ^{\ast }
$$
de la siguiente manera
**(1)** $R(f,g)(0,\vec{x},\vec{\alpha})=f(\vec{x},\vec{\alpha})$
**(2)** $R(f,g)(t+1,\vec{x},\vec{\alpha})=g(t,\vec{x},\vec{\alpha},R(f,g)(t,\vec{x},\vec{\alpha}))$

Diremos que $R(f,g)$ es obtenida por **recursion primitiva** a partir de $f$ y $g$. Notese que cuando $m=n=0$, se tiene que $D_{f}=\{\Diamond \}$ y (1) y (2) se transforman en

- $R(f,g)(0)=f(\Diamond )$
- $R(f,g)(t+1)=g(t,R(f,g)(t))$

**[[Funciones Sigma-recursivas primitivas - Lemma 4 y 5|Lemma 4 y 5]]**

### Recursion primitiva sobre variable alfabetica con valores numericos
Para hacer recursion sobre parametro alfabetico nos hace falta "una funcion g por cada simbolo de $\Sigma$"

> **Definition**
> Dado un alfabeto $\Sigma$, una **familia $\Sigma$-indexada de funciones** sera una funcion $\mathcal{G}$ tal que $D_{\mathcal{G}}=\Sigma$ y para cada $a\in D_{\mathcal{G}}$ se tiene que $\mathcal{G}(a)$ es una funcion.

> [!warning] NOTACION
> Si $\mathcal{G}$ es una familia $\Sigma$-indexada de funciones, entonces para $a\in \Sigma$, escribiremos $\mathcal{G}_{a}$ en lugar de $\mathcal{G}(a)$.

**Definition**
Sea
$$
f:S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\rightarrow \omega
$$
con $S_{1},...,S_{n}\subseteq \omega$ y $L_{1},...,L_{m}\subseteq \Sigma^{\ast }$ conjuntos no vacios y sea $\mathcal{G}$ una familia $\Sigma$-indexada de funciones tal que
$$
\mathcal{G}_{a}:\omega \times S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\times \Sigma ^{\ast }\rightarrow \omega
$$
para cada $a\in \Sigma$. Definamos
$$
R(f,\mathcal{G}):S_{1}\times ...\times S_{n}\times L_{1}\times ... \times L_{m}\times \Sigma ^{\ast }\rightarrow \omega
$$
de la siguiente manera

**(1)** $R(f,\mathcal{G})(\vec{x},\vec{\alpha},\varepsilon )=f(\vec{x}, \vec{\alpha})$

**(2)** $R(f,\mathcal{G})(\vec{x},\vec{\alpha},\alpha a)=\mathcal{G}_{a}(R(f,\mathcal{G})(\vec{x},\vec{\alpha},\alpha ),\vec{x},\vec{\alpha},\alpha )$

Diremos que $R(f,\mathcal{G})$ es obtenida por **recursion primitiva** a partir de $f$ y $\mathcal{G}.$

Notese que cuando $n=m=0$, se tiene que $D_{f}=\{\Diamond \}$ y (1) y (2) se transforman en

- $R(f,\mathcal{G})(\varepsilon )=f(\Diamond )$
- $R(f,\mathcal{G})(\alpha a)=\mathcal{G}_{a}(R(f,\mathcal{G})(\alpha ),\alpha )$

**[[Funciones Sigma-recursivas primitivas - Lemma 6 y 7|Lemma 6 y 7]]**

### Recursion primitiva sobre variable alfabetica con valores alfabeticos
**Definition**
Supongamos $\Sigma $ es un alfabeto finito. Sea%
$$
f:S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\rightarrow \Sigma ^{\ast }
$$
con $S_{1},...,S_{n}\subseteq \omega$ y $L_{1},...,L_{m}\subseteq \Sigma^{\ast }$ conjuntos no vacios y sea $\mathcal{G}$ una familia $\Sigma$-indexada de funciones tal que
$$
\mathcal{G}_{a}:S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\times \Sigma ^{\ast }\times \Sigma ^{\ast }\rightarrow \Sigma ^{\ast }
$$
para cada $a \in \Sigma$. Definamos
$$
R(f,\mathcal{G}):S_{1}\times ...\times S_{n}\times L_{1}\times ...\times L_{m}\times \Sigma ^{\ast }\rightarrow \Sigma ^{\ast }
$$
de la siguiente manera

**(1)** $R(f,\mathcal{G})(\vec{x},\vec{\alpha},\varepsilon )=f(\vec{x},\vec{\alpha})$
**(2)** $R(f,\mathcal{G})(\vec{x},\vec{\alpha},\alpha a)=\mathcal{G}_{a}(\vec{x},\vec{\alpha},\alpha ,R(f,\mathcal{G})(\vec{x},\vec{\alpha},\alpha))$

Diremos que $R(f,\mathcal{G})$ es obtenida por **recursion primitiva** a partir de $f$ y $\mathcal{G}$. 

Notese que cuando $n=m=0$, se tiene que $D_{f}=\{\Diamond \}$ y (1) y (2) se transforman en

- $R(f,\mathcal{G})(\varepsilon )=f(\Diamond )$
-  $R(f,\mathcal{G})(\alpha a)=\mathcal{G}_{a}(\alpha ,R(f,\mathcal{G})(\alpha ))$

**[[Funciones Sigma-recursivas primitivas - Lemma 6 y 7|Lemma 6 y 7]]**

### Definicion de funcion $\Sigma$-recursiva primitiva
Definamos los conjuntos $\mathrm{PR}_{0}^{\Sigma}\subseteq \mathrm{PR}_{1}^{\Sigma }\subseteq \mathrm{PR}_{2}^{\Sigma}\subseteq ...\subseteq \mathrm{PR}^{\Sigma}$ de la siguiente manera
$$
\begin{array}{lll}
\mathrm{PR}_{0}^{\Sigma } & = & 
\left\{ Suc, Pred, C_{0}^{0,0}, C_{\varepsilon}^{0,0} \right\} \cup \left\{ d_{a}:a\in \Sigma \right\} \cup \left\{p_{j}^{n,m} : 1 \leq j \leq n+m\right\} 
\\
\mathrm{PR}_{k+1}^{\Sigma } & = & 
\mathrm{PR}_{k}^{\Sigma }\cup \left\{f \circ \lbrack f_{1}, \cdots, f_{r}] : f,f_{1},...,f_{r} \in \mathrm{PR}_{k}^{\Sigma}\text{, } r \geq 1 \right\} 
\\
&& \cup \left\{R(f,\mathcal{G}) : f \text{ y cada }\mathcal{G}_{a} \text{ pertenecen a } \mathrm{PR}_{k}^{\Sigma }\right\}
\\
&&  \cup
\left\{ R(f,g):f,g\in \mathrm{PR}_{k}^{\Sigma }\right\} 
\\
\mathrm{PR}^{\Sigma } & = & 
\bigcup_{k\geq 0}\mathrm{PR}_{k}^{\Sigma}
\end{array}
$$
Una funcion es llamada **$\Sigma$-recursiva primitiva ($\Sigma$-p.r.)** si pertenece a $\mathrm{PR}^{\Sigma }$.

**[[Funciones Sigma-recursivas primitivas - Proposition|Proposition]]**

### Algunas funciones $\Sigma$-recursivas primitivas
En los siguientes cuatro lemas se prueba bien formalmente que varias funciones bien conocidas son $\Sigma$-primitivas recursivas. La mayoria de estas funciones ya fueron obtenidas usando los constructores de composicion y recursion primitiva, en los desarrollos anteriores o en los ejercicios.

**[[Funciones Sigma-recursivas primitivas - Lemma 9|Lemma 9]]**

Ahora consideraremos dos funciones las cuales son obtenidas naturalmente por recursion primitiva sobre variable alfabetica.

**[[Funciones Sigma-recursivas primitivas - Lemma 10|Lemma 10]]**

**[[Funciones Sigma-recursivas primitivas - Lemma 11|Lemma 11]]**

**[[Funciones Sigma-recursivas primitivas - Lemma 12|Lemma 12]]**

Dados $x,y \in \omega$, definamos
$$
x\dot{-}y=\max (x-y,0)
$$

**[[Funciones Sigma-recursivas primitivas- Lemma 13|Lemma 13]]**

---
References: 