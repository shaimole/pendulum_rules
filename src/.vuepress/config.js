const { description } = require("../../package")

module.exports = {
	locales: {
		"/": {
			title: "Pen & Pendulum Rules",
		},
		"/en/": {
			title: "Pen & Pendulum Rules",
		},
	},
	head: [
		["link", { rel: "stylesheet", href: "/css/styles.css" }],
		["link", { rel: "icon", href: "images/Pendulum-Logo.png" }],
		["link", { rel: "manifest", href: "/manifest.json" }],
		["meta", { name: "theme-color", content: "#03071E" }],
		["meta", { name: "background-color", content: "#03071E" }],
		[
			"meta",
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
		],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],
		["link", { rel: "apple-touch-icon", href: "images/Pendulum-Logo.png" }],
		[
			"link",
			{
				rel: "mask-icon",
				href: "images/Pendulum-Logo.png",
				color: "#03071E",
			},
		],
		[
			"meta",
			{
				name: "msapplication-TileImage",
				content: "images/Pendulum-Logo.png",
			},
		],
		["meta", { name: "msapplication-TileColor", content: "#000000" }],
	],
	plugins: [
		[
			"@vuepress/pwa",
			{
				serviceWorker: true,
				updatePopup: true,
			},
		],
	],
	themeConfig: {
		locales: {
			"/": {
        // text for the language dropdown
        selectText: 'Sprachen',
        // label for this locale in the language dropdown
        label: 'Deutsch',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Sprachen',
				logo: "/images/Pendulum-Logo.png",
				nav: [
					{ text: "Start", link: "/" },
					{
						text: "Character App",
						link: "https://shaimole.github.io/pendulum/",
					},
				],
				sidebar: [
					{
						title: "Über Pen & Pendulum", // required
						path: "/about/", // optional, link of the title, which should be an absolute path and must exist
						collapsable: false, // optional, defaults to true
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Charactererstellung",
						path: "/creation/",
						children: [["/creation/stats/", "Punkteverteilung"]],
					},
					{
						title: "Berufsklassen",
						path: "/classes/",
					},
					{
						title: "Rassen",
						path: "/races/",
					},
					{
						title: "Eigenschaften", // required
						path: "/eigenschaften/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Werte",
						sidebarDepth: 3,
						path: "/stats/",
						children: [
							["/stats/attributes/", "Attribute"],
							["/stats/skills/", "Fähigkeiten"],
							["/stats/base/", "Basiswerte"],
							["/stats/combat/", "Kampfwerte"],
							["/stats/magic/", "Magiewerte"],
							["/stats/lifereg/", "Regeneration"],
						],
					},
					{
						title: "Fähigkeiten", // required
						path: "/skills/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 3, // optional, defaults to 1
						children: [
							["/skills/handwerk/", "Handwerk"],
							["/skills/kompetenzen/", "Kompetenzen"],
							["/skills/weapons/", "Waffen"],
							["/skills/quali/", "Qualifikationen"],
							["/skills/magie/", "Magie"],
							["/skills/priest/", "Priester"],
						],
					},
					{
						title: "Kunden", // required
						path: "/kunden/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Aktionen", // required
						path: "/aktionen/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Tätigkeiten", // required
						path: "/tasks/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Stress", // required
						path: "/stress/", // optio,,iiiiiinal, link of the title, which should be an absolute path and must exist
						sidebarDepth: 2, // optional, defaults to 1
					},
					{
						title: "Pantheon", // required
						path: "/gods/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Sonstige Regeln", // required
						path: "/additional/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 2, // optional, defaults to 1
					},
					{
						title: "Abkürzungsverzeichnis", // required
						path: "/shorts/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 0, // optional, defaults to 1
					},
				],
			},
			"/en/": {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
				logo: "/images/Pendulum-Logo.png",
				nav: [
					{ text: "Start", link: "/en/" },
					{
						text: "Character App",
						link: "https://shaimole.github.io/pendulum/",
					},
				],
				sidebar: [
					{
						title: "About Pen & Pendulum", // required
						path: "/en/about/", // optional, link of the title, which should be an absolute path and must exist
						collapsable: false, // optional, defaults to true
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Character creation",
						path: "/en/creation/",
						children: [["/en/creation/stats/", "Point buy"]],
					},
					{
						title: "Character classes",
						path: "/en/classes/",
					},
					{
						title: "Races",
						path: "/en/races/",
					},
					{
						title: "Character properties", // required
						path: "/en/eigenschaften/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Character values",
						sidebarDepth: 3,
						path: "/en/stats/",
						children: [
							["/en/stats/attributes/", "Attributes"],
							["/en/stats/skills/", "Skills"],
							["/en/stats/base/", "Base"],
							["/en/stats/combat/", "Combat"],
							["/en/stats/magic/", "Magic"],
							["/en/stats/lifereg/", "Regeneration"],
						],
					},
					{
						title: "Skills", // required
						path: "/en/skills/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 3, // optional, defaults to 1
						children: [
							["/en/skills/handwerk/", "Craft"],
							["/en/skills/kompetenzen/", "Competence"],
							["/en/skills/weapons/", "Weapons"],
							["/en/skills/quali/", "Qualification"],
							["/en/skills/magie/", "Magic"],
							["/en/skills/priest/", "Priest"],
						],
					},
					{
						title: "Knowledge", // required
						path: "/en/kunden/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Actions", // required
						path: "/en/aktionen/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Tasks", // required
						path: "/en/tasks/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Stress", // required
						path: "/en/stress/", // optio,,iiiiiinal, link of the title, which should be an absolute path and must exist
						sidebarDepth: 2, // optional, defaults to 1
					},
					{
						title: "Pantheon", // required
						path: "/en/gods/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 1, // optional, defaults to 1
					},
					{
						title: "Other rules", // required
						path: "/en/additional/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 2, // optional, defaults to 1
					},
					{
						title: "List of abbreviations", // required
						path: "/en/shorts/", // optional, link of the title, which should be an absolute path and must exist
						sidebarDepth: 0, // optional, defaults to 1
					},
				],
			},
		},
	},
}
