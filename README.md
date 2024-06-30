# Svelte-Netlify-Demo
🚀 Welcome to the perfect repository for your Svelte & Netlify projects! This repository is the perfect starting-off point, equipped with a fully functional Netlify contact form, a [PageSpeed](https://pagespeed.web.dev/analysis/https-svelte-netlify-demo-netlify-app/o8xryfd6zs?form_factor=desktop) score of 100 in Performance/SEO, standard header-footer layout, extensive customization options, and advanced features for both Svelte and Netlify. Have fun building your project! 🎉

## Table of Contents
1. [Features](#features)
    - [In-Short](#in-short)
    - [Screenshots](#screenshots)
    - [In-Detail](#in-detail)
2. [Installation](#installation)
3. [Packages](#packages)
4. [Demo](#demo)
5. [Contributing](#contributing)



## 🌟 Features

### In-Short
- [x] ⚡️ **Performance** performance-optimised from the start
- [x] 👀 **SEO** working Sitemap.xml, Robots.txt, page titles and descriptions
- [x] 🌐 **Netlify** can be directly uploaded to Netlify
- [x] 🛠️ **Tailwind** nice looking modern UI, fully integrated Tailwind
- [x] 🎨 **Customizable** custom error pages and custom reusable colors
- [x] 📱 **Responsivess** looks beautiful on all Viewports
- [x] 💬 **Contact Form** fully working Netlify contact form
- [x] 🥳 **FontAwesome Integration** fully working FontAwesome integration

Additional features:
- [x] custom Netlify 404 Page with _redirects
- [x] custom local Google Font Integration
- [x] standard header and footer structure
- [x] enhanced:img and lazy loading
- [x] Slug passing from the laod function
- [x] device-specific Favicons / all Meta Tags
- [x] local variables and store writables


### Screenshots
The PageSpeed result:
![Screenshot 1](https://github.com/mokollmar/svelte-netlify-demo/blob/main/Screenshots/s1.png)

The Root Page:
![Screenshot 1](https://github.com/mokollmar/svelte-netlify-demo/blob/main/Screenshots/s2.png)

The Netlify Contact Form:
![Screenshot 1](https://github.com/mokollmar/svelte-netlify-demo/blob/main/Screenshots/s3.png)

Netlify active Forms and Notification Config:
![Screenshot 1](https://github.com/mokollmar/svelte-netlify-demo/blob/main/Screenshots/s4.png)


### In-Detail

#### Performance
The repository utilizes the @sveltejs/enhanced-img plugin, which boosts performance by optimizing image sizes and formats, reducing layout shifts, and decreasing loading times. We also implement lazy loading, delaying the loading of non-critical resources such as images or videos until they are needed, significantly accelerating the initial page load time. Additionally, the project uses local fonts, eliminating the need to download fonts from the web, thereby reducing webpage loading times and preventing display delays.

#### SEO
The repository features a working Sitemap.xml, which is due to Netlify's handling of server-side JavaScript in the static folder. For now, the Sitemap.xml <url> tags need to be added manually. The current Robots.txt configuration allows all crawlers to index all pages. Inside the app.html, we have added title, description, and all relevant meta and Open Graph tags.

#### Netlify
This repository can be directly uploaded and hosted by Netlify. We added the correctly working netlify.toml configuration and the Netlify adapter. All pages are prerendered to be hosted as static sites on Netlify. We also added the _redirects configuration, which redirects users in the event of a 404 status to the custom 404 page.

#### Tailwind
Tailwind CSS is fully configured through the tailwind.config.js file in our Svelte template. We have also introduced a custom primary color setting that allows for the modification of the entire page's appearance.

#### Customizable
We added custom error pages and a completley customized Header and Footer.

#### Responsivess
The repository utilizes responsive Tailwind CSS classes to ensure that all pages display correctly across various devices, maintaining the appropriate format and size. We have also included custom favicons in all the necessary sizes for platforms like Chrome and iOS, ensuring that shortcuts and app icons are displayed accurately.

#### Contact Form
We have integrated a fully customized contact form that is seamlessly recognized by Netlify's form detection system. To activate form detection on your Netlify site, navigate to the "Forms" tab. Within this section, you can set up the form so that submissions are forwarded to an email address or other specified channels. Following a successful submission, our setup displays a custom success page, which automatically redirects to the home page after five seconds.

#### Additonal Features
We've incorporated a load function capable of passing slugs via the route: /page/[slug]. Additionally, we have implemented a local variable that tracks the total number of visits across all pages. This count is stored on the user's device and can be accessed through a Svelte writable store.



## ⚙️ Installation
To set up this Svelte-Netlify-Demo and use it as a template, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/mokollmar/svelte-netlify-demo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Svelte-Netlify-Demo
    ```
3. Install all the dependencies
    ```sh
    npm install
    ```



## 📦 Packages
If you're curious, this repository utilizes the following non-default packages:
```
tailwindcss / postcss / autoprefixer / adapter-netlify / enhanced-img / fontawesome-free
```



## 📍 Demo
To visit the live demo website, click [here](https://svelte-netlify-demo.netlify.app).



## 👨‍💻 Contributing
Feel free to fork the repository, make modifications, and submit a pull request. Here are some ways you can contribute:
- Enhance existing features by fixing bugs and implementing improvements.
- Propose new features that you believe would be beneficial.
- Enhance the documentation to make it even more accessible and user-friendly.
