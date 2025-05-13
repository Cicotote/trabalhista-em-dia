
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen bg-white text-black px-6 py-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Trabalhista em Dia</h1>
        <span className="text-sm text-gray-600">
          Guia prático para empresários, RH e trabalhadores CLT ou PJ
        </span>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Baixe o Guia em PDF</h2>
            <p className="text-sm text-gray-600 mb-4">
              Conteúdo completo com simulações, perguntas e modelos.
            </p>
            <Button variant="default">Download</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Acesse o Chat Interativo</h2>
            <p className="text-sm text-gray-600 mb-4">
              Tire dúvidas em tempo real, escolha seu perfil e interaja.
            </p>
            <div className="space-x-2">
              <Button onClick={() => setRole("empresario")}>Sou Empresário</Button>
              <Button onClick={() => setRole("rh")}>Sou RH</Button>
              <Button onClick={() => setRole("clt")}>Sou CLT</Button>
              <Button onClick={() => setRole("pj")}>Sou PJ</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {role && (
        <section className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">
            Dúvidas frequentes - Perfil: {role.toUpperCase()}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {role === "empresario" && (
              <>
                <li>Posso contratar MEI como funcionário fixo?</li>
                <li>Como funciona o banco de horas?</li>
              </>
            )}
            {role === "rh" && (
              <>
                <li>Qual o procedimento para advertência formal?</li>
                <li>Como calcular a rescisão corretamente?</li>
              </>
            )}
            {role === "clt" && (
              <>
                <li>Tenho direito a hora extra mesmo com banco de horas?</li>
                <li>O que fazer em caso de assédio no trabalho?</li>
              </>
            )}
            {role === "pj" && (
              <>
                <li>Como saber se tenho vínculo empregatício disfarçado?</li>
                <li>Quais direitos posso exigir como prestador?</li>
              </>
            )}
          </ul>
        </section>
      )}
    </div>
  );
}
