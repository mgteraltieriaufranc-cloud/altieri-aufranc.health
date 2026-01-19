
import React from 'react';
import { LEGAL } from '../constants';

const TrustZone: React.FC = () => {
  return (
    <div className="bg-slate-100 border-l-4 border-blue-600 p-4 md:p-6 rounded-r-lg shadow-sm">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Información Legal y Regulatoria</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="space-y-1">
          <p className="font-semibold text-slate-700">Matrícula Nacional: <span className="text-blue-700 font-mono">N.º {LEGAL.mn}</span></p>
          <p className="font-semibold text-slate-700">Matrículas Privadas: <span className="text-blue-700 font-mono">N.º {LEGAL.mp.join(' y ')}</span></p>
        </div>
        <div className="space-y-1">
          <p className="flex items-center gap-2 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Seguro de mala praxis profesional vigente
          </p>
          <p className="text-slate-600">Compañía: {LEGAL.insuranceCompany}</p>
          <p className="text-slate-600">Póliza: <span className="font-mono">N.º {LEGAL.insurancePolicy}</span></p>
        </div>
      </div>
    </div>
  );
};

export default TrustZone;
