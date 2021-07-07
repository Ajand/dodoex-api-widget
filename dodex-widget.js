/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, unsafeCSS, svg} from 'lit';

// Coins Dictionary
const iconsDictionary = {
  ethereum:
    'https://cdn-media.dodoex.io/erc20/https_s2_coinmarketcap_com_static_img_coins_64x64_1027_13267ae470.png',
  usdc:
    'https://app.dodoex.io/assets/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/logo.png',
  dodo: `data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='50px' height='50px' viewBox='0 0 50 50' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 60 (88103) - https://sketch.com --%3e %3ctitle%3e%e7%94%bb%e6%9d%bf%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cdefs%3e %3clinearGradient x1='4.51827151%25' y1='-4.3727563%25' x2='100%25' y2='100%25' id='linearGradient-1'%3e %3cstop stop-color='%23FFFC2C' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='%23EFE806' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3c/defs%3e %3cg id='%e7%94%bb%e6%9d%bf' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='%e7%bc%96%e7%bb%84'%3e %3ccircle id='%e6%a4%ad%e5%9c%86%e5%bd%a2' fill='url(%23linearGradient-1)' cx='25' cy='25' r='25'%3e%3c/circle%3e %3cpath d='M25.4338561%2c8 C26.5689739%2c8 27.4891195%2c9.6770428 27.4891195%2c11.7454141 C27.4891195%2c11.7954419 27.4882148%2c11.8449138 27.4871291%2c11.8943858 C28.0965785%2c11.1484158 28.8077236%2c10.7785807 29.3504014%2c11.0146378 C29.9023078%2c11.2547712 30.1370038%2c12.0607745 30.0253558%2c13.0531777 C29.9980319%2c13.5234389 29.8847554%2c14.0398369 29.6797357%2c14.5571614 C29.5608497%2c14.8571429 29.4195254%2c15.1345192 29.2637249%2c15.3844729 C37.352502%2c17.2356865 43.0888909%2c24.0885677 42.9989573%2c36 L42.9989573%2c36 L38.0759518%2c36 C38.1523139%2c25.9036502 32.4669537%2c20.9186585 25.0277978%2c20.7619048 C16.9267159%2c20.5912544 12.4425213%2c26.1532333 11.9233674%2c36 L11.9233674%2c36 L7%2c36 C7.63080192%2c24.0389105 12.6413886%2c16.7509728 21.4431202%2c15.318325 C21.3023388%2c15.1076524 21.0428523%2c14.681675 20.9272234%2c14.4337595 C20.2372498%2c12.9564573 20.3353263%2c11.4352418 21.1461764%2c11.0357606 C21.7945308%2c10.7165092 22.7021907%2c11.2119696 23.3927071%2c12.1789883 C23.3836594%2c12.036687 23.3785927%2c11.8921623 23.3785927%2c11.7454141 C23.3785927%2c9.6770428 24.2987384%2c8 25.4338561%2c8 Z M20.9383096%2c26.5747867 C21.5315041%2c26.5747867 22.0125209%2c27.1257146 22.0125209%2c27.8049285 L22.0125209%2c27.8049285 L22.0125209%2c30.8265478 C22.0125209%2c31.5059879 21.5315041%2c32.0566897 20.9383096%2c32.0566897 C20.3449169%2c32.0566897 19.8639002%2c31.5059879 19.8639002%2c30.8265478 L19.8639002%2c30.8265478 L19.8639002%2c27.8049285 C19.8639002%2c27.1257146 20.3449169%2c26.5747867 20.9383096%2c26.5747867 Z M29.5325944%2c26.5747867 C30.1259871%2c26.5747867 30.6070038%2c27.1257146 30.6070038%2c27.8049285 L30.6070038%2c27.8049285 L30.6070038%2c30.8265478 C30.6070038%2c31.5059879 30.1259871%2c32.0566897 29.5325944%2c32.0566897 C28.9393999%2c32.0566897 28.4583831%2c31.5059879 28.4583831%2c30.8265478 L28.4583831%2c30.8265478 L28.4583831%2c27.8049285 C28.4583831%2c27.1257146 28.9393999%2c26.5747867 29.5325944%2c26.5747867 Z' id='%e5%bd%a2%e7%8a%b6%e7%bb%93%e5%90%88' fill='black'%3e%3c/path%3e %3c/g%3e %3c/g%3e%3c/svg%3e`,
  dg: `https://cdn-media.dodoex.io/erc20/https_cdn_media_dodoex_io_DG_67749c57c3_DG_67749c57c3_2a7f832280.svg`,
  '0xbtc':
    'https://app.dodoex.io/assets/ethereum/0xb6ed7644c69416d67b522e20bc294a9a9b405b31/logo.png',
  '1inch':
    'https://cdn-media.dodoex.io/1inch_400x400_fb757100b7/1inch_400x400_fb757100b7.jpg',
  aave:
    'https://app.dodoex.io/assets/ethereum/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9/logo.png',
  ac:
    'https://cdn-media.dodoex.io/erc20/https_cdn_media_dodoex_io_AC_1d6b23a1f4_AC_1d6b23a1f4_3ac639b333.svg',
  aion:
    'https://app.dodoex.io/assets/ethereum/0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466/logo.png',
  juju: `data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='28px' height='28px' viewBox='0 0 28 28' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 60 (88103) - https://sketch.com --%3e %3ctitle%3e%e7%94%bb%e6%9d%bf%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='%e7%94%bb%e6%9d%bf' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-family='AppleColorEmoji%2c Apple Color Emoji' font-size='24' font-weight='normal' line-spacing='28'%3e %3ctext id='%f0%9f%90%a3' fill='white'%3e %3ctspan x='2' y='24'%3e%f0%9f%90%a3%3c/tspan%3e %3c/text%3e %3c/g%3e%3c/svg%3e`,
  akita:
    'https://cdn-media.dodoex.io/erc20/https_cdn_media_dodoex_io_AKTIA_2_d913158e82_AKTIA_2_d913158e82_524a50d326.svg',
  akro:
    'https://app.dodoex.io/assets/ethereum/0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7/logo.png',
  binance: `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%227.5in%22%20height%3D%227.5in%22%20version%3D%221.1%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%207500%207500%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23f0b90b%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil2%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Layer_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cmetadata%20id%3D%22CorelCorpID_0Corel-Layer%22%2F%3E%20%20%20%20%20%20%20%20%3Crect%20class%3D%22fil0%22%20width%3D%227500%22%20height%3D%227500%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22_2419820813232%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20class%3D%22fil1%22%20cx%3D%223750%22%20cy%3D%223750%22%20r%3D%223500%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil2%22%20d%3D%22M2779%203351l971%20-971%20971%20972%20565%20-565%20-1536%20-1537%20-1536%201536%20565%20565%200%200zm-1529%20399l565%20-565%20565%20565%20-565%20565%20-565%20-565zm1529%20399l971%20971%20971%20-972%20566%20565%200%200%20-1537%201537%20-1536%20-1536%20-1%20-1%20566%20-564%200%200zm2341%20-399l565%20-565%20565%20565%20-565%20565%20-565%20-565z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil2%22%20d%3D%22M4380%203750l0%200%20-630%20-632%20-466%20467%200%200%20-54%2054%20-111%20111%20-1%201%201%201%20630%20630%20631%20-631%200%200%200%200%200%20-1zm0%200l0%200%200%200z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3Cstyle%20xmlns%3D%22%22%3E%23yddContainer%7Bdisplay%3Ablock%3Bfont-family%3AMicrosoft%20YaHei%3Bposition%3Arelative%3Bwidth%3A100%25%3Bheight%3A100%25%3Btop%3A-4px%3Bleft%3A-4px%3Bfont-size%3A12px%3Bborder%3A1px%20solid%7D%23yddTop%7Bdisplay%3Ablock%3Bheight%3A22px%7D%23yddTopBorderlr%7Bdisplay%3Ablock%3Bposition%3Astatic%3Bheight%3A17px%3Bpadding%3A2px%2028px%3Bline-height%3A17px%3Bfont-size%3A12px%3Bcolor%3A%235079bb%3Bfont-weight%3Abold%3Bborder-style%3Anone%20solid%3Bborder-width%3A1px%7D%23yddTopBorderlr%20.ydd-sp%7Bposition%3Aabsolute%3Btop%3A2px%3Bheight%3A0%3Boverflow%3Ahidden%7D.ydd-icon%7Bleft%3A5px%3Bwidth%3A17px%3Bpadding%3A0px%200px%200px%200px%3Bpadding-top%3A17px%3Bbackground-position%3A-16px%20-44px%7D.ydd-close%7Bright%3A5px%3Bwidth%3A16px%3Bpadding-top%3A16px%3Bbackground-position%3Aleft%20-44px%7D%23yddKeyTitle%7Bfloat%3Aleft%3Btext-decoration%3Anone%7D%23yddMiddle%7Bdisplay%3Ablock%3Bmargin-bottom%3A10px%7D.ydd-tabs%7Bdisplay%3Ablock%3Bmargin%3A5px%200%3Bpadding%3A0%205px%3Bheight%3A18px%3Bborder-bottom%3A1px%20solid%7D.ydd-tab%7Bdisplay%3Ablock%3Bfloat%3Aleft%3Bheight%3A18px%3Bmargin%3A0%205px%20-1px%200%3Bpadding%3A0%204px%3Bline-height%3A18px%3Bborder%3A1px%20solid%3Bborder-bottom%3Anone%7D.ydd-trans-container%7Bdisplay%3Ablock%3Bline-height%3A160%25%7D.ydd-trans-container%20a%7Btext-decoration%3Anone%3B%7D%23yddBottom%7Bposition%3Aabsolute%3Bbottom%3A0%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A22px%3Bline-height%3A22px%3Boverflow%3Ahidden%3Bbackground-position%3Aleft%20-22px%7D.ydd-padding010%7Bpadding%3A0%2010px%7D%23yddWrapper%7Bcolor%3A%23252525%3Bz-index%3A10001%3Bbackground%3Aurl%28chrome-extension%3A%2F%2Feopjamdnofihpioajgfdikhhbobonhbb%2Fab20.png%29%3B%7D%23yddContainer%7Bbackground%3A%23fff%3Bborder-color%3A%234b7598%7D%23yddTopBorderlr%7Bborder-color%3A%23f0f8fc%7D%23yddWrapper%20.ydd-sp%7Bbackground-image%3Aurl%28chrome-extension%3A%2F%2Feopjamdnofihpioajgfdikhhbobonhbb%2Fydd-sprite.png%29%7D%23yddWrapper%20a%2C%23yddWrapper%20a%3Ahover%2C%23yddWrapper%20a%3Avisited%7Bcolor%3A%2350799b%7D%23yddWrapper%20.ydd-tabs%7Bcolor%3A%23959595%7D.ydd-tabs%2C.ydd-tab%7Bbackground%3A%23fff%3Bborder-color%3A%23d5e7f3%7D%23yddBottom%7Bcolor%3A%23363636%7D%23yddWrapper%7Bmin-width%3A250px%3Bmax-width%3A400px%3B%7D%3C%2Fstyle%3E%3C%2Fsvg%3E`,
  polygon: `data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3E%E5%B8%81%E7%A7%8D%E5%A4%87%E4%BB%BD%202%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22path-1%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22%E8%A1%A5%E5%85%85%E9%9C%80%E6%B1%82%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%BF%9E%E6%8E%A5%E9%92%B1%E5%8C%85-%E6%89%8B%E6%9C%BA%E5%A4%87%E4%BB%BD%22%20transform%3D%22translate%28-223.000000%2C%20-266.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E5%BC%B9%E7%AA%97%22%20transform%3D%22translate%2818.000000%2C%20132.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-4%22%20transform%3D%22translate%2820.000000%2C%2041.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-2%E5%A4%87%E4%BB%BD-2%22%20transform%3D%22translate%28156.000000%2C%2082.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84%22%20transform%3D%22translate%2829.000000%2C%2011.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20fill%3D%22white%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%92%99%E7%89%88%22%3E%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22download%22%20mask%3D%22url%28%23mask-2%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22%E6%A4%AD%E5%9C%86%E5%BD%A2%22%20fill%3D%22%238247E5%22%20fill-rule%3D%22nonzero%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M8.01148%2C5.30068%20C8.25312%2C5.16644%208.54688%2C5.16644%208.78852%2C5.30068%20L12.38852%2C7.30068%20C12.64248%2C7.44176%2012.8%2C7.70948%2012.8%2C8%20L12.8%2C9.30068%20L11.2%2C10.2%20L11.2%2C8.47072%20L8.4%2C6.91516%20L5.6%2C8.47072%20L5.6%2C11.52928%20L8.4%2C13.08484%20L15.21148%2C9.30068%20C15.45312%2C9.16644%2015.74688%2C9.16644%2015.98852%2C9.30068%20L19.58852%2C11.30068%20C19.84248%2C11.44176%2020%2C11.70948%2020%2C12%20L20%2C16%20C20%2C16.29052%2019.84248%2C16.55824%2019.58852%2C16.69932%20L15.98852%2C18.69932%20C15.74688%2C18.83356%2015.45312%2C18.83356%2015.21148%2C18.69932%20L11.61148%2C16.69932%20C11.35752%2C16.55824%2011.2%2C16.29052%2011.2%2C16%20L11.2%2C14.69932%20L12.8%2C13.8%20L12.8%2C15.52928%20L15.6%2C17.08484%20L18.4%2C15.52928%20L18.4%2C12.47072%20L15.6%2C10.91516%20L8.78852%2C14.69932%20C8.54688%2C14.83356%208.25312%2C14.83356%208.01148%2C14.69932%20L4.41148%2C12.69932%20C4.15752%2C12.55824%204%2C12.29052%204%2C12%20L4%2C8%20C4%2C7.70948%204.15752%2C7.44176%204.41148%2C7.30068%20L8.01148%2C5.30068%20Z%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E`,
  heco: `data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22path-1%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22%E8%A1%A5%E5%85%85%E9%9C%80%E6%B1%82%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%BF%9E%E6%8E%A5%E9%92%B1%E5%8C%85-%E6%89%8B%E6%9C%BA%22%20transform%3D%22translate%28-77.000000%2C%20-389.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E5%BC%B9%E7%AA%97%22%20transform%3D%22translate%2818.000000%2C%20132.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-2%E5%A4%87%E4%BB%BD%22%20transform%3D%22translate%2820.000000%2C%20246.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84%22%20transform%3D%22translate%2839.000000%2C%2011.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20fill%3D%22white%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20id%3D%22%E8%92%99%E7%89%88%22%20fill%3D%22%23FFFFFF%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22heco%22%20mask%3D%22url%28%23mask-2%29%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%286.000000%2C%203.000000%29%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M8%2C5.5394573%20C8%2C2.9553776%206.69291824%2C0.732436966%205.69924793%2C0.00865379012%20C5.69451983%2C0.00713641481%205.62366129%2C-0.0323151355%205.62995609%2C0.0708656239%20C5.62995609%2C0.0723832069%205.62838239%2C0.0723832069%205.62838239%2C0.0739007899%20C5.54649394%2C5.06452028%202.90089834%2C6.4164915%201.44581867%2C8.23885807%20C-1.91157276%2C12.4435046%201.21117623%2C17.0532322%204.39062044%2C17.9044495%20C6.17009952%2C18.3809096%203.9796045%2C17.0608478%203.69772303%2C14.2718736%20C3.35599892%2C10.9018285%208%2C8.32989921%208%2C5.5394573%20Z%22%20fill%3D%22%232D3338%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M9.52866244%2C7.01281083%20C9.50640749%2C6.9988161%209.47564553%2C6.98955696%209.45339058%2C7.02206997%20C9.39353768%2C7.66342435%208.67013794%2C9.03589727%207.75350752%2C10.2952815%20C4.64446849%2C14.5677025%206.41618263%2C16.6280375%207.41322708%2C17.7340452%20C7.99124809%2C18.3769545%207.41322708%2C17.7340452%208.8582796%2C17.0772824%20C8.9711494%2C17.0261098%2011.6800247%2C15.6505269%2011.9724532%2C12.5166973%20C12.2580457%2C9.48203226%2010.2452262%2C7.56892459%209.52866244%2C7.01281083%20Z%22%20fill%3D%22%2301943F%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E`,
};

