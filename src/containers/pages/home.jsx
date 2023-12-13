import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>
                <main className="flex-grow overflow-auto">
                    <div className="relative max-w-7xl mx-auto z-10">
                        {/* Contenido principal de tu página de inicio ahora en laptop*/}
                      
                    </div>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}

export default Home;