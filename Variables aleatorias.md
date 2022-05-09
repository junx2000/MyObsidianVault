---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-05-03
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
>**Definicion**
>Dado un [[espacio muestral]] $(S, P)$, una **variable aleatoria** es una funcion $X : S \mapsto \mathbb{R}$ tal que el conjunto $\{s \in S | X(s) \leq x\}$ es un evento sobre el que esta definido $P$, para todo $x \in \mathbb{R}$.

## Funcion de distribucion acumulada
>**Definicion**
>Dada una variable aleatoria $X$ en un espacio de probabilidad $S$, se define la **funcion de distribucion acumulada** como: 
>$$
F(x) = P(X \leq x) := P (\{s \in S | X(s) \leq x\})
$$

La funcion $F$ tiene dominio en los numeros reales y toma valores en el intervalo $[0, 1]$. En particular cumple las siguientes propiedades:
* $F$ es no decreciente
* para todo $x \in R$ se cumple que $0 \leq F(x) \leq 1$
* $F$ es continua a derecha

## Variable aleatoria discreta
Diremos que una variable aleatoria es **discreta** si toma solo un numero finito o numerable de valores. En este caso, se define la **funcion de probabilidad de masa** por
$$
p(x) = P(X = x)
$$
Si la variable $X$ toma valores en un conjunto finito $\{x_1, x_2, \cdots , x_N \}$, entonces se cumple que
$$
\sum_{i=1}^{N}{p(x_i)} = 1
$$
y si toma una cantidad infinita numerable de valores $x_1, x_2, \cdots$, entonces
$$
\sum_{i=1}^{\infty}{p(x_i)} = 1
$$
## Variable aleatoria continua
Una variable aleatoria se dice que es una variable (absolutamente) **continua** si existe una funcion $f$ tal que para todo subconjunto $C \subseteq \mathbb{R}$ se cumple:
$$
P(X \in C) = \int_{C}{f(x) \; dx}
$$
La funcion $f$ se denomina **funcion de densidad de probabilidad** de la variable aleatoria $X$.

Notemos ademas que si $X$ es continua, entonces $P(X = a) = \int_{a}^{a} f(t) \; dt$, y por lo tanto $P(X = a) = 0$. En particular, $f$ y la funcion de distribucion acumulada $F$ se relacionan por:
$$
F(a) = P(X \leq a) = \int_{-\infty}^{a} f(x) \; dx
$$
Derivando con respecto a a tenemos que $F' (a) = f(a)$, para todo $a \in \mathbb{R}$ tal que $F$ es derivable en $a$.

Ademas, si $\varepsilon \gt 0$, entonces 
$$
P(a − \varepsilon /2 \leq X \leq a + \varepsilon /2) = \int_{a-\varepsilon /2}^{a+\varepsilon/2} f(x) \; dx
$$
es decir que para valores de $\varepsilon$ cercanos a 0 esta probabilidad es aproximadamente $f(a) · \varepsilon$. De esta manera $f(a)$ da una medida de la probabilidad de que la variable aleatoria tome valores cercanos a a.

---
References: 