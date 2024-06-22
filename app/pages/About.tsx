import React from 'react';
import AboutTitle from '../components/AboutTitle';

export default function About() {
  return (
    <section id="about" className='mt-[80px] mb-[60px]'>
      <AboutTitle />
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4 md:mb-0 md:mr-6">
              ¡Dando vida a la esperanza en Cochea! 🌱
            </h3>
            <p className="text-lg text-gray-700">
              'Operación Cochea' es una iniciativa liderada por las fundaciones Wonder Panamá y
              Juventud Agro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center bg-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Desafíos en Cochea</h3>
              <p className="text-lg text-gray-700">
                En Cochea, un pueblo en Chiriquí, los niños enfrentan desafíos alimenticios. Pero
                juntos, estamos cambiando eso. Este proyecto consiste en la creación de un huerto
                multifuncional que no solo proporcionará alimentos nutritivos, sino que también
                impartirá educación sobre nutrición a niños y padres.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                Recursos para la comunidad
              </h3>
              <p className="text-lg text-gray-700">
                En esta página, podrás encontrar información acerca de la irrigación del cultivo y
                datos sobre el clima de la zona. Estos recursos están diseñados para ayudar a la
                comunidad a manejar mejor sus cultivos y a adaptarse a las condiciones climáticas
                locales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
