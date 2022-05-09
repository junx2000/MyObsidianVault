---
aliases: 
tags: 
 - theorem
References: Guia 5 - Lenguajes Formales y Computabilidad
---
Created: <% tp.date.now() %>
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
(a) $\lambda xy\left[ x\dot{-}y\right] \in \mathrm{PR}^{\Sigma }$
(b) $\lambda xy\left[ \max (x,y)\right] \in \mathrm{PR}^{\Sigma }$
(c) $\lambda xy\left[ x=y\right] \in \mathrm{PR}^{\Sigma }$
(d) $\lambda xy\left[ x\leq y\right] \in \mathrm{PR}^{\Sigma }$
(e) $\lambda \alpha \beta \left[ \alpha =\beta \right] \in \mathrm{PR}^{\Sigma }$

---
## Proof
(a) Primero notar que $\lambda x\left[ x\dot{-}1\right] =R\left(C_{0}^{0,0},p_{2}^{2,0}\right) \in \mathrm{PR}^{\Sigma }$ 
Tambien note que
$$
\lambda tx\left[ x\dot{-}t\right] = 
R\left( p_{1}^{1,0},\lambda x\left[ x \dot{-}1\right] \circ p_{1}^{3,0}\right) \in \mathrm{PR}^{\Sigma }
$$
O sea que $\lambda xy\left[ x\dot{-}y\right] =\lambda tx\left[ x\dot{-}t \right] \circ \left[ p_{2}^{2,0},p_{1}^{2,0}\right] \in \mathrm{PR}^{\Sigma}$

(b) Note que $\lambda xy\left[ \max (x,y)\right] =\lambda xy\left[ x+(y\dot{-}x)\right]$
(c) Note que $\lambda xy\left[ x=y\right] =\lambda xy\left[ 1\dot{-}((x\dot{-}y)+(y\dot{-}x))\right]$
(d) Note que $\lambda xy\left[ x\leq y\right] =\lambda xy\left[ 1\dot{-}(x \dot{-}y)\right]$
(e) Sea $\leq$ un orden total sobre $\Sigma .$ Ya que
$$
\alpha =\beta \text{ sii }\#^{\leq }(\alpha )=\#^{\leq }(\beta )
$$
tenemos que
$$
\lambda \alpha \beta \left[ \alpha =\beta \right] = 
\lambda xy\left[ x=y \right] \circ \left[ \#^{\leq }\circ p_{1}^{0,2},\#^{\leq }\circ p_{2}^{0,2}
\right]
$$
lo cual nos dice que $\lambda \alpha \beta \left[ \alpha =\beta \right]$ es $\Sigma$-p.r.