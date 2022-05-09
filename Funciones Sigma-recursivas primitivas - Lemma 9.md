---
aliases: 
tags: 
  - theorem
references: Pag 14-15 - Guia 5 - Lenguajes Formales y Computabilidad
---
Created: <% tp.date.now() %>
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Sea $\Sigma$ un alfabeto finito.
(1) $\emptyset \in \mathrm{PR}^{\Sigma }$.
(2) $\lambda xy\left[ x+y\right] \in \mathrm{PR}^{\Sigma }$.
(3) $\lambda xy\left[ x.y\right] \in \mathrm{PR}^{\Sigma }$.
(4) $\lambda x\left[ x!\right] \in \mathrm{PR}^{\Sigma }$.

---
## Proof
(1) Notese que $\emptyset =Pred\circ C_{0}^{0,0}\in \mathrm{PR}_{1}^{\Sigma}$

(2) Notar que
$$
\begin{eqnarray*}
\lambda xy\left[ x+y\right] (0,x_{1}) &=& 
x_{1} = p_{1}^{1,0}(x_{1}) 
\\
\lambda xy\left[ x+y\right] (t+1,x_{1}) &=& 
\lambda xy\left[ x+y\right]
(t,x_{1})+1 
\\
&=& \left( Suc\circ p_{1}^{3,0}\right) \left( \lambda xy\left[ x+y\right] (t,x_{1}),t,x_{1}\right)
\end{eqnarray*}
$$
lo cual implica que $\lambda xy\left[ x+y\right] =R\left(p_{1}^{1,0},Suc\circ p_{1}^{3,0}\right) \in \mathrm{PR}_{2}^{\Sigma}$

(3) Primero note que
$$
\begin{eqnarray*}
C_{0}^{1,0}(0) &=& 
C_{0}^{0,0}(\Diamond) 
\\
C_{0}^{1,0}(t+1) &=& 
C_{0}^{1,0}(t)
\end{eqnarray*}
$$
lo cual implica que $C_{0}^{1,0}=R\left( C_{0}^{0,0},p_{1}^{2,0}\right) \in \mathrm{PR}_{1}^{\Sigma }$ 
Tambien note que
$$
\lambda tx\left[ t.x\right] =R\left( C_{0}^{1,0},\lambda xy\left[ x+y\right]
\circ \left[ p_{1}^{3,0},p_{3}^{3,0}\right] \right) ,
$$
lo cual por (2) implica que $\lambda tx\left[ t.x\right] \in \mathrm{PR}_{4}^{\Sigma }$

(4) Note que
$$
\begin{eqnarray*}
\lambda x\left[ x!\right] (0) &=&1=C_{1}^{0,0}(\Diamond ) \\
\lambda x\left[ x!\right] (t+1) &=&\lambda x\left[ x!\right] (t).(t+1),
\end{eqnarray*}
$$
lo cual implica que
$$
\lambda x\left[ x!\right] =R\left( C_{1}^{0,0},\lambda xy\left[ x.y\right]
\circ \left[ p_{1}^{2,0},Suc\circ p_{2}^{2,0}\right] \right)
$$
Ya que $C_{1}^{0,0}=$ $Suc\circ C_{0}^{0,0}$, tenemos que $C_{1}^{0,0}\in \mathrm{PR}_{1}^{\Sigma }$. 
Por (3), tenemos que
$$
\lambda xy\left[ x.y\right] \circ \left[ p_{1}^{2,0},Suc\circ p_{2}^{2,0}
\right] \in \mathrm{PR}_{5}^{\Sigma },
$$
obteniendo que $\lambda x\left[ x!\right] \in \mathrm{PR}_{6}^{\Sigma }$.
