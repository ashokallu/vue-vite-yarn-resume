<template>
  <!-- <img :src="tailwindcssSvg" alt="alt" class="image is-64x64"> -->
  <!-- <img :src="railsSvg" alt="alt" class="image is-64x64"> -->
  <div class="columns is-variable m-4 is-4 is-mobile is-align-items-stretch m-1">
    <div class="column is-3 is-flex my-2 mr-2 left-info">
      <div class="columns is-flex-direction-column has-background-black" style="">
        <div class="column is-narrow py-0 has-text-white">
          <div class="tile is-vertical">
            <div class="tile is-align-items-center">
              <div class="box p-2 tile mb-0 has-background-black is-flex">
                <figure class="image" style="margin: auto;">
                  <img :src="rubySvg" alt="alt" class="image is-64x64">
                </figure>
              </div>
              <!-- <div class="box tile has-background-black is-flex">
                <figure class="image" style="margin: auto;">
                  <img :src="resumePic" alt="alt" class="image is-rounded is-128x128">
                </figure>
              </div> -->
              <div class="box p-2 tile mb-0 has-background-black is-flex">
                <figure class="image" style="margin: auto;">
                  <img :src="railsSvg" alt="alt" class="image is-128x128">
                </figure>
              </div>
              <div class="box p-3 tile mb-0 has-background-black is-flex">
                <figure class="image" style="margin: auto;">
                  <img :src="javaScriptSvg" alt="alt" class="image is-64x64">
                </figure>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="box p-0 tile is-child has-background-black">
                <div class="content is-flex is-flex-direction-column is-align-items-center is-align-content-center">
                  <p class="title is-4 has-text-white mb-3">Ashok Allu</p>
                  <p class="title is-6 has-text-white">Full Stack Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-4">Technologies</h6>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">Ruby</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v1.9.x to v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">Ruby on Rails</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v3.x to v7.x(alpha)</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">RSpec</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v4.x+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">JavaScript</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">ES5 & ES6+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">CoffeeScript</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v1+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">Bootstrap</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v3.x to v5(Beta)</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">React</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v16.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">Vue</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">Svelte</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">AngularJS</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v1.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">Bulma</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v0.5.x to 0.9.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">PostgreSQL</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v9.x+</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">jQuery</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v1.5.x to 3.x</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">HTML5</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v5</span>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons are-small">
                    <span class="tag language-tag has-text-black has-text-weight-semibold">CSS3</span>
                    <span class="tag has-background-white has-text-black has-text-weight-medium">v3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-4">Technical Concepts</h6>
              <div class="field is-grouped is-grouped-multiline">
                <div class="tags are-small">
                  <span class="tag has-text-white has-text-weight-medium">OOP</span>
                  <span class="tag has-text-white has-text-weight-medium">MVC</span>
                  <span class="tag has-text-white has-text-weight-medium">MVVM</span>
                  <span class="tag has-text-white has-text-weight-medium">ORM</span>
                  <span class="tag has-text-white has-text-weight-medium">DOM</span>
                  <span class="tag has-text-white has-text-weight-medium">JSON</span>
                  <span class="tag has-text-white has-text-weight-medium">HTTP</span>
                  <span class="tag has-text-white has-text-weight-medium">RESTful</span>
                  <span class="tag has-text-white has-text-weight-medium">APIs</span>
                  <span class="tag has-text-white has-text-weight-medium">Postman</span>
                  <span class="tag has-text-white has-text-weight-medium">DSLs</span>
                  <span class="tag has-text-white has-text-weight-medium">Web Services</span>
                  <span class="tag has-text-white has-text-weight-medium">Web Sockets</span>
                  <span class="tag has-text-white has-text-weight-medium">Authentication</span>
                  <span class="tag has-text-white has-text-weight-medium">Agile</span>
                  <span class="tag has-text-white has-text-weight-medium">Scrum</span>
                  <span class="tag has-text-white has-text-weight-medium">Kanban</span>
                  <span class="tag has-text-white has-text-weight-medium">Unit Testing</span>
                  <span class="tag has-text-white has-text-weight-medium">Multithreaded programming</span>
                  <span class="tag has-text-white has-text-weight-medium">Declarative programming</span>
                  <span class="tag has-text-white has-text-weight-medium">Reactive programming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-4">Software and Tools</h6>
              <div class="field is-grouped is-grouped-multiline">
                <div class="tags are-small">
                  <span class="tag has-text-white has-text-weight-medium">webpack</span>
                  <span class="tag has-text-white has-text-weight-medium">sublime text 3</span>
                  <span class="tag has-text-white has-text-weight-medium">bundler</span>
                  <span class="tag has-text-white has-text-weight-medium">rvm</span>
                  <span class="tag has-text-white has-text-weight-medium">Rake</span>
                  <span class="tag has-text-white has-text-weight-medium">ERB</span>
                  <span class="tag has-text-white has-text-weight-medium">Slim</span>
                  <span class="tag has-text-white has-text-weight-medium">npm</span>
                  <span class="tag has-text-white has-text-weight-medium">yarn</span>
                  <span class="tag has-text-white has-text-weight-medium">git</span>
                  <span class="tag has-text-white has-text-weight-medium">github</span>
                  <span class="tag has-text-white has-text-weight-medium">MS office</span>
                  <span class="tag has-text-white has-text-weight-medium">Nginx</span>
                  <span class="tag has-text-white has-text-weight-medium">Redis</span>
                  <span class="tag has-text-white has-text-weight-medium">Solr</span>
                  <span class="tag has-text-white has-text-weight-medium">Matomo</span>
                  <span class="tag has-text-white has-text-weight-medium">Ubuntu14+</span>
                  <span class="tag has-text-white has-text-weight-medium">RHEL6+</span>
                  <span class="tag has-text-white has-text-weight-medium">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-4">Interested Technologies</h6>
              <div class="field is-grouped is-grouped-multiline">
                <div class="tags are-small">
                  <span class="tag has-text-white has-text-weight-medium">Rust</span>
                  <span class="tag has-text-white has-text-weight-medium">Elixir</span>
                  <span class="tag has-text-white has-text-weight-medium">Deno</span>
                  <span class="tag has-text-white has-text-weight-medium">Sveltekit</span>
                  <span class="tag has-text-white has-text-weight-medium">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="tile is-child">
              <div class="box has-background-black">
                <h6 class="title is-5 has-text-white mb-5">Contact Information</h6>
                <div class="columns is-flex-direction-column">
                  <div class="column">
                    <div class="columns is-mobile is-align-content-flex-start">
                      <div class="column is-narrow p-1">
                        <span class="icon">
                          <i class="fab fa-whatsapp"></i>
                        </span>
                      </div>
                      <div class="column is-narrow p-1">
                        <span class="has-text-white pl-2 pb-2">+91 8688373720</span>
                      </div>
                    </div>
                    <div class="columns is-mobile is-align-content-flex-start">
                      <div class="column is-narrow p-1">
                        <span class="icon">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                      <div class="column is-narrow p-1">
                        <span class="has-text-white pl-3"><a class="has-text-white" href="mailto:ashok.allu94@gmail.com">ashok.allu94@gmail.com</a></span>
                      </div>
                    </div>
                    <div class="columns is-mobile is-align-content-flex-start">
                      <div class="column is-narrow p-1">
                        <span class="icon">
                          <i class="fab fa-github"></i>
                        </span>
                      </div>
                      <div class="column is-narrow p-1">
                        <span class="has-text-white pl-3"><a class="has-text-white" href="https://github.com/ashokallu">Ashok Allu</a></span>
                      </div>
                    </div>
                    <div class="columns is-mobile is-align-content-flex-start">
                      <div class="column is-narrow p-1">
                        <span class="icon">
                          <i class="fab fa-linkedin"></i>
                        </span>
                      </div>
                      <div class="column is-narrow p-1">
                        <span class="has-text-white pl-3"><a class="has-text-white" href="https://www.linkedin.com/in/ashok-allu-99279aa3/">Ashok Allu</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-5">Location Information</h6>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">TCS, Nagpur</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-home"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Vijayawada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-5">Known Languages</h6>
              <div class="columns is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-language"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">English</span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Telugu</span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="column is-narrow py-0">
          <div class="tile">
            <div class="box tile is-child has-background-black">
              <h6 class="title is-5 has-text-white mb-5">Interests</h6>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-users"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">OSS-Contribution</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-car"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Driving</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-utensils"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Cooking</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-ticket-alt"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Movies</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-music"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Music</span>
                </div>
              </div>
              <!-- <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fas fa-cloud-moon"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Stargazing</span>
                </div>
              </div> -->
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fab fa-dev"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Tech Blogs</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Tech Twitter</span>
                </div>
              </div>
              <div class="columns is-mobile is-align-content-flex-start">
                <div class="column is-narrow p-1 ml-1">
                  <span class="icon">
                   <i class="fas fa-dumbbell"></i>
                  </span>
                </div>
                <div class="column is-narrow p-1 ml-1">
                  <span class="has-text-white pl-1">Workout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>

    <div class="column my-2 p-0 is-flex is-flex-direction-column info-section">
      <div class="tile p-0 is-vertical has-background-white">
        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black info-section-text">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">Career Summary</span>
                  </h3>
                  <ul>
                    <li>
                      6 years of professional finesse as a full-stack web developer in the field of web-based software development, in building and maintaining highly interactive, scalable, secure and robust web-based Ruby on Rails applications.
                    </li>
                    <li>
                      A seasoned polyglot programmer, well-versed to code in two high-level programming languages, Ruby and Javascript.
                    </li>
                    <li>
                      Can display remarkable flair in writing high-quality, clean, readable, maintainable and reusable code by following the best practices and coding standards of the programming languages.
                    </li>
                    <li>
                      Achieved proficiency in different styles of programming, which include Object-Oriented, Procedural, reactive, functional, declarative and imperative, primarily due to exposure to all of the major front-end frameworks including Svelte, React, Vue, AngularJS and EmberJS.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!--  -->
        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">Technical Skills</span>
                  </h3>
                  <dd>
                    <dl>
                      <dt>Front-end:</dt>
                      <ul>
                        <li>
                          Designing and building responsive and highly interactive user interfaces for web-based applications using modern front-end technologies.
                        </li>
                        <li>
                          Well versed in the JavaScript programming language, in both Prototype-based ES5 and Class-based ES6+, including browser API for DOM manipulation, and ability to write clean Object Oriented code in JS.
                        </li>
                        <li>
                          Strong proficiency in HTML5, CSS3 (including Flexbox), jQuery 3.x, Bootstrap 3+.
                        </li>
                        <li>
                          Sound knowledge on all the popular modern JavaScript UI libraries and frameworks like React 16+, Vue 3, Svelte 3, AngularJS, EmberJS.
                        </li>
                        <li>
                          Fluent in Bulma and Bootstrap CSS libraries.
                        </li>
                      </ul>
                      <dt>Back-end:</dt>
                      <ul>
                        <li>
                          Strong object-oriented design thinking and programming skills in the Ruby programming language, including design patterns knowledge.
                        </li>
                        <li>
                          Advanced Ruby programmer with expertise in building DSLs using Ruby's Metaprogramming features.
                        </li>
                        <li>
                          In-depth experience in working with Ruby versions ranging from 1.9 to 3.0, and Ruby on Rails framework versions ranging from 3 to 7(alpha).
                        </li>
                        <li>
                          Expertise in architecting, designing, developing, and maintaining highly interactive web-based applications using Ruby on Rails framework alongside using webpacker to manage application-like JavaScript for the front-end.
                        </li>
                        <li>
                          Sound knowledge on major components of the Ruby on Rails framework, primarily, ActiveRecord, ActiveSupport and ActionPack.
                        </li>
                        <li>
                          In-depth understanding of Ruby on Rails framework inside-out on source code level, from versions 3 till latest version 7. Can Fluently monkey-patch the source code to fit for the project requirement, primarily in ActiveRecord, ActionPack and ActiveSupport libraries.
                        </li>
                        <li>
                          Competence to migrate legacy Ruby application code to use newer versions of Ruby and Rails.
                        </li>
                      </ul>
                      <dt>
                        Database:
                      </dt>
                      <ul>
                        <li>
                          Ability to understand and create complex database schemas that represent and support business processes.
                        </li>
                        <li>
                          Working experience with MySQL, Postgres relational databases and NoSQL databases like Redis and Solr.
                        </li>
                        <li>
                          Fluent in building and optimizing SQL queries in MySQL and PostgreSQL.
                        </li>
                      </ul>
                      <dt>
                        Code versioning:
                      </dt>
                      <ul>
                        <li>
                          Proficient in Git and Github code versioning tools.
                        </li>
                        <li>
                          Working Knowlegde in TortoiseSVN.
                        </li>
                      </ul>
                      <dt>
                        Testing:
                      </dt>
                      <ul>
                        <li>
                          Comfortable with unit tests, integration tests and test coverage.
                        </li>
                        <li>
                          Dealt with test-driven software development using RSpec.
                        </li>
                      </ul>
                    </dl>
                  </dd>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!--  -->
        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">OSS Contribution</span>
                  </h3>
                  <div class="ml-3">
                    <p class="company-info mb-1 has-text-black has-text-weight-semibold">
                      Ruby On Rails 7.x
                    </p>
                    <p class="title has-text-black title-role-info is-size-6">
                      ActiveRecord library
                    </p>
                  </div>
                  <ul>
                    <li>
                      In-depth understanding of Ruby on Rails frameworks from version 3.x to 7.x in source code level, primarily working on ActiveRecord, ActionPack, ActiveSupport, Railties components of the framework.
                    </li>
                    <li>
                      Started OSS contribution recently, and opened a PR for an enhancement in ActiveRecord migration schema statement method to drop a join table.
                    </li>
                    <li>
                      <strong>Link:</strong><span> https://github.com/rails/rails/pull/42241</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!--  -->
        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">Work Experience</span>
                  </h3>
                  <div class="ml-3">
                    <p class="company-info mb-1 has-text-black has-text-weight-semibold">
                      TATA Consultancy Services, Nagpur
                    </p>
                    <p class="title has-text-black title-role-info is-size-6">
                      Full stack web developer
                    </p>
                    <p class="subtitle has-text-black subtitle-role-info">
                      June 2015 - Present
                    </p>
                  </div>
                  <ul>
                    <li>
                      A full-stack web developer role in a enterprise level social media product, built on the objective to offer a wide range of enterprise social networking services to all the half a million employees of the organization, and premium services to other products within the organization.
                    </li>
                    <li>
                      Employees can create and manage their profiles, build networks and connections within the organization by following other employees, have conversations, create and join communities, host and join live chat sessions, host and participate in challenges, create posts in their timelines and communities, users can engage with the posts through likes, comments and shares, create personal storage drives to store media files, get live push notifications based on activities, and the product also has powerful search engine to power the search for other users and content in the application, and many more other services.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">Work Responsibilities</span>
                  </h3>
                  <ul>
                    <li>
                      To collaborate with a fun, passionate team of engineers and designers in designing, building and maintaining a big, robust, high performance, scalable and maintainable web-based app that concurrently serves a million of web users, built using Ruby on Rails framework and other modern web technologies.
                    </li>
                    <li>
                      Work closely with the product managers, stakeholders, clients and UX team to design and build new features, enhancements, APIs that shape the future of the product by following the agile way of working.
                    </li>
                    <li>
                      To collaborate with product team to build new features and fulfill requirements stated in the high quality product roadmaps based on business, product and tech strategies.
                    </li>
                    <li>
                      Involvement in the entire SDLC of the product, including the analysis, design, development, fixing, and monitoring of issues.
                    </li>
                    <li>
                      Primary focus of the work is to design, develop and maintain all the server-side logic, ensuring high performance and responsiveness to requests for RESTful web services from the web clients, and servicing requests from the RESTful APIs built for mobile devices.
                    </li>
                    <li>
                      Review Pull Requests from other team members to ensure delivery of high-quality, maintainable and testable code using best practices in the industry.
                    </li>
                    <li>
                      Providing technical mentoring to the team to keep them motivated, and foster an environment of ownership and learning.
                    </li>
                    <li>
                      Creating technical literature, such as best practises guidelines, training materials, sample code snippets to encourage team members to leverage industry best practices of Ruby and JavaScript ecosystems.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">Strengths</span>
                  </h3>
                  <ul>
                    <li>
                      Strong analytical skills to understand business requirements and translate them into technical requirements.
                    </li>
                    <li>
                      Approach to managing tasks at work is to take ownership, be committed, pro-active, pragmatic, intrinsically motivated, work autonomously as well as collaboratively on bigger projects.
                    </li>
                    <li>
                      An analytical mind with a strong passion for solving real-world problems, and deeply care about the impact of the software that I collaborate to build.
                    </li>
                    <li>
                      Strong interpersonal skills with high proficiency in written and spoken English, and can communicate well in writing.
                    </li>
                    <li>
                      An engineer having a good product sense who can advocate for the end users by paying great attention to detail in areas of usability and design of the product, and to be able to look beyond the user story, and have empathy for the their needs.
                    </li>
                    <li>
                      Highly inquisitive by nature, always on the constant lookout for new technologies, searching for the best technology best fit for a use case, and knack to quickly pick up new languages, libraries and frameworks.
                    </li>
                    <li>
                      Highly enthusiastic to stay up-to-date with current and future full-stack technologies and architectures.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-child mx-1 child-tile" child-tile=true>
          <div class="box info-tile p-1">
            <article class="message is-black has-background-white">
              <div class="message-body message-body-border p-2">
                <div class="content has-text-weight-medium has-text-black">
                  <h3 class="">
                    <span class="tag info-tag is-black is-medium is-rounded">Education</span>
                  </h3>
                  <ul>
                    <li>
                      <div class="ml-3">
                        <p class="company-info mb-1 has-text-black has-text-weight-semibold">
                          Bachelor of Technology in Mechanical Engineering
                        </p>
                        <p class="title has-text-black title-role-info is-size-6">
                          VR Siddhartha Engineering College, Vijayawada
                        </p>
                        <p class="subtitle has-text-black subtitle-role-info is-size-7">
                          August 2011 - April 2015
                        </p>
                        <p class="title has-text-black title-role-info is-size-6 mt-1 has-text-weight-semibold">
                          CGPA: <strong>8.02</strong>
                        </p>
                      </div>
                      <li>
                        <div class="ml-3">
                          <p class="company-info mb-1 has-text-black has-text-weight-semibold">
                            Board of Intermediate Education
                          </p>
                          <p class="title has-text-black title-role-info is-size-6">
                            Sri Chaitanya Junior College,, Vijayawada
                          </p>
                          <p class="subtitle has-text-black subtitle-role-info is-size-7">
                            June 2009 - April 2011
                          </p>
                          <p class="title has-text-black title-role-info is-size-6 mt-1 has-text-weight-semibold">
                            Scored Percentage: <strong>92.7%</strong>
                          </p>
                        </div>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <footer class="footer p-0 has-background-black">
    <div class="content has-text-centered has-text-white">
      <p>
        This resume is an SPA built by self (me) with modern front-end technologies -
        Bulma <span>&#10084;  </span> Vue 3 <span>&#10084;  </span> Vite
      </p>
    </div>
  </footer> -->
