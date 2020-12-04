import Head from "next/head"
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

      <div className="w-full h-screen flex items-center -mt-4">
        <section className="grid grid-cols-12 max-w-screen-xl space-x-24 px-4 mx-auto">
          <div className="col-span-full lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 font-serif">Looking to move faster?</h2>
            <p className="text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500">I'm a former product leader. I partner with high performing tech professionals and executives who are after big change. My secret is understanding each person and adapting the coaching to their exact needs. I will accelerate you towards where you want to be.</p>
            <a href="/coaching">
              <button className="px-8 py-4 bg-purple-500 font-bold text-white rounded mt-2 lg:mt-4 shadow-xl">See if we'd be a good fit</button>
            </a>
          </div>
          <div className="col-span-4">
            <img className="w-full rounded" src="me.jpg" />
          </div>
        </section>
      </div>

      <div className="w-full h-72 bg-purple-500"></div>

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
            <div className="text-sm font-extrabold -mt-1">Jered Odegard</div>
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

    </Page>
  )
}
