---
aliases: 
tags:
  - theorem
references: Pag 15 - Guia 5 - Lenguajes Formales y Computabilidad
---
Created: <% tp.date.now() %>
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
Links: 

---
# Lemma
Sea $\Sigma$ un alfabeto finito. Entonces $C_{k}^{n,m},C_{\alpha }^{n,m}\in \mathrm{PR}^{\Sigma }$, para cada $n,m,k\geq 0$ y $\alpha \in \Sigma ^{\ast}$.

---
## Proof
Note que $C_{k+1}^{0,0}=$ $Suc\circ C_{k}^{0,0}$, lo cual implica $C_{k}^{0,0}\in \mathrm{PR}_{k}^{\Sigma }$, para $k\geq 0$. 
Tambien note que $C_{\alpha a}^{0,0}=d_{a}\circ C_{\alpha }^{0,0}$, lo cual dice que $C_{\alpha }^{0,0}\in \mathrm{PR}^{\Sigma }$, para $\alpha \in \Sigma ^{\ast}$. 
Para ver que $C_{k}^{0,1}\in \mathrm{PR}^{\Sigma }$ notar que
$$
\begin{eqnarray*}
C_{k}^{0,1}(\varepsilon ) &=& 
k = C_{k}^{0,0}(\Diamond ) 
\\
C_{k}^{0,1}(\alpha a) &=& 
C_{k}^{0,1}(\alpha) = p_{1}^{1,1}\left(C_{k}^{0,1}(\alpha ),\alpha \right)
\end{eqnarray*}
$$
lo cual implica que $C_{k}^{0,1}=R\left( C_{k}^{0,0},\mathcal{G}\right)$, con $\mathcal{G}_{a}=p_{1}^{1,1}$, $a\in \Sigma$. 
En forma similar podemos ver que $C_{k}^{1,0},C_{\alpha }^{1,0},C_{\alpha }^{0,1}\in \mathrm{PR}^{\Sigma }$. 
Supongamos ahora que $m>0$. Entonces
$$
\begin{eqnarray*}
C_{k}^{n,m} &=& 
C_{k}^{0,1}\circ p_{n+1}^{n,m} 
\\
C_{\alpha }^{n,m} &=&
C_{\alpha }^{0,1}\circ p_{n+1}^{n,m}
\end{eqnarray*}
$$
de lo cual obtenemos que $C_{k}^{n,m},C_{\alpha }^{n,m}\in \mathrm{PR}^{\Sigma }$. 
El caso $n>0$ es similar.