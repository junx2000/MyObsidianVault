---
aliases: 
tags: 
  - theorem
created_date: 2022-05-06
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 
References: Guia 5 - Lenguajes Formales y Computabilidad

---
# Lemma
Si $S_{1},S_{2}\subseteq \omega ^{n}\times \Sigma ^{\ast m}$ son $\Sigma$-p.r., entonces $S_{1}\cup S_{2}$, $S_{1}\cap S_{2}$ y $S_{1}-S_{2}$ lo son.

---
## Proof
Note que
$$
\begin{eqnarray*}
\chi _{S_{1}\cup S_{2}}^{\omega ^{n}\times \Sigma ^{\ast m}} &=&
(\chi_{S_{1}}^{\omega ^{n}\times \Sigma ^{\ast m}} \vee \chi_{S_{2}}^{\omega^{n}\times \Sigma ^{\ast m}}) 
\\
\chi _{S_{1}\cap S_{2}}^{\omega ^{n}\times \Sigma ^{\ast m}} &=&
(\chi_{S_{1}}^{\omega ^{n}\times \Sigma ^{\ast m}} \wedge \chi_{S_{2}}^{\omega^{n}\times \Sigma ^{\ast m}}) 
\\
\chi _{S_{1}-S_{2}}^{\omega ^{n}\times \Sigma ^{\ast m}} &=&
\lambda xy\left[x \dot{-} y \right] \circ \left[ \chi_{S_{1}}^{\omega ^{n} \times \Sigma^{\ast m}},\chi_{S_{2}}^{\omega^{n} \times \Sigma ^{\ast m}}\right]
\end{eqnarray*}
$$
