"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
	LeadCaptureForm,
	type LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

interface ContainerProps {
	titleRedLine: ReactNode | null;
	redLine: ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	return (
		<section
			id="hero"
			aria-labelledby="hero-title"
			className="relative z-0 flex h-auto w-full flex-col items-center overflow-hidden bg-[#104448] px-4 pb-7 pt-6 md:h-[902px] md:px-6 md:pb-16 md:pt-12"
		>
			<div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
				<Image
					src="/images/vemai/logo.svg"
					alt="Aliança Divergente"
					width={280}
					height={64}
					priority
					className="h-auto w-[150px] select-none object-contain md:w-[280px]"
				/>

				<h1
					id="hero-title"
					className="mt-7 w-full max-w-[380px] text-center text-[28px] font-bold uppercase leading-[110%] text-[#EBE2D7] md:mt-[48px] md:max-w-none md:whitespace-nowrap md:text-[48.01px] md:leading-none"
					style={{ fontFamily: '"Ancizar Serif", serif' }}
				>
					Algo grande está chegando...
				</h1>

				<Image
					src="/images/vemai/img.svg"
					alt="08.08"
					width={648}
					height={146}
					priority
					className="mt-9 h-auto w-full max-w-[350px] select-none object-contain md:mt-8 md:w-[648px] md:max-w-none"
				/>

				<p
					className="mt-8 w-full max-w-[360px] text-center text-[18px] font-normal leading-[120%] text-[#EBE2D7] md:mt-[48px] md:max-w-[694px] md:text-[26.62px] md:leading-none"
					style={{ fontFamily: '"Ancizar Serif", serif' }}
				>
					E você pode descobrir antes de todo mundo. Cadastre-se agora e fique atento,
					você nunca mais vai esquecer essa data.
				</p>

				<div className="mt-7 w-full max-w-[620px] text-[#104448] md:mt-[38px] [&_a]:!text-[#EBE2D7] [&_label]:!text-[#EBE2D7] [&_p]:!text-[#EBE2D7]">
					<LeadCaptureForm
						formName={formName}
						onSubmit={onSubmit}
						submitError={submitError}
						submitLabel="QUERO PARTICIPAR"
						emailInputClassName="h-[58px] w-full flex-1 rounded-[200px] border border-[#EBE2D7] bg-[#EBE2D7] px-4 py-4 font-raleway text-[16px] font-medium text-[#104448] placeholder:text-[#104448]/70 focus:outline-none"
						ddiSelectClassName="h-[58px] rounded-l-[200px] border border-r-0 border-[#EBE2D7] bg-[#EBE2D7] py-4 pl-10 pr-2 font-raleway text-[16px] font-medium text-[#104448] focus:outline-none"
						phoneInputClassName="h-[58px] w-full rounded-r-[200px] border border-l-0 border-[#EBE2D7] bg-[#EBE2D7] px-4 py-4 font-raleway text-[16px] font-medium text-[#104448] placeholder:text-[#104448]/70 focus:outline-none"
						buttonClassName="h-14 w-full rounded-[50px] border-2 border-transparent px-6 font-raleway text-base font-extrabold uppercase tracking-wide text-[#104448] shadow-[0px_6px_13px_0px_rgba(179,126,33,0.25)] transition-all hover:brightness-110 [background:linear-gradient(88.53deg,_#FFD17E_0%,_#B37E21_100%)_padding-box,_linear-gradient(180deg,_#FFDA99_0%,_#AD7512_100%)_border-box]"
					/>
				</div>
			</div>
		</section>
	);
}