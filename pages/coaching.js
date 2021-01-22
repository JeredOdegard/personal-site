import Head from "next/head"
import Link from "next/link"

import MobileMenu from "components/mobilemenu"

export default function Coaching() {
  return (
    <div id="main" className="antialiased">

      <Head>
        <title>Coaching : Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <MobileMenu click={toggleNav} />

      <div className="relative overflow-hidden h-24">
        <div className="max-w-screen-xl mx-auto">
          {/* Navbar */}
          <div className="flex justify-between pt-6 px-6 lg:px-14 xl:px-6">

            {/* Left Side */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="h-20 xl:h-16 w-16 bg-black flex items-center justify-center fill-current text-white text-opacity-100 absolute top-0 rounded-b-md xl:rounded-full xl:top-3 top-0">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
                </svg>
              </div>
              {/* Logo - End */}

              {/* Nav Items */}
              <nav className="hidden md:flex space-x-8 ml-24 text-base lg:text-lg font-bold">
                <Link href="/"><a className="text-black text-opacity-50 hover:text-black">Home</a></Link>
                <Link href="/coaching"><a className="text-black">Coaching</a></Link>
                <a className="text-black text-opacity-50 hover:text-black" href="/podcast">Podcast</a>
                <a className="text-black text-opacity-50 hover:text-black" href="/about">About</a>
              </nav>
              {/* Nav Items - End */}

            </div>
            {/* Left Side - End */}

            {/* Contact */}
            <a href="/contact">
              <button className="hidden md:flex px-4 py-2 bg-black bg-opacity-90 font-medium tracking-wide text-white hover:bg-opacity-100 transform transition hover:scale-105 text-base lg:text-lg rounded-full">Contact</button>
            </a>
            {/* Contact - End */}

            {/* Hamburger */}
            <button className="h-14 w-14 p-2 md:hidden fill-current text-black hover:text-white hover:bg-black rounded-xl" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Hamburger - End */}
          </div>
          {/* Navbar - End */}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 mt-32">
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:text-8xl md:max-w-screen-sm font-bold mb-4 text-opacity-90 mt-10 bg-tertiary-400 inline-block">Coaching</h1>
          <p className="text-3xl text-black text-opacity-50 mb-10 leading-relaxed">Behind most top performing executives, athletes, and entrepreneurs is a great coach. Why is that?</p>
        </div>
        <div className="col-span-full lg:col-span-4">
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">Maybe you</h1>
          <ul className="text-xl text-black text-opacity-75 list-inside space-y-4 list-disc mb-4">
            <li>Have a solid career on paper but</li>
            <li>Feel off track</li>
            <li>Lack motivation</li>
            <li>Aren’t really being yourself</li>
            <li>Know you're capable of more</li>
            <li>Want a big change</li>
          </ul>
        </div>
        <div className="col-span-full lg:col-span-4">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_1.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">One realization away</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">Our understanding of ourselves and the situation is what gives us the ability to take action and produce new results. Many of us plateau or feel stuck when we’ve already taken action on what we know. We’re stuck in the phase illustrated above called Confusion. It takes a while to get out of this place alone. For some, it can take a very long time. But it’s worth pushing through because once you find insight, you enable a new level of performance. And right now, you’re only one realization away.</p>
          <div className="border-t border-b border-gray-200 py-8 mb-10 md:flex justify-between items-center gap-x-14">
            <div>
              <h4 className="text-2xl text-black text-opacity-90 mb-4 font-extrabold">Could we be a fit?</h4>
              <p className="text-xl text-black text-opacity-75 leading-relaxed">Each coach is unique. The best way to see if we'd work well together is to meet. Give my coaching a try with a free sample session.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="https://calendly.com/coachjered/sample"><button className="w-40 bg-black bg-opacity-90 px-5 py-2 font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Book now</button></a>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10 leading-tight">You're wanting</h1>
          <ul className="text-xl text-black text-opacity-75 list-inside space-y-4 list-disc mb-20">
            <li>Faster growth</li>
            <li>Higher performance</li>
            <li>A sense of direction</li>
            <li>Excitement and enthusiasm</li>
            <li>Meaningful work</li>
            <li>A deeper understanding of who you are</li>
            <li>Confidence to pursue what you really want</li>
          </ul>
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10 leading-tight">Misfit help</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">You’ve probably already asked for help. The first person most people reach out to is a friend or colleague. Maybe someone whose ability you respect. You tell them your situation and they give you their thoughts. If your friends are anything like mine, their advice, while interesting, didn’t lead to lasting change. So you kept looking.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_2.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">Maybe someones with more experience will help? If you’re lucky, you have a mentor. This is someone who is further along in their career or life than you who can share their personal experience. But if you’re reading this, chances are that didn’t work either. Mentors are an excellent resource for learning from someone else’s experience. This is useful when you’re building a hard skill and want an example of how it can be done well. But this isn’t helpful when you’re not sure what you need to improve or what you want in the first place. And very rarely does someone else’s experience lead to profound insight for you.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">This is why the top performers work with a coach.</p>
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10 leading-tight">Your dyanmic partner</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">They want someone who will know them inside and out. Because the most profound insight comes not from advice but from thoughtful questions. And this is what I do extremely well as a coach: I ask really good questions. I ask questions because that’s how we’ll uncover the answers nobody else has been able to provide. The truth is, you have the right answers already locked inside. You just need someone who understands you and asks the right questions.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">I do this to move you towards realization and to increase action. This translates to new heights in your performance. That is my focus as your coach. We accomplish this in several additional ways. For example, I reveal your unique strengths, recurring patterns, and blindspots and give you the tools to work with them. This increases your overall self-awareness and allows you to make better decisions with a richer set of data. I’m also an experienced thought partner. I create an environment where the best learning occurs. To me, the best learning occurs with a combination of trust, playfulness, and focus.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal"><span className="font-bold">Trust:</span> In order to move the conversation from the mundane to the meaningful, from the surface to the core, there must be a high level of trust. The coaching conversation is safe, supportive and without judgment.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal"><span className="font-bold">Playfulness:</span> When everything needs to be perfect, we freeze and inhibit learning. We are the most creative and willing to explore in play, where some messiness is allowed. This is where our best ideas shake free. On top of that, it makes the coaching experience enjoyable.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal"><span className="font-bold">Focus:</span> In a coaching session, we have a limited amount of time together. Whether or not we’re deliberate and intentional with it determines its impact. We work together to set a clear focus, which maximizes your value and results.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_3.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">Lasting impact</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">In short, the coaching relationship is a series of one hour conversations with a broader outcome defined at the beginning of our relationship. With each conversation, we focus on where you are in the present moment, so that you are empowered to apply your learning right away. Every conversation we have compounds. The learnings from one conversation build on the previous sessions.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">This means that the most powerful impact a coach can have happens over time. This is the reason why I ask clients to commit to working together for at least three months. It allows us to go deep, achieve the value you’re after, and build habits that will last.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_4.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 mb-10">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">I’ve completed this journey many times now, both as a leader within a company and running my own practice. I’ve been privileged to partner with executives, directors, designers, software engineers, and product managers at leading companies. Here’s what they have to say:</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
        <div className="col-span-4 bg-red-100 w-full h-48"></div>
        <div className="col-span-4 bg-red-100 w-full h-48"></div>
        <div className="col-span-4 bg-red-100 w-full h-48"></div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">Offerings</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">It's important that the structure of our coaching relationship aligns with your goals. That's why I like to define the exact cadence and length of our sessions after meeting together for a free sample session. That said, the majority of my clients end up working with me under one of the following programs:</p>
          <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10 mb-10">
            <div className="col-span-full sm:col-span-1">
              <div className="font-bold text-black text-opacity-90 mb-2">Standard package</div>
              <ul className="list-disc text-black text-opacity-75 list-inside mb-4">
                <li>6 hours of coaching</li>
                <li>3 month commitment</li>
                <li>10% price discount</li>
                <li>Payment in full or amortized</li>
              </ul>
              <a className="text-tertiary-600 font-medium" href="/contact">I'm interested</a>
            </div>
            <div className="col-span-full sm:col-span-1">
              <div className="font-bold text-black text-opacity-90 mb-2">Month-to-month</div>
              <ul className="list-disc text-black text-opacity-75 list-inside mb-4">
                <li>1-2 hours per month</li>
                <li>No contract</li>
                <li>Cancel anytime</li>
                <li>Charged monthly</li>
              </ul>
              <a className="text-tertiary-600 font-medium" href="/contact">I'm interested</a>
            </div>
          </div>

          <div className="border-gray-200 py-8 md:flex justify-between items-center gap-x-14">
            <div>
              <h4 className="text-2xl text-black text-opacity-90 mb-4 font-extrabold">Could we be a fit?</h4>
              <p className="text-xl text-black text-opacity-75 leading-relaxed">Each coach is unique. The best way to see if we'd work well together is to meet. Give my coaching a try with a free sample session.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="https://calendly.com/coachjered/sample"><button className="w-40 bg-black bg-opacity-90 px-5 py-2 font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Book now</button></a>
            </div>
          </div>

        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md shadow-light" src="coaching_5.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">About me</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">Prior to becoming a coach, I was an accomplished technologist. I spent 11 years as an engineer, designer, and manager. This makes me well versed in the unique challenges of being successful in a competitive space. I climbed the ladder and reached my goals quickly. I helped the people on my teams do the same. And I know I can help you too.</p>
          <a href="/about"><button className="bg-black bg-opacity-90 px-5 py-2 font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Read my story</button></a>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex text-xs text-gray-400 mb-6 pt-6 mt-14 border-t justify-between">
        <p className="pl-4 xl:pl-0">&copy; Odegard Research. All rights reserved.</p>
        <div className="space-x-8 pr-4 xl:pr-0">
          <a className="text-gray-800" href="https://www.linkedin.com/in/jered-odegard/">LinkedIn</a>
          <a className="text-gray-800" href="mailto:j@jeredodegard.com">Email</a>
        </div>
      </div>
    </div>
  )
}

export function toggleNav() {
  let main = document.getElementById("main")
  let mobileNav = document.getElementById("mobileMenu")
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden")
    main.classList.add("fixed")
  }
  else {
    mobileNav.classList.add("hidden")
    main.classList.remove("fixed")
  }
}