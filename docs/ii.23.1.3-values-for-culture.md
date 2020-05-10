## II.23.1.3 Values for Culture

 | &nbsp;| &nbsp;| &nbsp;| &nbsp;
 ---- | ---- | ---- | ----
 `ar-SA` | `ar-IQ` | `ar-EG` | `ar-LY`
 `ar-DZ` | `ar-MA` | `ar-TN` | `ar-OM`
 `ar-YE` | `ar-SY` | `ar-JO` | `ar-LB`
 `ar-KW` | `ar-AE` | `ar-BH` | `ar-QA`
 `bg-BG` | `ca-ES` | `zh-TW` | `zh-CN`
 `zh-HK` | `zh-SG` | `zh-MO` | `cs-CZ`
 `da-DK` | `de-DE` | `de-CH` | `de-AT`
 `de-LU` | `de-LI` | `el-GR` | `en-US`
 `en-GB` | `en-AU` | `en-CA` | `en-NZ`
 `en-IE` | `en-ZA` | `en-JM` | `en-CB`
 `en-BZ` | `en-TT` | `en-ZW` | `en-PH`
 `es-ES-Ts` | `es-MX` | `es-ES-Is` | `es-GT`
 `es-CR` | `es-PA` | `es-DO` | `es-VE`
 `es-CO` | `es-PE` | `es-AR` | `es-EC`
 `es-CL` | `es-UY` | `es-PY` | `es-BO`
 `es-SV` | `es-HN` | `es-NI` | `es-PR`
 `fi-FI` | `fr-FR` | `fr-BE` | `fr-CA`
 `fr-CH` | `fr-LU` | `fr-MC` | `he-IL`
 `hu-HU` | `is-IS` | `it-IT` | `it-CH`
 `ja-JP` | `ko-KR` | `nl-NL` | `nl-BE`
 `nb-NO` | `nn-NO` | `pl-PL` | `pt-BR`
 `pt-PT` | `ro-RO` | `ru-RU` | `hr-HR`
 `lt-sr-SP` | `cy-sr-SP` | `sk-SK` | `sq-AL`
 `sv-SE` | `sv-FI` | `th-TH` | `tr-TR`
 `ur-PK` | `id-ID` | `uk-UA` | `be-BY`
 `sl-SI` | `et-EE` | `lv-LV` | `lt-LT`
 `fa-IR` | `vi-VN` | `hy-AM` | `lt-az-AZ`
 `cy-az-AZ` | `eu-ES` | `mk-MK` | `af-ZA`
 `ka-GE` | `fo-FO` | `hi-IN` | `ms-MY`
 `ms-BN` | `kk-KZ` | `ky-KZ` | `sw-KE`
 `lt-uz-UZ` | `cy-uz-UZ` | `tt-TA` | `pa-IN`
 `gu-IN` | `ta-IN` | `te-IN` | `kn-IN`
 `mr-IN` | `sa-IN` | `mn-MN` | `gl-ES`
 `kok-IN` | `syr-SY` | `div-MV` |

**Note on RFC 1766, Locale names:** a typical string would be "``en-US``". The first part ("`en`" in the example) uses ISO 639 characters ("`Latin-alphabet` characters in lowercase. No diacritical marks of modified characters are used"). The second part ("`US`" in the example) uses ISO 3166 characters (similar to ISO 639, but uppercase); that is, the familiar ASCII characters `a`&mdash;`z` and `A`&mdash;`Z`, respectively. However, whilst RFC 1766 recommends the first part be lowercase and the second part be uppercase, it allows mixed case. Therefore, the validation rule checks only that _Culture_ is one of the strings in the list above&mdash;but the check is totally `case-blind`&mdash;where `case-blind` is the familiar fold on values less than U+0080.
