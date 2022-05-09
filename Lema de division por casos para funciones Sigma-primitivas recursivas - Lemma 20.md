---
aliases: 
tags: 
  - theorem
created_date: 2022-05-06
references:
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma de division por casos para funciones $\Sigma$-primitivas recursivas
Sean $O\in \{\omega ,\Sigma ^{\ast }\}$ y $n,m\in \omega$.
Supongamos $f_{i}:D_{f_{i}}\subseteq \omega ^{n}\times \Sigma ^{\ast m}\rightarrow O$, $i=1,...,k$, son funciones $\Sigma$-p.r. tales que $D_{f_{i}}\cap D_{f_{j}}=\emptyset$ para $i\neq j.$ Entonces $f_{1}\cup ...\cup f_{k}$ es $\Sigma$-p.r..

---
## Proof
Supongamos $O=\Sigma ^{\ast }$ y $k=2$. Sean
$$
\bar{f}_{i}:\omega ^{n}\times \Sigma ^{\ast m}\rightarrow \Sigma ^{\ast}, \quad i=1,2,
$$
funciones $\Sigma$-p.r. tales que $\bar{f}_{i}|_{D_{f_{i}}}=f_{i}$, $i=1,2$
(Lemma 18)$.$ Por Lemma 19 los conjuntos $D_{f_{1}}$ y $D_{f_{2}}$ son $\Sigma$-p.r. y por lo tanto lo es $D_{f_{1}}\cup D_{f_{2}}$. Ya que
$$
f_{1}\cup f_{2} = 
\left( \lambda \alpha \beta \left[ \alpha \beta \right] \circ 
\left[ \lambda x\alpha \left[ \alpha ^{x}\right] \circ 
\left[ \chi_{D_{f_{1}}}^{\omega ^{n}\times \Sigma ^{\ast m}},\bar{f}_{1}\right],\lambda x \alpha \left[ \alpha^{x}\right] \circ 
\left[ \chi_{D_{f_{2}}}^{\omega ^{n}\times \Sigma ^{\ast m}},\bar{f}_{2}\right] \right] \right) |_{D_{f_{1}}\cup D_{f_{2}}}
$$
tenemos que $f_{1}\cup f_{2}$ es $\Sigma$-p.r.

El caso $k>2$ puede probarse por induccion ya que
$$
f_{1}\cup ...\cup f_{k} = 
(f_{1}\cup ...\cup f_{k-1})\cup f_{k}
$$
