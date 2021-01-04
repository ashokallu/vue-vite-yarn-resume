<template>
  <!-- <img :src="tailwindcssSvg" alt="alt" class="image is-64x64"> -->
  <!-- <img :src="railsSvg" alt="alt" class="image is-64x64"> -->
  <div class="columns is-align-content-stretch">
    <div class="column is-two-fifths">
      <div class="columns is-flex-direction-column has-background-dark" style="min-height: 100vh;">
        <div class="column is-narrow ml-5 mt-4 has-text-white">
          <div class="columns is-flex-direction-column is-align-items-center">
            <div class="column is-narrow pr-6">
              <img :src="tailwindcssSvg" alt="alt" class="image is-128x128">
            </div>
            <div class="column ml-4">
              <div class="content">
                <h6 class="title is-4 has-text-white mb-3">Ashok Allu</h6>
                <h6 class="title is-6 has-text-white">Full Stack Web Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="column ml-5">
          <div class="tile">
            <div class="content">
              <h6 class="title is-5 has-text-white mb-4">Skills</h6>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">Ruby</span>
                    <span class="tag has-text-black">v1.9.x to v2.7.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">Ruby on Rails</span>
                    <span class="tag has-text-black">v3.x to v6.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">JavaScript</span>
                    <span class="tag has-text-black">ES5 to ES6+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">Bootstrap</span>
                    <span class="tag has-text-black">v3.x to v5(alpha)</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">React</span>
                    <span class="tag has-text-black">v16.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">Vue</span>
                    <span class="tag has-text-black">v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">Svelte</span>
                    <span class="tag has-text-black">v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">AngularJS</span>
                    <span class="tag has-text-black">v1.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">tailwindcss</span>
                    <span class="tag has-text-black">v1.x+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">Bulma</span>
                    <span class="tag has-text-black">v0.5.x to 0.9.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">PostgreSQL</span>
                    <span class="tag has-text-black">v9.x+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">jQuery</span>
                    <span class="tag has-text-black">v1.5.x to 3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">HTML5</span>
                    <span class="tag has-text-black">v5</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag is-success has-text-black">CSS3</span>
                    <span class="tag has-text-black">v3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="column ml-5 is-narrow">
          <h6 class="title is-5 has-text-white">Other Software and Tools</h6>
          <div class="content">
            <div class="field is-grouped is-grouped-multiline">
              <div class="tags are-small">
                <span class="tag is-primary has-text-black">webpack</span>
                <span class="tag is-primary has-text-black">rollup (for svelte 3)</span>
                <span class="tag is-primary has-text-black">sublime text 3</span>
                <span class="tag is-primary has-text-black">gitlab</span>
                <span class="tag is-primary has-text-black">ms office</span>
              </div>
            </div>
          </div>
        </div> -->
        <div class="column ml-5 mt-4">
          <div class="content">
            <h6 class="title is-5 has-text-white mb-5">Contact Information</h6>
            <div class="columns is-flex-direction-column">
              <div class="column">
                <div class="columns is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fas fa-mobile-alt"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1">
                    <span class="has-text-white pl-2">+91 9552782887</span>
                  </div>
                </div>
                <div class="columns is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fab fa-whatsapp"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1 ml-1">
                    <span class="has-text-white pl-2 pb-2">+91 8688373720</span>
                  </div>
                </div>
                <div class="columns is-align-content-flex-start">
                  <div class="column is-narrow p-1 ml-1">
                    <span class="icon has-text-info">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <div class="column is-narrow p-1 ml-1">
                    <span class="has-text-white pl-3">ashok.allu94@gmail.com</span>
                  </div>
                </div>
                <div class="columns is-align-content-flex-start">
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
        <div class="column ml-5">
          <div>
            <h6 class="title is-5 has-text-white mb-5 mt-3">Location Information</h6>
            <div class="columns is-align-content-flex-start">
              <div class="column is-narrow p-1 ml-1">
                <span class="icon has-text-info">
                  <i class="fas fa-briefcase"></i>
                </span>
              </div>
              <div class="column is-narrow p-1 ml-1">
                <span class="has-text-white pl-3">TCS, Nagpur</span>
              </div>
            </div>
            <div class="columns is-align-content-flex-start">
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
    <div class="column"></div>
  </div>
</template>

<script>
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