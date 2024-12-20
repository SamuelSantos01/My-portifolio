import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Usando o EmailJS para enviar o e-mail
    try {
      const response = await emailjs.sendForm(
        'service_5oic3m9',   // Substitua pelo seu service_id
        'template_0komcmn',  // Substitua pelo seu template_id
        e.target,       // Envia o formulário
        'nv-RfbgvG-Ldpjmcm'       // Substitua pelo seu user_id
      );
      
      console.log('Mensagem enviada com sucesso:', response);
      setStatus('Mensagem enviada com sucesso!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      setStatus('Erro ao enviar a mensagem. Tente novamente!');
    }
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contato</h1>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensagem"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Enviar
            </button>
            {status && <p className="mt-4 text-center text-gray-500">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
