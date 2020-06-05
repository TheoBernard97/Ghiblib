(this.webpackJsonpghiblib=this.webpackJsonpghiblib||[]).push([[0],{31:function(e,n,a){e.exports=a(45)},45:function(e,n,a){"use strict";a.r(n);var t=a(4),i=a(0),r=a.n(i),o=a(15),l=a.n(o),d=a(17),c=a(2),s=a(5);function m(){var e=Object(t.a)(["\n  font-size: 1.5rem;\n  color: black;\n  text-decoration: none;\n  margin: 10%;\n\n  @media all and (max-width: 944px) {\n    font-size: 1.2rem;\n    margin: 3%;\n  }\n"]);return m=function(){return e},e}function u(){var e=Object(t.a)(["\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr 1fr;\n\n  img {\n    width: 50%;\n    margin: auto;\n  }\n\n  nav {\n    margin: auto;\n  }\n\n  @media all and (max-width: 944px) {\n    display: block;\n    nav {\n      margin: 3% auto auto;\n    }\n  }\n"]);return u=function(){return e},e}var p=s.b.div(u()),f=Object(s.b)(d.b)(m());var h=function(){return r.a.createElement(p,null,r.a.createElement("img",{src:"./assets/Logo_Ghibli.png",alt:"Studio Ghibli logo"}),r.a.createElement("nav",null,r.a.createElement(f,{to:"/"},"Home"),r.a.createElement(f,{to:"/movies"},"Movies"),r.a.createElement(f,{to:"/museum"},"Museum")))};function g(){var e=Object(t.a)(["\n  margin: 3%;\n"]);return g=function(){return e},e}var b=s.b.footer(g());var v=function(){return r.a.createElement(b,null,r.a.createElement("p",null,"\xa9 ",r.a.createElement("a",{href:"https://theobernard97.github.io/"},"Th\xe9o Bernard")," 2020"))};function E(){var e=Object(t.a)(["\n  display: flex;\n  flex-direction: column;\n\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  img {\n    max-width: 250px;\n    width: 25%;\n    margin-right: 2.5%;\n  }\n\n  p {\n    width: 67.5%;\n    margin-left: 2.5%;\n    font-size: 1.2rem;\n    text-align: left;\n  }\n\n  @media all and (max-width: 944px) {\n    img {\n      display: none;\n    }\n\n    p {\n      width: auto;\n      margin: 0 0 7.5%;\n    }\n  }\n"]);return E=function(){return e},e}var w=s.b.div(E());var x=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("h1",null,"Home"),r.a.createElement(w,null,r.a.createElement("div",null,r.a.createElement("p",null,"Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its animated feature films, and has also produced several short films, television commercials, and one television film. It was founded on 15 June 1985, after the success of Nausica\xe4 of the Valley of the Wind (1984), with funding by Tokuma Shoten. Studio Ghibli has also collaborated with video game studios on the visual development of several video games."),r.a.createElement("img",{src:"./assets/Chihiro_home.png",alt:"Chihiro"})),r.a.createElement("div",null,r.a.createElement("img",{src:"./assets/Totoro_home.png",alt:"Totoro"}),r.a.createElement("p",null,"Six of Studio Ghibli's films are among the 10 highest-grossing anime films made in Japan, with Spirited Away (2001) being the highest, grossing over US$360 million worldwide. Many of their works have won the Animage Anime Grand Prix award, and four have won the Japan Academy Prize for Animation of the Year. Five of Studio Ghibli's films have received Academy Award nominations. Spirited Away won the Golden Bear in 2002 and the Academy Award for Best Animated Feature Film in 2003. Totoro, a character from My Neighbor Totoro, is the studio's mascot.")),r.a.createElement("div",null,r.a.createElement("p",null,"On 3 August 2014, Studio Ghibli temporarily halted production following the retirement of director Hayao Miyazaki, who co-founded the studio with the late Isao Takahata. In February 2017, Toshio Suzuki announced that Miyazaki had come out of retirement again to direct a new feature film, How Do You Live?, with Studio Ghibli."),r.a.createElement("img",{src:"./assets/Momonoke_home.png",alt:"Momonoke"}))),r.a.createElement(v,null))},y=a(7);function k(){var e=Object(t.a)(["\n  display: grid;\n  grid-template-columns: 30% 66%;\n  grid-gap: 4%;\n\n  width: 80%;\n  margin: 3% auto;\n  padding: 2%;\n  border: solid black 1px;\n  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.3);\n  text-align: left;\n\n  &:hover {\n    transform: scale(1.03);\n    background-color: #e5e5e5;\n    cursor: pointer;\n  }\n\n  img {\n    margin: auto;\n    width: 100%;\n    border: solid black 1px;\n  }\n\n  h2 {\n    margin-top: 5px;\n  }\n\n  p {\n    margin-bottom: unset;\n  }\n\n  @media all and (max-width: 1489px) {\n    width: 85%;\n  }\n\n  @media all and (max-width: 944px) {\n    width: 95%;\n    margin: 5% auto;\n\n    h2 {\n      font-size: 1.3rem;\n    }\n  }\n"]);return k=function(){return e},e}var j=s.b.div(k());var O=function(e){var n=Object(y.b)();return r.a.createElement(j,{onClick:function(){return n({type:"OPEN_MODAL",payload:e.index})}},r.a.createElement("img",{src:e.imgUrl,alt:"Movie poster"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.director),r.a.createElement("p",null,e.release_date)))},M=a(57),S=a(29),_=a.n(S);function T(){var e=Object(t.a)(['\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  .modal {\n    display: grid;\n    grid-template-columns: 40% 60%;\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n      "poster info"\n      "poster description";\n    position: relative;\n    margin: auto;\n    padding: 1%;\n    width: 790px;\n    max-height: 475px;\n    background-color: white;\n    border: solid black 1px;\n  }\n\n  .modal-close-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    width: 20px;\n    height: 20px;\n    border: black solid 1px;\n    border-radius: 50%;\n    background-color: white;\n    text-align: center;\n    * {\n      width: 18px;\n      height: 18px;\n    }\n    &:hover {\n      background-color: #e5e5e5;\n      cursor: pointer;\n    }\n  }\n\n  .modal-poster {\n    grid-area: poster;\n    border: solid black 1px;\n    width: 100%;\n    min-height: 475px;\n    max-height: 475px;\n  }\n\n  .modal-info {\n    grid-area: info;\n    text-align: left;\n    margin-left: 15px;\n\n    h1 {\n      margin-top: 0;\n    }\n  }\n\n  .modal-description {\n    grid-area: description;\n    text-align: left;\n    margin: 0 0 0 15px;\n    font-size: 1.1rem;\n    overflow-y: scroll;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  @media all and (max-width: 944px) {\n    .modal {\n      grid-template-columns: 125px 1fr;\n      grid-template-rows: auto 1fr;\n      grid-template-areas:\n        "poster info"\n        "description description";\n      margin: auto;\n      width: 75%;\n      height: 45%;\n    }\n\n    .modal-poster {\n      min-height: 175px;\n      max-height: 175px;\n    }\n\n    .modal-description {\n      margin: 2% 0 0;\n    }\n  }\n\n  @media all and (max-width: 765px) {\n    .modal {\n      grid-template-columns: 100px 1fr;\n      width: 90%;\n      height: 70%;\n    }\n\n    .modal-poster {\n      min-height: 140px;\n      max-height: 140px;\n    }\n\n    .modal-info {\n      margin-left: 10px;\n\n      h1 {\n        font-size: 1.5rem;\n      }\n      h2 {\n        font-size: 1.3rem;\n      }\n      h3 {\n        font-size: 1.1rem;\n        margin-bottom: 0;\n      }\n    }\n\n    .modal-description {\n      font-size: 0.9rem;\n    }\n  }\n']);return T=function(){return e},e}var A=s.b.div(T());var N=function(){var e=Object(y.c)((function(e){return e.moviesReducer})),n=Object(y.c)((function(e){return e.modalReducer})),a=Object(y.b)();return r.a.createElement(A,null,r.a.createElement(M.a,{onClickAway:function(){return a({type:"CLOSE_MODAL"})}},r.a.createElement("div",{className:"modal"},r.a.createElement("img",{src:e[n.renderMovie].imgUrl,alt:"Movie poster",className:"modal-poster"}),r.a.createElement("div",{className:"modal-info"},r.a.createElement("h1",null,e[n.renderMovie].title),r.a.createElement("h2",null,e[n.renderMovie].director),r.a.createElement("h3",null,e[n.renderMovie].release_date)),r.a.createElement("p",{className:"modal-description"},e[n.renderMovie].description),r.a.createElement("div",{className:"modal-close-btn",onClick:function(){return a({type:"CLOSE_MODAL"})}},r.a.createElement(_.a,null)))))};function G(){var e=Object(t.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  @media all and (max-width: 1489px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media all and (max-width: 944px) {\n    display: unset;\n  }\n"]);return G=function(){return e},e}var z=s.b.div(G());var L=function(){var e=Object(y.c)((function(e){return e.moviesReducer})),n=Object(y.c)((function(e){return e.modalReducer.visible}));return r.a.createElement("div",null,n&&r.a.createElement(N,null),r.a.createElement(h,null),r.a.createElement("h1",null,"Movies"),r.a.createElement(z,null,e.map((function(e,n){return r.a.createElement(O,{key:e.id,index:n,imgUrl:e.imgUrl,title:e.title,director:e.director,release_date:e.release_date})}))),r.a.createElement(v,null))};function C(){var e=Object(t.a)(["\n  p {\n    font-size: 1.2rem;\n    margin: 2% 9%;\n  }\n\n  .video-div-wrapper{\n    margin: auto;\n    width: 70%;\n    \n    .video-div {\n    padding-top: 56.25%;\n    position: relative;\n\n      iframe {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n      }\n    }\n  }\n  \n\n  .btn-div {\n    margin: 2.5%;\n\n    .btn {\n      color: unset;\n      text-decoration: none;\n      background-color: #5fb4c9;\n      padding 10px;\n      border: solid black 1px;\n      border-radius: 4px;\n      &:hover {\n        background-color: #6ec9dd;\n      }\n    }\n  }\n\n  @media all and (max-width: 944px) { \n    \n    p {\n      margin: 2% auto;\n      width: 100%;\n    }\n\n    .video-div-wrapper{\n      margin-top: 5%;\n      width: 100%;\n    }\n\n    .btn-div {\n      margin: 10%;\n  }\n"]);return C=function(){return e},e}var I=s.b.div(C());var D=function(){return r.a.createElement(I,null,r.a.createElement(h,null),r.a.createElement("h1",null,"Ghibli Museum, Mikata"),r.a.createElement("p",null,"The Ghibli Museum is a museum showcasing the work of the Japanese animation studio Studio Ghibli. It is located in Inokashira Park in Mitaka, a western city of Tokyo, Japan. The museum combines features of a children's museum, technology museum, and a fine arts museum, and is dedicated to the art and technique of animation. Some features include a replica of the Catbus from My Neighbor Totoro (1988), a caf\xe9, bookstore, rooftop garden, and a theater for exclusive short films by Studio Ghibli."),r.a.createElement("div",{className:"video-div-wrapper"},r.a.createElement("div",{className:"video-div"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/KE6bUMwpsyQ",title:"Studio Ghibli",frameBorder:"0",allowFullScreen:!0}))),r.a.createElement("div",{className:"btn-div"},r.a.createElement("a",{className:"btn",href:"http://www.ghibli-museum.jp/en/"},"Ghibli Museum")),r.a.createElement(v,null))};var F=function(){return Object(y.b)()({type:"FETCH_MOVIES"}),r.a.createElement(d.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(x,null)),r.a.createElement(c.a,{path:"/movies"},r.a.createElement(L,null)),r.a.createElement(c.a,{path:"/museum"},r.a.createElement(D,null))))},J=a(16),U={visible:!1,renderMovie:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"OPEN_MODAL":return e.visible=!0,e.renderMovie=n.payload,e;case"CLOSE_MODAL":return e.visible=!1,e;default:return e}},H=[{id:"2de9426b-914a-4a06-a3a0-5e6d9d3886f6",url:"./assets/arrietty.jpg"},{id:"2baf70d1-42bb-4437-b551-e5fed5a87abe",url:"./assets/castle.jpg"},{id:"90b72513-afd4-4570-84de-a56c312fdf81",url:"./assets/cat.jpg"},{id:"112c1e67-726f-40b1-ac17-6974127bb9b9",url:"./assets/earthsea.jpg"},{id:"12cfb892-aac0-4c5b-94af-521852e46d6a",url:"./assets/grave.jpg"},{id:"cd3d059c-09f4-4ff3-8d63-bc765a5184fa",url:"./assets/howl.jpg"},{id:"578ae244-7750-4d9f-867b-f3cd3d6fecf4",url:"./assets/kaguya.jpg"},{id:"ea660b10-85c4-4ae3-8a5f-41cea3648e3e",url:"./assets/kiki.jpg"},{id:"5fdfb320-2a02-49a7-94ff-5ca418cae602",url:"./assets/marnie.jpg"},{id:"0440483e-ca0e-4120-8c50-4c8cd9b965d6",url:"./assets/mononoke.jpg"},{id:"1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",url:"./assets/poko.jpg"},{id:"758bf02e-3122-46e0-884e-67cf83df1786",url:"./assets/ponyo.jpg"},{id:"45db04e4-304a-4933-9823-33f389e8d74d",url:"./assets/poppy.jpg"},{id:"ebbb6b7c-945c-41ee-a792-de0e43191bd8",url:"./assets/porco.jpg"},{id:"dc2e6bd1-8156-4886-adff-b39e6043af0c",url:"./assets/spirited.jpg"},{id:"58611129-2dbc-4a81-a72f-77ddfc1b1b49",url:"./assets/totoro.jpg"},{id:"ff24da26-a969-4f0e-ba1e-a122ead6c6e3",url:"./assets/whisper.jpg"},{id:"67405111-37a5-438f-81cc-4666af60c800",url:"./assets/wind.jpg"},{id:"45204234-adfd-45cb-a505-a8e7a676b114",url:"./assets/yamada.jpg"},{id:"4e236f34-b981-41c3-8c65-f8c9000b94e7",url:"./assets/yesterday.jpg"}],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_MOVIES":return fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(n){n.forEach((function(n){H.forEach((function(e){e.id===n.id&&(n.imgUrl=e.url)})),e.push(n)}))})),e;default:return e}},P=Object(J.b)({modalReducer:R,moviesReducer:B});function V(){var e=Object(t.a)(["\n  body {\n    margin: 0;\n    text-align: center;\n    padding : 0 10%;\n    font-family: 'Montserrat', sans-serif;\n    background-color : #F6F6F6;\n  }\n\n  code {\n    font-family: 'Montserrat', sans-serif;\n  }\n\n"]);return V=function(){return e},e}var X=Object(s.a)(V()),K=Object(J.c)(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(y.a,{store:K},r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null),r.a.createElement(F,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a12dd1ee.chunk.js.map