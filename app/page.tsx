import Image from "next/image";

const features = [
  {
    title: "轻巧悬浮",
    text: "单词卡片常驻桌面，自动滚动展示英文和中文释义，不用打开学习软件也能持续看到。",
  },
  {
    title: "中英朗读",
    text: "支持英文、中文和双语自动发音，看到单词的同时听到读音，把视觉记忆和听觉记忆连起来。",
  },
  {
    title: "个性配置",
    text: "主题、透明度、字号、显示区域、停留时间都能调，让悬浮卡片贴合你的屏幕和学习习惯。",
  },
];

const stats = [
  { value: "0", label: "学习切换成本" },
  { value: "2", label: "中英自动发音" },
  { value: "4+", label: "悬浮卡片配置" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff6ef] text-[#24130c]">
      <main className="relative mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -left-48 -top-64 h-136 w-136 rounded-full bg-[#ffb177]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-72 bottom-72 h-144 w-xl rounded-full bg-[#f36f4f]/25 blur-3xl" />

        <nav className="relative z-10 flex items-center justify-between rounded-full border border-white/70 bg-white/60 px-4 py-3 shadow-[0_20px_80px_rgba(127,61,29,0.12)] backdrop-blur-xl">
          <a href="#" className="flex items-center gap-3" aria-label="桌面单词首页">
            <Image
              src="/icon.png"
              alt="桌面单词图标"
              width={44}
              height={44}
              priority
              className="rounded-2xl shadow-[0_10px_24px_rgba(241,111,79,0.28)]"
            />
            <span className="text-lg font-semibold tracking-tight">桌面单词</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#6f4634] md:flex">
            <a className="transition hover:text-[#ef6f4f]" href="#features">
              功能
            </a>
            <a className="transition hover:text-[#ef6f4f]" href="#download">
              下载
            </a>
            <a className="transition hover:text-[#ef6f4f]" href="#workflow">
              工作流
            </a>
          </div>
          <a
            href="#download"
            className="rounded-full bg-[#24130c] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(36,19,12,0.2)] transition hover:-translate-y-0.5 hover:bg-[#3b1f13]"
          >
            立即下载
          </a>
        </nav>

        <section className="relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7c2a4] bg-white/70 px-4 py-2 text-sm font-semibold text-[#bf5a38] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f36f4f]" />
              桌面上的单词学习助手
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#24130c] sm:text-6xl lg:text-7xl">
              让单词，
              <span className="block text-[#ef704e]">自然出现在桌面上</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6f4634] sm:text-xl">
              桌面单词是一款桌面学习单词软件。它用轻巧悬浮卡片自动滚动显示英文和中文释义，支持中英文自动发音，让你在工作、阅读、写代码的间隙顺手记单词。
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/downloads/DesktopWords.dmg"
                download
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#ef704e] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(239,112,78,0.35)] transition hover:-translate-y-1 hover:bg-[#e45f40]"
              >
                下载 macOS 版
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/downloads/desktopword-win32-x64-1.0.0.zip"
                download
                className="flex items-center justify-center rounded-2xl border border-[#f0b591] bg-white/70 px-6 py-4 text-base font-semibold text-[#24130c] shadow-[0_16px_34px_rgba(127,61,29,0.12)] transition hover:-translate-y-1 hover:border-[#ef704e] hover:bg-white"
              >
                下载 Windows 版
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/80 bg-white/55 p-4 shadow-[0_14px_34px_rgba(127,61,29,0.08)] backdrop-blur"
                >
                  <div className="text-2xl font-semibold tracking-tight text-[#ef704e]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#7a5242]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
            <div className="absolute inset-8 rounded-[3rem] bg-[#f36f4f]/25 blur-3xl" />
            <div className="relative rotate-1 rounded-[2.5rem] border border-white/80 bg-white/65 p-3 shadow-[0_30px_90px_rgba(127,61,29,0.22)] backdrop-blur-2xl transition hover:rotate-0">
              <Image
                src="/promo/floating-word.png"
                alt="桌面单词浮窗展示，显示英文单词 transfer 和中文释义"
                width={1024}
                height={683}
                priority
                className="h-auto w-full rounded-4xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="features" className="relative z-10 py-10 sm:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ef704e]">
                Features
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                不需要专门打开 App，单词会在桌面上自己出现。
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6f4634]">
              桌面单词把学习拆成很小的一眼：看到英文、理解中文、听到发音，然后继续手上的事。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-4xl border border-white/80 bg-white/65 p-6 shadow-[0_18px_48px_rgba(127,61,29,0.1)] backdrop-blur"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ef704e] text-lg font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#6f4634]">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative z-10 py-10 sm:py-16" aria-labelledby="screens-title">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ef704e]">
              Product Screens
            </p>
            <h2
              id="screens-title"
              className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
            >
              从显示到朗读，都为桌面碎片学习设计。
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6f4634]">
              你可以控制浮窗大小、停留时间、背景透明度、中文延迟和朗读模式。想专注时隐藏，想复习时继续滚动。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[2.5rem] border border-white/80 bg-white/65 p-3 shadow-[0_24px_70px_rgba(127,61,29,0.14)] backdrop-blur">
              <Image
                src="/promo/settings-panel.png"
                alt="桌面单词设置面板，包含停留时间、字号、透明度和显示区域配置"
                width={1024}
                height={683}
                className="h-auto w-full rounded-4xl object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">悬浮卡片按你习惯显示</h3>
                <p className="mt-2 text-sm leading-6 text-[#6f4634]">
                  停留时间、字号、透明度、中文延迟和显示区域都能配置，适合横屏、竖屏和不同工作区。
                </p>
              </div>
            </article>

            <article className="rounded-[2.5rem] border border-white/80 bg-white/65 p-3 shadow-[0_24px_70px_rgba(127,61,29,0.14)] backdrop-blur lg:mt-16">
              <Image
                src="/promo/menu-controls.png"
                alt="桌面单词托盘菜单，包含隐藏浮窗、播放控制、朗读、主题和词库入口"
                width={1024}
                height={683}
                className="h-auto w-full rounded-4xl object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">菜单栏随手控制学习节奏</h3>
                <p className="mt-2 text-sm leading-6 text-[#6f4634]">
                  暂停播放、上一条、下一条、朗读语言、主题和词库都在菜单里，不打断当前工作。
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="workflow"
          className="relative z-10 my-10 grid gap-6 rounded-[2.5rem] bg-[#24130c] p-6 text-white shadow-[0_28px_80px_rgba(36,19,12,0.24)] md:grid-cols-[0.8fr_1.2fr] md:p-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb177]">
              Workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              四步，把碎片时间变成单词时间。
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              "选择你的词库或学习内容",
              "设置悬浮卡片的主题、大小和透明度",
              "开启英文、中文或双语自动朗读",
              "让单词在桌面自动滚动，利用碎片时间反复熟悉",
            ].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/8 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#24130c]">
                    {index + 1}
                  </span>
                  <p className="text-base font-medium text-white/85">{step}</p>
                </div>
              ),
            )}
          </div>
        </section>

        <section
          id="download"
          className="relative z-10 py-12 sm:py-18"
          aria-labelledby="download-title"
        >
          <div className="rounded-[2.5rem] border border-[#f0b591] bg-[#fffaf5] p-6 shadow-[0_24px_70px_rgba(127,61,29,0.12)] sm:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <Image
                src="/icon.png"
                alt=""
                width={84}
                height={84}
                className="mx-auto rounded-[1.75rem] shadow-[0_16px_36px_rgba(241,111,79,0.3)]"
              />
              <h2
                id="download-title"
                className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                现在下载桌面单词
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6f4634]">
                支持 Windows 和 macOS。安装后让单词卡片常驻桌面，在日常使用电脑时自动滚动学习。
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href="https://7mqu4ykm7z9h0uq5.public.blob.vercel-storage.com/desktopword-win32-x64-1.0.0.zip"
                download
                className="group rounded-4xl border border-[#f0b591] bg-white p-6 text-left transition hover:-translate-y-1 hover:border-[#ef704e] hover:shadow-[0_18px_44px_rgba(127,61,29,0.16)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef704e]">
                  Windows
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  下载 .exe 安装包
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6f4634]">
                  适用于 Windows 10 及以上版本，支持桌面悬浮、自动滚动和中英文朗读。
                </p>
                <span className="mt-6 inline-flex font-semibold text-[#24130c] transition group-hover:text-[#ef704e]">
                  获取 Windows 版 →
                </span>
              </a>

              <a
                href="https://7mqu4ykm7z9h0uq5.public.blob.vercel-storage.com/DesktopWords.dmg"
                download
                className="group rounded-4xl border border-[#f0b591] bg-white p-6 text-left transition hover:-translate-y-1 hover:border-[#ef704e] hover:shadow-[0_18px_44px_rgba(127,61,29,0.16)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef704e]">
                  macOS
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  下载 .dmg 安装包
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6f4634]">
                  适用于 Apple Silicon，菜单栏常驻，随时暂停、朗读或切换主题。
                </p>
                <span className="mt-6 inline-flex font-semibold text-[#24130c] transition group-hover:text-[#ef704e]">
                  获取 macOS 版 →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
