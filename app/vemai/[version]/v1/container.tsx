"use client";

import React from "react";
import type { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
import HeroSection from "./hero-section";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function ContainerTeste({
	titleRedLine,
	redLine,
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	return (
		<HeroSection
			titleRedLine={titleRedLine}
			redLine={redLine}
			formName={formName}
			onSubmit={onSubmit}
			submitError={submitError}
		/>
	);
}