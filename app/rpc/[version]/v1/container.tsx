"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomRadio } from "@/app/components/custom-input";
import {
  LeadCaptureForm,
  type LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";
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
  showLeadCaptureForm: boolean;
  onLeadCaptureSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  leadFormSubmitError: string | null;
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
  showLeadCaptureForm,
  onLeadCaptureSubmit,
  leadFormSubmitError,
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
      <section
        className={`relative flex items-center justify-center overflow-hidden h-full dark:bg-[url('/images/v21/bg_leadscore.webp')] light:bg-[url('/images/oro/splashScreen.webp')] bg-cover bg-center`}
      >
        <div className="container mx-auto relative h-full px-4">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-full max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8 flex justify-center">
                <Image
                  src={theme === "1" ? "/images/v21/logo_o_resgate_dos_otimistas.webp" : "/images/logo-o-resgate-dos-otimistas.png"}
                  alt="Logotipo Resgate dos otimistas"
                  width={424}
                  height={164}
                  priority
                  className="object-contain select-none pointer-events-none h-auto"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <h1
                className={`text-2xl md:text-5xl font-bold text-[#C09648] -mt-4 mb-1 md:mb-2 text-center light:text-[#006D71]`}
              >
                FALTA APENAS UM PASSO
              </h1>
              <h2
                className={`text-2xl md:text-5xl font-bold text-[#C09648] mb-4 md:mb-7 text-center light:text-[#006D71]`}
              >
                PARA GARANTIR SUA VAGA!
              </h2>

              <p
                className="light:text-[#003539] dark:text-white text-base md:text-lg mb-5 md:mb-7 text-center"
                style={{ fontFamily: '"Roboto", Sans-serif' }}
              >
                Para concluir sua inscrição, responda:
              </p>

              {!showLeadCaptureForm && (
                <div className="w-full max-w-2xl mx-auto">
                  <div className="bg-zinc-900 rounded-lg border border-white p-4 md:p-7 mb-6 md:mb-8">
                    {isFetchingQuestions && (
                      <div className="text-white text-center py-8">
                        Carregando perguntas...
                      </div>
                    )}

                    {!isFetchingQuestions && fetchError && (
                      <div className="text-center py-4">
                        <p className="text-red-300 mb-4">{fetchError}</p>
                        <Button
                          onClick={fetchQuestions}
                          className="bg-teal-600 hover:bg-teal-700 text-white"
                        >
                          TENTAR NOVAMENTE
                        </Button>
                      </div>
                    )}

                    {!isFetchingQuestions && !fetchError && currentQuestionData && (
                      <>
                        {submitError && (
                          <p className="text-red-300 text-sm mb-3 text-left">
                            {submitError}
                          </p>
                        )}
                        {submitSuccess && (
                          <p className="!text-green-300 text-sm mb-3 text-left">
                            Respostas enviadas com sucesso.
                          </p>
                        )}

                        <div className="mb-4">
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                              className="bg-[#e1c473] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>

                        <h3
                          className="text-white text-base md:text-lg font-medium mb-4 md:mb-5 md:text-left text-center"
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
                            className="w-full px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            style={{ fontFamily: '"Roboto", Sans-serif' }}
                          />
                        ) : isMultipleInputType(currentQuestionData.inputType) ? (
                          <div className="space-y-2">
                            {currentQuestionData.options.map((option) => {
                              const checked = selectedMultipleValue.includes(
                                option.value
                              );
                              return (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => handleMultipleAnswer(option.value)}
                                  className="w-full text-left flex items-center gap-2 text-white"
                                >
                                  <span
                                    className={`h-4 w-4 border border-white rounded-sm inline-flex items-center justify-center ${checked ? "bg-white" : "bg-transparent"
                                      }`}
                                  >
                                    {checked && (
                                      <span className="h-2 w-2 bg-teal-700 rounded-sm" />
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

                        <div className="grid grid-cols-2 gap-3 md:gap-5 mt-5 md:mt-7">
                          {currentQuestion > 0 ? (
                            <Button
                              variant="outline"
                              onClick={handleBack}
                              className="bg-white/90 text-black hover:bg-white/70 py-3 md:py-5 text-sm md:text-base"
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
                              !isCurrentQuestionAnswered || isSubmittingAnswers
                            }
                            className={`bg-[#e1c473] hover:bg-[#f1dfab] text-black font-bold py-3 md:py-5 text-sm md:text-base ${currentQuestion === 0 ? "col-span-2" : ""
                              }`}
                            style={{ fontFamily: '"Roboto", Sans-serif' }}
                          >
                            {isLastQuestion
                              ? isSubmittingAnswers
                                ? "ENVIANDO..."
                                : submitSuccess
                                  ? "ENVIADO"
                                  : "ENVIAR"
                              : "PRÓXIMA"}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="mb-6 md:mb-8 text-center text-white">
                {showLeadCaptureForm ? (
                  <div className="w-full max-w-lg mx-auto">
                    <LeadCaptureForm
                      formName="quiz-lead-capture"
                      onSubmit={onLeadCaptureSubmit}
                      submitError={leadFormSubmitError}
                      emailInputClassName="w-full h-[58px] border border-[#D9D3BA] flex rounded-[8px] flex-1 px-4 py-4 bg-[#FFFFFF33] placeholder:text-[#FFFFFF] text-[#FFFFFF] font-raleway font-medium text-[16px]"
                      ddiSelectClassName="h-[58px] min-w-[120px] max-w-[120px] flex items-center gap-2 pl-9 pr-3 bg-[#D9CFC31A] rounded-l-[8px] border border-[#D9D3BA] border-r-0 text-[#FFFFFF] font-raleway font-medium text-[16px] whitespace-nowrap focus:outline-none"
                      phoneInputClassName="w-full !h-[58px] px-4 py-4 rounded-r-[8px] bg-[#FFFFFF33] placeholder:text-[#FFFFFF] text-[#FFFFFF] font-raleway font-medium text-[16px] focus:outline-none border border-[#D9D3BA] border-l-0"
                      buttonClassName="w-full h-14 font-raleway font-extrabold text-[#000000] rounded-[8px] px-6 text-base uppercase tracking-wide transition-all hover:brightness-110 border border-transparent [background:linear-gradient(90deg,_#E1C371_0%,_#FCF3D4_100%)_padding-box,_linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_#FFF9E5_100%)_border-box] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
                    />
                  </div>
                ) : (
                  <>
                    <p
                      className="dark:text-white light:text-[#07242C] text-xs md:text-sm mb-4 md:mb-5"
                      style={{ fontFamily: '"Roboto", Sans-serif' }}
                    >
                      Após responder as questões, toque no botão abaixo
                      <br className="hidden md:block" />
                      para receber o link e materiais do evento:
                    </p>

                    <Button
                      className="w-full max-w-sm py-4 md:py-6 text-sm md:text-base hover:opacity-90 transition-opacity duration-300 rounded-3xl"
                      onClick={() => window.open(whatsappUrl, "_blank")}
                      style={{
                        background:
                          "linear-gradient(96.48deg, #065100 -18.33%, #49E413 159.75%)",
                        fontFamily: '"Roboto", Sans-serif',
                      }}
                    >
                      Entrar no Grupo
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#00171a] h-[150px]">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          <p
            className="text-white text-sm text-center md:text-left font-mulish"
          >
            Copyright © O Resgate Dos Otimistas. <br />Todos os direitos reservados.
          </p>
          <Image
            src={"/images/logo.png"}
            alt="Logotipo O Resgate Dos Otimistas"
            width={250}
            height={32}
            priority
            className="object-contain select-none pointer-events-none h-auto"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </footer>
    </div>
  );
}
