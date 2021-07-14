# Introduction
dodoex-web-component is a lightweight widget for trading on dodoex. This widget is a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) which is basically and html tag. If you have ever used a `<video />` or `<audio/>` you already know what is a web component. You need to import the script and when you want to use the widget just put `<dodoex-widget />` tag.

## [Demo](https://ajand.github.io/dodoex-api-widget/)

![Image](https://i.ibb.co/PtXyDjt/Screenshot-from-2021-07-14-19-13-32.png)


# Getting Start

### Step 1
First you need to somehow define a Web3 global variable or into Window.Web3 . This is because if a project already has a Web3 in it we don't need to download another 1.5mgb of code and it makes loading the site faster. If you already don't have web3 in your project you just need to add a web3 cdn in your main html page

```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/3.0.0-rc.5/web3.min.js"
    integrity="sha512-jRzb6jM5wynT5UHyMW2+SD+yLsYPEU5uftImpzOcVTdu1J7VsynVmiuFTsitsoL5PJVQi+OtWbrpWq/I+kkF4Q=="
    crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>
```

### Step 2
Installing the component or importing it from a CDN

```
    npm install --save dodoex-web-component
```
And import it
```javascript
    import 'some-package-name';
```

Or add this to main html page
```html
    <script src="https://unpkg.com/dodoex-web-component@0.1.0/dodex-widget.bundled.js" crossorigin="anonymous"
    type="module"   referrerpolicy="no-referrer">
  </script>
```

### Step 3
You need to define the css variables that widget will use. Copy this in your css file and customize it if you want.
```css
    html {
            --dodoBackground: #1A1A1B;
            --dodoSecondaryBackground: #373739;
            --dodoHelperBackground: rgb(35, 35, 36);
            --dodoHelperLightBackground: rgb(65, 65, 67);
            --dodoModalOverlay: rgb(0, 0, 0, 0.8);
            --dodoPrimary: #ffe804;
            --dodoPrimaryDark: rgb(64, 62, 37);
            --dodoText: #f4f4f4;
            --dodoSecondaryText: rgb(133, 133, 141);
            --dodoFontFamily: "Poppins", "Inter", PingFangSC-Regular, "Microsoft YaHei", sans-serif;
            --font-family-sans-serif: -apple-system,    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
        }
```


### Step 4
Add dodoex widget to wherever you want like this. As you see currently you have two default option configuration. If you don't choose them by default it would be ETH for defaultpay and USDC for defaultreceive.
```html
    <div id="widget-container">
        <dodoex-widget
            defaultpay="USDC" 
            defaultreceive="ETH" 
        />
    </div>
```

### Step 5
dodoex widget will fill its container. So you need to style the container as you wish. For example:
```css
    #widget-container {
        width: 400px;
        border-radius: 1em;
        overflow: hidden;
    }
```

# Features
- [x] Just DODO it loading
- [x] Ethereum Network Support
- [x] Binance Network Support
- [x] HECO Network Support
- [ ] Kovan Network Support - It actually currently supported but route API can not find any route
- [ ] Poloygon Network Support - It actually currently supported it but the price api is not reliable
- [x] Reload and auto reload price
- [x] Slippage tolerance setting
- [x] Deadline setting
- [x] Gas price setting
- [x] Swap 
- [x] Sreach Token
- [ ] Token Tabs  
- [x] Connection Modal
- [x] Manage Modal
- [ ] Wallet Connect Support
- [ ] Portis Support
- [ ] Share Market Support
- [ ] More customization 
- [ ] More initial control 