</template>

<script>
  import 'bulma/css/bulma.css'
  import tailwindcssSvg from '../assets/tailwindcss.svg'
  import railsSvg from '../assets/rails.svg'
  import css3Svg from '../assets/css3.svg'
  import rubySvg from '../assets/ruby.svg'
  import javaScriptSvg from '../assets/javascript.svg'
  import resumePic from '../assets/resume_pic.jpg'
  export default {
    data() {
      return {
        tailwindcssSvg: tailwindcssSvg,
        railsSvg: railsSvg,
        css3Svg: css3Svg,
        rubySvg: rubySvg,
        javaScriptSvg: javaScriptSvg,
        resumePic: resumePic,
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

  span.tag {
    background-color: rgba(204, 0, 0, 1);
  }

  .icon {
    color: rgba(204, 0, 0, 1);
  }

  .main-info-title {
    box-shadow: rgb(233 30 99 / 60%) 0px 1px 10px, rgb(233 30 99) 1px 2px 0px 4px;
    /*box-shadow: rgb(233 30 99 / 60%) 0px 0px 0px, rgb(233 30 99) 1px 1px 0px 4px;*/
    /*box-shadow: rgb(233 30 99 / 78%) 0px 0px 0px, rgb(233 30 99) 0px 1px 1px 4px;*/
    /*box-shadow: rgba(233, 30, 99, 0.2) 0px 0px 0px 1px inset, rgba(233, 30, 99, 0.9) 0px 0px 0px 2px;*/
    /*box-shadow: rgb(233 30 99 / 10%) 5px 5px 5px, rgb(255 0 87) 2px 3px 1px 3px;*/
  }

  .info-tile {
    /*box-shadow: rgb(233 30 99 / 60%) 0px 0px 0px, rgb(233 30 99) 1px 1px 0px 4px;*/
    /*box-shadow: rgb(211 2 2) 0px 0px 0px, rgb(211 2 2) 1px 1px 0px 4px;*/
    /*box-shadow: rgb(211 2 2) 0px 0px 0px, rgb(211 2 2) 0px 1px 1px 3px;*/
    box-shadow: rgb(211 2 2) 0px 0px 0px 2px, rgb(211 2 2) 0px 0px 1px 1px;
    /*box-shadow: rgb(103 58 183) 0px 0px 0px 2px, rgb(103 58 183) 0px 0px 1px 1px;*/
  }

  .message-body-border {
    border-left-width: 0px;
    border-style: none;
  }

  .info-section {
    /*background-color: rgb(233, 30, 99) !important;*/
  }

  .info-tag {
    border: 1px solid;
    background-color: rgb(211 2 2) !important;
    /*box-shadow: rgb(0 0 1) 0px 0px 0px, rgb(0 0 1) 0px 1px 1px 3px;*/
    /*box-shadow: rgb(0 0 1) 0px 0px 2px 3px, rgb(0 0 1) 1px 3px 0px -1px;*/
    /*box-shadow: rgb(250 225 5) 0px 0px 2px 3px, rgb(156 39 176) 1px 3px 0px -1px;*/
    /*box-shadow: rgb(211 2 2) 0px 0px 0px 2px, rgb(211 2 2) 0px 0px 1px 1px;*/
    /*box-shadow: rgb(254 228 3) 0px 0px 0px 1px, rgb(255 235 59) 0px 0px 0px 1px;*/
    /*box-shadow: rgb(103 58 183) 0px 0px 0px 1px, rgb(103 58 183) 0px 0px 0px 1px;*/
    box-shadow: rgb(204 0 0) 0px 0px 0px 1px, rgb(204 0 0) 0px 0px 0px 1px;
  }

  .left-info {
    border-radius: 100px;
  }

  .info-section-text {
    /*color: rgb(204 0 0);*/
  }

  .title-role-info {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 1.35em !important;
  }

  .subtitle-role-info {
    font-size: 0.9rem;
    font-weight: 300;
  }

  div[child-tile="true"].child-tile:not(:first-child) {
    margin-top: -0.75rem !important;
  }

  .language-tag {
    /*border: 1px solid black !important;*/
    border-right-width: 1px !important;
    border-right-style: solid !important;
    border-right-color: black !important;
  }
</style>