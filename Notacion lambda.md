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
## Expresiones booleanas
A las expresiones Booleanas tales como
$$
x=y+1\text{ y }\left\vert \alpha \right\vert \leq 22
$$

las pensaremos que asumen valores del conjunto $\{0,1\}\subseteq \omega$.
Por ejemplo la expresion anterior asume o produce el valor $1$ cuando le asignamos a $x$ el valor 11, a $y$ el valor 10 y a $\alpha$ la palabra $\varepsilon$. 
Las expresiones Booleanas pensadas de esta forma podran ser utilizadas en la notacion lambda.

## Definicion de $\lambda x_{1} \cdots x_{n}\alpha_{1} \cdots \alpha_{m}[E]$

Supongamos ya hemos fijado un alfabeto finito $\Sigma$ y supongamos $E$ es una expresion la cual tiene las caracteristicas descriptas anteriormente.
Sea $x_{1},\cdots,x_{n},\alpha_{1},\cdots,\alpha_{m}$ una lista de variables todas distintas tal que las variables numericas que ocurren en $E$ estan todas contenidas en la lista $x_{1},\cdots,x_{n}$ y las variables alfabeticas que ocurren en $E$ estan en la lista $\alpha_{1},\cdots,\alpha_{m}$ (puede suceder que haya variables de la lista $x_{1},\cdots,x_{n},\alpha_{1},\cdots,\alpha_{m}$ las cuales no ocurran en $E$). Entonces%
$$
\lambda x_{1} \cdots x_{n}\alpha _{1} \cdots \alpha _{m}[E]
$$
denotara la funcion definida por:

**(L1)** El dominio de $\lambda x_{1} \cdots x_{n}\alpha _{1} \cdots \alpha _{m}[E]$ es el conjunto de las $(n+m)$-uplas $(k_{1},\cdots,k_{n},\beta_{1},\cdots,\beta_{m})\in \omega ^{n}\times \Sigma^{\ast m}$ tales que $E$ esta definida cuando le asignamos a cada $x_{i}$ el valor $k_{i}$ y a cada $\alpha _{i}$ el valor $\beta _{i}$.

**(L2)** $\lambda x_{1} \cdots x_{n}\alpha _{1} \cdots \alpha _{m}[E] (k_{1},\cdots,k_{n},\beta_{1},\cdots,\beta_{m})=$ valor que asume o representa $E$ cuando le asignamos a cada $x_{i}$ el valor $k_{i}$ y a cada $\alpha_{i}$ el valor $\beta _{i}$.

Notese que la funcion $\lambda x_{1} \cdots x_{n}\alpha _{1} \cdots \alpha _{m}[E]$ es $\Sigma$-mixta de tipo $(n,m,s)$ para algun $s\in \{\#,\ast \}$.

---
References: 