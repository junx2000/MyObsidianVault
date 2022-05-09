
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
Sea $\Sigma$ un alfabeto finito. Dados $n,m\in \omega$, usaremos $\omega ^{n}\times \Sigma ^{\ast m}$ para abreviar la expresion
$$\begin{equation*}
\overset{n\text{ veces}}{\overbrace{\omega \times \cdots \times \omega }}
\times
\overset{m\text{ veces}}{\overbrace{\Sigma^{\ast }\times \cdots \times \Sigma^{\ast }}}
\end{equation*}
$$
Debe quedar claro que estamos haciendo cierto abuso notacional ya que en principio si no hacemos esta convencion notacional, $\omega ^{3}\times \Sigma ^{\ast 4}$ denota un conjunto de pares y $\omega \times \omega \times \omega \times \Sigma^{\ast }\times \Sigma ^{\ast }\times \Sigma ^{\ast }\times \Sigma^{\ast }$ es un conjunto de $7$-uplas.

Observaciones:
* Cuando $n=m=0$, tenemos que $\omega ^{n}\times \Sigma ^{\ast m}$ denota el conjunto $\{\Diamond \}$
* Si $m=0$, entonces $\omega ^{n}\times \Sigma ^{\ast m}$ denota el conjunto $\omega ^{n}$
* Si $n=0$, entonces $\omega ^{n}\times \Sigma ^{\ast m}$ denota el conjunto$\ \Sigma ^{\ast m}$

Si vemos $\omega ^{1}\times \Sigma ^{\ast 0}$, segun esta nueva convencion debemos pensar en $\omega$ y no leer en forma convencional lo cual nos haria pensar que $\omega ^{1}\times \Sigma ^{\ast 0}$ denota el conjunto de pares $\omega \times \{\Diamond \}$

Un elemento generico de $\omega ^{n}\times \Sigma ^{\ast m}$ es una $(n+m)$-upla de la forma $(x_{1},...,x_{n},\alpha _{1},...,\alpha _{m})$. Para abreviar, escribiremos $(\vec{x},\vec{\alpha})$ en lugar de $(x_{1},...,x_{n},\alpha _{1},...,\alpha _{m})$.

## Definicion de funcion $\Sigma$-mixta
Sea $\Sigma$ un [[Alfabetos|alfabeto]] finito. Dada una funcion $f$, diremos que $f$ es $\Sigma-\textit{mixta}$ si cumple las siguientes propiedades

**(M1)** Existen $n,m\geq 0$, tales que $D_{f}\subseteq \omega ^{n}\times \Sigma ^{\ast m}$
**(M2)** Ya sea $I_{f}\subseteq \omega$ o $I_{f}\subseteq \Sigma ^{\ast}$

**Lemma:** Supongamos $\Sigma \subseteq \Gamma$ son alfabetos finitos. Entonces si $f$ es una funcion $\Sigma$-mixta, $f$ es $\Gamma$-mixta

Una funcion $\Sigma$-mixta $f$ es $\Sigma$-$\textit{total}$ cuando haya $n,m\in \omega$ tales que $D_{f}=\omega ^{n}\times \Sigma ^{\ast m}$.

Observacion:
* Una funcion puede ser $\Sigma$-total y no ser $\Gamma$-total, cuando $\Sigma \subseteq \Gamma$.

Si $f$ es una funcion que es $\Sigma$-mixta para algun alfabeto $\Sigma$, entonces hay un alfabeto $\Sigma _{0}$ el cual es el menor de todos los alfabetos respecto de los cuales $f$ es mixta, es decir $\Sigma _{0}$ cumple que $f$ es $\Sigma _{0}$-mixta y si $\Gamma$ es tal que $f$ es $\Gamma$-mixta, entonces $\Sigma _{0}\subseteq \Gamma$.

## Funciones Sigma-mixtas mas comunes
### Funciones $Suc$ y $Pred$

La $\textit{funcion sucesor}$ es definida por
$$
\begin{equation*}
\begin{array}{rll} 
Suc:\omega & \rightarrow & \omega \\ n & \rightarrow & n+1 \end{array} 
\end{equation*}
$$
La $\textit{funcion predecesor}$ es definida por
$$
\begin{array}{rll}
Pred:\mathbf{N} & \rightarrow & \omega \\
	n & \rightarrow & n-1
