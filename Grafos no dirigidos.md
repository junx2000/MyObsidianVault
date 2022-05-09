---
aliases: 
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-06 22:00

---
# Grafos no dirigidos

Un grafo es un par ordenado $G=(V,E)$ donde
* $V$ es un conjunto cualquiera. Supondremos $V$ finito.
* $E$ es un subconjunto del conjunto de subconjuntos de 2 elementos de $V$, es decir, $E \subseteq  \{A \subseteq V : |A| = 2\}$

Notación:
* Los elementos de $V$ se llaman **vertices** o **nodos**.
* Los elementos de $E$ se llaman **lados** o **aristas**.
* La cantidad de elementos de $V$ se denotara por default como $n$.
* La cantidad de elementos en E se denotara por default como $m$.
* Un elemento $\{x,y\} \in E$ se abreviara como $xy$.
* $x$ e $y$ se llamaran los extremos del lado $xy$.
* Como $xy$ denota el conjunto $\{x, y\}$ entonces $xy = yx$. Esta propiedad la cumplen los grafos "no dirigidos".

---
References: