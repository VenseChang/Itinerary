const application = Stimulus.Application.start()

var datas = {
  "Day1": [
    {
      title: '路思義教堂',
      description: '一座位於台灣台中市西屯區東海大學的基督新教禮拜堂，為著名台灣建築師陳其寬與美國華裔建築師貝聿銘之作。',
      link: 'https://goo.gl/maps/oCj6X2cWNvt9Fc36A'
    },
    {
      title: '東海藝術街商圈',
      description: '理想國藝術街位於東海大學附近的國際街，是一個集人文、藝術景觀和社區意識之大成的理想國社區。',
      link: 'https://goo.gl/maps/LbeYCj7JoA5rGzA66'
    }
  ],
  "Day2": [
    {
      title: '勤美 誠品綠園道',
      description: "勤美 誠品綠園道是位在西區公益路與草悟道旁的購物商場。<br>與市民廣場比鄰，鄰近景點還有國立自然科學博物館、國立台灣美術館、台中金典酒店、全國大飯店、亞緻大飯店等。",
      link: 'https://goo.gl/maps/wDb5mF6p85ggxjSr6'
    },
    {
      title: '臺中國家歌劇院',
      description: '位於臺灣臺中市西屯區七期重劃區裡的大型公有展演空間，為日本建築師伊東豊雄設計',
      link: 'https://www.google.com/maps?cid=15615566740251893986'
    }
  ],
  "Day3": [
    {
      title: '高美濕地',
      description: '「台中高美濕地」一直都是台灣熱門的打卡景點，被國際譽為「一生必遊之地」，更在世界七大天空之鏡中榜上有名，令台灣人如此驕傲的世界級美景，超適合在周休假期帶著家人去走走。',
      link: 'https://goo.gl/maps/wWVbVfYsiMsXR4J28'
    }
  ]
}

application.register("main", class extends Stimulus.Controller {
  static get targets() {
    return [ 'nav', 'content' ]
  }

  connect() {
    this.tabGenerator()
    this.contentGenerator()
  }

  tabGenerator = () => {
    let width = ''
    let output = ''
    let keys = Object.keys(datas)

    switch(keys.length) {
      case 1:
        width = 'w-full'
        break
      case 2:
        width = 'w-1/2'
        break;
      default:
        width = 'w-1/3'
    }

    keys.forEach((key, index) => {
      output += `<div class="${width} flex justify-center items-center border ${(index === 0) ? '' : 'border-l-0'} border-gray-300 shadow-md" data-key='${key}' data-action="click->main#contentGenerator">${key}</div>`
    })

    this.navTarget.innerHTML = output
  }

  contentGenerator = (element) => {
    let el = ''
    let keys = Object.keys(datas)
    let key = (element) ? element.target.dataset.key : keys[0]

    datas[key].forEach(data => {
      el += '<div class="block w-full my-4 py-4 px-2 bg-white border border-gray-200 shadow-md rounded-md">'
      el += `  <p class="pb-2 text-center font-bold border-b border-gray-300">${data.title}</p>`
      el += `  <p class="py-4">${data.description}</p>`
      el += '  <div class="flex flex-row-reverse px-2 mt-4">'
      el += `    <a href="${data.link}">`
      el += '      <img src="src/images/map.png" alt="map" width="36" height="36">'
      el += '    </a>'
      el += '  </div>'
      el += '</div>'
    })


    this.contentTarget.innerHTML = el
  }
})
