import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";

export function CvBanner() {
	const t = useTranslations("home.banner");

	return (
		<div className="w-full bg-blue-600 text-white py-3 px-4 md:px-8">
			<div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center">
				<div className="flex items-center gap-2">
					<Icon icon="mdi:file-document" className="w-6 h-6 text-white md:visible invisible" />
					<span className="text-sm md:text-base font-medium">
						{t("message")}
					</span>
				</div>
				<Button
					asChild
					variant="secondary"
					size="sm"
					className="bg-white text-blue-600 hover:bg-gray-100"
				>
					<a
						target="_blank"
						href="mailto:contato@queroimigrar.com.br?subject=An%C3%A1lise%20Gratuita%20de%20CV"
						rel="noreferrer"
					>
						{t("cta")}
					</a>
				</Button>
			</div>
		</div>
	);
}
