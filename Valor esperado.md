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
Dada una variable aleatoria discreta $X$ que toma valores $x_i , i = 1, 2, \cdots , n, \cdots$, se llama **valor esperado** o **esperanza matematica** a la cantidad (si existe)
$$
E[X] = \sum_{i} x_i P(X = x_i)
$$
Si $X$ es una variable aleatoria continua, su valor esperado se define por el valor de la integral (si existe):
$$
E[X] = \int_{-\infty}^{\infty} x f(x) \; dx
$$
Es importante notar que el valor esperado no es necesariamente un valor posible de $X$.

## Propiedades
Sean $X$ e $Y$ dos variables aleatorias sobre un mismo espacio de probabilidad $S$. Entonces se cumplen las siguientes propiedades:
* Si $g : \mathbb{R} \mapsto \mathbb{R}$, entonces $g(X)$ es una variable aleatoria y
$$
E[g(X)] = \sum_{i} g(x_i) p(x_i) \quad \text{(si X es discreta)}
$$
$$
E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \; dx \quad \text{(si X es continua)}
$$
En particular, tomando $g(x) = ax + b$ se deduce que
$$
E[aX + b] = aE[X] + b.
$$
* El valor esperado es un operador lineal. Esto es
  $$E[X + Y] = E[X] + E[Y]$$

---
References: 