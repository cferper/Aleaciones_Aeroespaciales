/* Filtros de contenido; no escriben progreso ni alteran la agenda. */
((root) => {
  "use strict";
  const labels = {1:"Fundamentos",2:"Comprensión",3:"Avanzado"};
  function filterCards(cards,{concept=null,level=0,includeArchived=false}={}) {
    return cards.filter(c => (includeArchived || !c.archived) && (!concept || c.concepts.includes(concept)) && (!level || c.learningLevel===Number(level)));
  }
  function isDue(card,records,now=Date.now()) { return !records[card.id] || Date.parse(records[card.id].dueAt)<=now; }
  function pending(cards,records,now=Date.now()) { return cards.filter(c=>isDue(c,records,now)); }
  const api = Object.freeze({labels,filterCards,isDue,pending});
  if(typeof module!=="undefined" && module.exports) module.exports=api;
  root.StudyFilters=api;
})(globalThis);
