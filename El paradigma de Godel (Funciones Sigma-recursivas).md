---
aliases: 
tags: working
cssclass: 
publish: 
references: Guia 5 - Lenguajes Formales y Computabilidad
---
Links: 
Created: 2022-05-05
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
La idea es partir de una familia de funciones muy simples y obviamente $\Sigma$-[[Funciones Sigma-efectivamente computable|efectivamente computables]] y luego obtener nuevas funciones $\Sigma$-efectivamente computables usando constructores que preservan la computabilidad efectiva. Las funciones $\Sigma$-recursivas seran las que se obtienen con este proceso constructivo. 
Nos referiremos a este paradigma como el paradigma Godeliano o recursivo o funcional.
La familia de funciones simples y obviamente $\Sigma$-efectivamente computables de la que partiremos es la siguiente:
$$
\left\{ Suc,Pred,C_{0}^{0,0},C_{\varepsilon }^{0,0}\right\} 
\cup 
\left\{ d_{a}:a\in \Sigma \right\} 
\cup 
\left\{ p_{j}^{n,m}:1\leq j\leq n+m\right\}
$$
Los constructores que usaremos son:
- [[Composicion]]
- [[Funciones Sigma-recursivas primitivas|Recursion primitiva]]
- Minimizacion de predicados totales


