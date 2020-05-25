Vue.component('linguaggi',{
  
    props: ['immagine', 'titolo', 'descrizione'],
    template: `
    <figure class="linguaggi" style="cursor: pointer;" v-on:click="carica">
      <img :src="immagine" :alt="titolo" width="380" height="180"/>
      <figcaption>
        <h2 v-if="titolo=='Java'||titolo=='Ruby'||titolo=='Bash'" style="color:black; font-size: 18px;">{{titolo}}</h2>
        <h2 v-if="titolo=='Python'||titolo=='Scala'||titolo=='Javascript'" style="color:black; font-size: 18px; float:right;">{{titolo}}</h2>
      </figcaption>
    </figure>
    `,
  methods:{               //    Metodo definito per ogni immagine
    carica: function(){
      scorciatoia(this.titolo);
    },
  },
});



function dashboard(){
  document.getElementById("dynam").innerHTML="<div id='app'> </div>";
  new Vue({
    el: '#app',
    template: `
  <div class="linguaggi-img">
    <linguaggi v-for="post in posts" :immagine="post.immagine" :titolo="post.titolo"/>
  </div>
  `,
    data() {
      return {
        posts: [
          {
            immagine: '../img/java.jpg',
            titolo: "Java",
            descrizione: "descrizione",
     
          },
          {
            immagine: '../img/python.jpg',
            titolo: "Python",
            descrizione: "",       
          },
          {
            immagine: '../img/ruby.jpg',
            titolo: "Ruby",
            descrizione: "",
          },
          {
            immagine: '../img/scala.jpg',
            titolo: "Scala",
            descrizione: "",
          },
          {
            immagine: '../img/bash.jpg',
            titolo: "Bash",
            descrizione: "",
          },
          {
            immagine: '../img/javascript.jpg',
            titolo: "Javascript",
            descrizione: "",
          }
        ]
      }
    },
});
}

dashboard();