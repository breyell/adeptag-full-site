import containerQueries from "@tailwindcss/container-queries";
import plugin from "tailwindcss/plugin";

export default {
    experimental: {
        optimizeUniversalDefaults: true,
    },
    content: ["index.php", "views/**/*.twig", "resources/js/alpine/**/*.js", "functions/**/*.php"],
	safelist: [
		'md:grid-cols-1',
		'md:grid-cols-2',
		'md:grid-cols-3',
		'md:grid-cols-4',
		'md:grid-cols-5',
		'md:grid-cols-6',
		'md:grid-cols-7',
		'md:grid-cols-8',
		'md:grid-cols-9',
		'md:grid-cols-10',
		'md:grid-cols-11',
		'md:grid-cols-12',
	],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                // white: '#FFF',
                // red: '#C8102F',
            },
            spacing: {
                margin: 'var(--spacing-margin)',
				"margin-inner": 'var(--spacing-margin-inner)',
                "safe-t": "env(safe-area-inset-top)",
                "safe-r": "env(safe-area-inset-right)",
                "safe-b": "env(safe-area-inset-bottom)",
                "safe-l": "env(safe-area-inset-left)",
            },
            fontFamily: {
                // 'real-head': ['ff-real-headline-pro', 'sans-serif'],
                // 'real-head-2': ['ff-real-headline-pro-2', 'sans-serif'],
                // 'noe-display': ['noe-display', ' serif'],
                // 'noe-standard': ['noe-standard', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'base',
        }),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "m-safe": (value) => ({
                        margin: `max(${value}, env(safe-area-inset-top)) max(${value}, env(safe-area-inset-right)) max(${value}, env(safe-area-inset-bottom)) max(${value}, env(safe-area-inset-left))`,
                    }),
                    "mx-safe": (value, ...rest) => {
                        return {
                            marginLeft: `max(${value}, env(safe-area-inset-left))`,
                            marginRight: `max(${value}, env(safe-area-inset-right))`,
                        };
                    },
                    "my-safe": (value) => ({
                        marginTop: `max(${value}, env(safe-area-inset-top))`,
                        marginBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "mt-safe": (value) => ({
                        marginTop: `max(${value}, env(safe-area-inset-top))`,
                    }),
                    "mr-safe": (value) => ({
                        marginRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "mb-safe": (value) => ({
                        marginBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "ml-safe": (value) => ({
                        marginLeft: `max(${value}, env(safe-area-inset-left))`,
                    }),
                    "p-safe": (value) => ({
                        padding: `max(${value}, env(safe-area-inset-top)) max(${value}, env(safe-area-inset-right)) max(${value}, env(safe-area-inset-bottom)) max(${value}, env(safe-area-inset-left))`,
                    }),
                    "px-safe": (value) => ({
                        paddingLeft: `max(${value}, env(safe-area-inset-left))`,
                        paddingRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "py-safe": (value) => ({
                        paddingTop: `max(${value}, env(safe-area-inset-top))`,
                        paddingBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "pt-safe": (value) => ({
                        paddingTop: `max(${value}, env(safe-area-inset-top))`,
                    }),
                    "pr-safe": (value) => ({
                        paddingRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "pb-safe": (value) => ({
                        paddingBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "pl-safe": (value) => ({
                        paddingLeft: `max(${value}, env(safe-area-inset-left))`,
                    }),
                    "scroll-m-safe": (value) => ({
                        scrollMargin: `max(${value}, env(safe-area-inset-top)) max(${value}, env(safe-area-inset-right)) max(${value}, env(safe-area-inset-bottom)) max(${value}, env(safe-area-inset-left))`,
                    }),
                    "scroll-mx-safe": (value) => ({
                        scrollMarginLeft: `max(${value}, env(safe-area-inset-left))`,
                        scrollMarginRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "scroll-my-safe": (value) => ({
                        scrollMarginTop: `max(${value}, env(safe-area-inset-top))`,
                        scrollMarginBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "scroll-mt-safe": (value) => ({
                        scrollMarginTop: `max(${value}, env(safe-area-inset-top))`,
                    }),
                    "scroll-mr-safe": (value) => ({
                        scrollMarginRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "scroll-mb-safe": (value) => ({
                        scrollMarginBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "scroll-ml-safe": (value) => ({
                        scrollMarginLeft: `max(${value}, env(safe-area-inset-left))`,
                    }),
                    "scroll-p-safe": (value) => ({
                        scrollPadding: `max(${value}, env(safe-area-inset-top)) max(${value}, env(safe-area-inset-right)) max(${value}, env(safe-area-inset-bottom)) max(${value}, env(safe-area-inset-left))`,
                    }),
                    "scroll-px-safe": (value) => ({
                        scrollPaddingLeft: `max(${value}, env(safe-area-inset-left))`,
                        scrollPaddingRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "scroll-py-safe": (value) => ({
                        scrollPaddingTop: `max(${value}, env(safe-area-inset-top))`,
                        scrollPaddingBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "scroll-pt-safe": (value) => ({
                        scrollPaddingTop: `max(${value}, env(safe-area-inset-top))`,
                    }),
                    "scroll-pr-safe": (value) => ({
                        scrollPaddingRight: `max(${value}, env(safe-area-inset-right))`,
                    }),
                    "scroll-pb-safe": (value) => ({
                        scrollPaddingBottom: `max(${value}, env(safe-area-inset-bottom))`,
                    }),
                    "scroll-pl-safe": (value) => ({
                        scrollPaddingLeft: `max(${value}, env(safe-area-inset-left))`,
                    }),
                },
                { values: theme("spacing") }
            );
        }),
        containerQueries,
        require('@tailwindcss/typography'),
    ]
};
