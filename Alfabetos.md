---
aliases: [alfabeto, alfabetos]
tags: 
cssclass: 
publish: 
---

Links: 
Created: 2022-04-24 12:45
Last modification: <%+ tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

---
# <%+ tp.file.title %>
>**Definicion**
>Un alfabeto es un conjunto finito de simbolos.

Notese que $\emptyset$ es un alfabeto.
Si $\Sigma$ es un alfabeto, entonces $\Sigma^*$ denotara el conjunto de todas las palabras formadas con simbolos de $\Sigma$. 
La unica palabra de longitud 0 es denotada con $\varepsilon$.
Ya que en $\varepsilon$ no ocurren simbolos, tenemos que $\varepsilon \in \Sigma ^{*}$, para cualquier alfabeto, mas aun notese que $\emptyset^{\ast}=\{\varepsilon \}$.
Usaremos $\left\vert \alpha \right\vert$ para denotar la longitud de la palabra $\alpha$.
Usaremos $\Sigma ^{+}$ para denotar al conjunto $\Sigma ^{\ast }-\{\varepsilon \}$.
Notese que funciones, $n$-uplas y palabras son objetos de distinto tipo, por lo cual $\emptyset$, $\Diamond$ y $\varepsilon$ son tres objetos matematicos diferentes.

Si $\alpha _{1},...,\alpha _{n}\in \Sigma ^{\ast }$, con $n\geq 0$, usaremos $\alpha _{1}...\alpha _{n}$ para denotar la $\textit{concatenacion}$ de las palabras $\alpha _{1},...,\alpha _{n}$ (notese que cuando $n=0$, resulta que $\alpha _{1}...\alpha _{n}=\varepsilon$). 
Si $\alpha _{1}=...=\alpha_{n}=\alpha$, entonces escribiremos $\alpha ^{n}$ en lugar de $\alpha_{1}...\alpha _{n}$. O sea que $\alpha ^{0}=\varepsilon$.

## Subpalabra
>**Definicion**
>Diremos que $\alpha$ $\textit{es subpalabra (propia) de }$$\beta$ cuando ($\alpha \notin \{\varepsilon ,\beta \}$ y) existan palabras $\delta ,\gamma$ tales que $\beta =\delta \alpha \gamma$. 
>Diremos que $\beta$ es un $\textit{tramo inicial (propio) }$ de $\alpha$ si hay una palabra $\gamma$ tal que $\alpha =\beta \gamma$ (y $\beta \notin \{\varepsilon ,\alpha \}$). En forma similar se define $\textit{tramo final (propio)}$.

## Elemento de una palabra
>**Definicion**
>Dados $i\in \omega$ y $\alpha \in \Sigma ^{\ast }$ definamos
>$$
\left[ \alpha \right] _{i}=\left\{
\begin{array}{lll}
i\text{-esimo elemento de }\alpha && \text{si }1\leq i\leq \left\vert \alpha \right\vert \\
\varepsilon && \text{caso contrario}
\end{array}\right.
$$
## Reciproca de una palabra
>**Definicion**
>Dada $\gamma \in \Sigma ^{\ast }$, definamos
>$$
\gamma ^{R}=\left\{
\begin{array}{lll}
\lbrack \gamma ]_{\left\vert \gamma \right\vert }[\gamma]_{\left\vert 
\gamma \right\vert -1}...[\gamma ]_{1} &  & \text{si}\left\vert \gamma
\right\vert \geq 1 \\
\varepsilon &  & \text{caso contrario}%
\end{array}%
\right.
$$
>La palabra $\gamma ^{R}$ es llamada la $\textit{reciproca}$ de $\gamma$.

## Ocurrencias
>**Definicion**
>Dadas palabras $\alpha ,\beta \in \Sigma ^{\ast }$, con $\left\vert \alpha \right\vert ,\left\vert \beta \right\vert \geq 1$, y un natural $i\in \{1,...,\left\vert \beta \right\vert \}$, se dice que $\alpha \textit{ ocurre a partir de }i \textit{ en } \beta$ cuando se de que existan palabras $\delta, \gamma$ tales que $\beta =\delta \alpha \gamma$ y $\left\vert \delta \right\vert =i-1$.

Notese que una palabra $\alpha$ puede ocurrir en $\beta$, a partir de $i$, y tambien a partir de $j$, con $i\neq j$. En virtud de esto, hablaremos de las distintas ocurrencias de $\alpha$ en $\beta$. 
Por ejemplo hay dos ocurrencias de la palabra $aba$ en la palabra
$$
cccccccabaccccabaccccc
$$
y tambien hay dos ocurrencias de la palabra $aba$ en la palabra
$$
cccccccababacccccccccc
$$
En el primer caso diremos que dichas ocurrencias de $aba$ son $\textit{disjuntas}$, en cambio en el segundo caso puede apreciarse que las dos ocurrencias se superponen en una posicion. No definiremos en forma matematica precisa el concepto de ocurrencia pero el lector no tendra problemas en comprenderlo y manejarlo en forma correcta.
Si $\alpha \in \Sigma ^{\ast }$ y $\sigma \in \Sigma$, usaremos $\left\vert \alpha \right\vert _{\sigma }$ para denotar la cantidad de ocurrencias del simbolo $\sigma$ en $\alpha$.

---
References: 