
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import TrustZone from './components/TrustZone';
import { PROFESSIONAL } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero / Introduction */}
        <header className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {PROFESSIONAL.name}
                  </h1>
                  <p className="mt-4 text-xl md:text-2xl text-slate-600 font-medium">
                    {PROFESSIONAL.degrees.join(' y ')}
                  </p>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Sólida formación y experiencia en procesos terapéuticos integrativos.
                    Orientado a la práctica profesional en salud mental basada en la ética, la transparencia institucional y el bienestar del paciente.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-bold uppercase rounded-full shadow-sm">
                    Salud Mental
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <TrustZone />
              </div>
            </div>
          </div>
        </header>

        {/* Presentación Profesional */}
        <Section id="presentacion" title="Presentación Profesional">
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              Como profesional de la salud y las ciencias del comportamiento, mi labor se fundamenta en la rigurosidad clínica y el respeto por los marcos institucionales. Entiendo el ejercicio de la Musicoterapia y la Psicología como disciplinas en constante diálogo con las necesidades de las personas en el ámbito de la salud mental.
            </p>
            <p>
              Mi enfoque es institucional, claro y humano, priorizando la seguridad y el respaldo legal en cada intervención. La práctica profesional se desarrolla bajo un compromiso ético ineludible, buscando siempre la excelencia en la atención sanitaria.
            </p>
            <p className="font-medium text-blue-900 italic">
              Propietario de {PROFESSIONAL.brand}
            </p>
          </div>
        </Section>

        {/* Enfoque Terapéutico */}
        <Section id="enfoque" title="Enfoque en Salud Mental" dark>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Integración Clínica</h3>
              <p className="text-slate-300 leading-relaxed">
                Abordaje interdisciplinar que combina la Musicoterapia y la Psicología clínica. Buscamos promover procesos de salud integrales, respetando la singularidad de cada persona y fomentando su desarrollo emocional.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Modelo Benenzon</h3>
              <p className="text-slate-300 leading-relaxed">
                Utilización de técnicas especializadas en comunicación no verbal y dinámicas sonoro-musicales para el abordaje de diversas problemáticas de salud mental, basándose en la formación de Magíster en este modelo.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              * El ejercicio profesional se ajusta estrictamente a las competencias otorgadas por las incumbencias de grado y posgrado en salud.
            </p>
          </div>
        </Section>

        {/* Marco Ético y Legal */}
        <Section id="etica" title="Marco Ético y Legal" subtitle="Compromiso con la excelencia y la normativa vigente">
          <div className="space-y-6 text-slate-700">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 font-bold">01</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Normativa Sanitaria</h4>
                <p>Cumplimiento estricto de las leyes de ejercicio profesional y los códigos de ética de los colegios profesionales correspondientes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 font-bold">02</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Confidencialidad</h4>
                <p>Resguardo absoluto de la información clínica bajo los estándares de la Ley de Protección de Datos Personales y Secreto Profesional.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 font-bold">03</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Práctica Profesional</h4>
                <p>Este espacio tiene carácter informativo e institucional, orientado a la transparencia y la confianza en la atención de salud mental.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Perfil Académico */}
        <Section id="academico" title="Perfil Académico y Formación" className="bg-slate-50">
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Grado y Posgrado</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROFESSIONAL.postgraduate.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Registro Académico</h4>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="font-semibold text-slate-800">ORCID: <span className="text-blue-600 font-mono tracking-tighter">{PROFESSIONAL.orcid}</span></p>
                  <p className="text-slate-500 text-sm mt-1">Identificador único para la producción científica y académica.</p>
                </div>
                <a 
                  href={`https://orcid.org/${PROFESSIONAL.orcid}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm font-bold uppercase"
                >
                  Ver Perfil ORCID
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Información de Contacto */}
        <Section id="contacto" title="Canales de Comunicación">
          <div className="max-w-2xl">
            <p className="text-lg text-slate-700 mb-8">
              Para consultas institucionales o solicitud de información sobre la práctica clínica en {PROFESSIONAL.brand}, utilice los canales oficiales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-slate-100 text-center">
                <p className="text-sm text-slate-500 font-bold uppercase mb-2">Consultas Institucionales</p>
                <p className="text-slate-800 font-medium">info@lapiazzaterapias.com</p>
              </div>
              <div className="p-6 rounded-lg bg-slate-100 text-center">
                <p className="text-sm text-slate-500 font-bold uppercase mb-2">Canal Profesional</p>
                <p className="text-slate-800 font-medium underline cursor-pointer">Consulta Directa</p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="p-4 border-2 border-slate-200 rounded-2xl flex items-center gap-4 bg-white shadow-sm">
                <div className="w-24 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-400">
                  <span className="text-xs font-bold text-center">CÓDIGO QR<br/>DE CONTACTO</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Lectura Rápida</p>
                  <p className="text-sm text-slate-800">Escanear para guardar contacto profesional</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer / Marco Ético-Legal */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Disclaimer Sanitario</h4>
              <p className="text-sm leading-relaxed">
                Este sitio web tiene fines estrictamente informativos y educativos en salud mental. No constituye diagnóstico ni tratamiento, ni reemplaza la consulta profesional presencial. El uso de este sitio no establece una relación paciente-profesional hasta que se concrete una evaluación formal. No se realizan promesas de cura ni resultados garantizados.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Marco Legal Institucional</h4>
              <p className="text-sm leading-relaxed">
                La práctica profesional se rige por las normativas de la República Argentina. Los datos proporcionados en este sitio cumplen con los requisitos de transparencia para profesionales de la salud. Matrículas y seguro de mala praxis verificables ante los organismos competentes.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center space-y-4">
            <p className="text-xs">
              © {new Date().getFullYear()} Álvaro Altieri Aufranc - Lic. en Musicoterapia y Psicología. Especializado en Salud Mental.
            </p>
            <div className="flex justify-center gap-6 text-xs uppercase font-bold tracking-widest">
              <span>Ética</span>
              <span>•</span>
              <span>Responsabilidad</span>
              <span>•</span>
              <span>Ciencia</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
