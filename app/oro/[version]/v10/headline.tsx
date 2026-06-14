import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

export const Headline: IHeadline[] = [

  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p
        className="uppercase font-spectral text-[#D3CAC0] font-extrabold"
      >
        Descubra exatamente os padrões invisíveis que travam o seu crescimento financeiro 
        <span className="text-[#C0964B]"> e aprenda como superá-los com clareza e direção.</span>
      </p>
    ),
    text: (
      <p>
      </p>
    ),
  },

];