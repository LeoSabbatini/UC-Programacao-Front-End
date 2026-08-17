/** 
 * 1. Implemente uma função que troque a cor de fundo da página, modificando o background-color do body
 * 2. Implemente uma função que troque a fonte dos títulos da página (se limite à fontes de sistema para simplificação)
 * 3. Implemente uma função que remove a seção de meta informações dos artigos (autor, data de publicação, comentários)
 * 4. Implemente uma função que insira um emoji, passado via parâmetro, antes de todos os primeiros parágrafos dos artigos
 * 5. Implemente uma função que insira um aviso, no topo da listagem de artigos:
 * 
 *		<div class="alert">
 *			<p>⚠️ Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
 * 		</div> 
 */

 function corDeFundo(cor){
    const body = document.querySelector("body")
    body.style.backgroundColor = cor
 }

 function fonteTitulo(fonte){
    const titulos = document.querySelectorAll("h1, h2")

    titulos.forEach(titulo => {
        titulo.style.fontFamily = fonte
    });
 }

 function removerMeta(){
    const metas = document.querySelectorAll(".meta")
    metas.forEach(meta => {
         meta.remove()
    })
}

 function addEmoji(emoji){
    const p = document.querySelectorAll("p")
    p.forEach(p => {
        p.insertBefore(emoji, p)
    })
 }
 
 function aviso(){}
