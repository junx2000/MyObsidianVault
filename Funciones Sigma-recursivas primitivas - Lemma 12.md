---
aliases: 
tags:
  - theorem
references: Pag 16 - Guia 5 - Lenguajes Formales y Computabilidad
---
Created: <% tp.date.now() %>
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Sea $\Sigma$ un alfabeto finito.
(a) $\lambda xy\left[ x^{y}\right] \in \mathrm{PR}^{\Sigma }$.
(b) $\lambda t\alpha \left[ \alpha ^{t}\right] \in \mathrm{PR}^{\Sigma }$.

---
## Proof
(a) Note que
$$
\lambda tx \left[ x^{t}\right] = 
R\left( C_{1}^{1,0},\lambda xy\left[ x \cdot y \right] \circ \left[ p_{1}^{3,0}, p_{3}^{3,0}\right] \right) \in \mathrm{PR}^{\Sigma}
$$
O sea que $\lambda xy\left[ x^{y}\right] = \lambda tx\left[ x^{t}\right] \circ \left[ p_{2}^{2,0}, p_{1}^{2,0} \right] \in \mathrm{PR}^{\Sigma }$.

(b) Note que
$$
\lambda t\alpha \left[ \alpha ^{t}\right] =R\left( C_{\varepsilon}^{0,1},\lambda \alpha \beta \left[ \alpha \beta \right] \circ \left[p_{3}^{1,2},p_{2}^{1,2}\right] \right) \in \mathrm{PR}^{\Sigma}
$$
