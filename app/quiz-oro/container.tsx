"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomRadio } from "@/app/components/custom-input";
import {
	isMultipleInputType,
	isOpenInputType,
} from "@/app/modules/lead-score/lead-score-input-type";
import type { QuizQuestion } from "@/app/modules/lead-score/lead-score.types";
import { useEffect } from "react";

interface ContainerQuestProps {
	isFetchingQuestions: boolean;
	fetchError: string | null;
	fetchQuestions: () => void | Promise<void>;
	currentQuestionData: QuizQuestion | undefined;
	submitError: string | null;
	submitSuccess: boolean;
	totalQuestions: number;
	selectedSingleValue: string;
	selectedMultipleValue: string[];
	handleAnswer: (value: string) => void;
	handleMultipleAnswer: (value: string) => void;
	currentQuestion: number;
	handleBack: () => void;
	handleNext: () => void | Promise<void>;
	isCurrentQuestionAnswered: boolean;
	isSubmittingAnswers: boolean;
	whatsappUrl: string;
	theme: string;
}

export default function ContainerQuest({
	isFetchingQuestions,
	fetchError,
	fetchQuestions,
	currentQuestionData,
	submitError,
	submitSuccess,
	totalQuestions,
	selectedSingleValue,
	selectedMultipleValue,
	handleAnswer,
	handleMultipleAnswer,
	currentQuestion,
	handleBack,
	handleNext,
	isCurrentQuestionAnswered,
	isSubmittingAnswers,
	whatsappUrl,
	theme,
}: ContainerQuestProps) {
	const progress = totalQuestions
		? ((currentQuestion + 1) / totalQuestions) * 100
		: 0;

	const isLastQuestion = currentQuestion === totalQuestions - 1;

	useEffect(() => {
		const html = document.documentElement;

		if (theme === "2") {
			html.classList.add("light");
			html.classList.remove("dark");
		} else {
			html.classList.add("dark");
			html.classList.remove("light");
		}
	}, [theme]);

	return (
		<div>
			<section className="relative flex h-full items-center justify-center overflow-hidden bg-[#104448]">
				<div className="container relative mx-auto h-full px-4">
					<div className="flex flex-col items-center justify-center py-8 text-center">
						<div className="mx-auto w-full max-w-4xl">
							<div className="mb-8 flex justify-center md:mb-10">
								<Image
									src="/images/vemai/logo.svg"
									alt="Aliança Divergente"
									width={280}
									height={64}
									priority
									className="pointer-events-none h-auto w-[150px] select-none object-contain md:w-[280px]"
								/>
							</div>

							<h1 className="-mt-2 mb-1 text-center text-2xl font-bold text-white md:mb-2 md:text-5xl">
								FALTA APENAS UM PASSO
							</h1>

							<h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-7 md:text-5xl">
								PARA GARANTIR SUA VAGA!
							</h2>

							<p
								className="mb-5 text-center text-base !text-white md:mb-7 md:text-lg"
								style={{ fontFamily: '"Roboto", Sans-serif' }}
							>
								Para concluir sua inscrição, responda:
							</p>

							<div className="mx-auto w-full max-w-2xl">
								<div className="mb-6 rounded-lg border border-white bg-zinc-900 p-4 md:mb-8 md:p-7">
									{isFetchingQuestions && (
										<div className="py-8 text-center text-white">
											Carregando perguntas...
										</div>
									)}

									{!isFetchingQuestions && fetchError && (
										<div className="py-4 text-center">
											<p className="mb-4 text-red-300">{fetchError}</p>

											<Button
												onClick={fetchQuestions}
												className="bg-teal-600 text-white hover:bg-teal-700"
											>
												TENTAR NOVAMENTE
											</Button>
										</div>
									)}

									{!isFetchingQuestions &&
										!fetchError &&
										currentQuestionData && (
											<>
												{submitError && (
													<p className="mb-3 text-left text-sm text-red-300">
														{submitError}
													</p>
												)}

												{submitSuccess && (
													<p className="mb-3 text-left text-sm !text-green-300">
														Respostas enviadas com sucesso.
													</p>
												)}

												<div className="mb-4">
													<div className="h-2 w-full rounded-full bg-white/20">
														<div
															className="h-2 rounded-full bg-teal-500 transition-all duration-300"
															style={{ width: `${progress}%` }}
														/>
													</div>
												</div>

												<h3
													className="mb-4 text-center text-base font-medium text-white md:mb-5 md:text-left md:text-lg"
													style={{
														color: "#fff",
														fontFamily: '"Roboto", Sans-serif',
													}}
												>
													{currentQuestionData.question}
												</h3>

												{isOpenInputType(currentQuestionData.inputType) ? (
													<input
														type="text"
														value={selectedSingleValue}
														onChange={(e) => handleAnswer(e.target.value)}
														placeholder="Digite sua resposta aqui..."
														className="w-full rounded-lg border border-white bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
														style={{ fontFamily: '"Roboto", Sans-serif' }}
													/>
												) : isMultipleInputType(
														currentQuestionData.inputType
													) ? (
													<div className="space-y-2">
														{currentQuestionData.options.map((option) => {
															const checked =
																selectedMultipleValue.includes(option.value);

															return (
																<button
																	key={option.value}
																	type="button"
																	onClick={() =>
																		handleMultipleAnswer(option.value)
																	}
																	className="flex w-full items-center gap-2 text-left text-white"
																>
																	<span
																		className={`inline-flex h-4 w-4 items-center justify-center rounded-sm border border-white ${
																			checked
																				? "bg-white"
																				: "bg-transparent"
																		}`}
																	>
																		{checked && (
																			<span className="h-2 w-2 rounded-sm bg-teal-700" />
																		)}
																	</span>

																	<span>{option.label}</span>
																</button>
															);
														})}
													</div>
												) : (
													<CustomRadio
														style={{ fontFamily: '"Roboto", Sans-serif' }}
														options={currentQuestionData.options}
														value={selectedSingleValue}
														onChange={handleAnswer}
													/>
												)}

												<div className="mt-5 grid grid-cols-2 gap-3 md:mt-7 md:gap-5">
													{currentQuestion > 0 ? (
														<Button
															variant="outline"
															onClick={handleBack}
															className="border-gray-700 bg-transparent py-3 text-sm text-white hover:bg-gray-800 md:py-5 md:text-base"
															style={{ fontFamily: '"Roboto", Sans-serif' }}
														>
															VOLTAR
														</Button>
													) : (
														<div />
													)}

													<Button
														onClick={handleNext}
														disabled={
															!isCurrentQuestionAnswered ||
															isSubmittingAnswers
														}
														className={`bg-teal-600 py-3 text-sm text-white hover:bg-teal-700 md:py-5 md:text-base ${
															currentQuestion === 0 ? "col-span-2" : ""
														}`}
														style={{ fontFamily: '"Roboto", Sans-serif' }}
													>
														{isLastQuestion
															? isSubmittingAnswers
																? "ENVIANDO..."
																: submitSuccess
																	? "ENVIADO"
																	: "ENVIAR"
															: "PROXIMA"}
													</Button>
												</div>
											</>
										)}
								</div>
							</div>

							<div className="mb-6 text-center text-white md:mb-8">
								<p
									className="mb-4 text-xs text-white md:mb-5 md:text-sm"
									style={{ fontFamily: '"Roboto", Sans-serif' }}
								>
									Apos responder as questoes, toque no botao abaixo
									<br className="hidden md:block" />
									para receber o link e materiais do evento:
								</p>

								<Button
									className="w-full max-w-sm rounded-3xl py-4 text-sm transition-opacity duration-300 hover:opacity-90 md:py-6 md:text-base"
									onClick={() => window.open(whatsappUrl, "_blank")}
									style={{
										background:
											"linear-gradient(96.48deg, #065100 -18.33%, #49E413 159.75%)",
										fontFamily: '"Roboto", Sans-serif',
									}}
								>
									Clique aqui para entrar no Grupo no WhatsApp
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="flex h-[150px] w-full items-center justify-center bg-black">
				<p
					className="text-center text-sm text-gray-400 md:text-base"
					style={{ color: "#fff", fontFamily: '"Roboto", Sans-serif' }}
				>
					© 2023. All rights reserved. Politica de Privacidade.
				</p>
			</footer>
		</div>
	);
}