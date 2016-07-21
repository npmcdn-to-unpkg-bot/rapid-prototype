const choo = require('choo')
const app = choo()
const html = require('choo/html')
const contents = [
 {
    keywords: {
      href: 'https://www.sitepoint.com/html-css/',
      items: 'SVG'
    },
    commentCount: {
      href: 'https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/#comments',
      number: 4
    },
    headline: {
      href: 'https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/',
      text: 'A Working SVG Workflow for Accessible Icons'
    },
    author: {
      href: 'https://github.com/jeblister',
      fullName: 'Mohamed JEBLI'
    },
    datePublished: 'April 15, 2016'
  },
  {
    keywords: {
      href: 'https://www.sitepoint.com/html-css/',
      items: 'SVG'
    },
    commentCount: {
      href: 'https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/#comments',
      number: 4
    },
    headline: {
      href: 'https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/',
      text: 'A Working SVG Workflow for Accessible Icons'
    },
    author: {
      href: 'https://github.com/jeblister',
      fullName: 'Mohamed JEBLI'
    },
    datePublished: 'April 15, 2016'
  },
{
    keywords: {
      href: 'https://www.sitepoint.com/html-css/',
      items: 'SVG'
    },
    commentCount: {
      href: 'https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/#comments',
      number: 4
    },
    headline: {
      href: 'https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/',
      text: 'A Working SVG Workflow for Accessible Icons'
    },
    author: {
      href: 'https://github.com/jeblister',
      fullName: 'Mohamed JEBLI'
    },
    datePublished: 'April 15, 2016'
  }
]

const layout = (children) => html`
  <div class="flex flex-column bg-white border rounded">
    <div class="py2 flex flex-auto flex-justify-center  white">
      <h1 class="h4 px2 flex-auto h2 m0 navy">Refind_School </h1>
      <input type="text" class="navy field">
      <button class="btn mx2"><i class="fa fa-search icon icon-bubble navy" aria-hidden="true"></i></button>
    </div>
         ${children}

    <div class="p2 bg-darken-1">
      <p class="center m0 h5">Turkey short loin tenderloin jerky.</p>
    </div>
  </div>`


const view = () => layout(html`<div class="p2 felx-auto bg-body">
      <ul class="m0 p0 flex flex-justify-center flex-wrap">
        ${contents.map((item)=> Card(item))}
      </ul>
    </div>`)

const Card = ({keywords, commentCount, headline, author, datePublished}) => html` <li class="m2 flex flex-column  flex-li">
          <article class="flex flex-column flex-auto border red bg-white" itemscope itemtype="http://schema.org/Article">
            <div class="h4 px2 py2 flex border-bottom-2 bold">
              <a href=${keywords.href} class="btn red" itemprop="keywords">
                ${keywords.items}
              </a>

              <a class="btn mx-auto-left flex red" href=${commentCount.href} itemprop="commentCount">
                ${commentCount.number}
                <i class="fa fa-comment icon icon-bubble px1" aria-hidden="true"></i>
              </a>
            </div>

            <div class="p2 flex navy">
              <h2 class="a:hover h2 m0" itemprop="headline">
                <a class="btn line-height-2" href=${headline.href}>${headline.text}</a>
              </h2>
            </div>

            <footer class="h4 nowrap p2  flex mx-auto-top">
              <span class="mr1 gray">
                by <a class="red btn" href=${author.href} itemprop="author">${author.fullName}</a>
              </span>

              <time datetime="2016-05-12T12:00" class="gray mt1" itemprop="datePublished">
                ${datePublished}
              </time>
            </footer>
          </article>
        </li>
`
app.router((route) => [
  route('/', view)
])
const tree = app.start()
document.body.appendChild(tree)