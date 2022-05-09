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
Supongamos $f:D_{f}\subseteq \omega ^{n}\times \Sigma^{\ast m}\rightarrow O$ es $\Sigma$-p.r., donde $O\in \{\omega,\Sigma^{\ast }\}$. Si $S\subseteq D_{f}$ es $\Sigma$-p.r., entonces $f|_{S}$ es $\Sigma$-p.r.

---
## Proof
Supongamos $O=\Sigma ^{\ast }$. Entonces
$$
f|_{S} = 
\lambda x\alpha \left[ \alpha ^{x}\right] \circ 
\left[ Suc \circ Pred \circ \chi _{S}^{\omega^{n} \times \Sigma^{\ast m}},f\right]
$$
lo cual nos dice que $f|_{S}$ es $\Sigma$-p.r. 
El caso $O=\omega$ es similar usando $\lambda xy\left[ x^{y}\right]$ en lugar de $\lambda x\alpha \left[ \alpha^{x}\right]$.