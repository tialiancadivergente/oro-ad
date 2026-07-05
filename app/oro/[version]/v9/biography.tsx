"use client";

import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Biography() {

	const ButtonParticipate = () => {
		return (
			<button
				onClick={handleScroll}
				className="w-full h-14 font-raleway font-extrabold text-[#000000] rounded-[50px] px-6 text-base uppercase tracking-wide transition-all hover:brightness-105 border-2 border-transparent [background:linear-gradient(90deg,_#90FF9F_0%,_#008A13_100%)_padding-box,_linear-gradient(180deg,_#90FF9F_0%,_#008A13_100%)_border-box] flex items-center justify-center gap-2"
			>
				<span>Participar gratuitamente</span>
				<ArrowUpRight size={18} strokeWidth={2.5} />
			</button>
		)
	}

	return (
		<section
			className={`md:min-h-[1606px] md:h-[1606px] flex flex-col items-center pb-14 p-4 md:p-0 justify-start overflow-hidden bg-[#031B22] bg-[url('/images/oro/v9/biografia_ramon_mobile.webp')] md:bg-[url('/images/oro/v9/biografia_ramon_desktop.webp')] bg-cover bg-top md:bg-center z-0`}
		>
			<div className="mx-auto sm:px-4 lg:w-[1080px] w-full">
				<div className="mt-7 md:mt-24 text-center md:text-left">

					<div className="text-2xl md:text-3xl font-bold uppercase text-[#C0964B] md:text-center">
						Que bom que você não desistiu.
					</div>

					<div className="font-raleway text-[#F4F0E1] text-base my-8 max-w-[688px] mx-auto font-extralight md:text-center">
						<span className="font-bold">
							Chega de dar o seu máximo e no fim ficar se questionando o que faltou.
						</span>{' '}
						Depois desse evento você nunca mais vai se perguntar o que falta para você ter o resultado merecido pelo seu esforço.{' '}
						<span className="font-bold">
							Faça parte do Resgate dos Otimistas
						</span> ou continue se questionando e justificando o seu "quase sucesso".
					</div>

					<div className="max-w-[347px] mx-auto">
						<ButtonParticipate />
					</div>

				</div>

				<div className="flex justify-center md:justify-end mt-[800px] xs:mt-[850px] 2xs:mt-[900px] sm:mt-[1150px] md:mt-[300px] w-full">
					<div className="w-full max-w-[512px] text-[#F4F0E1]">
						<div className="font-spectral text-2xl md:text-[32px] font-bold">
							QUEM VAI SER O SEU MENTOR NESSA JORNADA?
						</div>
						<div className="flex flex-col mt-4 mb-6 text-xl md:text-2xl font-bold">
							<p className="text-[#C0964B]">
								Ramon Galimberti
							</p>
						</div>
						<div className="flex flex-col gap-4 font-regular font-raleway">
							<p>Ramon fez tudo o que disseram que daria certo. Estudou, se formou, foi até o mestrado. Tinha tudo o que deveria pra dar certo. E mesmo assim, não dava.</p>

							<p>Perto dos 30, se viu morando em cima da casa pais. Desempregado. Saindo de um relacionamento que tinha desabado. Usando o ticket do pai pra fazer compra no mercado e virar o mês. Diploma bonito na parede, mas o bolso vazio. E foi nesse momento que ele pensou: "o sucesso não é pra mim."</p>

							<p>Até descobrir o que realmente travava tudo, e não tinha nada a ver com competência. Era Permissão. Existia um padrão invisível que decidia o resultado por ele, antes que ele tivesse qualquer chance. Quando ele quebrou esse padrão, rompeu o teto financeiro que o prendia havia anos e que parecia impossível de ultrapassar.</p>

							<p>Hoje Ramon é o primeiro brasileiro autorizado a aplicar a Teoria da Permissão e guiou mais de 160 mil pessoas a enxergarem o mesmo padrão que as mantém presas: no dinheiro, na carreira e nas relações.</p>

							<p>No Resgate dos Otimistas, você vai entender que todo acontecimento ruim tem uma explicação, e a sua falta de resultado tem resposta. Uma resposta que você vai identificar, pra romper o seu teto financeiro de forma definitiva.</p>

							<p>Você tem coragem de ver?</p>
							<ButtonParticipate />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
