'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return  (
    <section
      id="contact"
      className="text-black min-h-screen bg-white flex flex-col justify-center items-center py-12 px-4"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-600">Contáctanos</h1>
        <p className="mt-2 text-lg text-gray-700">Te responderemos lo más pronto posible</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-gray-700"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            rows={4}
            placeholder="Escribe tu mensaje"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-green-600 py-3 px-8 text-base font-semibold text-white outline-none">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
