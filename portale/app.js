Vue.component('linguaggi',{
  
    props: ['immagine', 'titolo'],
    
    template: `
    
  <figure class="linguaggi">
    <img :src="immagine" :alt="titolo" width="380" height="180"/>
    <figcaption>
      <h2 v-if="titolo=='Java'||titolo=='Ruby'" style="color:black; font-size: 18px;">{{titolo}}</h2>
      <h2 v-if="titolo=='Python'||titolo=='Scala'" style="color:black; font-size: 18px; float:right;">{{titolo}}</h2>
    </figcaption>
  </figure>
  `
  });


  
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
            descrizione: "",
     
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
          }
        ]
      }
    },
});