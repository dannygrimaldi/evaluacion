import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';
import React from "react";
import {User} from "@nextui-org/react";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>
                <main className="flex-grow overflow-auto">
                    <div className="relative max-w-7xl mx-auto z-10">
                        {/* Contenido principal de tu página de inicio ahora en laptop se agrega otra vez en laptop*/}
                      


<div class="flex-container">
  
    <div class="item1">
        <div class="flex-profile">
  
        <div class="box1">aqui va algun texto</div>
        <div class="box2">
        <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
        </div>
        <div class="box3">algo para atras</div>

        </div>
   
   
   
    </div>
    <div class="item2">
        <div class="flex-list">
            <div class="flex-buscar">
            <div class="buscar1">AQUI ESTA LA BARRA DE BUSQUEDA </div>
            <div class="buscar2">BOTON CUALQUIERA</div>



        </div>



            <div class="list2">
                <div>LISTA DE ASESORES</div>
                
                </div>

  </div>

   
   
        </div>

</div>
                    </div>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}

export default Home;