\end{array}
$$

## Funcion $d_{a}$
Sea $\Sigma$ un alfabeto no vacio. Para cada $a \in \Sigma$, definamos:
$$
\begin{equation*}
\begin{array}{rll}
d_{a}:\Sigma ^{\ast } & \rightarrow & \Sigma ^{\ast } \\ 
\alpha & \rightarrow & \alpha a
\end{array}
\end{equation*}
$$
La funcion $d_{a}$ es llamada la funcion $\textit{derecha sub } a$, respecto
del alfabeto $\Sigma$.

## Funciones $p_{i}^{n,m}$

Sea $\Sigma$ un alfabeto. 
Para $n,m\in \omega$ e $i$ tal que $1\leq i\leq n$, definamos:
$$
\begin{equation*}
\begin{array}{rll}
p_{i}^{n,m}:\omega ^{n}\times \Sigma ^{\ast m} & \rightarrow & \omega \\ 
(\vec{x},\vec{\alpha}) & \rightarrow & x_{i}
\end{array}
\end{equation*}
$$
Para $n,m\in \omega$ e $i$ tal que $n+1\leq i\leq n+m$, definamos:
$$
\begin{equation*}
\begin{array}{rll}
p_{i}^{n,m}:\omega ^{n}\times \Sigma ^{\ast m} & \rightarrow & \Sigma ^{\ast} \\ 
(\vec{x},\vec{\alpha}) & \rightarrow & \alpha _{i-n}%
\end{array}
\end{equation*}
$$
Las funciones $p_{i}^{n,m}$ son llamadas $\textit{proyecciones}$. La funcion $p_{i}^{n,m}$ es llamada la $\textit{proyeccion }n,m,i$, respecto del alfabeto $\Sigma$. 
Notese que esta definicion requiere que $n+m\geq 1$ ya que $i$ debe cumplir $1\leq i\leq n+m$.

### Funciones $C_{k}^{n,m}$ y $C_{\alpha }^{n,m}$
Sea $\Sigma$ un alfabeto. 
Para $n,m,k\in \omega$, y $\alpha \in \Sigma^{\ast }$, definamos:
$$
\begin{equation*}
\begin{array}{rll}
C_{k}^{n,m}:\omega ^{n}\times \Sigma ^{\ast m} & \rightarrow & \omega \\
(\vec{x},\vec{\alpha}) & \rightarrow & k \\
\end{array}
\quad \quad \quad \quad
\begin{array}{rll}

C_{\alpha }^{n,m}:\omega ^{n}\times \Sigma ^{\ast m} & \rightarrow & \Sigma^{\ast } \\ 
(\vec{x},\vec{\alpha}) & \rightarrow & \alpha
\end{array}
\end{equation*}
$$
Notese que $C_{k}^{0,0}:\{\Diamond \}\rightarrow \{k\}$ y que $C_{\alpha}^{0,0}:\{\Diamond \}\rightarrow \{\alpha \}$.

## El tipo de una funcion $\Sigma$-mixta
Dada una funcion $\Sigma$-mixta $f$, si $n,m\in \omega$ son tales que $D_{f}\subseteq \omega ^{n}\times \Sigma ^{\ast m}$ y ademas $I_{f}\subseteq \omega$, entonces diremos que $f \textit{ es una funcion de tipo} (n,m,\#)$. 
Similarmente si $n,m\in \omega$ son tales que $D_{f}\subseteq \omega^{n}\times \Sigma ^{\ast m}$ y ademas $I_{f}\subseteq \Sigma ^{\ast }$, entonces diremos que $f \textit{ es una funcion de tipo }(n,m,\ast )$.
Notese que si $f\neq \emptyset$, entonces hay unicos $n,m\in \omega$ y $s \in \{\#,\ast \}$ tales que $f$ es una funcion de tipo $(n,m,s)$. 
Sin embargo $\emptyset$ es una funcion de tipo $(n,m,s)$ cualesquiera sean $n,m\in \omega$ y $s\in \{\#,\ast \}$. 
De esta forma, cuando $f\neq \emptyset$ hablaremos de "el tipo de $f$" para refererirnos a esta unica terna $(n,m,s)$. 

---
References: 