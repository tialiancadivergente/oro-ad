import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="w-full bg-[#031B22] bg-[radial-gradient(50%_75.08%_at_50%_100.2%,_rgba(16,68,72,0.5)_0%,_rgba(16,68,72,0.2)_34.73%,_rgba(16,68,72,0)_100%)] py-16 px-8 lg:px-16">
			<footer
				className="
					mx-auto
					flex
					w-full
					max-w-[1680px]
					flex-col
					items-center
					justify-between
					gap-8
					lg:flex-row
					lg:gap-8
				"
			>
				<div className="hidden font-raleway text-[14px] font-normal leading-[135%] text-white lg:block lg:text-left">
					<p>Copyright © O Resgate Dos Otimistas.</p>
					<p>Todos os direitos reservados.</p>
				</div>

				<Image
					src="/images/logo.png"
					alt="Logomarca Aliança Divergente"
					width={250}
					height={32}
					priority
					className="object-contain"
				/>

				<div className="block text-center font-raleway text-[14px] font-normal leading-[135%] text-white lg:hidden">
					<p>Copyright © O Resgate Dos Otimistas.</p>
					<p>Todos os direitos reservados.</p>
				</div>

				<div className="flex flex-col items-center lg:items-start">
					<div className="flex items-center gap-2">
						<Link
							href="https://www.oresgatedosotimistas.com.br/politica-de-privacidade"
							target="_blank"
							rel="noopener noreferrer"
							className="font-raleway text-[14px] leading-[135%] text-white transition-colors duration-200 hover:text-[#C0964B]"
						>
							Política de privacidade
						</Link>

						<span className="font-raleway text-[14px] leading-[135%] text-white">
							|
						</span>

						<Link
							href="https://www.oresgatedosotimistas.com.br/termos-de-uso"
							target="_blank"
							rel="noopener noreferrer"
							className="font-raleway text-[14px] leading-[135%] text-white transition-colors duration-200 hover:text-[#C0964B]"
						>
							Termos de uso
						</Link>
					</div>

					<p className="text-center font-raleway text-[12px] leading-[135%] text-white lg:text-left">
						ALIANCA DIVERGENTE LTDA - CNPJ: 59.301.463.0001-36
					</p>
				</div>
			</footer>

			<div className="mx-auto mt-12 w-full max-w-[1680px]">
				<p className="mb-3 text-center font-raleway text-[14px] font-bold leading-[135%] text-white lg:text-left">
					AVISO LEGAL:
				</p>

				<p className="text-center font-raleway text-[14px] leading-[135%] text-white lg:text-left">
					Os resultados podem variar de pessoa para pessoa. Este método tem
					caráter educacional e de desenvolvimento pessoal, não garantindo
					ganhos financeiros imediatos ou específicos. O sucesso depende da
					aplicação prática de cada participante. Este site não é afiliado,
					endossado ou patrocinado pelo Google ou Meta.
				</p>
			</div>
		</div>
	);
}