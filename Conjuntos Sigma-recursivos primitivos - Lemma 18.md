---
aliases: 
tags: 
  - theorem
created_date: 2022-05-06
references: Guia 5 - Lenguajes Formales y Computabilidad
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Sean $O\in \{\omega ,\Sigma ^{\ast }\}$ y $n,m\in \omega$.
Si $f:D_{f}\subseteq \omega ^{n}\times \Sigma ^{\ast m}\rightarrow O$ es $\Sigma$-p.r., entonces existe una funcion $\Sigma$-p.r. $\bar{f}:\omega^{n}\times \Sigma ^{\ast m}\rightarrow O$, tal que $f=\bar{f}|_{D_{f}}$.

---
## Proof
Es facil ver por induccion en $k$ que el enunciado se cumple para cada $f\in \mathrm{PR}_{k}^{\Sigma }$
