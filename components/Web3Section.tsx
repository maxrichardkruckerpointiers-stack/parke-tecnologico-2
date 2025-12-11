import React from 'react';
import { WEB3_FEATURES } from '../constants';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

const icons = [Cpu, Zap, ShieldCheck];

const Web3Section: React.FC = () => {
  return (
    <section id="web3" className="py-24 relative overflow-hidden bg-black">
        {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#112240 1px, transparent 1px), linear-gradient(to right, #112240 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cartagena-teal text-4xl md:text-6xl font-display font-bold mb-6">
              Ecosistema Web3
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Construye sobre una base sólida. Ofrecemos la infraestructura física y digital necesaria para protocolos descentralizados.
            </p>
            
            <div className="space-y-8">
              {WEB3_FEATURES.map((feature, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={feature.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-cartagena-slate to-black border border-gray-700 text-white">
                        <Icon size={24} className="text-cartagena-teal" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                      <p className="mt-1 text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-500 font-mono">block_explorer.exe</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-green-400 space-y-2">
                <p>Status: <span className="text-white">Connected to Mainnet</span></p>
                <p>Block Height: <span className="text-purple-400">18,293,401</span></p>
                <p>Gas Price: <span className="text-blue-400">12 gwei</span></p>
                <br/>
                <p className="text-gray-500">// Latest Transactions</p>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between border-b border-gray-800 py-1">
                    <span className="text-cartagena-teal">0x7a...9f2{i}</span>
                    <span className="text-white">Mint NFT</span>
                    <span className="text-gray-400">2 mins ago</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-cartagena-teal/10 border border-cartagena-teal/30 rounded text-center text-white font-sans font-bold">
                  Únete al nodo Cartagena
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;