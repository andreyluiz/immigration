"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface LanguageOption {
	value: string;
	label: string;
	emoji: string;
}

const languages: LanguageOption[] = [
	{ value: "en", label: "English", emoji: "🇬🇧" },
	{ value: "pt", label: "Português", emoji: "🇧🇷" },
];

export function LanguageSelector() {
	const router = useRouter();
	const locale = useLocale();

	const handleLanguageChange = (value: string) => {
		router.push(`/${value}`);
	};

	return (
		<Select
			onValueChange={handleLanguageChange}
			value={locale}
			defaultValue={locale}
		>
			<SelectTrigger className="w-[140px] bg-background border-foreground/20 hover:bg-accent hover:text-accent-foreground">
				<SelectValue placeholder="Select language" />
			</SelectTrigger>
			<SelectContent>
				{languages.map((lang) => (
					<SelectItem key={lang.value} value={lang.value}>
						<span className="flex items-center gap-2">
							<span>{lang.emoji}</span>
							<span>{lang.label}</span>
						</span>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
