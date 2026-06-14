"use client";

import { handleScroll } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Biography() {
	const ButtonParticipate = ({
		bgColor = "#C0964B",
	}: {
		bgColor?: string;
	}) => {
		return (
			<button
				onClick={handleScroll}
				className="w-full h-14 font-raleway font-extrabold text-[#FFFFFF] rounded-[50px] px-6 text-base uppercase tracking-wide transition-all hover:brightness-105 flex items-center justify-center gap-2"
				style={{ backgroundColor: bgColor }}
			>
				<span>Participar gratuitamente</span>
				<ArrowUpRight
					size={18}
					strokeWidth={2.5}
					className="text-[#FFFFFF]"
				/>
			</button>
		);
	};

	return (
		<section
			className={`min-h-[1502px] h-[1502px] md:min-h-[1718px] md:h-[1718px] flex flex-col items-center pb-14 p-4 md:p-0 justify-start overflow-hidden bg-[#031B22] bg-[url('/images/oro/v10/bg_mobile_segunda_dobra.webp')] md:bg-[url('/images/oro/v10/bg_desktop_segunda_dobra.webp')] bg-cover bg-top md:bg-center z-0`}
		>
			<div className="mx-auto sm:px-4 lg:w-[1080px] w-full">
				<div className="-mt-2 md:mt-16 text-center md:text-left">
					<div className="text-2xl md:text-3xl font-bold uppercase text-[#104448] md:text-center">
						Que bom que você não desistiu.
					</div>

					<div className="font-raleway text-[#104448] text-base my-8 max-w-[688px] mx-auto font-bold md:text-center">
						Chega de dar o seu máximo e no fim ficar se questionando o que faltou.
						Depois desse evento você nunca mais vai se perguntar o que falta para
						você ter o resultado merecido pelo seu esforço. Faça parte do Resgate
						dos Otimistas ou continue se questionando e justificando o seu
						"quase sucesso".
					</div>

					<div className="max-w-[347px] mx-auto">
						<ButtonParticipate bgColor="#006D71" />
					</div>
				</div>

				<div className="flex justify-center md:justify-end mt-[380px] xs:mt-[390px] 2xs:mt-[450px] sm:mt-[600px] md:mt-[535px] w-full">
					<div className="w-full max-w-[512px] text-[#D3CAC0]">
						<div className="font-spectral text-2xl md:text-[32px] font-bold">
							QUEM VAI SER O SEU MENTOR NESSA JORNADA?
						</div>

						<div className="flex flex-col mt-4 mb-6 text-xl md:text-2xl font-bold">
							<p className="text-[#C0964B]">
								Elton Euler
							</p>

							<p className="text-[#C0964B]">
								Líder e Idealizador da Aliança Divergente
							</p>
						</div>

						<div className="flex flex-col gap-3 md:gap-6 text-[14px] md:text-base font-extralight font-raleway">
							<p>
								Elton Euler é um dos maiores exemplos de superação e transformação da atualidade
							</p>

							<p>
								Antes de se tornar multimilionário e referência no desenvolvimento humano, quebrou 17 vezes e chegou a acreditar que o sucesso não era para ele.
							</p>

							<p>
								Decidido a mudar sua história, Elton descobriu o que realmente bloqueava seus resultados e, em menos de 3 anos, saiu das dívidas e construiu uma vida de prosperidade.
							</p>

							<p>
								Hoje, já apoiou mais de 100 mil pessoas em 40 países a destravarem suas vidas financeiras, relacionais, emocionais e sua saúde com técnicas práticas e poderosas.
							</p>

							<p>
								Agora, ele vai te mostrar o que está faltando para você desbloquear sua Permissão e elevar sua vida a um novo patamar.
							</p>

							<p className="font-bold">
								Você está pronto para descobrir?
							</p>

							<ButtonParticipate />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}