const formatRatio = (ratio) => {
  const intDigits = String(parseInt(ratio)).length;
  if (intDigits < 8) return parseFloat(ratio).toFixed(8 - intDigits);
  return ratio;
};

const toHex = (number) => '0x' + number.toString(16);
const toInt = (hex) => parseInt(hex.replace('0x', ''), 16);

const chainName = (chainId) => {
  switch (chainId) {
    case 1:
      return 'Ethereum';
    case 42:
      return 'Kovan';
    case 128:
      return 'Heco';
    case 56:
      return 'Binance';
    default:
      return null;
  }
};

const networkName = (chainId) => {
  switch (chainId) {
    case 1:
      return 'ethereum';
    case 42:
      return 'kovan';
    case 128:
      return 'heco';
    case 56:
      return 'binance';
    default:
      return null;
  }
};

const isReallyConnected = (chainId, accountAddress) =>
  chainName(chainId) && accountAddress;

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class Widget extends LitElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        padding: 20px;
        max-width: 800px;
        background-color: var(--dodoBackground);
        color: var(--dodoText);
        font-family: var(--dodoFontFamily) !important;
        position: relative;
        height: 100%
      }

      .loading-image {
        width: 50%;
      }

      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .button {
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        color: rgb(0, 0, 0);
        background-color: var(--dodoPrimary);
        display: block;
        padding: 15px;
        font-size: 20px;
        width: 100%;
        height: auto;
        cursor: pointer;
        font-family: var(--dodoFontFamily) !important;
        border-radius: 10px;
      }

      .button:disabled {
        background: var(--dodoSecondaryBackground);
        color: var(--dodoBackground);
        cursor: not-allowed;
      }

      .icon-button {
        fill: var(--dodoText);
        padding-left: 0px;
        padding-right: 0px;
        width: 36px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-left: 4px;
        background-color: rgb(38, 39, 41);
        background: rgb(38, 39, 41);
        color: rgb(255, 255, 255);
        font-size: 14px;
        border-radius: 10px;
        white-space: nowrap;
        height: 36px;
        appearance: none;
        cursor: pointer;
        border: none;
        outline: 0px;
        box-shadow: none;
        transition: background-color 250ms ease 0s, color 250ms ease 0s;
      }

      .icon-button:hover {
        border: none;
        outline: 0px;
        background: rgb(64, 62, 37);
        color: rgb(255, 232, 4);
        fill: var(--dodoPrimary) !important;
      }

      .top-bar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .top-bar-buttons {
        display: flex;
        justify-content: flex-end;
      }

      .field {
        margin-bottom: 10px;
      }

      .field-top {
        display: flex;
        margin-bottom: 8px;
        line-height: 19px;
        height: 19px;
      }

      .field-label {
        flex: 1 1 0%;
        font-size: 14px;
        color: rgb(255, 255, 255);
        font-family: var(--dodoFontFamily) !important;
        margin-bottom: 5px;
      }

      .field-container {
        border-radius: 10px;
        border-style: solid;
        border-color: transparent;
        background: var(--dodoSecondaryBackground);
        border-width: 1px;
        height: 58px;
        padding: 0px 16px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }

      .field-currency-container {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        padding-right: 10px;
        height: 100%;
      }

      .field-currency-info {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }

      .field-currency-icon {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }

      .field-icon-image {
        width: 100%;
      }

      .field-currnecy-label {
        font-size: 16px;
        font-weight: 500;
      }

      .field-input {
        border: none;
        background: transparent;
        padding: 0px;
        outline: none;
        height: 58px;
        line-height: 58px;
        font-weight: 600;
        width: 0px;
        flex: 1 1 0%;
        min-width: 0px;
        color: white;
        font-size: 20px;
        margin-right: 10px;
        text-align: right;
      }

      .field-secondary {
        color: var(--dodoSecondaryText);
        cursor: pointer;
        font-size: 12px;
        line-height: 16px;
        height: 16px;
      }

      .available-max {
        margin-left: 4px;
        padding: 0px 4px;
        line-height: 17px;
        font-size: 12px;
        font-weight: 400;
        border-radius: 2px;
        background-color: var(--dodoPrimaryDark);
        color: var(--dodoPrimary);
      }

      .swap-fields-container {
        margin: 10px 0px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
      }

      .swap-button-svg-circle {
        stroke: var(--dodoText);
      }

      .swap-button-svg-arrow {
        fill: var(--dodoText);
      }

      .swap-button-icon {
        cursor: pointer;
        user-select: none;
      }

      .swap-button-icon:hover > g > .swap-button-svg-circle {
        stroke: var(--dodoPrimary);
      }

      .swap-button-icon:hover > g > .swap-button-svg-arrow {
        fill: var(--dodoPrimary);
      }

      .ratio-container {
        line-height: 24px;
        color: var(--dodoSecondaryText);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin: 20px 0px;
        font-size: 14px;
      }

      .inverse-button-container {
        margin-left: 10px;
        cursor: pointer;
      }

      .inverse-button {
        cursor: pointer;
        user-select: none;
        color: rgb(55, 55, 57);
        display: flex;
      }

      .inverse-button:hover {
        color: rgb(65, 65, 67);
      }

      .helper-message-container {
        padding: 10px;
        font-size: 12px;
        background-color: var(--dodoHelperBackground);
        border-radius: 10px;
        color: var(--dodoSecondaryText);
        margin-top: 10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-bottom: 10px;
      }

      .modal-wrapper {
        position: fixed;
        inset: 0px;
        z-index: 1065;
        background: var(--dodoModalOverlay);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
      }

      .modal-underlay {
        width: 100%;
        height: 100%;
        position: fixed;
      }

      .modal-container {
        width: 467px;
        max-height: calc(100vh - 120px);
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 95%;
        border-radius: 15px;
        background: rgb(42, 42, 45);
        color: rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
      }

      .connect-modal-header {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        font-size: 20px;
        line-height: 28px;
        margin-top: 30px;
        text-align: left;
        margin-left: 30px;
        padding-right: 30px;
        margin-bottom: 20px;
        font-weight: 600;
        color: rgb(255, 255, 255);
      }

      .terms-and-service-container {
        align-items: flex-start;
        display: flex;
        background-color: var(--dodoPrimaryDark);
        margin-top: 0px;
        margin-bottom: 20px;
        padding: 16px;
        background-color: rgba(255, 232, 4, 0.06);
        border-radius: 4px;
      }

      .checkbox-container {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 8px;
      }

      .checkbox-input {
        border: 0px;
        clip: rect(0px, 0px, 0px, 0px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        white-space: nowrap;
        width: 1px;
        box-sizing: border-box;
        padding: 0;
        line-height: normal;
      }

      .checkbox-svg-container-checked {
        display: flex;
        width: 16px;
        height: 16px;
        border: 1px solid var(--dodoPrimary);
        border-radius: 4px;
        transition: all 150ms ease 0s;
        cursor: pointer;
        background: var(--dodoPrimary) !important;
      }

      .checkbox-svg-container-unchecked {
        display: flex;
        width: 16px;
        height: 16px;
        border: 1px solid var(--dodoSecondaryText);
        border-radius: 4px;
        transition: all 150ms ease 0s;
        cursor: pointer;
      }

      .checkbox-svg-container-unchecked:hover {
        border: 1px solid var(--dodoPrimary);
      }

      .checkbox-svg-unchecked {
        visibility: hidden;
      }

      .checkbox-svg-checked {
        visibility: visible;
      }
      .terms-and-service-description {
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
      }

      .terms-and-service-description a {
        color: var(--dodoPrimary) !important;
        text-decoration: none;
      }

      .connect-modal-content {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 20px;
      }

      .connect-modal-section-title {
        margin-bottom: 8px;
        font-size: 14px;
        color: var(--dodoSecondaryText);
      }

      .connect-modal-select-network-container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }

      .select-network-button-root {
        margin-bottom: 8px;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
        width: 47.5%;
        border-radius: 4px;
        height: 46px;
        font-weight: 500;
        background-color: var(--dodoSecondaryBackground);
        outline: 0px;
        position: relative;
        border: none !important;
        cursor: pointer;
        color: var(--dodoText);
        transition: all 0.2s;
      }

      .select-network-button-root:hover {
        outline: 0px;
        background-color: var(--dodoHelperLightBackground);
      }

      .select-network-button-root:disabled {
        outline: 0px;
        background-color: var(--dodoHelperBackground);
        cursor: not-allowed;
      }

      .select-network-button-root:nth-of-type(2n + 1) {
        margin-right: 5%;
      }

      .select-network-button-icon {
        margin-right: 6px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: visible;
        flex-shrink: 0;
      }

      .select-network-button-icon img,
      .select-network-button-icon svg {
        vertical-align: baseline;
        width: 100%;
        height: 100%;
      }

      .ether-link-svg-container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 28px;
        height: 28px;
        border-radius: 4px 0px 0px;
        overflow: hidden;
      }

      .ether-link-svg {
        position: absolute;
        top: 3px;
        left: 3px;
        z-index: 1;
        overflow: hidden;
        vertical-align: middle;
      }

      .ether-link-svg-container::after {
        position: absolute;
        top: 0px;
        left: 0px;
        content: '';
        display: block;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 28px 28px 0px 0px;
        border-color: rgb(74, 74, 76) transparent transparent;
      }

      .selected-svg-container {
        position: absolute;
        right: -5px;
        bottom: -5px;
        padding: 2px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: rgb(42, 42, 45);
      }

      .selected-svg-wrapper {
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgb(0, 250, 217);
        font-size: 14px;
      }

      .selected-svg {
        position: relative;
        top: 1px;
        width: 13px;
        height: 13px;
      }

      .connect-modal-select-wallet-container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 24px;
      }

      .connect-modal-select-wallet-button-container {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 25%;
        font-weight: 500;
        line-height: 1.5;
        font-size: 12px;
        text-align: center;
        outline: 0px;
        color: rgb(255, 255, 255);
      }

      .select-wallet-button-wrapper {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 25%;
        font-weight: 500;
        line-height: 1.5;
        font-size: 12px;
        text-align: center;
        outline: 0px;
        color: var(--dodoText);
      }

      .select-wallet-button {
        background: var(--dodoHelperBackground);
        color: var(--dodoText);
        padding: 5px 12px;
        font-size: 14px;
        border-radius: 10px;
        white-space: nowrap;
        height: 36px;
        appearance: none;
        cursor: pointer;
        border: none;
        outline: 0px;
        box-shadow: none;
        transition: background-color 250ms ease 0s, color 250ms ease 0s;

        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-bottom: 2px;
        padding: 0px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        font-weight: 500;
        background-color: var(--dodoSecondaryBackground);
        position: relative;
        border: none !important;
      }

      .select-wallet-button:hover {
        outline: 0px;
        background-color: var(--dodoHelperLightBackground);
        color: var(--dodoText);
      }

      .select-wallet-button:disabled {
        cursor: default;
        outline: 0px;
        background-color: var(--dodoHelperBackground);
        color: var(--dodoHelperBackground);

        cursor: not-allowed;
      }

      .select-wallet-button svg {
        width: 50%;
        height: 50%;
        overflow: hidden;
        vertical-align: middle;
      }

      .field-currency-expand {
        display: flex;
        padding: 6px;
      }

      .secondary-header-container {
        color: var(--dodoText);
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
        margin-bottom: 27px;
        text-align: center;
        position: relative;
      }

      .secondary-header-back-button {
        position: absolute;
        top: 0px;
        bottom: 0px;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        left: 0px;
        cursor: pointer;
        fill: var(--dodoText);
        width: 16px;
      }

      .search-input-container {
        background: var(--dodoSecondaryBackground);
        border-radius: 10px;
        border-style: solid;
        border-color: transparent;
        border-width: 1px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 10px;
      }

      .search-input {
        border: none;
        background: transparent;
        padding: 0px;
        outline: none;
        height: 58px;
        line-height: 58px;
        font-weight: 400;
        width: 0px;
        flex: 1 1 0%;
        min-width: 0px;
        color: white;
        font-size: 20px;
        margin-right: 10px;
        height: 46px;
        font-size: 14px;
      }

      .search-input-icon {
        fill: var(--dodoSecondaryText);
        width: 16px;
        height: 16px;
      }

      .currency-item-container {
        position: relative;
        display: flex;
        border-radius: 10px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding: 2px 12px;
        box-sizing: border-box;
        cursor: pointer;
      }

      .currency-item-container[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .currency-item-container:hover {
        background-color: var(--dodoHelperLightBackground);
      }

      .currency-item-image-container {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        min-width: 32px;
        z-index: 2;
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }

      .currency-item-image {
        vertical-align: middle;
        border-style: none;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .currency-item-right-wrapper {
        display: flex;
        flex: 1 1 0%;
        padding: 0px;
        color: rgb(255, 255, 255);
        align-items: flex-start;
        position: relative;
        z-index: 2;
        align-items: center;
      }

      .currency-item-right-left {
        display: flex;
        flex-direction: column;
        width: auto;
        align-items: center;
      }

      .currency-item-symbol {
        font-size: 16px;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        font-weight: 500;
      }

      .currency-item-value {
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
      }

      .currency-item-right-right {
        display: flex;
        flex: 1 1 0%;
        margin-left: 8px;
        box-sizing: border-box;
        text-align: right;
        align-items: center;
      }

      .currency-item-name {
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        font-size: 14px;
        color: var(--dodoSecondaryText);
      }

      .currency-info-icon {
        display: inline-block;
        padding: 13px 0px 10px 12px;
      }

      .currency-list-container {
        margin-top: 1em;
        overflow-y: auto;
        max-height: 400px;
        overflow-x: hidden;
        padding-right: 8px;
      }

      .currency-list-container::-webkit-scrollbar {
        width: 2px;
      }

      .currency-list-container::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      .currency-list-container::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
      }

      .connected-network-container {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: var(--dodoText);
        font-size: 14px;
        font-weight: 400;
        height: 36px;
        background-color: var(--dodoSecondaryBackground);
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        padding-right: 23px;
        padding-left: 24px;
        margin-right: -17px;
      }

      .connected-address {
        background: rgb(38, 39, 41);
        color: rgb(255, 255, 255);
        padding: 5px 12px;
        font-size: 14px;
        border-radius: 20px;
        white-space: nowrap;
        border: 1px solid var(--dodoPrimary);
        color: var(--dodoPrimary);

        height: 36px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 0px 16px;
        text-align: center;
      }

      .connected-wallet {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        left: 0;
      }

      @media screen and (max-width: 767px) {
        .modal-container {
          width: 91vw !important;
        }

        .connect-modal-select-wallet-button-container {
          max-width: 100%;
          min-width: 0px;
          padding-top: 4px;
          padding-bottom: 4px;
          padding-left: 0px;
        }

        .select-wallet-button-wrapper {
          width: 33%;
        }

        .search-input {
          height: 58px;
          line-height: 58px;
        }
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
      color: {type: String},
      inverse: {
        type: Boolean,
      },
      openConnectModal: {
        type: Boolean,
      },
      acceptTermsAndService: {
        type: Boolean,
      },
      selectedNetwork: {
        type: String,
      },
      connectionStatus: {type: String},
      initialLoading: {
        type: Boolean,
      },
      tokens: {type: Array},
      pay: {type: Object},
      receive: {type: Object},
      currentScreen: {type: String},
      showAmount: {type: Number},
      defaultpay: {type: String, attribute: true},
      defaultreceive: {type: String, attribute: true},
      price: {type: Number},
      payAmount: {type: Number},
      searchString: {type: String},
      chainId: {type: Number},
      selectedAccount: {type: String},
      route: {type: Object},
      ethrpc: {type: String, attribute: true},
      kovanrpc: {type: String, attribute: true},
      polygonrpc: {type: String, attribute: true},
      bscrpc: {type: String, attribute: true},
      hecorpc: {type: String, attribute: true},
    };
  }

  metamaskHandler() {
    if (window.ethereum) {
      if (ethereum.isConnected()) {
        this.chainId = toInt(ethereum.chainId);
        this.selectedAccount = ethereum.selectedAddress;
      }

      ethereum.on('connect', (info) => {
        this.chainId = toInt(ethereum.chainId);
        this.selectedAccount = ethereum.selectedAddress;
      });
      ethereum.on('accountsChanged', (info) => {
        this.chainId = toInt(ethereum.chainId);
        this.selectedAccount = ethereum.selectedAddress;
        window.location.reload();
      });
      ethereum.on('chainChanged', (info) => {
        this.chainId = toInt(ethereum.chainId);
        this.selectedAccount = ethereum.selectedAddress;
        window.location.reload();
      });
      ethereum.on('disconnect', (info) => {
        this.chainId = toInt(ethereum.chainId);
        this.selectedAccount = ethereum.selectedAddress;
        window.location.reload();
      });
    }
  }

  constructor() {
    super();
    this.name = 'Widget';
    this.count = 0;
    this.inverse = false;
    this.openConnectModal = false;
    this.acceptTermsAndService = true;
    this.selectedNetwork = 'ethereum';
    this.connectionStatus = 'disconnect';
    this.initialLoading = true;
    this.currentScreen = 'main';
    this.showAmount = 10;
    this.price = 2000;
    this.payAmount = 0;

    if (!Web3 && !window.Web3) {
      throw new Error(
        'no Web3 found! Must include Web3 or window.Web3 as a global variable.'
      );
    }

    this.addEventListener('pair-changed', () => {
      this._findCurrentPrice();
    });

    setInterval(() => {
      if (this.pay && this.receive) {
        console.log('automated refresh', this.refreshTime);
        this._findCurrentPrice(true);
      }
    }, 30 * 1000);
  }

  _findCurrentPrice(automated) {
    if (!this.pay || !this.receive) return;
    if (!automated) {
      this.price = 0;
    }
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://priceapi.dodoex.io/api/v1/klines?symbol=${this.pay.symbol}/${
        this.receive.symbol
      }&interval=15m&limit=96&addresses=${this.pay.address}/${
        this.receive.address
      }&network=${networkName(this.chainId)} `,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((res) => {
        return res.data;
      })
      .then((resArray) => {
        return resArray[resArray.length - 1];
      })
      .then((lastItem) => (this.price = lastItem[1]))
      .catch((error) => console.log('error', error));
  }

  _findRoute() {
    this.route = undefined;

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://dodo-route.dodoex.io/dodoapi/getdodoroute?fromTokenAddress=${
        this.pay.address
      }&fromTokenDecimals=${this.pay.decimals}&toTokenAddress=${
        this.receive.address
      }&toTokenDecimals=${this.receive.decimals}&fromAmount=${
        this.payAmount ** this.pay.decimals
      }&slippage=3&userAddr=${this.selectedAccount}&chainId=${1}&rpc=${
        this.ethrpc
      } `,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((res) => {
        if (res.status == 200) return res.data;
        throw new Error(res.data);
      })
      .then((route) => (this.route = route))
      .catch((error) => console.log('error', error));
  }

  connectedCallback() {
    super.connectedCallback();

    this.metamaskHandler();

    const defaultPay = this.defaultpay ? this.defaultpay : 'ETH';
    const defaultRecieve = this.defaultreceive ? this.defaultreceive : 'USDC';

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://cdn-static.dodoex.io/erc-20-s?_limit=1000&chains.name=${
        this.chainId == 1 ? 'mainnet' : networkName(this.chainId)
      }`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((tokens) => {
        function compare(a, b) {
          if (a.symbol < b.symbol) {
            return -1;
          }
          if (a.symbol > b.symbol) {
            return 1;
          }
          return 0;
        }

        const sortedTokens = tokens.sort(compare);

        this.tokens = sortedTokens;
        this.initialLoading = false;
        this.pay = tokens.find((token) => token.symbol === defaultPay)
          ? tokens.find((token) => token.symbol === defaultPay)
          : tokens[0];
        this.receive = tokens.find((token) => token.symbol === defaultRecieve)
          ? tokens.find((token) => token.symbol === defaultRecieve)
          : tokens[1];
        this.dispatchEvent(new Event('pair-changed'));
      })
      .catch((error) => console.log('error', error));
  }

  _setCurrentScreen(screen) {
    return () => {
      this.currentScreen = screen;
      this.searchString = '';
    };
  }

  refreshButtonIcon() {
    return html`<svg
      class="button-icon"
      height="20px"
      viewBox="0 0 512 512"
      width="20px"
    >
      <path
        d="M384,352l96-109.3h-66.1C407.1,141.8,325,64,223.2,64C117.8,64,32,150.1,32,256s85.8,192,191.2,192  c43.1,0,83.8-14.1,117.7-40.7l7.5-5.9l-43.2-46.2l-6.2,4.6c-22.1,16.3-48.3,24.9-75.8,24.9C152.6,384.7,95.1,327,95.1,256  c0-71,57.5-128.7,128.1-128.7c66.4,0,120.7,50,127.4,115.3h-74.1L384,352z"
      />
    </svg>`;
  }

  shareButtonIcon() {
    return html` <svg
      class="button-icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
      ></path>
    </svg>`;
  }

  configButtonIcon() {
    return html`<svg
      class="button-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style="width: 20px; height: 20px;"
    >
      <path
        id="形状"
        d="M10,20a1.8,1.8,0,0,1-1.756-1.312l-.125-.425a1.829,1.829,0,0,0-2.632-1.09l-.389.211a1.83,1.83,0,0,1-.883.233,1.855,1.855,0,0,1-1.578-.92,1.777,1.777,0,0,1-.022-1.8l.212-.388a1.831,1.831,0,0,0-1.09-2.632l-.426-.124a1.832,1.832,0,0,1,0-3.513l.426-.125a1.831,1.831,0,0,0,1.09-2.632L2.616,5.1A1.776,1.776,0,0,1,2.637,3.3a1.856,1.856,0,0,1,1.579-.921,1.833,1.833,0,0,1,.884.232l.387.212a1.837,1.837,0,0,0,.876.223A1.831,1.831,0,0,0,8.119,1.738l.125-.426a1.832,1.832,0,0,1,3.513,0l.124.426a1.831,1.831,0,0,0,2.632,1.09l.389-.211a1.83,1.83,0,0,1,.883-.233,1.855,1.855,0,0,1,1.578.92,1.779,1.779,0,0,1,.023,1.8l-.212.387a1.829,1.829,0,0,0,1.09,2.632l.425.125a1.832,1.832,0,0,1,0,3.513l-.425.124a1.829,1.829,0,0,0-1.09,2.632l.211.389a1.776,1.776,0,0,1-.021,1.795,1.857,1.857,0,0,1-1.579.921,1.832,1.832,0,0,1-.883-.232l-.388-.212a1.829,1.829,0,0,0-2.632,1.09l-.124.425A1.8,1.8,0,0,1,10,20ZM10,7a3,3,0,1,0,0,6h0a3,3,0,1,0,0-6Z"
        transform="translate(0 0)"
      ></path>
    </svg>`;
  }

  _swapPayReceive() {
    let temp = this.pay;
    this.pay = this.receive;
    this.receive = temp;
    this.dispatchEvent(new Event('pair-changed'));
  }

  swapButtonIcon() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        class="swap-button-icon"
        @click=${this._swapPayReceive}
      >
        <g id="icon-token转换" transform="translate(0.5 0.5)">
          <path
            id="路径"
            d="M25,12.5A12.5,12.5,0,1,1,12.5,0,12.5,12.5,0,0,1,25,12.5Z"
            fill="transparent"
            class="swap-button-svg-circle"
            stroke-miterlimit="10"
            stroke-width="1"
          ></path>
          <path
            class="swap-button-svg-arrow"
            id="路径-2"
            data-name="路径"
            d="M6.251.781a.781.781,0,0,0-1.562,0V9.833L1.335,6.478A.782.782,0,0,0,.229,7.584l4.687,4.688a.781.781,0,0,0,1.106,0L10.71,7.584A.782.782,0,0,0,9.6,6.478L6.251,9.833Z"
            transform="translate(7.03 6.25)"
          ></path>
        </g>
      </svg>
    `;
  }

  inverseButtonIcon() {
    return html` <svg
      id="arrow-left-right"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      class="inverse-button"
    >
      <circle id="椭圆形" cx="10" cy="10" r="10" fill="currentColor"></circle>
      <g id="jiaohuan" transform="translate(5 5)">
        <path
          id="形状"
          d="M7.762,10.057a.226.226,0,0,1-.034-.121V9.045H3.368A3.449,3.449,0,0,1,0,5.57V3.921a.368.368,0,0,1,.736-.009v1.6a2.721,2.721,0,0,0,2.588,2.8h4.4V7.416a.226.226,0,0,1,.346-.192l2.009,1.261a.226.226,0,0,1,.071.311.218.218,0,0,1-.071.072l-2.009,1.26a.226.226,0,0,1-.312-.071ZM9.426,6.251v-1.6a2.721,2.721,0,0,0-2.588-2.8H2.689v.893a.226.226,0,0,1-.227.226.229.229,0,0,1-.121-.034L.334,1.679a.225.225,0,0,1-.071-.311A.218.218,0,0,1,.334,1.3L2.342.035a.227.227,0,0,1,.347.192v.892h4.1a3.45,3.45,0,0,1,3.368,3.475V6.242a.368.368,0,0,1-.735.009Z"
        ></path>
      </g>
    </svg>`;
  }

  iconButton({icon, click}) {
    return html` <button @click=${click} class="icon-button">${icon}</button> `;
  }

  button({label, click, disabled = false}) {
    console.log(disabled, this.route);
    return html`<button @click=${click} ?disabled=${disabled} class="button">
      ${label}
    </button>`;
  }

  header() {
    return html`<div class="top-bar">
      <div class="connected-wallet">
        ${isReallyConnected(this.chainId, this.selectedAccount)
          ? html`
            <div class="connected-network-container">
              ${chainName(this.chainId)} 
            </div>
            <span class="connected-address">
             ${this.selectedAccount.slice(0, 5)}...${this.selectedAccount.slice(
              this.selectedAccount.length - 5,
              this.selectedAccount.length
            )}
            </span>
          </div>`
          : null}
      </div>

      <div class="top-bar-buttons">
        ${this.iconButton({
          icon: this.refreshButtonIcon(),
          click: () => this._findCurrentPrice(),
        })}
        ${this.iconButton({icon: this.shareButtonIcon()})}
        ${this.iconButton({icon: this.configButtonIcon()})}
      </div>
    </div>`;
  }

  expandIcon() {
    return html`
      <svg
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="StretchedInputArrowIcon__Svg-dodo__sc-1952kb8-0 hxIIuy"
      >
        <g
          id="展开箭头"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            transform="translate(3.000000, 4.000000)"
            fill="currentColor"
            id="三角形"
          >
            <path
              d="M4.41602515,0.624037721 L7.4817666,5.2226499 C7.63494283,5.45241425 7.5728559,5.76284892 7.34309155,5.91602515 C7.26095779,5.97078099 7.16445395,6 7.06574145,6 L0.934258546,6 C0.658116171,6 0.434258546,5.77614237 0.434258546,5.5 C0.434258546,5.40128751 0.46347756,5.30478366 0.518233399,5.2226499 L3.58397485,0.624037721 C3.73715108,0.394273376 4.04758575,0.332186442 4.2773501,0.485362672 C4.33227624,0.521980101 4.37940772,0.569111577 4.41602515,0.624037721 Z"
              transform="translate(4.000000, 3.000000) scale(1, -1) translate(-4.000000, -3.000000) "
            ></path>
          </g>
        </g>
      </svg>
    `;
  }

  amountField({label, currency, currencyIcon, secondary}) {
    return html`
      <div class="field">
        <div class="field-top">
          <div class="field-label">${label}</div>
          <div class="field-secondary">${secondary}</div>
        </div>
        <div class="field-container">
          <div class="field-currency-container">
            <div
              @click=${this._setCurrentScreen(
                label === 'Pay' ? 'selectPay' : 'selectReceive'
              )}
              class="field-currency-info"
            >
              <div class="field-currency-icon">
                <img
                  class="field-icon-image"
                  src="${currencyIcon}"
                  onerror="this.onerror=null;this.src='https://cdn-media.dodoex.io/erc20/https_app_dodoex_io_static_media_yellow_Duck_1b3a058e_7dfe42fa9b.svg';"
                />
              </div>
              <div class="field-currency-label">${currency}</div>
              <div class="field-currency-expand">${this.expandIcon()}</div>
            </div>
          </div>
          <input
            @input=${(e) => {
              if (label == 'Pay') {
                this.payAmount = e.target.value;
                console.log(this.route);
                if (
                  e.target.value != '' &&
                  isReallyConnected(this.chainId, this.selectedAccount)
                ) {
                  this._findRoute();
                }
              }
            }}
            value=${label === 'Pay'
              ? this.payAmount
                ? this.payAmount
                : ''
              : this.price && this.payAmount
              ? formatRatio(this.payAmount * this.price)
              : '0'}
            ?disabled=${label === 'Pay' ? false : true}
            class="field-input"
            placeholder="0"
          />
        </div>
      </div>
    `;
  }

  max() {
    return html`<span class="available-max">Max</span>`;
  }

  available({base, amount}) {
    return html`
      Available: ${amount ? amount : 'Loading'} ${base && this.max()}
    `;
  }

  _inverseRatio() {
    this.inverse = !this.inverse;
    this.update();
  }

  rate({base, quote, ratio}) {
    return ratio != '0'
      ? this.inverse
        ? html`
            1 ${quote} = ${formatRatio(1 / ratio)} ${base}
            <div
              class="inverse-button-container"
              @click="${this._inverseRatio}"
            >
              ${this.inverseButtonIcon()}
            </div>
          `
        : html`
            1 ${base} = ${formatRatio(ratio)} ${quote}
            <div
              class="inverse-button-container"
              @click="${this._inverseRatio}"
            >
              ${this.inverseButtonIcon()}
            </div>
          `
      : html`<div>Loading ...</div>`;
  }

  helperMessage() {
    return html` Enter an amount to see more trading details. `;
  }

  mainScreen() {

    console.log(this.pay, this.receive)

    return html`
      <div></div>
      <div>
        ${this.amountField({
          label: 'Pay',
          currency: this.pay.symbol,
          currencyIcon: this.pay.logo
            ? this.pay.logo.url
            : 'https://app.dodoex.io/assets/ethereum/' +
              this.pay.address +
              '/logo.png',
          secondary:
            this.connectionStatus === 'disconnect'
              ? ''
              : this.available({base: true}),
        })}
      </div>
      <div class="swap-fields-container">
        ${this.swapButtonIcon()}
      </div>
      <div>
        ${this.amountField({
          label: 'Recieve (Estimated)',
          currency: this.receive.symbol,
          currencyIcon: this.receive.logo
            ? this.receive.logo.url
            : 'https://app.dodoex.io/assets/ethereum/' +
              this.receive.address +
              '/logo.png',
          secondary:
            this.connectionStatus === 'disconnect'
              ? ''
              : this.available({base: true}),
        })}
      </div>
      <div class="ratio-container">
        ${this.rate({
          base: this.pay.symbol,
          quote: this.receive.symbol,
          ratio: String(this.price),
        })}
      </div>
      ${this.connectionStatus === 'disconnect'
        ? ''
        : `<div class="helper-message-container">${this.helperMessage()}</div>`}

      <div>
        ${isReallyConnected(this.chainId, this.selectedAccount)
          ? this.button({
              label: 'Confirm Order',
              click: this._handleConnectModal,
              disabled: this.route ? false : true,
            })
          : this.button({
              label: 'Connect Wallet',
              click: this._handleConnectModal,
              disabled: false,
            })}
      </div>
    `;
  }

  _handleConnectModal() {
    this.openConnectModal = !this.openConnectModal;
    this.update();
  }

  _handleAcceptTermsAndService() {
    this.acceptTermsAndService = !this.acceptTermsAndService;
    this.update();
  }

  checkbox() {
    return html`
      <input
        type="checkbox"
        class="checkbox-input"
        ?checked="${this.acceptTermsAndService}"
      />
      <div
        class="${this.acceptTermsAndService
          ? 'checkbox-svg-container-checked'
          : 'checkbox-svg-container-unchecked'}"
        @click=${this._handleAcceptTermsAndService}
      >
        <svg
          stroke="#1a1a1b"
          fill="currentColor"
          stroke-width="1"
          viewBox="0 0 16 16"
          class="${this.acceptTermsAndService
            ? 'checkbox-svg-checked'
            : 'checkbox-svg-unchecked'}"
          height="16px"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    `;
  }

  selectedIcon() {
    return html`
      <div class="selected-svg-container">
        <div class="selected-svg-wrapper">
          <svg
            stroke="#2a2a2d"
            fill="currentColor"
            stroke-width="2"
            viewBox="0 0 16 16"
            size="13"
            class="selected-svg"
            height="13"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    `;
  }

  ethereumLink() {
    return html`
      <div class="ether-link-svg-container">
        <svg
          class="ether-link-svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter color-interpolation-filters="auto" id="link_svg__a">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
              ></feColorMatrix>
            </filter>
          </defs>
          <g
            transform="translate(-3 -3)"
            filter="url(#link_svg__a)"
            fill="none"
            fill-rule="evenodd"
          >
            <g fill="#CCC" fill-rule="nonzero">
              <path
                d="M5.3 8.106L3.898 9.563c-1.197 1.244-1.197 3.26 0 4.504a2.986 2.986 0 004.336 0l1.868-1.942a3.264 3.264 0 00.854-2.79A3.173 3.173 0 009.256 7l-.599.622c-.06.063-.114.134-.157.211a2.088 2.088 0 011.414 1.51 2.18 2.18 0 01-.534 2.033l-1.867 1.94c-.799.83-2.094.83-2.892 0a2.183 2.183 0 010-3.004l.81-.84a4.424 4.424 0 01-.13-1.367v.001z"
              ></path>
              <path
                d="M7.898 5.874a3.265 3.265 0 00-.854 2.79A3.173 3.173 0 008.744 11l.792-.824a2.085 2.085 0 01-1.445-1.502 2.18 2.18 0 01.53-2.05l1.866-1.941a1.991 1.991 0 012.892 0c.8.83.8 2.175 0 3.004l-.81.841c.115.446.158.908.13 1.367l1.403-1.457c1.197-1.244 1.197-3.261 0-4.505a2.985 2.985 0 00-4.336 0l-1.868 1.94z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    `;
  }

  _selectNetwork(networkName) {
    return () => {
      this.selectedNetwork = networkName;
      this.update();
    };
  }

  selectNetworkButton({ethereum, label, image, networkName}) {
    const selected = networkName === this.selectedNetwork ? true : false;

    return html`
      <button
        @click=${this._selectNetwork(networkName)}
        type="button"
        class="select-network-button-root"
        ?disabled=${!this.acceptTermsAndService}
      >
        <div class="select-network-button-icon">
          <img src="${image}" alt="logo" />
        </div>
        ${label} ${selected ? this.selectedIcon() : null}
        ${ethereum ? this.ethereumLink() : null}
      </button>
    `;
  }

  metamaskIcon() {
    return html`
      <svg
        height="355"
        viewBox="0 0 397 355"
        width="397"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M113.623 326.195l52.004 13.81v-18.059l4.246-4.25h29.717v36.12h-31.84l-39.269-16.997z"
            fill="#cdbdb2"
          ></path>
          <path
            d="M283.434 326.195l-50.943 13.81v-18.059l-4.246-4.25h-29.717v36.12h31.84l39.269-16.997z"
            fill="#cdbdb2"
          ></path>
          <path
            d="M169.873 286.89l-4.246 35.056 5.307-4.25h55.189l6.368 4.25-4.246-35.056-8.49-5.312-42.453 1.062z"
            fill="#393939"
          ></path>
          <path
            d="M141.217 49.992l25.472 59.49 11.674 173.158h41.392l12.736-173.158 23.349-59.49z"
            fill="#f89c35"
          ></path>
          <path
            d="M29.778 180.657L.061 266.705l74.293-4.249h47.76v-37.181l-2.123-76.487-10.614 8.498z"
            fill="#f89d35"
          ></path>
          <path
            d="M86.028 190.218l87.029 2.125-9.552 44.617-41.392-10.623z"
            fill="#d87c30"
          ></path>
          <path d="M86.028 191.28l36.085 33.995v33.994z" fill="#ea8d3a"></path>
          <path
            d="M122.113 226.337l42.453 10.623 13.797 45.68-9.552 5.312-46.698-27.62z"
            fill="#f89d35"
          ></path>
          <path
            d="M122.113 260.331l-8.49 65.864 56.25-39.305z"
            fill="#eb8f35"
          ></path>
          <path
            d="M173.057 192.343l5.306 90.297-15.92-46.21z"
            fill="#ea8e3a"
          ></path>
          <path
            d="M73.292 261.394l48.821-1.063-8.49 65.864z"
            fill="#d87c30"
          ></path>
          <path
            d="M23.41 354.878l90.213-28.683-40.33-64.801L.06 266.705z"
            fill="#eb8f35"
          ></path>
          <path
            d="M166.689 109.482l-45.637 38.243-35.024 42.493 87.029 3.187z"
            fill="#e8821e"
          ></path>
          <path
            d="M113.623 326.195l56.25-39.305-4.246 33.994v19.122l-38.207-7.437zM283.434 326.195l-55.189-39.305 4.246 33.994v19.122l38.207-7.437z"
            fill="#dfcec3"
          ></path>
          <path
            d="M149.708 211.465l11.674 24.433-41.391-10.623z"
            fill="#393939"
          ></path>
          <path
            d="M22.35.062l144.339 109.42-24.41-59.49z"
            fill="#e88f35"
          ></path>
          <path
            d="M22.35.062L3.244 58.49l10.613 63.74-7.429 4.249 10.613 9.56-8.49 7.437 11.674 10.623-7.429 6.374 16.981 21.247 79.6-24.434c38.914-31.161 58.018-47.096 57.31-47.804-.707-.709-48.82-37.182-144.339-109.42z"
            fill="#8e5a30"
          ></path>
          <path
            d="M367.278 180.657l29.717 86.048-74.292-4.249h-47.76v-37.181l2.123-76.487 10.613 8.498z"
            fill="#f89d35"
          ></path>
          <path
            d="M311.028 190.218L224 192.343l9.552 44.617 41.391-10.623z"
            fill="#d87c30"
          ></path>
          <path
            d="M311.028 191.28l-36.085 33.995v33.994z"
            fill="#ea8d3a"
          ></path>
          <path
            d="M274.943 226.337l-42.452 10.623-13.798 45.68 9.552 5.312 46.698-27.62z"
            fill="#f89d35"
          ></path>
          <path
            d="M274.943 260.331l8.491 65.864-55.189-38.243z"
            fill="#eb8f35"
          ></path>
          <path
            d="M224 192.343l-5.307 90.297 15.92-46.21z"
            fill="#ea8e3a"
          ></path>
          <path
            d="M323.764 261.394l-48.82-1.063 8.49 65.864z"
            fill="#d87c30"
          ></path>
          <path
            d="M373.646 354.878l-90.212-28.683 40.33-64.801 73.231 5.311z"
            fill="#eb8f35"
          ></path>
          <path
            d="M230.368 109.482l45.637 38.243 35.023 42.493L224 193.405z"
            fill="#e8821e"
          ></path>
          <path
            d="M247.35 211.465l-11.675 24.433 41.391-10.623z"
            fill="#393939"
          ></path>
          <path
            d="M374.708.062l-144.34 109.42 24.41-59.49z"
            fill="#e88f35"
          ></path>
          <path
            d="M374.708.062L393.81 58.49l-10.613 63.74 7.43 4.249-10.614 9.56 8.49 7.437-11.674 10.623 7.43 6.374-16.982 21.247-79.599-24.434c-38.915-31.161-58.019-47.096-57.311-47.804.707-.709 48.82-37.182 144.34-109.42z"
            fill="#8e5a30"
          ></path>
        </g>
      </svg>
    `;
  }

  walletConnectIcon() {
    return html`
      <svg
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient id="walletconnect_svg__a" cx="0%" cy="50%" r="100%">
          <stop offset="0" stop-color="#5d9df6"></stop>
          <stop offset="1" stop-color="#006fff"></stop>
        </radialGradient>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
            fill="url(#walletconnect_svg__a)"
          ></path>
          <path
            d="M162.692 197.709c51.533-50.279 135.084-50.279 186.617 0l6.202 6.05a6.327 6.327 0 010 9.105l-21.216 20.7a3.357 3.357 0 01-4.666 0l-8.535-8.328c-35.95-35.075-94.238-35.075-130.188 0l-9.14 8.918a3.357 3.357 0 01-4.666 0l-21.216-20.7a6.327 6.327 0 010-9.104zm230.493 42.809l18.883 18.422a6.327 6.327 0 010 9.104l-85.142 83.07c-2.577 2.514-6.754 2.514-9.33 0l-60.43-58.957a1.679 1.679 0 00-2.332 0l-60.427 58.958c-2.576 2.513-6.754 2.514-9.33 0l-85.145-83.072a6.327 6.327 0 010-9.104l18.883-18.422c2.576-2.514 6.754-2.514 9.33 0l60.43 58.958a1.679 1.679 0 002.332 0l60.427-58.958c2.576-2.514 6.754-2.514 9.33 0l60.43 58.958a1.679 1.679 0 002.332 0l60.428-58.957c2.577-2.514 6.755-2.514 9.331 0z"
            fill="#fff"
            fill-rule="nonzero"
          ></path>
        </g>
      </svg>
    `;
  }

  portisIcon() {
    return html`
      <svg viewBox="0 0 301.38 455.87" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.45 262.11l10.93-4.75 135.31-58.82 146.24 63.57-54.95 113.43-134.33 19-101-109z"
          fill="#133444"
        ></path>
        <path
          d="M266.51 192.16a150.43 150.43 0 00-95.82-53q-1.2-.17-2.4-.3a152.36 152.36 0 00-35.2 0q-1.2.14-2.4.3a150.43 150.43 0 00-95.82 53l-6.08 10.08L18.66 219l-7.41 12.31c-.14.33-.28.67-.41 1l-.09.23 16.35 9.67 103.6 61.28 20 11.83V168.85l-20 9.08V156l20-9.09 20 9.09 101.9 46.28z"
          fill="#c42370"
        ></path>
        <path
          d="M301.38 298.56c0 48.78-23.18 94.42-59.12 123.84a149.45 149.45 0 01-47.64 26.37 139.51 139.51 0 01-43.93 7.1C67.47 455.87 0 381.78 0 298.56a150.49 150.49 0 014.45-36.45l146.24 86.51 146.24-86.51a150.49 150.49 0 014.45 36.45z"
          fill="#1c4d6b"
        ></path>
        <path
          d="M133.09 138.89l17.6 7.99-20 9.09V137.8zM130.69 177.93l20-9.08v146.53l-20-11.83z"
        ></path>
        <path d="M150.69 168.85v146.53l140.13-82.89z" fill="#1d4259"></path>
        <path d="M150.69 0v168.85l140.13 63.64z" fill="#4b6b9a"></path>
        <path
          d="M150.69 168.85v146.53l-20-11.83-119.95-71-.18-.11.27-.12c.13-.33.27-.67.41-1l17.53-29.09L130.69 156v22z"
          fill="#343535"
        ></path>
        <path
          d="M150.69 168.85v146.53l-20-11.83L10.74 232.6l-.18-.11.27-.12 119.86-54.44z"
          fill="#3e5578"
        ></path>
        <path d="M150.69 0v168.85L10.56 232.49z" fill="#6db2d8"></path>
        <g fill="#335f8a">
          <path
            d="M94 443.85c2.09.92 4.21 1.79 6.34 2.61q-3.26-1.23-6.34-2.61zM100.29 446.46c2.14.82 4.29 1.59 6.47 2.31q-3.27-1.07-6.47-2.31zM112.33 450.49c1.66.47 3.33.92 5 1.33q-2.51-.62-5-1.33z"
          ></path>
        </g>
        <path
          d="M4.45 262.11l146.24 86.51A167.48 167.48 0 01140.22 387c-11.7 28.28-35.34 58.19-81.08 35.44C23.18 393 0 347.34 0 298.56a150.49 150.49 0 014.45-36.45z"
          fill="#6db2d8"
        ></path>
        <path
          d="M242.24 422.41l-.36.29c-.76.62-1.52 1.23-2.29 1.83l-.2.16q-1.25 1-2.52 1.92c-.91.68-1.83 1.36-2.76 2s-1.86 1.31-2.8 1.95-1.66 1.12-2.49 1.66l-.46.3c-.88.57-1.76 1.13-2.64 1.67a2.63 2.63 0 01-.33.2c-.91.57-1.82 1.12-2.74 1.65s-2 1.15-3 1.7-2 1.08-3 1.6l-.11.06c-1 .52-2 1-3 1.52s-2 1-3.08 1.49-2.08 1-3.12 1.42c-2.09.92-4.21 1.79-6.34 2.61s-4.29 1.59-6.47 2.31c-.87.29-1.74.57-2.62.84s-2 .6-2.95.88c-1.66.47-3.33.92-5 1.33-.63.16-1.27.31-1.91.45l-1.07.25c-.89.2-1.78.39-2.68.57s-1.64.33-2.47.48-1.51.28-2.27.4-1.68.27-2.52.39c-.41.07-.82.13-1.24.18l-1.89.25-1.05.13c-.69.09-1.39.16-2.09.23-.86.09-1.71.17-2.57.24-.67.05-1.34.11-2 .15s-1.16.08-1.75.1h-.08c-.68 0-1.36.08-2 .1-.94 0-1.89.07-2.84.09s-1.9 0-2.86 0h-2.86c-.95 0-1.9 0-2.84-.09-.69 0-1.37-.06-2.05-.1h-.08c-.59 0-1.17-.06-1.75-.1s-1.34-.1-2-.15c-.86-.07-1.71-.15-2.57-.24-.7-.07-1.4-.14-2.09-.23l-1-.13c-.63-.07-1.26-.16-1.89-.25-.42 0-.83-.11-1.24-.18q-1.27-.18-2.52-.39c-.76-.12-1.52-.26-2.27-.4s-1.65-.31-2.47-.48-1.79-.37-2.68-.57l-1.07-.25c-.64-.14-1.28-.29-1.91-.45-1.68-.41-3.35-.86-5-1.33l-3-.88a146.194 146.194 0 01-9.09-3.15c-2.14-.82-4.29-1.67-6.29-2.59-1-.46-2.08-.94-3.12-1.42s-2.06-1-3.08-1.49-2-1-3-1.52l-.11-.06c-1-.52-2-1.06-3-1.6s-2-1.12-3-1.7S76.9 435 76 434.41l-.33-.2c-.88-.54-1.76-1.1-2.64-1.67l-.46-.3a155.645 155.645 0 01-5.29-3.61c-.92-.66-1.85-1.34-2.76-2s-1.69-1.27-2.52-1.92l-.2-.16c-.77-.6-1.53-1.21-2.29-1.83l-.36-.29c45.74 22.75 69.38-7.16 81.08-35.44a167.48 167.48 0 0010.47-38.35A167.47 167.47 0 00161.16 387c11.7 28.25 35.34 58.16 81.08 35.41z"
          fill="#529bba"
        ></path>
        <path
          d="M184 451.82c1.68-.41 3.35-.86 5-1.33q-2.44.72-5 1.33zM194.62 448.77c2.18-.72 4.33-1.49 6.47-2.31q-3.19 1.24-6.47 2.31zM201.09 446.46c2.13-.82 4.25-1.69 6.34-2.61q-3.13 1.38-6.34 2.61z"
          fill="#335f8a"
        ></path>
        <path
          d="M301.38 298.56c0 48.78-23.19 94.43-59.14 123.85-45.74 22.75-69.38-7.16-81.08-35.44a167.47 167.47 0 01-10.47-38.35l146.24-86.51a150.49 150.49 0 014.45 36.45z"
          fill="#4b6b9a"
        ></path>
      </svg>
    `;
  }

  _connectMetaMask() {
    console.log('connecting to metamask', this.selectedNetwork);
    // this.connectionStatus = 'pending';

    // Check if ethereum is connected to metamask
    // Handle Network Change
    // Handle Account Change
    // Disconnect
    // Connect

    switch (this.selectedNetwork) {
      case 'binance':
        // TODO connect to binance
        ethereum
          .request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: toHex(56)}],
          })
          .then(() => {
            console.log('switched to binance');
          })
          .catch((err) => {
            console.log(err);
          });
        /* try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '56' }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (error.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{ 
                  chainId: '56',
                  networkName: 'Smart Chain',
                  rpcUrls: ['https://bsc-dataseed.binance.org/'],
                  nativeCurrency: {
                    name: 'Binance Coin',
                    symbol: 'BNB', // 2-6 characters long
                    decimals: 18,
                  },
                  blockExplorerUrls:['https://bscscan.com'],
              }],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }*/

        break;
      case 'polygon':
        // TODO connect to polygon
        break;
      case 'heco':
        // TODO connecto to polygon
        ethereum
          .request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: toHex(128)}],
          })
          .then(() => {
            console.log('switched to heco');
          })
          .catch((err) => {
            if (err.code == 4902) {
              return ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: toHex(128),
                    chainName: 'Heco-Mainnet',
                    rpcUrls: ['https://http-mainnet-node.huobichain.com'],
                    nativeCurrency: {
                      name: 'HECO',
                      symbol: 'HT', // 2-6 characters long
                      decimals: 18,
                    },
                    blockExplorerUrls: ['https://hecoinfo.com'],
                  },
                ],
              });
            } else {
              console.log(err);
            }
          })
          .then(() => {
            console.log('network added');
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        // TODO connect to ethereum
        return ethereum
          .request({
            method: 'wallet_requestPermissions',
            params: [{eth_accounts: {}}],
          })
          .then((permissions) => {
            const accountsPermission = permissions.find(
              (permission) => permission.parentCapability === 'eth_accounts'
            );
            if (accountsPermission) {
              console.log(
                'eth_accounts permission successfully requested!',
                permissions
              );
              this.connectionStatus = 'disconnect';
              this.update();
            }
          })
          .catch((err) => {
            console.log(err);
            this.connectionStatus = 'disconnect';
            this.update();
          });
        break;
    }
  }

  selectWalletButton({label, icon, click}) {
    return html`<div class="select-wallet-button-wrapper">
      <button
        ?disabled=${!this.acceptTermsAndService ||
        this.connectionStatus !== 'disconnect' ||
        label != 'MetaMask'}
        type="button"
        class="select-wallet-button"
        @click=${click}
      >
        ${icon}</button
      >${label}
    </div>`;
  }

  connectModal() {
    return html`
      <div class="connect-modal-header">
        Connect Wallet
      </div>
      <div class="connect-modal-content">
        <div class="terms-and-service-container">
          <div class="checkbox-container">${this.checkbox()}</div>
          <div class="terms-and-service-description">
            <span
              >I have read, understand, and agree to the
              <a
                href="https://dodoexhelp.zendesk.com/hc/en-us/articles/900004302926"
                target="_blank"
                >Terms of Service</a
              >.</span
            >
          </div>
        </div>
        <div class="connect-modal-section-title">
          Select Network
        </div>
        <div class="connect-modal-select-network-container">
          ${this.selectNetworkButton({
            ethereum: true,
            selected: true,
            label: 'Ethereum',
            image: iconsDictionary.ethereum,
            networkName: 'ethereum',
          })}
          ${this.selectNetworkButton({
            selected: true,
            label: 'Binance',
            image: iconsDictionary.binance,
            networkName: 'binance',
          })}
          ${this.selectNetworkButton({
            label: 'Heco',
            image: iconsDictionary.heco,
            networkName: 'heco',
          })}
          ${this.selectNetworkButton({
            label: 'Polygon',
            image: iconsDictionary.polygon,
            networkName: 'polygon',
          })}
        </div>
        <div class="connect-modal-section-title">
          Select Wallet
        </div>
        <div class="connect-modal-select-wallet-container">
          ${typeof window.ethereum !== 'undefined'
            ? this.selectWalletButton({
                label: 'MetaMask',
                icon: this.metamaskIcon(),
                click: this._connectMetaMask,
              })
            : null}
          ${this.selectWalletButton({
            label: 'WalletConnect',
            icon: this.walletConnectIcon(),
          })}
          ${this.selectedNetwork === 'ethereum'
            ? this.selectWalletButton({
                label: 'Portis',
                icon: this.portisIcon(),
              })
            : null}
        </div>
      </div>
    `;
  }

  modal({content}) {
    return html`
      <div class="modal-wrapper">
        <div class="modal-underlay" @click="${this._handleConnectModal}"></div>
        <div class="modal-container">
          ${content}
        </div>
      </div>
    `;
  }

  secondaryScreenHeader({label}) {
    return html`
      <div class="secondary-header-container">
        <div
          class="secondary-header-back-button"
          @click=${this._setCurrentScreen('main')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17.501"
            viewBox="0 0 20 17.501"
          >
            <g transform="translate(-968.751 -405.031)">
              <path
                id="路径"
                d="M10,1.25a1.25,1.25,0,0,0-2.5,0V15.731L2.136,10.364a1.251,1.251,0,1,0-1.77,1.77l7.5,7.5a1.25,1.25,0,0,0,1.77,0l7.5-7.5a1.251,1.251,0,1,0-1.77-1.77L10,15.731Z"
                transform="translate(988.751 405.031) rotate(90)"
              ></path>
            </g>
          </svg>
        </div>
        ${label}
      </div>
    `;
  }

  selectCurrencySearchInput() {
    return html`
      <div class="search-input-container">
        <input
          placeholder="Enter the token symbol or address"
          class="search-input"
          value=${this.searchString}
          @input=${(e) => (this.searchString = e.target.value)}
          style="height: 46px; font-size: 14px;"
        /><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          class="search-icon"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    `;
  }

  dodoBackupImage() {
    return `data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='28px' height='28px' viewBox='0 0 28 28' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 60 (88103) - https://sketch.com --%3e %3ctitle%3e%e7%94%bb%e6%9d%bf%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='%e7%94%bb%e6%9d%bf' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-family='AppleColorEmoji%2c Apple Color Emoji' font-size='24' font-weight='normal' line-spacing='28'%3e %3ctext id='%f0%9f%90%a3' fill='white'%3e %3ctspan x='2' y='24'%3e%f0%9f%90%a3%3c/tspan%3e %3c/text%3e %3c/g%3e%3c/svg%3e`;
  }

  _openContractAddress(address) {
    window.open(`https://etherscan.io/address/${address}`, '_blank');
  }

  currencyList(variant) {
    const currencyItem = (currency, disabled, click) => {
      return html`
        <div
          @click=${click}
          ?disabled=${disabled}
          class="currency-item-container"
        >
          <div class="currency-item-image-container">
            <img
              src=${currency.logo
                ? currency.logo.url
                : 'https://app.dodoex.io/assets/ethereum/' +
                  currency.address +
                  '/logo.png'}
              class="currency-item-image"
              onerror="this.onerror=null;this.src='https://cdn-media.dodoex.io/erc20/https_app_dodoex_io_static_media_yellow_Duck_1b3a058e_7dfe42fa9b.svg';"
            />
          </div>
          <div class="currency-item-right-wrapper">
            <div class="currency-item-right-left">
              <div class="currency-item-symbol">
                <span>${currency.symbol} </span>
              </div>
              <div class="currency-item-value"></div>
            </div>
            <div class="currency-item-right-right">
              <span class="currency-item-name" title=${currency.name}
                >${currency.name}</span
              >
              <i
                @click=${() => this._openContractAddress(currency.address)}
                class="currency-info-icon"
                ><img
                  src="data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3ctitle%3e%e7%82%b9%e5%87%bb%e5%b1%95%e5%bc%80%3c/title%3e %3cdefs%3e %3cfilter color-interpolation-filters='auto' id='filter-1'%3e %3cfeColorMatrix in='SourceGraphic' type='matrix' values='0 0 0 0 0.521569 0 0 0 0 0.521569 0 0 0 0 0.552941 0 0 0 1.000000 0'%3e%3c/feColorMatrix%3e %3c/filter%3e %3crect id='path-2' x='0' y='0' width='20' height='20'%3e%3c/rect%3e %3c/defs%3e %3cg id='%e8%a1%a5%e5%85%85%e9%9c%80%e6%b1%82' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='%e6%93%8d%e4%bd%9c-%e6%89%8b%e5%8a%a8%e6%b7%bb%e5%8a%a0' transform='translate(-318.000000%2c -315.000000)'%3e %3cg id='%e7%bc%96%e7%bb%84-23' transform='translate(18.000000%2c 122.000000)'%3e %3cg id='%e5%b8%81%e7%a7%8d' transform='translate(20.000000%2c 193.000000)'%3e %3cg id='Button---Info' transform='translate(280.000000%2c 0.000000)' filter='url(%23filter-1)'%3e %3cg%3e %3cmask id='mask-3' fill='white'%3e %3cuse xlink:href='%23path-2'%3e%3c/use%3e %3c/mask%3e %3cg id='%e7%9f%a9%e5%bd%a2'%3e%3c/g%3e %3cpath d='M10%2c20 C11.3717421%2c20 12.6611797%2c19.7376543 13.8683128%2c19.212963 C15.0754458%2c18.6882716 16.138546%2c17.9663923 17.0576132%2c17.0473251 C17.9766804%2c16.1282579 18.696845%2c15.0668724 19.218107%2c13.8631687 C19.739369%2c12.659465 20%2c11.3717421 20%2c10 C20%2c8.62825789 19.739369%2c7.34053498 19.218107%2c6.13683128 C18.696845%2c4.93312757 17.9749657%2c3.87002743 17.0524691%2c2.94753086 C16.1299726%2c2.02503429 15.0651578%2c1.30315501 13.8580247%2c0.781893004 C12.6508916%2c0.260631001 11.361454%2c0 9.98971193%2c0 C8.63168724%2c0 7.34910837%2c0.260631001 6.14197531%2c0.781893004 C4.93484225%2c1.30315501 3.87002743%2c2.02503429 2.94753086%2c2.94753086 C2.02503429%2c3.87002743 1.30315501%2c4.93312757 0.781893004%2c6.13683128 C0.260631001%2c7.34053498 0%2c8.62825789 0%2c10 C0%2c11.3717421 0.262345679%2c12.659465 0.787037037%2c13.8631687 C1.3117284%2c15.0668724 2.03360768%2c16.1282579 2.9526749%2c17.0473251 C3.87174211%2c17.9663923 4.93484225%2c18.6882716 6.14197531%2c19.212963 C7.34910837%2c19.7376543 8.6351166%2c20 10%2c20 Z M10%2c18.1584362 C8.87517147%2c18.1584362 7.81893004%2c17.9475309 6.83127572%2c17.5257202 C5.8436214%2c17.1039095 4.97770919%2c16.5209191 4.23353909%2c15.776749 C3.489369%2c15.0325789 2.90809328%2c14.1666667 2.48971193%2c13.1790123 C2.07133059%2c12.191358 1.86213992%2c11.1316872 1.86213992%2c10 C1.86213992%2c8.87517147 2.07133059%2c7.81893004 2.48971193%2c6.83127572 C2.90809328%2c5.8436214 3.489369%2c4.97599451 4.23353909%2c4.22839506 C4.97770919%2c3.48079561 5.84190672%2c2.89609053 6.82613169%2c2.47427984 C7.81035665%2c2.05246914 8.8648834%2c1.84156379 9.98971193%2c1.84156379 C11.1282579%2c1.84156379 12.1896433%2c2.05246914 13.1738683%2c2.47427984 C14.1580933%2c2.89609053 15.0240055%2c3.48079561 15.7716049%2c4.22839506 C16.5192044%2c4.97599451 17.1039095%2c5.8436214 17.5257202%2c6.83127572 C17.9475309%2c7.81893004 18.1584362%2c8.87517147 18.1584362%2c10 C18.1652949%2c11.1316872 17.9561043%2c12.191358 17.5308642%2c13.1790123 C17.1056241%2c14.1666667 16.5226337%2c15.0325789 15.781893%2c15.776749 C15.0411523%2c16.5209191 14.1769547%2c17.1039095 13.1893004%2c17.5257202 C12.2016461%2c17.9475309 11.138546%2c18.1584362 10%2c18.1584362 Z M9.92798354%2c6.63580247 C10.2914952%2c6.63580247 10.5984225%2c6.50720165 10.8487654%2c6.25 C11.0991084%2c5.99279835 11.2242798%2c5.68587106 11.2242798%2c5.32921811 C11.2242798%2c4.95884774 11.0991084%2c4.64677641 10.8487654%2c4.39300412 C10.5984225%2c4.13923182 10.2914952%2c4.01234568 9.92798354%2c4.01234568 C9.57133059%2c4.01234568 9.26611797%2c4.13923182 9.01234568%2c4.39300412 C8.75857339%2c4.64677641 8.63168724%2c4.95884774 8.63168724%2c5.32921811 C8.63168724%2c5.68587106 8.75857339%2c5.99279835 9.01234568%2c6.25 C9.26611797%2c6.50720165 9.57133059%2c6.63580247 9.92798354%2c6.63580247 Z M12.2427984%2c15.3292181 C12.4554184%2c15.3292181 12.6337449%2c15.260631 12.7777778%2c15.1234568 C12.9218107%2c14.9862826 12.9938272%2c14.8113855 12.9938272%2c14.5987654 C12.9938272%2c14.3930041 12.9218107%2c14.2215364 12.7777778%2c14.0843621 C12.6337449%2c13.9471879 12.4554184%2c13.8786008 12.2427984%2c13.8786008 L11.1111111%2c13.8786008 L11.1111111%2c9.11522634 C11.1111111%2c8.84087791 11.042524%2c8.61796982 10.9053498%2c8.44650206 C10.7681756%2c8.27503429 10.5658436%2c8.18930041 10.2983539%2c8.18930041 L8.45679012%2c8.18930041 C8.25102881%2c8.18930041 8.07441701%2c8.25788752 7.92695473%2c8.39506173 C7.77949246%2c8.53223594 7.70576132%2c8.7037037 7.70576132%2c8.90946502 C7.70576132%2c9.12208505 7.77949246%2c9.29698217 7.92695473%2c9.43415638 C8.07441701%2c9.57133059 8.25102881%2c9.6399177 8.45679012%2c9.6399177 L9.46502058%2c9.6399177 L9.46502058%2c13.8786008 L8.29218107%2c13.8786008 C8.07956104%2c13.8786008 7.90123457%2c13.9471879 7.75720165%2c14.0843621 C7.61316872%2c14.2215364 7.54115226%2c14.3930041 7.54115226%2c14.5987654 C7.54115226%2c14.8113855 7.61316872%2c14.9862826 7.75720165%2c15.1234568 C7.90123457%2c15.260631 8.07956104%2c15.3292181 8.29218107%2c15.3292181 L12.2427984%2c15.3292181 Z' id='%f4%80%85%b4' fill='%23FFE804' fill-rule='nonzero' mask='url(%23mask-3)'%3e%3c/path%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e"
                  width="20px"
                  class="warning"
                  alt=""
                />
              </i>
            </div>
          </div>
        </div>
      `;
    };

    let that = this;

    return html`<div
      @scroll="${(e) => {
        const thisDom = this.shadowRoot.querySelector('#currency-list');

        if (
          thisDom.offsetHeight + thisDom.scrollTop >=
          thisDom.scrollHeight - 5
        ) {
          that.showAmount = that.showAmount + 10;
          that.update();
        }
      }}"
      class="currency-list-container"
      id="currency-list"
    >
      ${variant === 'pay'
        ? currencyItem(this.pay, true)
        : currencyItem(this.receive, true)}
      ${variant === 'pay'
        ? currencyItem(this.receive, false, () => {
            this.currentScreen = 'main';
            this._swapPayReceive();
          })
        : currencyItem(this.pay, false, () => {
            this.currentScreen = 'main';
            this._swapPayReceive();
          })}
      ${this.searchString
        ? this.tokens
            .filter(
              (token) =>
                token.symbol
                  .toLowerCase()
                  .includes(this.searchString.toLowerCase()) ||
                token.address.includes(this.searchString)
            )
            .slice(0, this.showAmount)
            .map((currency) =>
              currencyItem(currency, false, () => {
                if (variant === 'pay') {
                  this.pay = currency;
                } else {
                  this.receive = currency;
                }
                this.currentScreen = 'main';
                this.dispatchEvent(new Event('pair-changed'));
              })
            )
        : this.tokens.slice(0, this.showAmount).map((currency) =>
            currencyItem(currency, false, () => {
              if (variant === 'pay') {
                this.pay = currency;
              } else {
                this.receive = currency;
              }
              this.currentScreen = 'main';
              this.dispatchEvent(new Event('pair-changed'));
            })
          )}
    </div>`;
  }

  selectCurrency({variant}) {
    return html`
      <div>
        ${this.secondaryScreenHeader({
          label: variant === 'pay' ? ' Pay Token' : 'Receive Token',
        })}
        ${this.selectCurrencySearchInput()} ${this.currencyList(variant)}
      </div>
    `;
  }

  render() {
    if (!window.ethereum) return html`<div>Please install metamask</div>`;

    if (this.initialLoading)
      return html`
        <div class="loading-container">
          <img
            class="loading-image"
            src="https://app.dodoex.io/assets/load.gif"
          />
        </div>
      `;

    if (this.currentScreen == 'selectPay')
      return html`${this.selectCurrency({variant: 'pay'})}`;
    if (this.currentScreen == 'selectReceive')
      return html`${this.selectCurrency({variant: 'receive'})}`;

    return html`
      ${this.openConnectModal
        ? this.modal({content: this.connectModal()})
        : null}
      ${this.header()} ${this.mainScreen()}
    `;
  }
}

window.customElements.define('dodoex-widget', Widget);
