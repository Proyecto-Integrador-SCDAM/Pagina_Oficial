
       //MENSAJE
       var vm = new Vue ({
           el: "#app", //Elemento
           data: { 
               corr_rec: "recuperarcontra@uttcampues.edu.mx",
               NFCcode: "123",
               correocon: "",
               contracon: "",
               Respuesta: "",
               ResultadoConsulta:[
                   {Con_usuario:""}
               ],
               //URLpost:"https://localhost/Pagina_Equipo/PaginaWeb/src/accountlogin.php" //Jared
               URLpost:"http://scdam.web/src/accountlogin.php" //Carlos
               
           },
           methods:{        
               LoginTry: function (event) {
                   axios({
                       method: 'POST',
                       url: this.URLpost,
                       data: {
                           correocon: this.correocon,
                           contracon: this.contracon
                       }
                   }) .then((response) => {
                       this.ResultadoConsulta=response.data;
                       this.Respuesta = this.ResultadoConsulta["Con_usuario"];
                       this.Redireccion();
                   })
               },
               Redireccion: function (event) {
                   switch (this.Respuesta) {
                       case 'Admin':
                       window.location.href = 'http://scdam.web/admins/ad_avisos.html'
                           break;
                       case 'Maestro':
                       window.location.href = 'http://scdam.web/profe/ma_avisos.html'
                           break;
                       case 'Alumno':
                       window.location.href = 'http://scdam.web/alumno/al_avisos.html'
                           break;
                       case 'No registrado':
                           //alert("Correo o contraseña incorrecto");
                           this.globalvue = globalvue;
                           alert(globalvue.globalVariable.G_Nombre);
                           break;
                       default:
                           alert("Error al enviar información");
                       break;
                   }
               }
           },
           computed: {
              
           }
       });
