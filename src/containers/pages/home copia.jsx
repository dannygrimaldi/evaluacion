import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>
                <main className="flex-grow overflow-auto">
                    <div className="relative max-w-7xl mx-auto z-10">
                        {/* Contenido principal de tu página de inicio ahora en laptop se agrega otra vez en laptop*/}
                      


<div className="flex-container">
  
    <div className="item1">
        <div className="flex-profile">
  
        <div className="box1">aqui va algun texto</div>
        <div className="box2">
        <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="src\assets\img\img-profile.jpg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  

        </div>
        <div className="box3">algo para atras</div>

        </div>
   
   
   
    </div>
    <div className="item2">
        <div className="flex-list">
            <div className="flex-buscar">
            <div className="buscar1">
  
  
            <div classname="form-group has-feedback has-search">
        <span classname="glyphicon glyphicon-search form-control-feedback" />
        <input type="text" classname="form-control" placeholder="Search" />
      
  
</div> </div>
            <div className="buscar2">BOTON CUALQUIERA</div>



        </div>



            <div className="list2">
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