// Single source of truth for the landing page content.
// Logo / avatar images are imported here so URLs resolve through Vite.

import AynuwikiPng from '$assets/images/logos/png/Aynuwiki.png';
import AynuwikiAvif from '$assets/images/logos/avif/Aynuwiki.avif';
import UkosamaniPng from '$assets/images/logos/png/Ukosamani.png';
import UkosamaniAvif from '$assets/images/logos/avif/Ukosamani.avif';
import IeonnekunnepPng from '$assets/images/logos/png/Ieonnekunnep.png';
import IeonnekunnepAvif from '$assets/images/logos/avif/Ieonnekunnep.avif';
import ItakUoeroskipPng from '$assets/images/logos/png/Itak-uoeroskip.png';
import AynuItahPng from '$assets/images/logos/png/Aynu-Itah.png';

import HachiaPng from '$assets/images/avatars/png/Hachia.png';
import HachiaAvif from '$assets/images/avatars/avif/Hachia.avif';
import MkpoliPng from '$assets/images/avatars/png/Mkpoli.png';
import MkpoliAvif from '$assets/images/avatars/avif/Mkpoli.avif';
import LucasPng from '$assets/images/avatars/png/Lucas.png';
import LucasAvif from '$assets/images/avatars/avif/Lucas.avif';
import KarumoPng from '$assets/images/avatars/png/Karumo.png';
import KarumoAvif from '$assets/images/avatars/avif/Karumo.avif';
import NeetPng from '$assets/images/avatars/png/Neet.png';
import NeetAvif from '$assets/images/avatars/avif/Neet.avif';
import AsPJTPng from '$assets/images/avatars/png/AsPJT.png';
import AsPJTAvif from '$assets/images/avatars/avif/AsPJT.avif';

export type Img = { png: string; avif?: string };

export type Site = {
	name: string;
	href: string;
	host: string;
	logo: Img;
};

export type Tool = {
	name: string;
	href: string;
	host: string;
	desc: string;
	kind: 'app' | 'data' | 'lib' | 'mod';
};

export type Platform = 'x' | 'github' | 'link';

export type Member = {
	name: string;
	href: string;
	avatar: Img;
	platform: Platform;
};

export type Link = {
	label: string;
	href: string;
	icon: 'discord' | 'github' | 'huggingface';
};

// ── Cikarkoranpe — sites hosted on aynu.org ───────────────────
export const sites: Site[] = [
	{
		name: 'Aynuwiki',
		href: 'https://wiki.aynu.org/',
		host: 'wiki.aynu.org',
		logo: { png: AynuwikiPng, avif: AynuwikiAvif }
	},
	{
		name: 'Ukosamaani Sait',
		href: 'https://site.aynu.org/',
		host: 'site.aynu.org',
		logo: { png: UkosamaniPng, avif: UkosamaniAvif }
	},
	{
		name: 'Eonnekunnep',
		href: 'https://dict.aynu.org/',
		host: 'dict.aynu.org',
		logo: { png: IeonnekunnepPng, avif: IeonnekunnepAvif }
	},
	{
		name: 'Itak-uoeroskip',
		href: 'https://itak.aynu.org/',
		host: 'itak.aynu.org',
		logo: { png: ItakUoeroskipPng }
	},
	{
		name: 'Айну-Итах',
		href: 'https://itah.aynu.org/',
		host: 'itah.aynu.org',
		logo: { png: AynuItahPng }
	}
];

// ── aynu.io — software tools by the wider mosir ───────────────
export const toolsHref = 'https://aynu.io/';

export const tools: Tool[] = [
	{
		name: 'Kampisos',
		href: 'https://kampisos.aynu.io/',
		host: 'kampisos.aynu.io',
		desc: 'Modern online corpus with full-text search and advanced filtering.',
		kind: 'app'
	},
	{
		name: 'Tunci',
		href: 'https://tunci.aynu.io/',
		host: 'tunci.aynu.io',
		desc: 'Experimental Ainu machine translation with dialects and examples.',
		kind: 'app'
	},
	{
		name: 'ainu-corpora',
		href: 'https://github.com/aynumosir/ainu-corpora',
		host: 'github.com/aynumosir',
		desc: 'Ainu–Japanese parallel dataset of over 1.7 million words.',
		kind: 'data'
	},
	{
		name: 'minecraft-ainu',
		href: 'https://github.com/aynumosir/minecraft-ainu',
		host: 'github.com/aynumosir',
		desc: 'Resource pack for playing Minecraft in the Ainu language.',
		kind: 'mod'
	},
	{
		name: 'ainu-utils',
		href: 'https://github.com/aynumosir/ainu-utils',
		host: 'github.com/aynumosir',
		desc: 'Ainu language processing library for Rust, JavaScript and Python.',
		kind: 'lib'
	}
];

// ── Utar — members ────────────────────────────────────────────
export const members: Member[] = [
	{
		name: 'はちあ',
		href: 'https://x.com/hachia_go',
		avatar: { png: HachiaPng, avif: HachiaAvif },
		platform: 'x'
	},
	{
		name: 'まくぽり',
		href: 'https://x.com/mkpoli',
		avatar: { png: MkpoliPng, avif: MkpoliAvif },
		platform: 'x'
	},
	{
		name: '代々木 ルーカス',
		href: 'https://x.com/Lucas_Yoyogi',
		avatar: { png: LucasPng, avif: LucasAvif },
		platform: 'x'
	},
	{
		name: 'かるも',
		href: 'https://x.com/ranekrm',
		avatar: { png: KarumoPng, avif: KarumoAvif },
		platform: 'x'
	},
	{
		name: 'neet',
		href: 'https://neet.love/',
		avatar: { png: NeetPng, avif: NeetAvif },
		platform: 'link'
	},
	{
		name: 'AsPJT',
		href: 'https://github.com/AsPJT',
		avatar: { png: AsPJTPng, avif: AsPJTAvif },
		platform: 'github'
	}
];

// ── Uekarpare — community & org links ─────────────────────────
export const communityLinks: Link[] = [
	{ label: 'Discord', href: 'https://discord.aynu.org/', icon: 'discord' },
	{ label: 'GitHub', href: 'https://github.com/aynumosir', icon: 'github' },
	{ label: 'Hugging Face', href: 'https://huggingface.co/aynumosir', icon: 'huggingface' }
];
