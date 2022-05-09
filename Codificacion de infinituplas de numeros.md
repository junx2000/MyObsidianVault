---
aliases: [infinitupla, infinituplas]
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-26
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
Usaremos $\omega ^{\mathbf{N}}$ para denotar el conjunto de todas las infinituplas con coordenadas en $\omega$. Es decir
$$
\omega ^{\mathbf{N}}=\{ (s_{1},s_{2},...):s_{i}\in \omega \text{, para cada } i \geq 1\}.
$$
Definamos el siguiente subconjunto de $\omega ^{\mathbf{N}}$
$$
\omega^{[\mathbf{N}]} = \{ (s_{1},s_{2},\cdots)\in \omega^{\mathbf{N}}: \text{ hay un } n \in \mathbf{N} \text{ tal que } s_{i}=0, \text{para } i \geq n\} \text{.}
$$
Notese que $\omega ^{\mathbf{N}}\neq \omega ^{\left[ \mathbf{N}\right] }$, por ejemplo las infinituplas
$$
\begin{eqnarray*}
&&(10,20,30,40,50,...) \\
&&(1,0,1,0,1,0,1,0,...)
\end{eqnarray*}
$$
no pertenecen a $\omega ^{\left[ \mathbf{N}\right] }$. Notese que $(s_{1},s_{2},...) \in \omega^{[ \mathbf{N}] }$ si y solo si solo una cantidad finita de coordenadas de $(s_{1},s_{2},...)$ son no nulas (i.e. $\{i:s_{i}\neq 0\}$ es finito).

Definamos
$$
\begin{array}{rll}
pr:\mathbf{N} & \rightarrow  & \omega  \\ 
n & \rightarrow  & n\text{-esimo numero primo}
\end{array}
$$
Notese que $pr(1)=2$, $pr(2)=3$, $pr(3)=5$, etc.

Es bien conocido que todo numero natural es expresable como producto de primos.
Si tomamos el numero 57596. Con la notacion mencionada podemos expresarlo como:
$$
57596=pr(1)^{2}.pr(4)^{1}.pr(5)^{2}.pr(7)^{1}
$$
Cada primo que interviene en la factorizacion de 57596 figura con un exponente que nos dice cuantas veces ocurre en dicha factorizacion. Hay muchos primos que no ocurren en esta factorizacion, es decir, ocurren 0 veces en la misma. Por lo que podemos escribir:
$$
57596=pr(1)^{2}.pr(2)^{0}.pr(3)^{0}.pr(4)^{1}.pr(5)^{2}.pr(6)^{0}.pr(7)^{1}.pr(8)^{0}.pr(9)^{0}.pr(10)^{0}...
$$
y la igualdad no se altera ya que agregamos factores iguales a 1 (una cantidad
infinita!). De esta manera cada primo interviene en la factorizacion. Ademas si
vemos la infenitupla de exponentes de dicha factorizacion, es decir:
$$
(2,0,0,1,2,0,1,0,0,0,...)
$$
obtenemos un elemento de $\omega ^{\lbrack \mathbf{N}]}$.

Ahora generalicemos el teorema fundamental de la aritmetica con esta nueva version:

## Teorema Fundamental de la Aritmetica

Para cada $x\in \mathbf{N}$, hay una unica infinitupla $(s_{1},s_{2},...)\in \omega ^{\left[ \mathbf{N}\right] }$ tal que
$$
x = \underset{i=1}{\overset{\infty }{\Pi }}pr(i)^{s_{i}}
$$

(Tiene sentido escribir $\underset{i=1}{\overset{\infty }{\Pi }}pr(i)^{s_{i}}$, ya que en esta productoria solo una cantidad finita de factores son no iguales a $1$.)

**Lema:** Si $p,p_{1},...,p_{n}$ son numeros primos (con $n\geq 1$) y $p$ divide a $p_{1}.....p_{n}$, entonces $p=p_{i}$, para algun $i$. 

**Notacion:**
Dada una infinitupla $(s_{1},s_{2},...)\in \omega^{[\mathbf{N}] }$ usaremos $\left\langle s_{1},s_{2},...\right\rangle$ para denotar al numero $\underset{i=1}{\overset{\infty }{\Pi }}pr(i)^{s_{i}}$.
Dado $x\in \mathbf{N}$, usaremos $(x)$ para denotar a la unica infinitupla $(s_{1},s_{2},...)\in \omega^{\left[ \mathbf{N}\right] }$ tal que
$$
x=\left\langle s_{1},s_{2},...\right\rangle = \underset{i=1}{\overset{\infty}{\Pi }}pr(i)^{s_{i}}
$$
Ademas para $i\in \mathbf{N}$, usaremos $(x)_{i}$ para denotar a $s_{i}$ de dicha infinitupla. Es decir que
1. $(x)=((x)_{1},(x)_{2},...)$
2. $(x)_{i}$ es el exponente de pr(i) en la (unica posible) factorizacion de $x$ como producto de primos
3. $\left\langle (x)_{1},(x)_{2},...\right\rangle = x$, para cada $x\in \mathbf{N}$
4. Para cada $(s_{1},s_{2},...)\in \omega^{\left[ \mathbf{N}\right]}$, se tiene que
$$
(\left\langle s_{1},s_{2},...\right\rangle )_{i}=s_{i}\text{, para }i\in \mathbf{N}
$$Es decir que
$$
(\left\langle s_{1},s_{2},...\right\rangle )=(s_{1},s_{2},...)
$$
**Teorema:** Las funciones
$$
\begin{array}{lll}
\mathbf{N} & \rightarrow & \omega ^{\left[ \mathbf{N}\right] } \\
x & \rightarrow & (x)=((x)_{1},(x)_{2},...)
\end{array}
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \
\begin{array}{rll}
\omega ^{\left[ \mathbf{N}\right] } & \rightarrow & \mathbf{N} \\
(s_{1},s_{2},...) & \rightarrow & \left\langle s_{1},s_{2},...\right\rangle
\end{array}
$$

son biyecciones, una inversa de la otra.

**Lema:** Dados $x,i\in \mathbf{N}$, se tiene que
$$
(x)_{i}=\max_{t}\left( pr(i)^{t}\text{ divide a }x\right)
$$
Definamos la funcion $Lt:\mathbf{N}\rightarrow \omega$ de la siguiente manera:
$$
Lt(x)=\left\{
\begin{array}{lll}
\max_{i}\;(x)_{i}\neq 0 &  & \text{si }x\neq 1 \\
0 &  & \text{si }x=1
\end{array}
\right.
$$
**Lema:** Para cada $x\in \mathbf{N}$:
1. $Lt(x)=0$ sii $x=1$
2. $x=\prod\nolimits_{i=1}^{Lt(x)}pr(i)^{(x)_{i}}$

---
References: 