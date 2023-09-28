
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1cf875 
		"--color-primary-50": "221 254 234", // #ddfeea
		"--color-primary-100": "210 254 227", // #d2fee3
		"--color-primary-200": "198 253 221", // #c6fddd
		"--color-primary-300": "164 252 200", // #a4fcc8
		"--color-primary-400": "96 250 158", // #60fa9e
		"--color-primary-500": "28 248 117", // #1cf875
		"--color-primary-600": "25 223 105", // #19df69
		"--color-primary-700": "21 186 88", // #15ba58
		"--color-primary-800": "17 149 70", // #119546
		"--color-primary-900": "14 122 57", // #0e7a39
		// secondary | #72bcbc 
		"--color-secondary-50": "234 245 245", // #eaf5f5
		"--color-secondary-100": "227 242 242", // #e3f2f2
		"--color-secondary-200": "220 238 238", // #dceeee
		"--color-secondary-300": "199 228 228", // #c7e4e4
		"--color-secondary-400": "156 208 208", // #9cd0d0
		"--color-secondary-500": "114 188 188", // #72bcbc
		"--color-secondary-600": "103 169 169", // #67a9a9
		"--color-secondary-700": "86 141 141", // #568d8d
		"--color-secondary-800": "68 113 113", // #447171
		"--color-secondary-900": "56 92 92", // #385c5c
		// tertiary | #eb8db4 
		"--color-tertiary-50": "252 238 244", // #fceef4
		"--color-tertiary-100": "251 232 240", // #fbe8f0
		"--color-tertiary-200": "250 227 236", // #fae3ec
		"--color-tertiary-300": "247 209 225", // #f7d1e1
		"--color-tertiary-400": "241 175 203", // #f1afcb
		"--color-tertiary-500": "235 141 180", // #eb8db4
		"--color-tertiary-600": "212 127 162", // #d47fa2
		"--color-tertiary-700": "176 106 135", // #b06a87
		"--color-tertiary-800": "141 85 108", // #8d556c
		"--color-tertiary-900": "115 69 88", // #734558
		// success | #306100 
		"--color-success-50": "224 231 217", // #e0e7d9
		"--color-success-100": "214 223 204", // #d6dfcc
		"--color-success-200": "203 216 191", // #cbd8bf
		"--color-success-300": "172 192 153", // #acc099
		"--color-success-400": "110 144 77", // #6e904d
		"--color-success-500": "48 97 0", // #306100
		"--color-success-600": "43 87 0", // #2b5700
		"--color-success-700": "36 73 0", // #244900
		"--color-success-800": "29 58 0", // #1d3a00
		"--color-success-900": "24 48 0", // #183000
		// warning | #ffda1f 
		"--color-warning-50": "255 249 221", // #fff9dd
		"--color-warning-100": "255 248 210", // #fff8d2
		"--color-warning-200": "255 246 199", // #fff6c7
		"--color-warning-300": "255 240 165", // #fff0a5
		"--color-warning-400": "255 229 98", // #ffe562
		"--color-warning-500": "255 218 31", // #ffda1f
		"--color-warning-600": "230 196 28", // #e6c41c
		"--color-warning-700": "191 164 23", // #bfa417
		"--color-warning-800": "153 131 19", // #998313
		"--color-warning-900": "125 107 15", // #7d6b0f
		// error | #81160e 
		"--color-error-50": "236 220 219", // #ecdcdb
		"--color-error-100": "230 208 207", // #e6d0cf
		"--color-error-200": "224 197 195", // #e0c5c3
		"--color-error-300": "205 162 159", // #cda29f
		"--color-error-400": "167 92 86", // #a75c56
		"--color-error-500": "129 22 14", // #81160e
		"--color-error-600": "116 20 13", // #74140d
		"--color-error-700": "97 17 11", // #61110b
		"--color-error-800": "77 13 8", // #4d0d08
		"--color-error-900": "63 11 7", // #3f0b07
		// surface | #073fe2 
		"--color-surface-50": "218 226 251", // #dae2fb
		"--color-surface-100": "205 217 249", // #cdd9f9
		"--color-surface-200": "193 207 248", // #c1cff8
		"--color-surface-300": "156 178 243", // #9cb2f3
		"--color-surface-400": "81 121 235", // #5179eb
		"--color-surface-500": "7 63 226", // #073fe2
		"--color-surface-600": "6 57 203", // #0639cb
		"--color-surface-700": "5 47 170", // #052faa
		"--color-surface-800": "4 38 136", // #042688
		"--color-surface-900": "3 31 111", // #031f6f
		
	}
}