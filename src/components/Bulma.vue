<template>
  <!-- <img :src="tailwindcssSvg" alt="alt" class="image is-64x64"> -->
  <!-- <img :src="railsSvg" alt="alt" class="image is-64x64"> -->
  <div class="columns is-variable is-4 is-mobile is-align-content-stretch my-2">
    <div class="column is-5">
      <div class="columns is-flex-direction-column has-background-black" style="min-height: 120vh;">
        <div class="column is-narrow ml-2 mt-4 has-text-white">
          <div class="columns is-mobile is-flex-direction-column is-align-items-start">
            <div class="column ml-4 is-narrow pr-6">
              <figure class="image">
                <img :src="tailwindcssSvg" alt="alt" class="image is-rounded is-128x128">
              </figure>
            </div>
            <div class="column ml-4">
              <div class="content">
                <h6 class="title is-4 has-text-white mb-3">Ashok Allu</h6>
                <h6 class="title is-6 has-text-white">Full Stack Web Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="column ml-5">
          <div class="tile">
            <div class="content">
              <h6 class="title is-5 has-text-white mb-4">Technical Skills</h6>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">Ruby</span>
                    <span class="tag has-text-black">v1.9.x to v3.0.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">Ruby on Rails</span>
                    <span class="tag has-text-black">v3.x to v6.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">JavaScript</span>
                    <span class="tag has-text-black">ES5 & ES6+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">Bootstrap</span>
                    <span class="tag has-text-black">v3.x to v5(Beta)</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">React</span>
                    <span class="tag has-text-black">v16.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">Vue</span>
                    <span class="tag has-text-black">v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">Svelte</span>
                    <span class="tag has-text-black">v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">AngularJS</span>
                    <span class="tag has-text-black">v1.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">tailwindcss</span>
                    <span class="tag has-text-black">v1.x+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">Bulma</span>
                    <span class="tag has-text-black">v0.5.x to 0.9.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">PostgreSQL</span>
                    <span class="tag has-text-black">v9.x+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">jQuery</span>
                    <span class="tag has-text-black">v1.5.x to 3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">HTML5</span>
                    <span class="tag has-text-black">v5</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-danger has-text-black">CSS3</span>
                    <span class="tag has-text-black">v3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="column ml-5 is-narrow">
          <h6 class="title is-5 has-text-white">Other Software and Tools</h6>
          <div class="content">
            <div class="field is-grouped is-grouped-multiline">
              <div class="tags are-small">
                <span class="tag is-danger has-text-black has-text-weight-medium">webpack</span>
                <span class="tag is-danger has-text-black has-text-weight-medium">rollup (for svelte 3)</span>
                <span class="tag is-danger has-text-black has-text-weight-medium">sublime text 3</span>
                <span class="tag is-danger has-text-black has-text-weight-medium">git</span>
                <span class="tag is-danger has-text-black has-text-weight-medium">github</span>
                <span class="tag is-danger has-text-black has-text-weight-medium">MS office</span>
                <span class="tag is-danger has-text-black has-text-weight-medium">Nginx</span>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="column ml-5 mt-4">
          <div class="content">
            <h6 class="title is-5 has-text-white mb-5">Contact Information</h6>
            <div class="columns is-flex-direction-column">
              <div class="column">
                <div class="columns is-mobile is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fas fa-mobile-alt"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1">
                    <span class="has-text-white pl-2">+91 9552782887</span>
                  </div>
                </div>
                <div class="columns is-mobile is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fab fa-whatsapp"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1 ml-1">
                    <span class="has-text-white pl-2 pb-2">+91 8688373720</span>
                  </div>
                </div>
                <div class="columns is-mobile is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1 ml-1">
                    <span class="has-text-white pl-3">ashok.allu94@gmail.com</span>
                  </div>
                </div>
                <div class="columns is-mobile is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fab fa-linkedin"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1 ml-1">
                    <span class="has-text-white pl-3"><a href="https://www.linkedin.com/in/ashok-allu-99279aa3/">Ashok Allu</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="column ml-5">
          <div>
            <h6 class="title is-5 has-text-white mb-5 mt-3">Location Information</h6>
            <div class="columns is-mobile is-align-content-flex-start">
              <div class="column is-narrow p-1 ml-1">
                <span class="icon has-text-info">
                  <i class="fas fa-briefcase"></i>
                </span>
              </div>
              <div class="column is-narrow p-1 ml-1">
                <span class="has-text-white pl-3">TCS, Nagpur</span>
              </div>
            </div>
            <div class="columns is-mobile is-align-content-flex-start">
              <div class="column is-narrow p-1 ml-1">
                <span class="icon has-text-info">
                  <i class="fas fa-home"></i>
                </span>
              </div>
              <div class="column is-narrow p-1 ml-1">
                <span class="has-text-white pl-3">Vijayawada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column">
      <div class="columns is-variable is-4 is-flex-direction-column is-flex-grow-1 mr-1">
        <div class="box column p-0 mb-2 has-background-light">
          <article class="message is-black has-background-white">
            <div class="message-body">
              <div class="content has-text-weight-bold has-text-black">
                <h3 class="">
                  <span class="tag is-black is-medium is-rounded">Front-end</span>
                </h3>
                <ul>
                  <li>
                    Designing and building responsive and highly interactive user interfaces for web applications using modern front-end technologies.
                  </li>
                  <li>
                    Deep technical knowledge on the Javascript programming language, in both Prototype-based ES5 and Class-based ES6+, including browser API for DOM manipulation, and able to write Object Oriented code.
                  </li>
                  <li>
                    Strong proficiency in front-end technologies, HTML5, CSS3 (including Flexbox), jQuery 3.x, Bootstrap 3+.
                  </li>
                  <li>
                    Experience with popular modern Javascript UI libraries like React 16+, Vue 3, and UI frameworks like Svelte 3, AngularJS, EmberJS.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div class="box column p-0 mb-2 has-background-light">
          <article class="message is-black has-background-white">
            <div class="message-body">
              <div class="content has-text-weight-bold has-text-black">
                <h3 class="">
                  <span class="tag is-black is-medium is-rounded">Front-end</span>
                </h3>
                <ul>
                  <li>
                    Designing and building responsive and highly interactive user interfaces for web applications using modern front-end technologies.
                  </li>
                  <li>
                    Deep technical knowledge on the Javascript programming language, in both Prototype-based ES5 and Class-based ES6+, including browser API for DOM manipulation, and able to write Object Oriented code.
                  </li>
                  <li>
                    Strong proficiency in front-end technologies, HTML5, CSS3 (including Flexbox), jQuery 3.x, Bootstrap 3+.
                  </li>
                  <li>
                    Experience with popular modern Javascript UI libraries like React 16+, Vue 3, and UI frameworks like Svelte 3, AngularJS, EmberJS.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div class="box column p-0 mb-2 has-background-light">
          <article class="message is-black has-background-white">
            <div class="message-body">
              <div class="content has-text-weight-bold has-text-black">
                <h3 class="">
                  <span class="tag is-black is-medium is-rounded">Front-end</span>
                </h3>
                <ul>
                  <li>
                    Designing and building responsive and highly interactive user interfaces for web applications using modern front-end technologies.
                  </li>
                  <li>
                    Deep technical knowledge on the Javascript programming language, in both Prototype-based ES5 and Class-based ES6+, including browser API for DOM manipulation, and able to write Object Oriented code.
                  </li>
                  <li>
                    Strong proficiency in front-end technologies, HTML5, CSS3 (including Flexbox), jQuery 3.x, Bootstrap 3+.
                  </li>
                  <li>
                    Experience with popular modern Javascript UI libraries like React 16+, Vue 3, and UI frameworks like Svelte 3, AngularJS, EmberJS.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div class="box column p-0 mb-2 has-background-light">
          <article class="message is-black has-background-white">
            <div class="message-body">
              <div class="content has-text-weight-bold has-text-black">
                <h3 class="">
                  <span class="tag is-black is-medium is-rounded">Front-end</span>
                </h3>
                <ul>
                  <li>
                    Designing and building responsive and highly interactive user interfaces for web applications using modern front-end technologies.
                  </li>
                  <li>
                    Deep technical knowledge on the Javascript programming language, in both Prototype-based ES5 and Class-based ES6+, including browser API for DOM manipulation, and able to write Object Oriented code.
                  </li>
                  <li>
                    Strong proficiency in front-end technologies, HTML5, CSS3 (including Flexbox), jQuery 3.x, Bootstrap 3+.
                  </li>
                  <li>
                    Experience with popular modern Javascript UI libraries like React 16+, Vue 3, and UI frameworks like Svelte 3, AngularJS, EmberJS.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div class="box column p-0 mb-2">
          <article class="message is-black has-background-white">
            <div class="message-body">
              <div class="content has-text-weight-bold has-text-black">
                <h3 class="">
                  <span class="tag is-black is-medium is-rounded">Front-end</span>
                </h3>
                <ul>
                  <li>
                    Designing and building responsive and highly interactive user interfaces for web applications using modern front-end technologies.
                  </li>
                  <li>
                    Deep technical knowledge on the Javascript programming language, in both Prototype-based ES5 and Class-based ES6+, including browser API for DOM manipulation, and able to write Object Oriented code.
                  </li>
                  <li>
                    Strong proficiency in front-end technologies, HTML5, CSS3 (including Flexbox), jQuery 3.x, Bootstrap 3+.
                  </li>
                  <li>
                    Experience with popular modern Javascript UI libraries like React 16+, Vue 3, and UI frameworks like Svelte 3, AngularJS, EmberJS.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bulma/css/bulma.css'
  import tailwindcssSvg from '../assets/tailwindcss.svg'
  import railsSvg from '../assets/rails.svg'
  import css3Svg from '../assets/css3.svg'
  import rubySvg from '../assets/ruby.svg'
  export default {
    data() {
      return {
        tailwindcssSvg: tailwindcssSvg,
        railsSvg: railsSvg,
        css3Svg: css3Svg,
        rubySvg: rubySvg,
        showNotification: true
      }
    }
  }
</script>

<style>
  @font-face {
    font-family: "Helvetica";
    src: local("Helvetica"),
     url(../assets/fonts/Helvetica.ttf) format("truetype");
  }

  @font-face {
    font-family: "Calibri";
    src: local("Calibri"),
     url(../assets/fonts/calibri.ttf) format("truetype");
  }

  @font-face {
    font-family: "Roboto-Regular";
    src: local("Roboto-Regular"),
     url(../assets/fonts/Roboto-Regular.ttf) format("truetype");
  }

  @font-face {
    font-family: "Lato-Regular";
    src: local("Lato-Regular"),
     url(../assets/fonts/Lato-Regular.ttf) format("truetype");
  }

  ul li {
    font-family: "Lato-Regular", Arial;
  }
</style>