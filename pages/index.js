import Head from "next/head"
import Link from "next/link"
import Page from "components/page"
import NavBar from "components/navbar"
import { Headline, Subtitle, SectionTitle } from "components/typography"

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Home - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <div className="hidden w-full h-96 px-8 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"></div>

      <div className="w-full h-screen flex items-center mt-10 -mt-20 px-8">
        <section className="grid grid-cols-12 max-w-screen-xl lg:gap-x-20 mx-auto items-center">
          <div className="col-span-full xl:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 font-serif">Make your growth easy.</h2>
            <p className="text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500 max-w-screen">I'm a coach and former product leader. I help high performing professionals and executives at companies like <span className="font-bold text-gray-700">Amazon</span>,  <span className="font-bold text-gray-700">Facebook</span>, and <span className="font-bold text-gray-700">Microsoft</span> achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
            <Link href="/coaching">
              <a>
                <button className="px-8 py-4 bg-purple-600 text-lg font-bold text-white rounded mt-2 lg:mt-4 shadow-lg">What is coaching?</button>
              </a>
            </Link>
          </div>
          <div className="hidden xl:grid col-span-full mt-10 xl:mt-0 xl:col-span-4 mt-0">
            <img className="shadow-xl transform rotate-1 rounded" src="selft.jpg" />
          </div>
        </section>
      </div>

      <section className="grid grid-cols-12 max-w-screen-xl mx-auto gap-x-8 mb-20 px-8 space-y-8 xl:px-0 xl:space-y-0 xl:-mt-20">
        <div className="col-span-full xl:col-span-6">
          <div className="shadow-lg rounded-lg">
            <div className="w-full bg-gray-100 border border-b-0 p-16 text-xl text-gray-500 leading-relaxed rounded-t-lg">He is not just a coach but a friend and a mentor. He truly believes in the good in you and is there to fend for it when you let it go unrecognized.
            </div>
            <div className="w-full bg-white border border-t-0 rounded-b-lg p-6 flex items-center">
              <img className="w-16 h-16 rounded-full" src="me.jpg" />
              <div className="w-full pl-6">
                <div className="text-lg font-bold text-gray-900">Jessica Ko</div>
                <div className="text-gray-500">Head of Design @ <span className="font-bold">Superli</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full xl:col-span-6">
          <div className="shadow-lg rounded-lg">
            <div className="w-full bg-gray-100 border border-b-0 p-16 text-xl text-gray-500 leading-relaxed rounded-t-lg">Jered facilitates a safe environment where thoughtful reflection happens. He helps you frame your thoughts and perceptions differently, giving you a fresh perspective on yourself and your patterns. He sheds light on details through helpful exercises and questions.
            </div>
            <div className="w-full bg-white border border-t-0 rounded-b-lg p-6 flex items-center">
              <img className="w-16 h-16 rounded-full" src="me.jpg" />
              <div className="w-full pl-6">
                <div className="text-lg font-bold text-gray-900">Benjamin Palmer</div>
                <div className="text-gray-500">Director of Product @ <span className="font-bold">Facebook</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-72 bg-purple-500 mt-10"></div>

      <section className="grid grid-cols-12 gap-y-2 md:gap-x-10 max-w-screen-xl px-4 mt-10 mx-auto">

      </section>

      <section className="grid grid-cols-12 gap-y-2 md:gap-x-10 max-w-screen-xl px-4 mt-10 mx-auto">
        <div className="col-span-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-extrabold text-gray-900 tracking-tight mb-8 font-serif">A big headline and question here.</h2>
        </div> 
        <div className="col-span-full max-w-screen-md">
          <p className="text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-500">Velit ut tortor pretium viverra suspendisse. Orci ac auctor augue mauris augue neque gravida. Rhoncus mattis rhoncus urna neque viverra.
          </p>
          <p className="mb-4 text-gray-900">Euismod in pellentesque massa placerat. Ut tellus elementum sagittis vitae et leo duis. In fermentum posuere urna nec tincidunt praesent semper. Dictum non consectetur a erat nam at lectus urna. Aliquet sagittis id consectetur purus ut faucibus. Tincidunt augue interdum velit euismod. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor dignissim convallis. Scelerisque varius morbi enim nunc faucibus a. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Eu ultrices vitae auctor eu augue.
          </p>
          <p className="mb-4 text-gray-900 text-sm">Quis vel eros donec ac odio tempor orci dapibus ultrices. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Aliquam sem et tortor consequat id porta. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sed felis eget velit aliquet sagittis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Tortor posuere ac ut consequat semper. Tellus orci ac auctor augue mauris augue. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Porttitor eget dolor morbi non arcu risus.
          </p>
          <p className="mb-4 text-gray-700 text-lg">As a former product leader, I partner with high-performing tech professionals and executives who are seeking big change. With my coaching, they have a bigger impact, a deeper understanding of themselves, and a lot more motivation. My secret is understanding each person and adapting my strategy to their exact needs. I will accelerate you towards where you want to be.
          </p>
        </div>
        <div className="col-span-full">
          <div className="h-96 w-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded"></div>
        </div>
      </section>

            <main className="px-4 max-w-screen-lg mx-auto">
        <Headline>Hello.</Headline>

        <Subtitle>Hahaha</Subtitle>

        <SectionTitle>This is the section title.</SectionTitle>
      </main>

      <section className="grid grid-cols-12 gap-y-2 gap-x-4 max-w-screen-lg mx-auto px-4">
        <div className="bg-red-300 text-white text-center px-2">1</div>
        <div className="bg-red-300 text-white text-center px-2">2</div>
        <div className="bg-red-300 text-white text-center px-2">3</div>
        <div className="bg-red-300 text-white text-center px-2">4</div>
        <div className="bg-red-300 text-white text-center px-2">5</div>
        <div className="bg-red-300 text-white text-center px-2">6</div>
        <div className="bg-red-300 text-white text-center px-2">7</div>
        <div className="bg-red-300 text-white text-center px-2">8</div>
        <div className="bg-red-300 text-white text-center px-2">9</div>
        <div className="bg-red-300 text-white text-center px-2">10</div>
        <div className="bg-red-300 text-white text-center px-2">11</div>
        <div className="bg-red-300 text-white text-center px-2">12</div>

        <div className="bg-red-300 text-white px-2">One</div>
        <div className="bg-red-300 text-white px-2 col-span-2">Two</div>
        <div className="bg-red-300 text-white px-2 col-span-3">Three</div>
        <div className="bg-red-300 text-white px-2 col-span-4">Four</div>
        <div className="bg-red-300 text-white px-2 col-span-2">Two</div>
        <div className="bg-blue-300 text-white px-2 col-span-8">outside</div>
        <div className="bg-green-300 text-white px-2 col-span-4 text-right">after</div>
        
        <div className="bg-gray-700 text-white p-4 col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 flex items-center gap-x-4 rounded shadow-lg">
          <div className="h-10 w-10 bg-black flex-shrink-0 rounded-full"></div>
          <div>
            <div className="text-sm font-extrabold -mt-1">Matthew Link</div>
            <div className="text-sm">CEO, Moderna</div>
          </div>
        </div>
        <div className="hidden bg-green-300 sm:grid sm:col-span-6 md:grid md:col-span-7 lg:grid lg:col-span-8"></div>

        <div className="bg-white p-4 col-span-8 flex items-center justify-end gap-x-4 rounded shadow-lg border border-gray-100">
          <div className="h-10 w-10 bg-gray-300 flex-shrink-0 rounded-full"></div>
          <div>
            <div className="text-sm font-extrabold -mt-1">John Doe</div>
            <div className="text-sm">Chief Product Officer @ Twitter</div>
          </div>
        </div>
        <div className="bg-red-300 text-white px-2 col-span-2">1,2,3</div>
        <div className="bg-red-300 text-white px-2 col-span-2">
          <div className="w-full h-48 bg-gray-800 rounded-lg transform rotate-2"></div>
        </div>
      </section>

      <div className="text-xs text-gray-400 text-center my-4">&copy; 2020 Jered Odegard. All rights reserved.</div>
    </Page>
  )
}
