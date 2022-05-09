---
aliases: 
tags: 
  - theorem
created_date: 2022-05-06
references: 
  - Guia 1 = Lenguajes Formales y Computabilidad
  - Guia 5 = Lenguajes Formales y Computabilidad
---
updated_date: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Si $P:S\subseteq \omega ^{n}\times \Sigma ^{\ast m}\rightarrow \omega$ y $Q:S\subseteq \omega ^{n}\times \Sigma ^{\ast m}\rightarrow \omega$ son predicados $\Sigma$-[[Funciones Sigma-recursivas primitivas|p.r.]], entonces $(P\vee Q)$, $(P\wedge Q)$ y $\lnot P$ lo son tambien.

---
## Proof
Note que
$$
\begin{eqnarray*}
\lnot P &=&
\lambda xy\left[ x\dot{-}y\right] \circ \left[ C_{1}^{n,m},P \right] 
\\
(P\wedge Q) &=&
\lambda xy\left[ x.y\right] \circ \lbrack P,Q] 
\\
(P\vee Q) &=&
\lnot (\lnot P\wedge \lnot Q)
\end{eqnarray*}
$$